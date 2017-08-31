var restaurantesController = require('./controllers/restaurantesController');
var direccionesController = require('./controllers/direccionesController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API Alpha v1, Donde Comemos')}}},
	{method: 'GET', path: '/marcadores/restaurantes', config: restaurantesController.getRestaurantes},
	{method: 'GET', path: '/marcadores/direcciones', config: direccionesController.getDireccion},
  // {method: 'POST', path: '/v1/calcetin', config: calcetinesController.createCalcetin},
	// {method: 'POST', path: '/v1/register', config: usersController.createUser},
	// {method: 'POST', path: '/v1/login', config: authController.login},
	// {method: 'GET', path: '/v1/logout', config: authController.logout}
];
