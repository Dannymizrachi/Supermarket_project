const fs = require('fs');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const usersController = require('./controllers/users-controller');
const cartItemsController = require('./controllers/cartItems-controller');
const ordersController = require('./controllers/orders-controller');
const productsController = require('./controllers/products-controller');
const citiesController = require('./controllers/cities-controller');
const categoriesController = require('./controllers/categories-controller');
const filesController = require('./controllers/files-controller');
const uploadsController = require('./controllers/uploads-controller');
const errorHandler = require('./errors/error-handler');
const server = express();

server.use(fileUpload());
const loginFilter = require('./middlewares/login-filter');
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.json());

//validates an uploads file in the server
if (!fs.existsSync('./uploads')) {
	fs.mkdirSync('./uploads');
}

server.use(cors());
server.use(errorHandler);

//upload images handling - didn't know was best to put this since it is using the server express.

server.use('/file', filesController);
server.use('/uploads', uploadsController);
server.use(loginFilter());

server.use('/cartItem', cartItemsController);
server.use('/shipping-details', ordersController);
server.use('/products', productsController);
server.use('/cities', citiesController);
server.use('/users', usersController);
server.use('/categories', categoriesController);

server.listen(3000, () => console.log('Listening on http://localhost:3000'));
