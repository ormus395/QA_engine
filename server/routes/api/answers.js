const router = require("express").Router();
const answerController = require("../../controllers/answerController");

router.get("/answers", answerController.get);
router.post("/answers/create", answerController.post);
router.put("/answers/:id/update", answerController.put);
router.delete("/answers/:id/delete", answerController.delete);

module.exports = router;
