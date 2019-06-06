
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients-many').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients-many').insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 4.0, ingredient_Unit: 'cups' },
        { recipe_id: 2, ingredient_id: 1, ingredient_quantity: 4.0, ingredient_Unit: 'cups' },
        { recipe_id: 3, ingredient_id: 2, ingredient_quantity: 9.0, ingredient_Unit: 'grams' },
        { recipe_id: 4, ingredient_id: 3, ingredient_quantity: 7.0, ingredient_Unit: 'cup' },
        { recipe_id: 5, ingredient_id: 1, ingredient_quantity: 6.0, ingredient_Unit: 'oz' },
        { recipe_id: 6, ingredient_id: 1, ingredient_quantity: 5.0, ingredient_Unit: 'slices' }
      ]);
    });
};
