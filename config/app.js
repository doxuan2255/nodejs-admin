/**
 *  Load dependencies
 */
const express       = require('express'),
      logger        = require('morgan'),
      cookieParser  = require('cookie-parser'),
      bodyParser    = require('body-parser'),
      path          = require('path');

module.exports = function(app){

    console.log("Setting up expressjs...".input)
    
    //  Configure expressjs
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    //  Add template engine
    app.set('views', path.join(__dirname, '/../app/views'));
    app.set('view engine', 'jade');

    // Add style engine
    app.use(express.static(path.join(__dirname, '/../public')));

    return app
}