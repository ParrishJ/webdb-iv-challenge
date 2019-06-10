
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        { dish_Name: 'Pizza' },
        { dish_Name: 'Pie' },
        { dish_Name: 'Sandwhich' }
      ]);
    });
};
