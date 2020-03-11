import * as ActionTypes from './ActionTypes';

export const About = (state = {
    isLoading : true,
    about : [],
    errmess : null
}, action) => {
    switch(action.type){
        case ActionTypes.ABOUT_LOADING:
            return {...state, isLoading:true, about:[], errmess:null};
        case ActionTypes.ADD_ABOUT:
            return {...state, isLoading:false, about:action.payload, errmess:null};
        case ActionTypes.ABOUT_FAILED:
            return {...state, isLoading:false, about:[], errmess:action.payload};
        default:
            return state;
    }
}