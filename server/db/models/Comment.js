// {userId, body}

module.exports = function(sequelize, Types) {
  let Comment = sequelize.define("Comment", {
    body: Types.STRING
  });

  Comment.associate = function(models) {
    models.Comment.belongsTo(models.Question);
    models.Comment.belongsTo(models.User);
  };
  return Comment;
};
