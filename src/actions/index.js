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
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/post');
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
