import * as ActionTypes from './ActionTypes';

export const Home = (state = {
    isLoading : true,
    errmess : null,
    home :[]
}, action) => {
    switch(action.type) {
        case ActionTypes.HOME_LOADING:
                return {...state, isLoading:true, home:[]};
        case ActionTypes.ADD_HOME:
                return {...state, isLoading:false, home:action.payload};

        case ActionTypes.HOME_FAILED:
                return {...state, isLoading:false, home: action.payload};

        default: return state;
    }
}
