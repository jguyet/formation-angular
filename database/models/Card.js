'use strict';

module.exports = function(app, db) {
    return db.define("card", {
        id          : { type: 'text', size: 36, key: true },
        title       : { type: 'text', big: true },
        description : { type: 'text', big: true },
        price       : { type: 'integer', size: 4, defaultValue: 0 },
        type        : { type: 'text', size: 36 },
    }, {
        hooks: {
            beforeCreate() {
            }
        },
        methods: {},
        validations: {}
    });
};