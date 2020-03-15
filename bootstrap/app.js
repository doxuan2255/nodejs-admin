const express       = require('express'),
      application   = require('../config/app'),
      database      = require('../config/database'),
      routeWeb      = require('../routes/web'),
      routeAdmin    = require('../routes/admin');
     
module.exports = function () {

	// Create instance of express
	const app = express(); 

	// init express dendency
	application(app)

	// init route web
	routeWeb(app)

	// init route admin
	routeAdmin(app)

	// init database
	database(app)

	return app;  
};