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
		const formData = await request.formData();
		formData;
		const title = formData.get('title');
		const text = formData.get('text');
		const author = formData.get('author');
		const date = new Date();

		formData._id = crypto.randomUUID();
		formData.title = title.toString();
		formData.text = text.toString();
		formData.author = author.toString();
		formData.date = date;

		board.createIndex({ date: 1 }, { expireAfterSeconds: 10 });
		return await board.insertOne(formData);
	}
};
