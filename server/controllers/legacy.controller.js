const Legacy = require('../models/legacy.model');

module.exports = {
    getAllBuilds: (req, res) => {
        Legacy.find({})
        .then((allBuilds) => res.json(allBuilds))
        .catch((err) => { res.status(400).json({err}) });
    },

    getOneBuild: (req, res) => {
        Legacy.findOne({_id: req.params.id})
        .then((oneBuild) => res.json(oneBuild))
        .catch((err) => { res.status(400).json({err}) });
    },

    createBuilds: (req, res) => {
        console.log('!!!', req.body)
        Legacy.create(req.body)
            //.then(resp => resp.json())
            .then(build => 
                {
                    console.log('===creating build', build)
                    return res.json(build)
                }
                )
            .catch((err) => { res.status(400).json({err}) });
            },

    updateBuilds: (req, res) => {
        Legacy.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedBuilds => res.json(updatedBuilds))
        .catch((err) => { res.status(400).json({err}) });
    },

    deleteBuilds: (req, res) => {
        Legacy.deleteOne({_id: req.params.id})
        .then(deleteBuilds => res.json(deleteBuilds))
        .catch((err) => { res.status(400).json({err}) });
    }
}