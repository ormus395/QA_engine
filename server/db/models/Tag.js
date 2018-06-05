// {title}

module.exports = function(sequelize, Types) {
  let Tag = sequelize.define("Tag", {
    title: Types.STRING
  });

  Tag.associate = function(models) {};

  return Tag;
};
