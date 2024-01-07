import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import Slide1 from '../assets/slide_1.jpg';
import Slide2 from '../assets/slide_2.jpg';
import Slide3 from '../assets/slide_3.jpg';

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Slide1} fluid text="First slide" />
        {/* <Slide1 text="First slide" /> */}
        <Carousel.Caption>
          <h3>Zöld gyógynövény 1</h3>
          <p>Jótékony hatását már az ókorban is ismerték...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Slide2} fluid text="Second slide" />
        <Carousel.Caption>
        <h3>Zöld gyógynövény 2</h3>
          <p>Jótékony hatását már az ókorban is ismerték...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Slide3} fluid text="Third slide" />
        <Carousel.Caption>
        <h3>Zöld gyógynövény 3</h3>
          <p>Jótékony hatását már az ókorban is ismerték...</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ImageSlider;