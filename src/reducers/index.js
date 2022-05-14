import { combineReducers } from "redux";
import postsReducer from "./postReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
    posts: postsReducer,
    users: usersReducers
});