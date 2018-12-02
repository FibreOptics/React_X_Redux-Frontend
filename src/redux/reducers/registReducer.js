import {
    NEW_USER,
} from '../actionsFire/types';

const initialState = { 
    
}

export default function(state = initialState, action){
    switch(action.type){
        case NEW_USER:
        console.log(action);
        console.log('reduced');
            return {
                ...state,
                status:action.payload
            }; 
        default:
            return state;
    }
}