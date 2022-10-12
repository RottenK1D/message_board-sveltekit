import { board } from '$db/board';

export const load = async () => {
	try {
		const data = await board.find({}).toArray();
		return {
			status: 200,
			board: data
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				error: 'server error occurred'
			}
		};
	}
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const title = data.get('title');
		const text = data.get('text');
		const author = data.get('author');
		const date = new Date();

		data._id = crypto.randomUUID();
		data.title = title.toString();
		data.text = text.toString();
		data.author = author.toString();
		data.date = date;

		board.createIndex({ date: 1 }, { expireAfterSeconds: 10 });
		return await board.insertOne(data);
	}
};
