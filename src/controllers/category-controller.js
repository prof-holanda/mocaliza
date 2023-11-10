const { Category } = require('../models/category');

class CategoryController {
	async index() {
		return await Category.findAll();
	}
	
	async show(id) {
		return await Category.findOne({ 
			where: {
				id: id
			}
		});
	}
	
	async store(categoryDto) {
		const category = await Category.create(categoryDto);
		
		category.save();
		
		return category;
	}
	
	async update(id, categoryDto) {
		const category = await Category.findOne({ 
			where: {
				id: id
			}
		});
		console.log(category);
		/*if (!category) {
			throw Error("Category not found!");
		}*/
		
		category.name = categoryDto.name;
		category.active = categoryDto.active;
		
		category.save();
		
		return category;
	}
	
	async destroy(id) {
		const category = await Category.findOne({ 
			where: {
				id: id
			}
		});
		
		if (!category) {
			throw Error("Category not found!");
		}
		
		category.destroy();
	}
}

module.exports = { CategoryController } 