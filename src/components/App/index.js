import ImagesList from "../ImagesList";
import MainImage from "../MainImage";
import { AppContainer } from "./Styles";

const App = () => {
  return (
    <AppContainer data-testid="app-comonent">
      <h2>Image Approval Application</h2>
      <ImagesList />
      <MainImage />
    </AppContainer>
  );
};

export default App;
