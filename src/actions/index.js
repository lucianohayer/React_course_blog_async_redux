import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach((id) => dispatch(fetchUser(id)))
		.value();
};

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

export const fetchUser = (id) => async (dispatch) => {
	let user = null;

	try {
		const response = await jsonPlaceholder.get(`/users/${id}`);
		user = response.data;
	} catch (err) {
		console.error(err);
	}

	dispatch({
		type: 'FETCH_USER',
		payload: user,
	});
};
