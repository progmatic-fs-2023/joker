import './App.css';
import SuccessfulOrder from './pages/SuccessfulOrder';
import userOrder from '../order';
import ProductList from './components/ProductList';

function App() {
  // Sample Array with products

  const stockList = [
    {
      image: 'https://picsum.photos/250/200?random=3',
      latin: 'Vaccinium myrtillus',
      name: 'Áfonya, fekete',
      quantity: 4,
      packing: 'csomag',
      unitPrice: 4700,
    },
    {
      image: 'https://picsum.photos/250/200?random=2',
      latin: 'Angelica archangelica',
      name: 'Angelika fű',
      quantity: 2,
      packing: 'csomag',
      unitPrice: 5620,
    },
    {
      image: 'https://picsum.photos/250/200?random=1',
      latin: 'Galipea officinalis',
      name: 'Angosztúra kéreg',
      quantity: 5,
      packing: 'db',
      unitPrice: 1780,
    },
    {
      image: 'https://picsum.photos/250/200?random=4',
      latin: 'Artemisia Absinthium',
      name: 'Fehér üröm',
      quantity: 5,
      packing: 'g',
      unitPrice: 1780,
    },
    {
      image: 'https://picsum.photos/250/200?random=5',
      latin: 'Sinapis nigra',
      name: 'Fekete mustár',
      quantity: 5,
      packing: 'g',
      unitPrice: 1780,
    },
    {
      image: 'https://picsum.photos/250/200?random=6',
      latin: 'Galanga maioris',
      name: 'Galanga (kínai gyömbér) ',
      quantity: 5,
      packing: 'db',
      unitPrice: 1780,
    },
    {
      image: 'https://picsum.photos/250/200?random=7',
      latin: 'Pasztinaca sativa',
      name: 'Vad pasztinák (Paszternák)',
      quantity: 5,
      packing: 'db',
      unitPrice: 1780,
    },
  ];

  const order = userOrder[0]
  return (
    <div>
      WEBSHOP
      <ProductList stockList={stockList} />
      <hr />
      <SuccessfulOrder orderID={order.orderID} orderList={order.orderedItems} currencyCode={order.currencyCode} />
    </div>
  );
}

export default App;
