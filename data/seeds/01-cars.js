// STRETCH
const cars = [
	{
		vin: 'WP0AA2993XS621083',
		make: 'tesla',
		model: 'model Y',
		mileage: 215000,
		title: 'clean',
		transmission: 'auto'
	},
	{
		vin: '1FVACWDCX6HW63819',
		make: 'tesla',
		model: 'model 3',
		mileage: 215000,
		title: 'used'
	},
	{
		vin: 'JH4KA3151KC019450',
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
