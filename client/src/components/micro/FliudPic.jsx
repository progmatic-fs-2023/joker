import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

function FluidPic({ imageSrc }) {
  return <Image src={imageSrc} fluid rounded width="30%" />;
}

FluidPic.propTypes = {
  imageSrc: PropTypes.string,
};

FluidPic.defaultProps = {
  imageSrc: undefined,
};

export default FluidPic;
