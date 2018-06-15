let GitHubStrategy = require("passport-github").Strategy;
let keys =
  process.env.NODE_ENV === "production"
    ? require("../config/keys")
    : require("../config/dev");
let User = require("../db").User;

module.exports = function(passport) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: keys.githubClient,
        clientSecret: keys.githubSecret,
        callbackURL: "/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({ where: { githubId: profile.id } }).spread(
          (user, created) => {
            console.log(user);
            console.log(created);
          }
        );
      }
    )
  );
};
