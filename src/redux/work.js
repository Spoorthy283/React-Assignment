import * as ActionTypes from './ActionTypes.js';

export const Work = (state = {
    isLoading : true,
    work : [],
    errmess : null
}, action) => {
    switch(action.type){
        case ActionTypes.WORK_LOADING : 
            return {...state, isLoading:true, work:[], errmess:null};

        case ActionTypes.ADD_WORK : 
            return {...state, isLoading:false, work:action.payload, errmess:null};

        case ActionTypes.WORK_FAILED:
                return {...state, isLoading:false, work:[], errmess: action.payload};

        default: return state;
    }

}