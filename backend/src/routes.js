const { Router } = require('express');
const RinoController = require('./controllers/RinoContoler');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', RinoController.index);
routes.post('/devs', RinoController.store);

routes.get('/search', SearchController.index);

module.exports = routes;