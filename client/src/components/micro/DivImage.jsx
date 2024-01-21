import PropTypes from 'prop-types';

function DivImage({ imgLink, width, height }) {
  return (
    // <div className="div-image" style={{ backgroundImage: "url(/img/handful_herbs.png), " }}>
    <div
      className="div-image mx-auto"
      style={{
        background: `white url(${imgLink})`,
        width: `${width}`,
        height: `${height}`,
        borderRadius: '14px',
        color: 'white',
      }}
    >
      DivImage
    </div>
  );
}

DivImage.propTypes = {
  imgLink: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

DivImage.defaultProps = {
  width: undefined,
  height: undefined,
};

export default DivImage;
