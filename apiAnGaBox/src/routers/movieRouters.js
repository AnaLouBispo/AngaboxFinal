const { Router } = require("express");
const movieController = require("../controller/MovieController");

const router = Router();

router.get("/", movieController.getAll);
router.get("/:id", movieController.getOne);
router.post("/", movieController.create);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.delete);

module.exports =  router;