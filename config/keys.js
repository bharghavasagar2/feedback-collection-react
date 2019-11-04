// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
// emaily-prod
// 1063365863772-9rqh3gqusk5gpf0koj5pcepoji2mb2tm.apps.googleusercontent.com--googleClientID
// myKf_fiFGsoBysugr-af4xWk-this.googleClientSecret
