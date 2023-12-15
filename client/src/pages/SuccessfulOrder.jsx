import React from 'react'
import PropTypes from 'prop-types'
import OrderListItem from '../components/OrderListItem'
import sumPriceCalc from '../helpers/sumPriceCalc'
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator'

function SuccessfulOrder({ orderID, orderList, currencyCode }) {

    const currency = currencyCode === 1 ? 'Ft' : '€'
    const orderListLength = orderList.length === 0 ? false : orderList.length

    return (
        <div className="order-summarized">
            {
                !orderList || !orderListLength
                    ? <div>
                        <h2>A rendelés véglegesítése sikertelen! 🤷‍♂️</h2>
                        <p>Próbáld meg újra vagy vedd fel velünk a kapcsolatot az <a href="mailto:ugyfelszolgalat@herbals.hu">ugyfelszolgalat@herbals.hu</a> email címen.
                            <br /> Örömmel segítünk! 😊</p>
                    </div>
                    : <div className='successful-order-container'>
                        <div className='successful-order-info'>
                            <h2>Köszönjük megrendelésed!</h2>
                            <h4>Rendelés azonosító: {orderID}</h4>
                            <h4>Fizetendő: {sumPriceCalc(orderList)} {currency}</h4>
                            <p>Megrendelt tételek:</p>
                        </div>
                        <div className='ordered-items-list-container'>
                            {orderList.map(orderedItem => <OrderListItem key={uniqueKeyGenerator()} orderedItem={orderedItem} currency={currency} />)}
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
    }).isRequired,
    currencyCode: PropTypes.number.isRequired,
    orderID: PropTypes.string.isRequired
};

export default SuccessfulOrder