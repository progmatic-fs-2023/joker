import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { API_URL } from '../constants';

function Shop() {
  const [stockList, setStockList] = useState([]);

  useEffect(() => {
    const dbQuery = async () => {
      const result = await fetch(`${API_URL}/herbs`);
      const list = await result.json();
      setStockList(list);
    };
    dbQuery();
  }, []);

  return (
    <div className="shop px-1 py-2">
      {stockList[0] ? <ProductList stockList={stockList} /> : 'Loading...'}
    </div>
  );
}

export default Shop;
