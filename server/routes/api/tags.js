const router = require("express").Router();
const tagController = require("../../controllers/tagController");

router.get("/tags", tagController.get);
router.post("/tags/create", tagController.post);
router.put("/tags/:id/update", tagController.put);
router.delete("/tags/:id/delete", tagController.delete);

module.exports = router;
