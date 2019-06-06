
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { ingredients_Name: 'cheese' },
        { ingredients_Name: 'flour' },
        { ingredients_Name: 'fruit' },
        { ingredients_Name: 'mustard' },
        { ingredients_Name: 'meat' },
        { ingredients_Name: 'bread' },
      ]);
    });
};


