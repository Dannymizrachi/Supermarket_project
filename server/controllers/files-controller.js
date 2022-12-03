const express = require('express');
const uuid = require('uuid');
const router = express.Router();

router.post('/', async (request, response) => {
	try {
		console.log('file');
		const file = request.files.file;
		const extension = file.name.substr(file.name.lastIndexOf('.'));
		let newUuidFileName = uuid.v4();
		let newFileName = newUuidFileName + extension;
		file.mv('./uploads/' + newFileName);

		let successfulUploadResponse = { name: newFileName };
		console.log(successfulUploadResponse);
		response.status(200).json(successfulUploadResponse);
	} catch (err) {
		response.status(500).send(err.message);
	}
});

module.exports = router;
