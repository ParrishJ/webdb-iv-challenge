const knex = require('knex');
const knexConfig = require('./knexfile.js');

const router = require('express').Router();

const db = knex(knexConfig.development);

router.post('/', (req, res) => {
    if (req.body.name) {
        db('zoos')
            .insert(req.body, 'id')
            .then(ids => {
                res.status(201).json(ids)
            })
            .catch(error => {
                res.status(500).json({ error: 'Could not add zoo' })
            })
    } else {
        res.status(400).json({ error: 'Must include name' })
    }
})