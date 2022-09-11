const LegacyController = require('../controllers/legacy.controller');

module.exports = (app) => {
    //LOGIN START
    app.post('/api/builds/registration', LegacyController.registerUser);
    app.post('/api/builds/login', LegacyController.login);
    //LOGIN END
    //CUSTOM START
    app.get('/api/builds/custom', LegacyController.getAllBuilds);
    app.post('/api/builds/custom', LegacyController.createBuilds);
    app.get('/api/builds/custom/:id', LegacyController.getOneBuild);
    app.get('/api/builds/custom/checkout/:id', LegacyController.getOneBuild);
    app.put('/api/builds/custom/edit/:id', LegacyController.updateBuilds);
    app.delete('/api/builds/custom/:id', LegacyController.deleteBuilds);
    //CUSTOM END
    //INVENTORY START
    app.get('/api/builds/inventory', LegacyController.getAllInventory);
    app.post('/api/builds/inventory', LegacyController.createInventory);
    app.get('/api/builds/inventory/checkout/:id', LegacyController.getCheckoutInventory);
    app.delete('/api/builds/inventory/:id', LegacyController.removeBuilds);
    //INVENTORY END

}