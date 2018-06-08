const router = require("express").Router();
const userController = require("../../controllers/userController");

router.get("/users", userController.get);
// router.post("/users/create", userController.create);
// router.put("/users/:id/update", userController.update);
// router.delete("/users/:id/delete", userController.delete);

module.exports = router;
