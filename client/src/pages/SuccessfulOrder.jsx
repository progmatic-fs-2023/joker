import PropTypes from 'prop-types'
import { useCart } from '../hooks/useCart';
import OrderedItem from '../components/OrderedItem'
import { sumPriceCalc } from '../helpers/summaryCalc'
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator'

function SuccessfulOrder() {
    const { cart } = useCart();
    const userOrder = {
          orderID: '234343-643svsd',
          orderedItems: [...cart],
          paid: 'true',
          delivered: 'false',
          currencyCode: 1,
        }
    const currency = userOrder.currencyCode === 1 ? 'Ft' : '€'

    return (
        <div className="order-summarized">
            {
                !userOrder.orderID
                    ? <div>
                        <h2>A rendelés véglegesítése sikertelen! 🤷‍♂️</h2>
                        <p>Próbáld meg újra vagy vedd fel velünk a kapcsolatot az <a href="mailto:ugyfelszolgalat@herbals.hu">ugyfelszolgalat@herbals.hu</a> email címen.
                            <br /> Örömmel segítünk! 😊</p>
                    </div>
                    : <div className='successful-order-container'>
                        <div className='successful-order-info'>
                            <h2>Köszönjük megrendelésed!</h2>
                            <h4>Rendelés azonosító: {userOrder.orderID}</h4>
                            <h4>Fizetendő: {sumPriceCalc(cart)} {currency}</h4>
                            <p>Megrendelt tételek:</p>
                        </div>
                        <div className='ordered-items-list-container'>
                            {cart.map(orderedItem => <OrderedItem key={uniqueKeyGenerator()} orderedItem={orderedItem} currency={currency} />)}
                        </div>
                    </div>
            }
        </div>
    )
}

SuccessfulOrder.propTypes = {
    orderList: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        packing: PropTypes.string,
        unitPrice: PropTypes.number,
        map: PropTypes.func,
        length: PropTypes.func
    })
};
SuccessfulOrder.defaultProps = {
    orderList: undefined,
  };

export default SuccessfulOrder
