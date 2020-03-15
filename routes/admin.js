module.exports = function(app) {

	var dashboard = require('../app/controllers/admin/dashboard');
	
    // Load Dashboard Page
    app.get('/', dashboard.index); 
    
    return app;
}