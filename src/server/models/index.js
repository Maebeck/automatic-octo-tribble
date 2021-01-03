// import all models
const User = require('./User');
const Project = require('./jet');

Jets.hasMany(types, {
  foreignKey: 'jet_id',
  onDelete: 'CASCADE'
});

type.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };