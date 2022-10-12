import { MongoClient } from 'mongodb';
import { MCLI_PRIVATE_API_KEY } from '$env/static/private';

// creating client
const client = new MongoClient(MCLI_PRIVATE_API_KEY);

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
