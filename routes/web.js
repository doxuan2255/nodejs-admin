module.exports = function(app) {

	var home = require('../app/controllers/web/home');
	
    // Load Home Page
    app.get('/', home.index); 
    
    return app;
}