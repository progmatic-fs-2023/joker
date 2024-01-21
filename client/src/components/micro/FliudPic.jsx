import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

function FluidPic({ imageSrc }) {
  return <Image src={imageSrc} fluid rounded />;
}

FluidPic.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default FluidPic;
