'use strict';

const { match } = require('../../shared/patternMatching');
var MID = require('monotonic-id');

/**
 * @Controller
 * Search to the card database from Query and pages numbers / Sizing
 */
exports.searchByPage = function(req, res, page = 1, size = 20) {
    req.models.card
    .find({}, Number(size)/** limit */)
    .offset(size * (page - 1))
    .run(function(err, result) {
        if (err) { console.log(err); }
        var cards = JSON.parse(JSON.stringify(result)).map(x => {
            var program = x.extra;
            delete x.extra;
            x.program = program;
            return x;
        });
        
        res.status(200).send(cards);
    });
};

exports.get = function(req, res) {
    res.status(200).send(JSON.parse(JSON.stringify(req._card)));
};

exports.create = function(req, res, card) {

    /**
    * Creation of card and call callback function after success insertion
    * @param {Object} card
    * @param {Function} callback
    */
   function createcard(card, callback) {
       req.models.card.create(card, function (err, card) {
           match(card)
           ([
               (/* success */) => {
                   callback(card);
               },
               [undefined, (/* failed */) => res.status(404).send(err)]
           ]);
       });
   }

   /**
    * Create card
    */
   createcard({
       id:             new MID().toUUID(),
       title:          card.title,
       description:    '',
       price:          card.price,
       type:           card.type
   }, (card) => {
       res.status(200).send(card);
   });
};