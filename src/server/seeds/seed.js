// seed all seed files here
const sequelize = require('../config/connection');
const { User, jets } = require('../models');

const jetsData = require('./jetsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const jets of jetsData) {
    await jets.create({
      ...jets,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();