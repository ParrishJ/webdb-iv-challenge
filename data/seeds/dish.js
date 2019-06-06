
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { dish_Name: 'Pizza' },
        { dish_Name: 'Pie' },
        { dish_Name: 'Sandwhich' }
      ]);
    });
};
