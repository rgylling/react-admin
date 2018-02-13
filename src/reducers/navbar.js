import * as NavbarActionTypes  from '../actiontypes/navbar';

const initialState = {
	open:true,
}

export default (state=initialState, action) => {
	switch(action.type){
		case NavbarActionTypes.TOGGLE_CONTENT:
			return {...initialState,open: action.toggler,};
		default:
			return state
	}
}
