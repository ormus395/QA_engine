const router = require("express").Router();
const passport = require("passport");

router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/auth/logged-in");
  }
);

router.get("/auth/logged-in", (req, res) => {
  res.send(req.user);
});

module.exports = router;
