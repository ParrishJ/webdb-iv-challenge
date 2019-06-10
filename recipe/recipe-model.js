const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    addRecipe
}


function getRecipes(id) {
    return db('dish')
        .join('recipe', 'recipe.dish_id', 'dish.id')
        .select('recipe.recipe_Name', 'dish.dish_Name')
        .where('dish.id', id)
}

function addRecipe(recipe) {
    return db('recipe')
        .insert(recipe, 'id')
}