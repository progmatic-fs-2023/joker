import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const stockList = [
  {
    id: 1111,
    image: 'https://picsum.photos/250/200?random=3',
    latin: 'Vaccinium myrtillus',
    name: 'Áfonya, fekete',
    quantity: 4,
    packing: 'csomag',
    unitPrice: 4700,
    description:
      'A fekete áfonya (Vaccinium myrtillus) a hangafélék (Ericaceae) családjába tartozó gyümölcstermő növény. Termését és levelét a népi gyógyászat is felhasználja. Népies nevei: havasi meggy, boronyica, havasi meggykoró, kakojza, kukajsza, kokojza, molabogyó, afinya.',
  },
  {
    id: 1122,
    image: 'https://picsum.photos/250/200?random=2',
    latin: 'Angelica archangelica',
    name: 'Angelika fű',
    quantity: 2,
    packing: 'csomag',
    unitPrice: 5620,
    description:
      'Kétéves vagy évelő növény, mely 2 m magasra is megnőhet. Gyöktörzse mintegy 10 cm hosszú és 5 cm vastag, barna színű, hengeres alakú, felületén körkörös vonalak mutatkoznak, belseje sárgásfehér tejnedvet tartalmaz. Gyökerei 15–30 cm hosszúak és legfeljebb 1 cm vastagok, illatuk jellegzetesen fűszeres, az ízük keserű.',
  },
  {
    id: 1133,
    image: 'https://picsum.photos/250/200?random=1',
    latin: 'Galipea officinalis',
    name: 'Angosztúra kéreg',
    quantity: 5,
    packing: 'db',
    unitPrice: 1800,
    description:
      'Dél-Amerikában (Brazíliában, Kolumbiában) honos cserje, vagy fa. Barnásszürke kérge (angosztura cortex, angosztúra kéreg) a fűszer. Gyengén fűszeres illata, sokáig tartó keserű, zamatos íze miatt a likőrgyártás (a nevezetes Angosztúra-keserű) egyik speciális alapanyaga. ( Ma már helyettesítik a Gentiana lutea - Sárga tárnics gyökérkivonatával) Az indiánok a kéreg porát a vízbe szórva a halak elkábítására is használják.',
  },
  {
    id: 1144,
    image: 'https://picsum.photos/250/200?random=4',
    latin: 'Artemisia Absinthium',
    name: 'Fehér üröm',
    quantity: 5,
    packing: 'g',
    unitPrice: 2880,
    description:
      'A fehér üröm vagy abszintüröm (Artemisia absinthium) a fészkesvirágzatúak (Asterales) rendjébe és az őszirózsafélék (Asteraceae) családjába tartozó növényfaj. Magyarországon már a középkorban is elterjedt fűszer- és gyógynövény.',
  },
  {
    id: 1155,
    image: 'https://picsum.photos/250/200?random=5',
    latin: 'Sinapis nigra',
    name: 'Fekete mustár',
    quantity: 5,
    packing: 'g',
    unitPrice: 1980,
    description:
      'A Rhamphospermum nigrum, a fekete mustár egy egynyári növény, amelyet a sötétbarnától a feketéig terjedő magjai miatt termesztenek, amelyeket általában fűszerként használnak. Észak-Afrika hűvösebb vidékein, Európa mérsékelt égövi vidékein és Ázsia egyes részein őshonos',
  },
  {
    id: 1166,
    image: 'https://picsum.photos/250/200?random=6',
    latin: 'Galanga maioris',
    name: 'Galanga (kínai gyömbér) ',
    quantity: 5,
    packing: 'db',
    unitPrice: 1780,
    description:
      'Galangának (más néven galangál, kínai gyömbér) három, egymáshoz hasonló növény gyökerét (nagy, kis és kaempferia galanga) hívjuk, amely az ázsiai konyha egyik fő alapanyaga. Feltehetőleg Indonéziából származik, manapság főleg Indokínában, Thaiföldön, Malajziában és Indonéziában termesztik.',
  },
  {
    id: 1177,
    image: 'https://picsum.photos/250/200?random=7',
    latin: 'Pasztinaca sativa',
    name: 'Vad pasztinák (Paszternák)',
    quantity: 5,
    packing: 'db',
    unitPrice: 1780,
    description:
      'Vadpasztinák (Pastinaca sativa) mint fűszernövény, levél - és gyökérzöldség - vadon termő fűszerek II. Mostanában is még virágzik és érleli termését egy sárga ernyős virágzatú növény. Erdőszéleken, erdei tisztásokon, réteken, utak szélén, patakok, csatornák füves szegélyében, szóval nem a legjobb gyepekben él.',
  },
];

function Home() {
  return (
    <div className="home-container">
      <ProductList stockList={stockList} />
      <Cart />
    </div>
  );
}

export default Home;
