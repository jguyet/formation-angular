'use strict';

module.exports = function(app) {

    var swaggerJSDoc = require('swagger-jsdoc');

    var swaggerDefinition = {
        //basePath: '/', // Base path (optional)
        swagger: '2.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Formation-angular', // Title (required)
            version: '1.0.0', // Version (required)
        },
    };

    var options = {
        swaggerDefinition,
        apis: ['./routes.js'], // <-- not in the definition, but in the options
    };

    var swaggerSpec = swaggerJSDoc(options);
    var swaggerUi = require('swagger-ui-express');

    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    app.use('/', swaggerUi.serve);
    app.get('/', swaggerUi.setup(swaggerSpec, {
        explorer: false,
    }));
};