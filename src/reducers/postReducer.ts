import {
  GET_POSTS,
  GET_POSTS_LOADING,
  GET_POSTS_ERROR
} from "../actions/postActions";

const initialState = {
  list: []
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return { ...state, loading: true };
    case GET_POSTS:
      return { ...state, loading: false, list: action.payload };
    case GET_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
