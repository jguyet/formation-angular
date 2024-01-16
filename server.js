var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    cors = require('cors'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    swagger = require("./shared/swagger"),
    database = require("./database/Database");

/////////////////////////////////////////////////////////////////////////
//Json BodyParser
/////////////////////////////////////////////////////////////////////////

var allowedOrigins = ['*'];

app.use(cors({
    origin: function(origin, callback) {
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      // if (!origin) return callback(null, true);
      // if (allowedOrigins.indexOf('*') === -1 && allowedOrigins.indexOf(origin) === -1) {
      //   var msg = 'The CORS policy for this site does not ' +
      //             'allow access from the specified Origin.';
      //   console.log('Origin blocked by CORS policy ', origin);
      //   return callback(new Error(msg), false);
      // }
      return callback(null, true);
    }
}));

/////////////////////////////////////////////////////////////////////////
//Json BodyParser
/////////////////////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////////////////////
//WebSocket
/////////////////////////////////////////////////////////////////////////

app.wsClients = [];
app.wsIndex = 1;
const expressWs = require('express-ws')(app);
// app.get('/ws', function(req, res, next){
//   console.log('Disconnect');
//   res.end();
// });

app.ws('/ws', function(ws, req) {
  const index = Number(app.wsIndex);
  app.wsIndex += 1;

  console.log(`open ${index}`);

  ws.on('message', (msg) => {
    try {
      const data = JSON.parse(msg);

      console.log(data);

      if (Array.isArray(data)) {
        let client = app.wsClients.find(x => x.id == index);
        if (client == undefined) {
          console.log(`new    Subscription ${index}`);
          app.wsClients.push({
            id: index,
            subscriptions: data,
            ws: ws
          });
        } else {
          console.log(`update Subscription ${index}`);
          client.subscriptions = data;
        }
      }
    } catch (e) {
    }
  });

  ws.on('close', () => {
    app.wsClients = app.wsClients.filter(x => x.id != index);
    console.log(`close ${index}`);
  });
});

/////////////////////////////////////////////////////////////////////////
//Swagger
/////////////////////////////////////////////////////////////////////////

swagger(app);

/////////////////////////////////////////////////////////////////////////
//DataBase
/////////////////////////////////////////////////////////////////////////

database(app);

/////////////////////////////////////////////////////////////////////////
//Routes
/////////////////////////////////////////////////////////////////////////

routes(app);

/////////////////////////////////////////////////////////////////////////
//Start Server
/////////////////////////////////////////////////////////////////////////

app.listen(port);

console.log('Allowed origins            : ', allowedOrigins);
console.log('API server started on port : ', port);