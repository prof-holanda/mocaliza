const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.json({
		data: Date.now(),
	});
});

app.listen(8000, () => {
	console.log('Server is running on port 8000!');
});
