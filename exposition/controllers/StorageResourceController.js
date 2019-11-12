'use strict';
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const multer  = require('multer');
const MID = require('monotonic-id');

const STORAGE_PATH = '/mnt/storage/';
const StorageController = require("../../application/controllers/StorageController");

const StorageResourceController = {

    /**
     * /storage/{id}
     * EXPOSED ROUTE
     */
    get: (app, type, route) => AddRoute(app, type, route,
        [
            Validation('param:id', [
                ['exists', Code.EMPTY_FIELD]
            ]),
            ValidationStep
        ],
        (req, res) => StorageController.getFile(req, res, req.params.id, STORAGE_PATH)),
    /**
     * /storage
     * EXPOSED ROUTE
     */
    preUpload: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => StorageController.preUploadFile(req, res, STORAGE_PATH)),
    /**
     * /storage
     * EXPOSED ROUTE
     */
    upload: (app, type, route) => AddRoute(app, type, route,
        [
            multer({
                storage: multer.diskStorage({
                    destination: function (req, file, cb) {
                        cb(null, STORAGE_PATH)
                    },
                    filename: function (req, file, cb) {
                        console.log(JSON.parse(JSON.stringify(file)));
                        cb(null, new MID().toUUID())
                    }
                })
            }).single('fileupload'),
            /**
             * Check on filename exist
             */
            function(req, res, next) {
                req.params = { file: req.file };
                next();
            },
            Validation('param:file', [
                ['exists', Code.EMPTY_FIELD]
            ]),
            ValidationStep
        ],
        (req, res) => StorageController.uploadFile(req, res, STORAGE_PATH))
};

module.exports = StorageResourceController;