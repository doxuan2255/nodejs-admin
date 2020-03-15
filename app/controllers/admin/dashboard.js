const Controller = require('../controller');

class DashBoardController extends Controller {

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
        console.log("Loading admin page".info)

        res.render('web/admin/index')
    }

}

module.exports = new DashBoardController();