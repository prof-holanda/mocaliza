const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Database } = require('./configs/sequelize');
const { CategoryController } = require('./controllers/category-controller.js');

const db = Database.getInstance();

const app = express();
const categoryController = new CategoryController();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/api/categories', async (req, res) => {
	const categories = await categoryController.index();
	
	res.json({
		data: categories
	});
});

app.get('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const category = await categoryController.show(id);
	
	res.json({
		data: category,
	});
});

app.post('/api/categories', async (req, res) => {
	const categoryDto = {
		name: req.body.name,
		active: true,
	};
	
	const category = await categoryController.store(categoryDto);
	
	res.status(201);
	res.json({
		data: category
	});
});

app.delete('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.param.id);
	
	try {
		await categoryController.destroy(id);
		
		res.status(204);
		res.end();
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});

app.put('/api/categories/:id', async (req, res) => {
	const categoryDto = {
		name: req.body.name,
		active: req.body.active,
	};

	
	try {
		const category = await categoryController.update(req.params.id, categoryDto);
		
		res.json({
			data: category,
		});
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});

app.listen(8000, async () => {
	
	
	//await db.sync();
	console.log('Server is running on port 8000!');
});
