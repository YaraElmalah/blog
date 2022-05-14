import jsonPlaceholder from "../apis/jsonPlaceholder";

//this is a bad approach, We should use custom middleware.
/**
 * Why Async is a bad approach ?
 * 1. Action creators must return a plain object with a a type property
 * 2. By the time our action gets a ruducer, we want to fetched our data.
 *
 * async and await is ESCM 2015 => so babel.js translate this code into a Vanillia js code which is a switch chain that has a return itself (this broke react-redux world).
 * Action creator => Action automatically dispatch into reducers.
 *
 * if we changed the syntax into Promise, the error would be gone but react-redux works very very fast, and the api request would take time so the respone would be too late to hook with react-redux world.
 *
 */
export const fetchPosts = () => {
  /*
   * we can pass getState as well to work as we did in the codepen
   *check: https://codepen.io/yaraehabelmalah/pen/VwQewzj?editors=0010
   * so we can manually dispatch an action
   * Check redux-thunk source code https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts
   */
  return async dispatch =>  {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
