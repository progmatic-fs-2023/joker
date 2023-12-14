import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import ProductList from './components/ProductList';

function App() {
  const [isConnect, setIsConnect] = useState(false);

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

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  useEffect(() => {
    console.log(isConnect);
  }, []);

  return (
    <div>
      WEBSHOP
      {/* <ul>
        <li> */}
      <ProductList stockList={stockList} />
      {/* {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul> */}
    </div>
  );
}

export default App;
