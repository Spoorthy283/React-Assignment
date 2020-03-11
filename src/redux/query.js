import * as ActionTypes from './ActionTypes.js';

export const Query = (state = {
    isLoading : true,
    query : [],
    errmess : null
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_QUERY : 
            return {...state, isLoading:false, query:action.payload, errmess:null};

        default: return state;
    }

}