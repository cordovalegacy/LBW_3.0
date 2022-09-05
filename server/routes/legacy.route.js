const LegacyController = require('../controllers/legacy.controller');

module.exports = (app) => {
    app.get('/api/builds', LegacyController.getAllBuilds);
    app.post('/api/builds/custom', LegacyController.createBuilds);
    app.post('/api/builds/inventory', LegacyController.createBuilds);
    app.get('/api/builds/:id', LegacyController.getOneBuild);
    app.get('/api/builds/checkout/:id', LegacyController.getOneBuild);
    app.put('/api/builds/edit/:id', LegacyController.updateBuilds);
    app.delete('/api/builds/:id', LegacyController.deleteBuilds);
}