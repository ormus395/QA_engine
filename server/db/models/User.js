// Users can log in, ask questions
// User 1:M Questions
// User 1:M Answers
// User = {name, username, track, email, avatar}

module.exports = function(sequelize, Types) {
  let User = sequelize.define("User", {
    name: Types.STRING,
    username: Types.STRING,
    track: { type: Types.ENUM, values: ["JavaScript", ".Net", "Ruby", "Java"] },
    email: Types.STRING,
    avatar: Types.STRING
  });

  User.associate = function(models) {
    models.User.hasMany(models.Question);
    models.User.hasMany(models.Answer);
    models.User.hasMany(models.Comment);
  };

  return User;
};
