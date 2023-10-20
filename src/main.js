const express = require('express');
const sqlite3 = require('sqlite3');

const { Category } = require('./models/category');

const db  = new sqlite3.Database('mocaliza_db.db');

db.serialize(() => {
	db.run("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT)");
	/*db.run("INSERT INTO categories(name) VALUES('Carros')");
	db.run("INSERT INTO categories(name) VALUES('Carros')");
	db.run("INSERT INTO categories(name) VALUES('Motos')");
	db.run("INSERT INTO categories(name) VALUES('SUVs')");
	db.run("INSERT INTO categories(name) VALUES('Hatch')");
	db.run("INSERT INTO categories(name) VALUES('Sedan')");*/
});

const app = express();

app.get('/', (request, response) => {
	db.serialize(() => {
		const categories = [];

		db.each("SELECT id, name from categories", (err, row) => {
			if (err) {
				throw err;
			}

			const category = new Category(row.id, row.name);

			categories.push(category);
		});

		response.json({
			categories,
		});
	});
	
});

app.listen(8000, () => {
	console.log('Server is running on port 8000!');
});
