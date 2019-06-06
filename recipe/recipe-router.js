const knex = require('knex');
const knexConfig = require('./knexfile.js');

const router = require('express').Router();

const db = knex(knexConfig.development);