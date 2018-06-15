// M:1 Users
// 1:M answers
// Can have many tags
// one module
// one lesson
// Question = {title, body, comment, tags, module,lesson, userId, answerId}
module.exports = function(sequelize, Types) {
  let Question = sequelize.define("Question", {
    title: {
      required: true,
      type: Types.STRING
    },
    body: {
      required: true,
      type: Types.STRING
    }
  });

  Question.associate = function(models) {
    models.Question.belongsTo(models.User);
    models.Question.hasMany(models.Comment);
    models.Question.hasMany(models.Answer);
    models.Question.hasMany(models.Tag);
    models.Question.hasMany(models.Comment);
  };

  return Question;
};
