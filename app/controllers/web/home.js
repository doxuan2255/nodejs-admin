const Controller = require('../controller');

class HomeController extends Controller {

    constructor()
    {
        super()
    }

    /**
     * Index 
     *
     * @param {Request Object} req
     * @param {Response Object} res
     * @param {Callback} next
     */
    index(req, res, next)
    {
        console.log("Loading index page".info)

        res.render('web/home/index')
    }

}

module.exports = new HomeController();

// // Set all global variables 
// var controller = {}
//     , _app = {};


// // Constructor
// module.exports = function (app) {
//     _app = app
//     return controller
// }

// /**
//  * Index 
//  *
//  * @param {Request Object} req
//  * @param {Response Object} res
//  * @param {Callback} next
//  *
//  * @api public
//  * @url /
//  * @url /posts
//  */
// controller.index = function(req, res, next){

//     console.log("Loading index page".info)

//     res.render('home/index')

// }
