import * as NavbarActionTypes from '../actiontypes/navbar';

export const toggleContent = (toggler) => {
	return (dispatch, getState) => {
		console.log(toggler)
		dispatch({
			type: NavbarActionTypes.TOGGLE_CONTENT,
			toggler
		})
	};
};
