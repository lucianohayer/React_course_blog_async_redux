import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
	let posts = [];
	try {
		const response = await jsonPlaceholder.get('/posts');
		posts = response.data;
	} catch (err) {
		console.error(err);
	}

	dispatch({
		type: 'FETCH_POSTS',
		payload: posts,
	});
};
