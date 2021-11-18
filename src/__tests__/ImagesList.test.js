import React from "react";
import { mount } from "enzyme";
import ImagesList from "../components/ImagesList";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let wrapper;
let store;

const initialState = {
  imageReducer: {
    image: {
      alt_description: "alt description",
      urls: {
        full: "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcwMTA4MzY&ixlib=rb-1.2.1&q=85",
        thumb:
          "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcwMTA4MzY&ixlib=rb-1.2.1&q=80&w=200",
      },
    },
    images: [
      "https://images.unsplash.com/photo-1634370077852-54edd83eb6fe?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY3NDQyNTE&ixlib=rb-1.2.1&q=85",
    ],
    loading: true,
    error: "",
  },
};

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = mount(
    <Provider store={store}>
      <ImagesList />
    </Provider>
  );
});

describe("Display list of images", () => {
  it("dispatch get images action", () => {
    const actions = store.getActions();
    expect(actions).toEqual([{ payload: [], type: "GET_IMAGES_LIST" }]);
  });

  it("display list of images ", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
});
