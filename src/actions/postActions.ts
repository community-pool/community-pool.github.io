import { fetchPosts } from "../services/post-api";

export const GET_POSTS_LOADING = "GET_POSTS_LOADING";
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const getPosts = () => (dispatch: any) => {
  console.log("FETCHING");
  dispatch({
    type: GET_POSTS_LOADING
  });

  return fetchPosts()
    .then((posts: any) => {
      dispatch({
        type: GET_POSTS,
        payload: posts
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: err
      });
    });
};
