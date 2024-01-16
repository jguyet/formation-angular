'use strict';

module.exports = function(app, db) {
    return db.define("channels", {
        title       : { type: 'text', big: true, key: true },
        messages    : { type: 'text', big: true },
        picture     : { type: 'text', big: true }
    }, {
        hooks: {
            beforeCreate() {
            }
        },
        methods: {},
        validations: {}
    });
};