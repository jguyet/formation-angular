'use strict';

module.exports = function(app, db) {
    return db.define("account", {
        id            : { type: 'text', size: 36, key: true },
        email         : { type: 'text', size: 255 },
        password      : { type: 'text', size: 255 },
        picture       : { type: 'text', size: 36 }
    }, {
        hooks: {},
        methods: {},
        validations: {}
    });
};