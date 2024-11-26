const { Router } = require("express");
const postController = require("../controller/PostController");

const router = Router();

router.post("/:id", postController.create);
router.get("/", postController.getAll);
router.delete('/:id', postController.delete);
router.get('/:id', postController.getOne);
router.get('/about/:id', postController.getMoviePosts)
module.exports =  router;
