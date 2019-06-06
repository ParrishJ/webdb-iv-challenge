
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients_Name: 'cheese' },
        { ingredients_Name: 'flour' },
        { ingredients_Name: 'fruit' },
        { ingredients_Name: 'mustard' },
        { ingredients_Name: 'meat' },
        { ingredients_Name: 'bread' },
      ]);
    });
};


