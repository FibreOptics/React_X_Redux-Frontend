import {
    GETN_CHECK,
} from '../actionsFire/types';

const initialState = { 
    
}

export default function(state = initialState, action){
    switch(action.type){
        case GETN_CHECK:
        console.log(action);
        console.log('reduced');
            return Object.assign({...state},action.payload);
        default:
            return state;
    }
}