import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function Shop() {
  const [stockList, setStockList] = useState([]);

  useEffect(() => {
    const dbQuery = async () => {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/herbs`);
      const list = await result.json();
      setStockList(list);
    };
    dbQuery();
  }, []);

  return <div>{stockList[0] ? <ProductList stockList={stockList} /> : 'Loading...'}</div>;
}

export default Shop;
