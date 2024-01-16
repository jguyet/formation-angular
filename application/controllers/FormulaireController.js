'use strict';

const { match } = require('../../shared/patternMatching');
var MID = require('monotonic-id');

var questions = [
    {
        id: '1',
        q: 'Avez-vous déjà utilisé la commande ng serve ? (hormis aujourd\'hui)',
        r: [
            { key: 'a', value: 'Oui', valid: true },
            { key: 'b', value: 'Non' }
        ]
    },
    {
        id: '2',
        q: 'Un scope c\'est ...',
        r: [
            { key: 'a', value: 'une portion de code séparée par des accolades.', valid: true },
            { key: 'b', value: 'une zone spécifique où vous pouvez écrire du texte.' }
        ]
    },
    {
        id: '3',
        q: 'Quelle est la différence entre var et let ?',
        r: [
            { key: 'a', value: 'var et déclaré au sommet de la portée alors que le let n\'est accessible que dans sa portée.', valid: true },
            { key: 'b', value: 'var est identique à let, let est juste une manière différente de déclarer une variable.' }
        ]
    },
    {
        id: '4',
        q: 'En Angular, vous pouvez transmettre des données du composant parent au composant enfant à l\'aide de ...',
        r: [
            { key: 'a', value: '@Input', valid: true },
            { key: 'b', value: '@Output' },
            { key: 'c', value: 'Input' },
            { key: 'd', value: 'Output' }
        ]
    },
    {
        id: '5',
        q: 'En Angular, vous pouvez transmettre des données du composant enfant au composant parent à l\'aide de ...',
        r: [
            { key: 'a', value: '@Output', valid: true },
            { key: 'b', value: '@Input' },
            { key: 'c', value: 'Output' },
            { key: 'd', value: 'Input' }
        ]
    },
    {
        id: '6',
        q: 'Dans routage Angular, quelle balise est utilisée pour rendre le composant correspondant à une route active.',
        r: [
            { key: 'a', value: '<router></router>' },
            { key: 'b', value: '<router-output></router-output>' },
            { key: 'c', value: '<router-outlet></router-outlet>', valid: true },
            { key: 'd', value: '<router-display></router-display>' }
        ]
    },
    {
        id: '7',
        q: 'Comment créer simplement un Observable ?',
        r: [
            { key: 'a', value: 'new Observable<number>((x) => x.next(10));' },
            { key: 'b', value: 'of(10)', valid: true },
            { key: 'c', value: 'new BehaviorSubject<number>(10)' }
        ]
    }
  ];

/**
    * Creation of Response and call callback function after success insertion
    * @param {Object} card
    * @param {Function} callback
    */
function createResponse(models, callback) {
    models.stats.create({
        id: new MID().toUUID(),
        data: "",
        participants: 0
    }, function (err, stat) {
        match(stat)
        ([
            (/* success */) => {
                callback(stat);
            },
            [undefined, (/* failed */) => callback(undefined)]
        ]);
    });
}

function getStats(models) {
    return new Promise((resolve) => {
        models.stats
        .find({})
        .run(function(err, result) {
            if (err) { console.log(err); }

            if (result.length > 0) {
                resolve(result[0]);
            } else {
                createResponse(models, resolve);
            }
        });
    });
}

exports.get = function(req, res) {
    res.status(200).send(JSON.parse(JSON.stringify(
        questions
    )));
};

exports.getStats = function(req, res) {
    getStats(req.models).then((stats) => {
        let s = JSON.parse(JSON.stringify(
            stats
        ));
        s.data = JSON.parse(s.data);

        const questionKeys = Object.keys(s.data);
        for (let i = 0; i < questionKeys.length; i++) {
            console.log(s.data[questionKeys[i]]);
            let question = questions.find(x => x.id == questionKeys[i]);
            s.data[questionKeys[i]] = { v: s.data[questionKeys[i]], q: question.q };
        }

        res.status(200).send(s);
    });
};

exports.post = function(req, res, responseData) {
    getStats(req.models).then((stat) => {
        console.log(stat);
        let data = JSON.parse(stat.data);

        for (let i = 0; i < questions.length; i++) {
            let x = questions[i];

            if (data[x.id] === undefined) {
                data[x.id] = 0;
            }
            if (Object.keys(responseData).includes(x.id) && responseData[x.id] == x.r.find(r => r.valid == true).key) {
                data[x.id] += 1;
            }
        }
        stat.data = JSON.stringify(data);
        stat.participants += 1;
        stat.save(() => {
            res.send(true);
        });
    });
};

exports.clean = function(req, res, responseData) {
    getStats(req.models).then((stat) => {
        stat.data = "{}";
        stat.participants = 0;
        stat.save(() => {
            res.send(true);
        });
    });
};