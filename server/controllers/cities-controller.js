const express = require('express');
const citiesLogic = require('../logic/cities-logic');
const router = express.Router();

//get all cities
router.get('/', async (request, response) => {
	try {
		console.log('requested');
		let citiesList = await citiesLogic.getAllCities();
		response.json(citiesList);
	} catch (err) {
		console.log('Failed to get cities');
		return next(err);
	}
});

module.exports = router;
