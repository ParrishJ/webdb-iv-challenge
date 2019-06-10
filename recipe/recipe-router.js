const knex = require('knex');
const knexConfig = require('../knexfile.js');
const router = require('express').Router();
const Recipe = require('./recipe-model.js')

const db = knex(knexConfig.development);

router.get('/:id', (req, res) => {
    const id = req.params.id
    Recipe.getRecipes(id)
        .then(dish => {
            res.status(200).json(dish)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/', (req, res) => {
    console.log(req.body)
    Recipe.addRecipe(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

module.exports = router;