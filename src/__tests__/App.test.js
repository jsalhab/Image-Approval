import App from "../components/App";
import { Provider } from "react-redux";
import { store } from "../store";
import { shallow } from "enzyme";

it("renders App Component without error", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.length).toBe(1);
});
