import {CREATE_POST} from "./types";
import {FETCH_POST} from "./types";
import {SHOW_LOADER} from "./types";
import {PAST_LOADER} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}
// Pure Functions
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            //first method
            return {...state, posts: state.posts.concat([action.payload])}
            //second method
            //return {...state, posts: [...state.posts, action.payload]}
        case FETCH_POST:
            return { ...state, fetchedPosts: action.payload }
        default:
            return state
    }
}
