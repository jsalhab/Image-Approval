import { mount } from "enzyme";
import MainImage from "../components/MainImage";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { acceptImage, getImages } from "../store/actions";
import { ACCEPT_IMAGE, GET_IMAGES_LIST } from "../store/actions/types";
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

const image = {
  alt_description: "alt description",
  urls: {
    full: "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcwMTA4MzY&ixlib=rb-1.2.1&q=85",
    thumb:
      "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcwMTA4MzY&ixlib=rb-1.2.1&q=80&w=200",
  },
};

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = mount(
    <Provider store={store}>
      <MainImage />
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("Display the main image", () => {
  beforeEach(() => {
    const addButton = wrapper.find("#add-btn");
    addButton.at(0).simulate("click");
    wrapper.update();
  });

  it("display an image after clicking add image button", async () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("test accept image button", async () => {
    const acceptButton = wrapper.find("#accept-btn");
    acceptButton.at(0).simulate("click");
    store.dispatch(acceptImage(image));
    store.dispatch(getImages());
    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: ACCEPT_IMAGE,
    });
    expect(actions).toContainEqual({
      type: GET_IMAGES_LIST,
      payload: [
        "https://images.unsplash.com/photo-1634325232058-e7b8f80cc20b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzQ2NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzcwMTA4MzY&ixlib=rb-1.2.1&q=85",
      ],
    });
  });

  it("test reject image button", () => {
    const rejectButton = wrapper.find("#reject-btn");
    rejectButton.at(0).simulate("click");
    expect(wrapper.find("img").length).toEqual(1);
  });
});
