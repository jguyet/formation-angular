'use strict';

const { match } = require('../../shared/patternMatching');
var MID = require('monotonic-id');

exports.get = function(req, res) {
    let channel = req._channel;
    channel.messages = JSON.parse(channel.messages);
    res.status(200).send(channel);
};

exports.getAll = function(req, res) {
    req.models.channel
    .find({})
    .run(function(err, result) {
        if (err) { console.log(err); }
        var channels = JSON.parse(JSON.stringify(result)).map(x => {
            var program = x.extra;
            delete x.extra;
            x.program = program;
            if (x.messages == "") {
                x.messages = "[]";
            }
            x.messages = JSON.parse(x.messages);
            if (x.messages.length > 0) {
                x.messages = [x.messages[x.messages.length - 1]];
            }
            return x;
        });

        if (channels.length > 0) {
            res.status(200).send(channels);
        } else {
            res.status(200).send([]);
        }
    });
};

exports.delete = function(app, req, res) {
    /**
    * Delete channel
    * @param {Object} card
    * @param {Function} callback
    */
   function deleteChannel(baseChannel, callback) {
        req.models.channel.find({ title: baseChannel.title }).remove(function (err, channel) {
            match(channel)
            ([
                (/* success */) => {
                    baseChannel.messages = JSON.parse(baseChannel.messages);
                    callback(baseChannel);
                },
                [undefined, (/* failed */) => res.status(404).send(err)]
            ]);
        });
    }

    deleteChannel(req._channel, (channel) => {
        res.status(200).send(JSON.parse(JSON.stringify(req._channel)));
        const stringDataMessage = JSON.stringify({ title: channel.title, cmd: 'delete-channel' });
        app.wsClients.forEach((client) => {
            client.ws.send(stringDataMessage);
        });
    });
};

exports.create = function(app, req, res, channel) {

    /**
    * Creation of channel and call callback function after success insertion
    * @param {Object} channel
    * @param {Function} callback
    */
   function createChannel(channel, callback) {
       req.models.channel.create(channel, function (err, channel) {
           match(channel)
           ([
               (/* success */) => {
                    channel.messages = JSON.parse(channel.messages);
                    callback(channel);
               },
               [undefined, (/* failed */) => res.status(404).send(err)]
           ]);
       });
   }

   /**
    * Create channel
    */
   createChannel({
       title:          channel.title,
       messages:       '[]',
       picture:        channel.picture
   }, (channel) => {
        res.status(200).send(channel);
        const stringDataMessage = JSON.stringify({ channel: { title: channel.title, messages: [], picture: channel.picture }, cmd: 'create-channel' });
        app.wsClients.forEach((client) => {
            client.ws.send(stringDataMessage);
        });
   });
};

exports.sendMessage = function(app, req, res, channel, newMessage) {

    if (channel.messages == "") {
        channel.messages = "[]";
    }

    const dataMessage = {
        id: new MID().toUUID(),
        userId: req._account.id,
        picture: req._account.picture,
        email: req._account.email,
        message: newMessage,
        timestamp: (new Date()).toISOString()
    };

    channel.messages = JSON.stringify([... JSON.parse(channel.messages), dataMessage]);

    channel.save(function (err) {
        channel.messages = JSON.parse(channel.messages);
        res.status(200).send(channel);
        let stringDataMessage = JSON.stringify({ "title": channel.title, data: dataMessage, cmd: 'create' });
        app.wsClients.filter(x => x.subscriptions.includes(channel.title)).forEach((client) => {
            console.log(stringDataMessage);
            client.ws.send(stringDataMessage);
        });
	});
};

exports.updateMessage = function(app, req, res, channel, newMessage, messageId) {

    const dataMessage = {
        id: messageId,
        userId: req._account.id,
        picture: req._account.picture,
        email: req._account.email,
        message: newMessage,
        timestamp: (new Date()).toISOString(),
        updated: true
    };

    channel.messages = JSON.stringify([... (JSON.parse(channel.messages).filter(x => x.id != dataMessage.id)), dataMessage]);

    channel.save(function (err) {
        channel.messages = JSON.parse(channel.messages);
        res.status(200).send(channel);
        let stringDataMessage = JSON.stringify({ "title": channel.title, data: dataMessage, cmd: 'update' });
        app.wsClients.filter(x => x.subscriptions.includes(channel.title)).forEach((client) => {
            client.ws.send(stringDataMessage);
        });
	});
};

exports.deleteMessage = function(app, req, res, channel, messageId) {

    let messageData = JSON.parse(channel.messages).find(x => x.id == messageId);

    if (messageData == undefined) {
        res.status(400).send();
    }

    const dataMessage = {
        id: messageId,
        userId: req._account.id,
        picture: req._account.picture,
        email: req._account.email,
        message: messageData.message,
        timestamp: (new Date()).toISOString(),
        updated: messageData.updated ? true : false,
        deleted: messageData.deleted === true ? false : true
    };

    channel.messages = JSON.stringify([... (JSON.parse(channel.messages).filter(x => x.id != dataMessage.id)), dataMessage]);

    channel.save(function (err) {
        channel.messages = JSON.parse(channel.messages);
        res.status(200).send(channel);
        const stringDataMessage = JSON.stringify({ "title": channel.title, data: dataMessage, cmd: 'delete' });
        app.wsClients.filter(x => x.subscriptions.includes(channel.title)).forEach((client) => {
            client.ws.send(stringDataMessage);
        });
	});
};

exports.clean = function(app, req, res, channel) {
    channel.messages = "[]";
    channel.save(function (err) {
        channel.messages = JSON.parse(channel.messages);
        res.status(200).send(channel);
        const stringDataMessage = JSON.stringify({ title: channel.title, cmd: 'clear-channel' });
        app.wsClients.filter(x => x.subscriptions.includes(channel.title)).forEach((client) => {
            client.ws.send(stringDataMessage);
        });
	});
};