import express from'express';
import { Category } from'./models/category.js';

const app = express();

app.get('/', (request, response) => {
	response.json({
		data: Date.now(),
	});
});

app.listen(8000, () => {
	const c = Category.from(1, 'Cars', true, Date.now(), Date.now());
	console.log(c);
	console.log('Server is running on port 8000!');
});
