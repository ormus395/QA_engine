// Many answers to one question
// Answer = {body, userId, votes}
module.exports = function(sequelize, Types) {
  let Answer = sequelize.define("Answer", {
    body: {
      required: true,
      type: Types.TEXT
    }
  });

  Answer.associate = function(models) {
    models.Answer.belongsTo(models.User);
    models.Answer.belongsTo(models.Question);
  };

  return Answer;
};
