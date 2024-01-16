'use strict';

module.exports = function(app, db) {
    return db.define("stats", {
        id           : { type: 'text', size: 36, key: true },
        data         : { type: 'text', big: true },
        participants : { type: 'integer', size: 4, defaultValue: 0 },
    }, {
        hooks: {
            beforeCreate() {
            }
        },
        methods: {},
        validations: {}
    });
};