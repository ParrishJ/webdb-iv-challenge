const router = require('express').Router();
const Dish = require('./dish-model.js')


router.post('/', (req, res) => {
    console.log(req.body)
    Dish.addDish(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/', (req, res) => {
    Dish.getDishes()
        .then(dish => {
            res.status(200).json(dish)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});



router.get('/:id/recipes', (req, res) => {
    const id = req.params.id
    Dish.getDish(id)
        .then(dish => {
            console.log("dish", dish)
            Dish.getRecipesinDish(dish.id)
                .then(recipes => {
                    console.log("recipes", recipes)
                    res.status(200).json({ 'id': dish.id, "name": dish.dish_Name, 'recipes': recipes })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })
        .catch(error => {
            res.status(500).json(error)
        })
});



module.exports = router;