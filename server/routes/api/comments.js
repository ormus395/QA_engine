const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.get("/comments", commentController.get);
router.post("/comments/create", commentController.post);
router.put("/comments/:id/update", commentController.put);
router.delete("/comments/:id/delete", commentController.delete);

module.exports = router;
