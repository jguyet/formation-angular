'use strict';

const orm = require("orm");
const CartModel = require("./models/Cart");

/**
 *  https://github.com/dresende/node-orm2
 */
module.exports = function(app) {

    app.use(orm.express("mysql://root:mdp@localhost/formation", {
        define: function (db, models) {
            models.cart = CartModel(orm, db);

            [
                models.cart
            ].forEach((model) => {
                model.syncPromise((x) => {
                    if (x) console.error(x);
                })
            });
        }
    }));
};