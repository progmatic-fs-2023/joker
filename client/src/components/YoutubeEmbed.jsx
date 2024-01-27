import PropTypes from 'prop-types';

function YoutubeEmbed({ embedId }) {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video"
        allowFullScreen
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
