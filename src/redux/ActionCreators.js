import {baseurl} from '../shared/baseurl';
import * as ActionTypes from './ActionTypes';

export const addAbout = (about) => ({
    type : ActionTypes.ADD_ABOUT,
    payload : about
});

export const aboutLoading = () => ({
    type:ActionTypes.ABOUT_LOADING
});

export const aboutFailed = (errmess) => ({
    type:ActionTypes.ABOUT_FAILED,
    payload:errmess
});

export const fetchAbout = () => (dispatch) => {
    dispatch(aboutLoading);

    return fetch(baseurl + 'aboutus')
        .then(response => {
            if(response.ok){
                return response;
            }                
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(about => dispatch(addAbout(about)))
        .catch(error => dispatch(aboutFailed(error.message)));
}


export const contactLoading = () => ({
    type: ActionTypes.CONTACT_LOADING
});

export const contactFailed = (error) => ({
    type: ActionTypes.CONTACT_FAILED,
    payload: error
});

export const addContact = (contact) => ({
    type: ActionTypes.ADD_CONTACT,
    payload:contact
});

export const fetchContact = () => (dispatch) => {
    contactLoading()

    fetch(baseurl + 'contactus')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;                
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(contact => dispatch(addContact(contact)))
        .catch(error => dispatch(contactFailed(error.message)));
}

export const workLoading = () => ({
    type: ActionTypes.WORK_LOADING
});

export const workFailed = (error) => ({
    type: ActionTypes.WORK_FAILED,
    payload: error
});

export const addWork = (work) => ({
    type: ActionTypes.ADD_WORK,
    payload:work
});

export const fetchWork = () => (dispatch) => {
    workLoading()

    fetch(baseurl + 'work')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;                
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(work => dispatch(addWork(work)))
        .catch(error => dispatch(workFailed(error.message)));
}

export const homeLoading = () => ({
    type: ActionTypes.HOME_LOADING
});

export const homeFailed = (error) => ({
    type: ActionTypes.HOME_FAILED,
    payload: error
});

export const addHome = (home) => ({
    type: ActionTypes.ADD_HOME,
    payload:home
});

export const fetchHome = () => (dispatch) => {
    homeLoading()

    fetch(baseurl + 'home')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                throw error;                
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(home => dispatch(addHome(home)))
        .catch(error => dispatch(homeFailed(error.message)));
};
export const addQuery = (query) => ({
    type : ActionTypes.ADD_QUERY,
    payload : query
});

export const sendQuery = (name, email, message) => (dispatch) => {
    const newQuery = {
        name : name,
        email : email,
        message : message
    }
    console.log(newQuery);
    return fetch(baseurl + 'queries',  {
            method:"POST",
            body:JSON.stringify(newQuery),
            headers: {
                'Content-Type':'application/json'
            },
            credentials:'same-origin'

        })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error: ' + response.status + ':' + response.statusText);
            throw error;
        }
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(query => {
        alert('QUERY Submitted: ' +JSON.stringify(query));
        dispatch(addQuery(query));
    })
    .catch(error => {
        alert('Error message: ' + error.message);
    });

};

