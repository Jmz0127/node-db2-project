exports.up = async function (knex) {
	// DO YOUR MAGIC - if youre not doing async remove async and replace await with return!!
	await knex.schema.createTable('cars', (table) => {
		table.increments();
		table.string('vin', 17).unique().notNullable();
		table.string('make', 128).notNullable();
		table.string('model', 128).notNullable();
		table.integer('mileage').unsigned().notNullable(); //unsigned means the number can't be in the negatives
		table.string('title', 128); //for non required columns you can add a .defaultTo('string here')
		table.string('transmission', 128);
	});
};

exports.down = async function (knex) {
	// DO YOUR MAGIC
	await knex.schema.dropTableIfExists('cars');
};
