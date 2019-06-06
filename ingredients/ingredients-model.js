const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dish');
}

function addDish(dish) {
    return db('dish')
        .insert(req.body, 'id');
}

function getDishes() {
    return db('recipe')
        .join('dish')
}