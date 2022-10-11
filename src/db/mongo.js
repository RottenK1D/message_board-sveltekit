import { MongoClient } from 'mongodb';
import { MONGO_URI } from '$env/static/public';

// creating client
const client = new MongoClient(MONGO_URI);

// client connecting
export async function startMongo() {
	try {
		await client.connect();
		await client.db('admin').command({ ping: 1 });

		console.log('Connected successfully to server');
	} catch (error) {
		throw error(404, 'Not found');
	}
}

export default client.db();
