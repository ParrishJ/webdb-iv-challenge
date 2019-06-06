
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { recipe_Name: 'MegaPizza', instructions: 'aaaaaa', dish_id: 1 },
        { recipe_Name: 'SuperPizza', instructions: 'bbbbbb', dish_id: 1 },
        { recipe_Name: 'ApplePie', instructions: 'cccccccc', dish_id: 2 },
        { recipe_Name: 'BerryPie', instructions: 'ddddddd', dish_id: 2 },
        { recipe_Name: 'hamsammich', instructions: 'eeeeeee', dish_id: 3 },
        { recipe_Name: 'turkeysammich', instructions: 'ffffffff', dish_id: 3 }
      ]);
    });
};
