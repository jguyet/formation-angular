'use strict';

const orm = require("orm");
const CardModel = require("./models/Card");
const AccountModel = require("./models/Account");

/**
 *  https://github.com/dresende/node-orm2
 */
module.exports = function(app) {

    app.use(orm.express("sqlite://./db?pool=true", {
        define: function (db, models) {
            models.card = CardModel(orm, db);
            models.account = AccountModel(orm, db);

            [
                models.card,
                models.account
            ].forEach((model) => {
                model.syncPromise((x) => {
                    if (x) console.error(x);
                })
            });
        }
    }));
};