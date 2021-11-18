import {
  GET_IMAGE,
  GET_IMAGES_LIST,
  ACCEPT_IMAGE,
  GET_IMAGE_FAILD,
} from "../actions/types";

const initialState = {
  image: {},
  images: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload.data,
        loading: action.payload.loading,
      };
    case GET_IMAGES_LIST:
      return { ...state, images: action.payload };
    case ACCEPT_IMAGE:
      return { ...state, images: action.payload };
    case GET_IMAGE_FAILD:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
