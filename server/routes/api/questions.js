const router = require("express").Router();
const questionController = require("../../controllers/questionController");

router.get("/questions", questionController.get);
router.post("/questions/create", questionController.post);
router.put("/questions/:id/update", questionController.put);
router.delete("/questions/:id/delete", questionController.get);

module.exports = router;
