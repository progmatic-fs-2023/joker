import React from 'react';
import ProductList from '../components/ProductList';
import Product from '../components/Product';

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

function Home() {
  return (
    <div>
      <ProductList stockList={stockList} />
      <Product />
    </div>
  );
}

export default Home;
