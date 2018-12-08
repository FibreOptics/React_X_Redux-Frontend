import {
    NEW_USER
} from './types';

export const regUser = (name,email,pass,) => dispatch => {
    console.log('in redux');
    console.log(name,email,pass);
    const pack = {name,email,pass};
    const url = 'https://dokkibackapp.herokuapp.com/users/create/';
    fetch(url,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(pack)
    })
    //fetch('https://expressokki.herokuapp.com/api/testitem')
        .then(res => res.json())
        .then(status => dispatch({type: NEW_USER, payload: status})
        );
};