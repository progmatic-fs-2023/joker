import ImageSlider from '../components/ImageSlider';
import TextArea from '../components/TextArea';

function Home() {
  return (
    <div className="d-flex row text-center m-1">
      <h1>Főoldal</h1>
      <ImageSlider />
      <TextArea />
    </div>
  );
}

export default Home;
