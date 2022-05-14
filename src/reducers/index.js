import { combineReducers } from "redux";
import postsReducer from "./postReducers";

export default combineReducers({
    posts: postsReducer
});