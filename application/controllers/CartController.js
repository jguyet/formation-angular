'use strict';

const { match } = require('../../shared/patternMatching');
var MID = require('monotonic-id');

/**
 * @Controller
 * Search to the cart database from Query and pages numbers / Sizing
 */
exports.searchByPage = function(req, res, page = 1, size = 20) {
    req.models.cart
    .find({}, Number(size)/** limit */)
    .offset(size * (page - 1))
    .run(function(err, result) {
        if (err) { console.log(err); }
        var carts = JSON.parse(JSON.stringify(result)).map(x => {
            var program = x.extra;
            delete x.extra;
            x.program = program;
            return x;
        });
        
        res.status(200).send(carts);
    });
};

exports.create = function(req, res, cart) {

    /**
    * Creation of cart and call callback function after success insertion
    * @param {Object} cart
    * @param {Function} callback
    */
   function createCart(cart, callback) {
       req.models.cart.create(cart, function (err, cart) {
           match(cart)
           ([
               (/* success */) => {
                   callback(cart);
               },
               [undefined, (/* failed */) => res.status(404).send(err)]
           ]);
       });
   }

   /**
    * Create cart
    */
   createCart({
       id:             new MID().toUUID(),
       title:          cart.title,
       description:    cart.description,
       price:          cart.price,
       picture:        cart.picture
   }, (cart) => {
       res.status(200).send(cart);
   });
};