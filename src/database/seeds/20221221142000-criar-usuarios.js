const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'John Doe',
    email: 'john@gmail.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),

  }], {}),

  down: () => {},
};
