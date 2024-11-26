const { Router } = require("express");
const userRouters = require("./userRouters");
const postRoutesr = require("./postRouters");
const moviesRouters = require("./movieRouters");
const admRouters = require("./admRouters");
const UserController = require("../controller/UserController");
const AdmController =  require("../controller/AdminController");
const router = Router();
router.use('/user', userRouters );
router.use('/post', postRoutesr);
router.use('/movie', moviesRouters);
router.use('/adm', admRouters );
router.use('/login', (req, res)=>{
    UserController.login(req, res)
}),
router.use('/', (req, res)=>{
    AdmController.login(req, res)
}),




module.exports = router;