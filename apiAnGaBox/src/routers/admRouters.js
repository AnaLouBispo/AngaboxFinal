const { Router } = require("express");
const admController = require("../controller/AdminController");

const router = Router();

router.get("/", admController.getAll);
router.get("/:id", admController.getOne);
router.post("/", admController.create);
router.put("/", admController.update);
router.delete("/:id", admController.delete);

module.exports = router;
