var MongoClient = require('mongodb').MongoClient

module.exports = function(app){

    MongoClient.connect('mongodb://localhost:27017/expressjs', function (err, client) {
        if (err) throw err
        
        var db = client.db('expressjs')

        app.set('databse', db)
    })

}