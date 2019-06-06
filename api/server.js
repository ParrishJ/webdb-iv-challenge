const express = require('express');
const helmet = require('helmet');

const dishRouter = require('../dish/dish-router.js');
const recipeRouter = require('../recipe/recipe-router.js');
const ingredientsRouter = require('../ingredients/ingredients-router.js');

const server = express();

server.use('/api/dish', dishRouter);
server.use('/api/dish/recipe', recipeRouter);
server.use('/api/dish/recipe/ingredients', ingredientsRouter);


server.use(helmet());
server.use(express.json());

module.exports = server;