//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/hamouk'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/hamouk/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Heroku automagically gives us SSL
// Lets write some middleware to redirect us
let env = process.env.NODE_ENV || 'development';

let forceSSL = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (env === 'production') {
  app.use(forceSSL);
}
