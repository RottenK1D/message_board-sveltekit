import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';
// creating client
const client = new MongoClient(MONGODB_URI);

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
