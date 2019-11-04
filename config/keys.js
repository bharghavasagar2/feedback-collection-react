//what setof u provide
if (process.env.NODE_ENV === 'production') {
  //we are in prod
  module.exports = require('./prod');
} else {
  // we in development
  module.exports = require('./dev');
}

// emaily-prod
// 1063365863772-9rqh3gqusk5gpf0koj5pcepoji2mb2tm.apps.googleusercontent.com--googleClientID
// myKf_fiFGsoBysugr-af4xWk-this.googleClientSecret
