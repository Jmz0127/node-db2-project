// STRETCH
const cars = [
	{
		vin: '1111111111111',
		make: 'tesla',
		model: 'model Y',
		mileage: 215000,
		title: 'clean',
		transmission: 'auto'
	},
	{
		vin: '1111111111112',
		make: 'tesla',
		model: 'model 3',
		mileage: 215000,
		title: 'used'
	},
	{
		vin: '1111111111113',
		make: 'tesla',
		model: 'model X',
		mileage: 215000
	}
];

exports.seed = function (knex) {
	return knex('cars')
		.truncate()
		.then(() => {
			return knex('cars').insert(cars);
		});
};

//same as above but with async await instead
// exports.seed = async function(knex) {
//     await knex('cars').truncate()
//     await knex('cars').insert(cars)
//     }
