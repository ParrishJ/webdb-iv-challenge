const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());

const dishRouter = require('../dish/dish-router.js');
const recipeRouter = require('../recipe/recipe-router.js');
const ingredientsRouter = require('../ingredients/ingredients-router.js');



server.use('/api/dish', dishRouter);
server.use('/api/recipes', recipeRouter);
/* server.use('/api/dish/recipe', recipeRouter);
server.use('/api/dish/recipe/ingredients', ingredientsRouter); */




module.exports = server;