import { useEffect } from "react";
import { connect } from "react-redux";
import { getImages } from "../../store/actions";
import Carousel from "react-elastic-carousel";
import { ImageListWarpper, Image } from "./Styles";

const ImagesList = ({ getImages, images }) => {
  useEffect(() => {
    getImages();
  }, []);

  return images ? (
    <ImageListWarpper>
      <h4>Approved Images ({images.length})</h4>
      <div>
        <Carousel>
          {images.map((image) => {
            return <Image key={image} src={image} alt={image}></Image>;
          })}
        </Carousel>
      </div>
    </ImageListWarpper>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    images: state.imageReducer.images,
  };
};

export default connect(mapStateToProps, { getImages })(ImagesList);
