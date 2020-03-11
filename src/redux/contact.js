import * as ActionTypes from './ActionTypes.js';

export const Contact = (state = {
    isLoading : true,
    contact : [],
    errmess : null
}, action) => {
    switch(action.type){
        case ActionTypes.CONTACT_LOADING : 
            return {...state, isLoading:true, contact:[], errmess:null};

        case ActionTypes.ADD_CONTACT : 
            return {...state, isLoading:false, contact:action.payload, errmess:null};

        case ActionTypes.CONTACT_FAILED:
                return {...state, isLoading:false, contact:[], errmess: action.payload};

        default: return state;
    }

}