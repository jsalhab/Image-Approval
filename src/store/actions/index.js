import {
  GET_IMAGE,
  GET_IMAGES_LIST,
  ACCEPT_IMAGE,
  GET_IMAGE_FAILD,
} from "./types";
import axios from "axios";

const accessKey = "R50I7y0Y-H2qTdaH8kGJcCpsbfsErRAJkDYShR4dCdc";

const checkImage = (image) => {
  const allImages = JSON.parse(localStorage.getItem("allImages") || "[]");
  const index = allImages.findIndex((elem) => elem === image.id);
  if (index === -1) {
    allImages.push(image.id);
    localStorage.setItem("allImages", JSON.stringify(allImages));
  }
  return index === -1 ? false : true;
};

export const getImage = () => async (dispatch) => {
  try {
    dispatch({ type: GET_IMAGE, payload: { loading: true, data: null } });
    let response,
      status = true;
    while (status) {
      response = await axios.get(
        "https://api.unsplash.com/photos/random/?client_id=" + accessKey
      );
      status = checkImage(response.data);
    }
    dispatch({
      type: GET_IMAGE,
      payload: { loading: false, data: response.data },
    });
  } catch (error) {
    dispatch({ type: GET_IMAGE_FAILD, payload: error.message });
  }
};

export const getImages = () => {
  const images = JSON.parse(localStorage.getItem("acceptedImages") || "[]");
  return {
    type: GET_IMAGES_LIST,
    payload: images,
  };
};

export const acceptImage = (image) => (dispatch) => {
  const acceptedImages = JSON.parse(
    localStorage.getItem("acceptedImages") || "[]"
  );
  acceptedImages.push(image.urls.full);
  localStorage.setItem("acceptedImages", JSON.stringify(acceptedImages));
  dispatch({
    type: ACCEPT_IMAGE,
  });
};
