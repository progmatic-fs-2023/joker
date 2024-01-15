import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
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
          <h3>Rozmaring</h3>
          <p>
            A rozmaring jótékony hatásai közül a legközismertebb az immunerősítés, de emellett még
            számtalan módon támogatja a szervezeted, például gyulladáscsökkentő, fájdalomcsillapító
            hatásai is vannak. Serkenti a vérkeringést, késlelteti az öregedést, és gyorsítja egyes
            bőrbetegségek gyógyulását.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Slide2} fluid text="Second slide" />
        <Carousel.Caption>
          <h3>Gyógynövények meghülésre</h3>
          <p>
            Gyógynövények, mint például a kamilla, eukaliptusz és bodza, hasznosak lehetnek megfázás
            tüneteinek enyhítésében. A citromfű nyugtató hatású, míg a gyömbér gyulladáscsökkentő
            tulajdonságokkal rendelkezik, mindkettő hozzájárulhat a gyógyuláshoz.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Slide3} fluid text="Third slide" />
        <Carousel.Caption>
          <h3>Fűszerek jótékony hatásai</h3>
          <p>
            Fűszerek, mint a kurkuma, gyömbér és bazsalikom, erős antioxidánsokkal rendelkeznek,
            csökkenthetik a gyulladást, támogathatják az emésztést és erősíthetik az immunrendszert.
            Ezen kívül néhány fűszer vércukorszint-szabályozó hatású is lehet, hozzájárulva a szív-
            és érrendszer egészségéhez.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
