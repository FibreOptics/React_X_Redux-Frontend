//STORE
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src_old/App/redux/reducers'; //index.js

const initialState={};
const middleware = [thunk]; //array of our middleware
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
    );

export default store;

//INDEXJS
import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    //objects of reducers
    posts: postReducer
});

//POSTREDUCER
import {FETCH_POSTS} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
        console.log('reduced')
            return{
                ...state,
                items : action.payload
            }
        default:
            return state;
    }
}

//ACT_TYPES
export const FETCH_POSTS = 'FETCH_POSTS';

//ACTION
import {FETCH_POSTS,} from './types';

{/* export function fetchPosts(){
    return function(dispatch){
        fetch('/api/testitem')
        .then(res => res.json())
        .then(list => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
} */}

export const fetchPosts = () => dispatch => {
    console.log('in redux');
    //fetch('http://localhost:8080/api/testitem')
    fetch('https://expressokki.herokuapp.com/api/testitem')
        .then(res => res.json())
        .then(list => dispatch({
                type: FETCH_POSTS,
                payload: list
            })
        );
};