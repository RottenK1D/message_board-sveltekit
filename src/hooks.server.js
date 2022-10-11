import { startMongo } from '$db/mongo';

startMongo()
	.then(() => {
		console.log('Success');
	})
	.catch((err) => {
		console.log(err);
	});
