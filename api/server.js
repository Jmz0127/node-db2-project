const express = require('express');
const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json()); //parsing for json

server.use('/api/cars', carsRouter);

//error catch all
server.use('*', (req, res, next) => {
	next({ status: 404, message: 'not found!' });
});

//error handling middleware for the above
server.use((err, req, res, next) => {
	//eslint-disable-line
	res.status(err.status || 500).json({
		message: err.message
	});
});

// DO YOUR MAGIC

module.exports = server;
