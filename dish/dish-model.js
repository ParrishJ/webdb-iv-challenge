const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    getRecipesinDish,
    /* addRecipe  */
}

function getDishes() {
    return db('dish');
}


function addDish(dish) {
    return db('dish')
        .insert(dish, 'id')
}

function getRecipes(id) {
    return db('dish')
        .join('recipe', 'recipe.dish_id', 'dish.id')
        .select('recipe.recipe_Name', 'dish.dish_Name')
        .where('dish.id', id)
}

function getDish(id) {
    return db('dish')
        .first()
        .where('dish.id', id)
}

function getRecipesinDish(id) {
    return db('recipe')
        .join('dish', 'dish.id', 'recipe.dish_id')
        .select('recipe.*')
        .where('dish.id', id)
}