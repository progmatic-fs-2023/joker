import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function ImageSliderMini({ images }) {
  return (
    <Carousel data-bs-theme="dark" className="mx-auto w-50" style={{ boxShadow: '1px 3px 5px' }}>
      {images.map((img) => (
        <Carousel.Item key={uniqueKeyGenerator()}>
          <img className="d-block w-100" src={img} alt={img} />
          {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

ImageSliderMini.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageSliderMini.defaultProps = {
  images: undefined,
};

export default ImageSliderMini;
