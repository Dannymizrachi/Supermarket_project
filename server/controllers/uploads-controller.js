path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:name', (request, response) => {
	let fileName = request.params.name;
	let fullQualifiedFileName =
		__dirname.replace('/controllers', '') + '/uploads/' + fileName;
	response.sendFile(fullQualifiedFileName);
});

module.exports = router;
