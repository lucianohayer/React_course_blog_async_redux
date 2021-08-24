import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
	let posts = [];
	try {
		posts = await jsonPlaceholder.get('/posts');
	} catch (err) {
		console.error(err);
	}

	dispatch({
		type: 'FETCH_POSTS',
		payload: posts,
	});
};
