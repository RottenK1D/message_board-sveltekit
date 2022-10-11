import db from '$db/mongo';

export const board = db.collection('post');
