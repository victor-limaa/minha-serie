const { Router } = require('express')
const express = require('express')
const router = express.Router()

const SerieController = require('../controllers/series')

router.get('/', SerieController.listAll)

router.post('/', SerieController.add)

router.get('/:id', SerieController.getById)

router.delete('/:id', SerieController.delete)

router.put('/:id', SerieController.update)

module.exports = router