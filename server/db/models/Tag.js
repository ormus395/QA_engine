// {title}

module.exports = function(sequelize, Types) {
  let Tag = sequelize.define("Tag", {
    title: Types.STRING
  });

  Tag.associate = function(models) {
    models.Tag.belongsTo(models.Question);
  };

  return Tag;
};
