import { useState } from "react";
import { connect } from "react-redux";
import { getImage, acceptImage, getImages } from "../../store/actions";
import { ImPlus } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";
import {
  ImageContainer,
  Image,
  AddImageButton,
  ButtonWarpper,
  Button,
  ErrorMessage,
} from "./Styles";

const MainImage = ({
  getImage,
  image,
  acceptImage,
  getImages,
  error,
  loading,
}) => {
  const [show, setShow] = useState(false);

  const getImageHandler = () => {
    getImage();
    setShow(true);
  };

  const acceptImageHandler = (img) => {
    acceptImage(img);
    getImages();
    setShow(false);
  };

  return (
    <ImageContainer>
      {loading && <LoadingSpinner />}
      {!show && (
        <div>
          <AddImageButton onClick={getImageHandler} id="add-btn">
            <ImPlus />
          </AddImageButton>
        </div>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {image && show && (
        <div>
          <div>
            <Image
              alt={image.alt_description}
              id="img"
              src={image.urls.thumb}
              width="50%"
              height="50%"
            ></Image>
          </div>
          <ButtonWarpper>
            <Button onClick={getImageHandler} id="reject-btn">
              <GrClose />
            </Button>
            <Button onClick={() => acceptImageHandler(image)} id="accept-btn">
              <BsCheckLg />
            </Button>
          </ButtonWarpper>
        </div>
      )}
    </ImageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    image: state.imageReducer.image,
    loading: state.imageReducer.loading,
    error: state.imageReducer.error,
  };
};

export default connect(mapStateToProps, { getImage, acceptImage, getImages })(
  MainImage
);
