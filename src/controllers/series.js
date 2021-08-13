const Serie = require("../models/series")

module.exports = {

    listAll: async (req, res) => {
        const series = await Serie.find({})
        res.send(series)
    },

    add: async (req, res) => {
        const serie = new Serie(req.body)
        try {
            await serie.save()
            res.send(serie)
        } catch (e) {
            res.send({
                success: false,
                errors: Object.keys(e.errors)
            })
        }
    },

    getById: async (req, res) => {
        const serie = await Serie.findOne({ _id: req.params.id })
        res.send(serie)
    },

    delete: async (req, res) => {
        await Serie.remove({ _id: req.params.id })
        res.send({
            success: true
        })
    },

    update: async (req, res) => {
        const serie = await Serie.findOne({ _id: req.params.id })
        serie.name = req.body.name
        serie.status = req.body.status

        try {
            await serie.save()
            res.send(serie)
        } catch (e) {
            res.send({
                success: false,
                errors: Object.keys(e.errors)
            })
        }
    }
}