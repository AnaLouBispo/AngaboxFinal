const { Router } = require('express');
const userController = require('../controller/UserController');
const { validateUser, validateUserId } = require('../middlewares/validateUser');

const router = Router();
router.post("/", userController.create);           
router.get("/", userController.getAll);                              
router.get("/:id", validateUserId, userController.getOne);            
router.put("/:id", validateUserId, validateUser, userController.update); 
router.delete("/:id", validateUserId, userController.delete);      

module.exports = router;
