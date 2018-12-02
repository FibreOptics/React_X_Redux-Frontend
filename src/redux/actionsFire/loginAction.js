import {
    GETN_CHECK
} from './types';

export const getNcheck = (email,pass) => dispatch => {
    console.log('in redux');
    console.log('email:'+email,'pass:'+pass);
    //check by email
    const url = 'http://localhost:8080/users/login/'+ email +'/'+ pass ;
    console.log(url);
    fetch(url,{
        method:'GET'
    })
    //fetch('https://expressokki.herokuapp.com/api/testitem')
        .then(res => res.json())
        .then(user => dispatch({type: GETN_CHECK, payload: user})
        );
};