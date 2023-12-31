import React, { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

function Home() {

    const { cart } = useCart()
    const [stockList, setStockList] = useState([])
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbQuery = async () => {
            const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/herbs`)
            const list = await result.json()
            setStockList(list)
            // setLoading(false)
        }
        dbQuery()
    }, []);

    return (
        <div className="home-container">
            {
                stockList[0] ? <ProductList stockList={stockList} /> : 'Loading...'
            }
            {
                cart[0] && <Cart />
            }
        </div>
    );
}

export default Home;
