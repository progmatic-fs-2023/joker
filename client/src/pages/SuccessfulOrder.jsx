import React from 'react'
import OrderListItem from '../components/OrderListItem.jsx'
import { sumPriceCalc } from '../helpers/sumPriceCalc.js'

function SuccessfulOrder({ orderID, orderList, currencyCode }) {
    const currency = currencyCode == 1 ? 'Ft' : '€'

    return (
        <div className="order-summarized">
                {
                    !orderList || orderList.length == 0
                        ? <div>
                            <h4>A rendelés véglegesítése sikertelen! 🤷‍♂️</h4>
                            <p>Próbáld meg újra vagy vedd fel velünk a kapcsolatot az <a href="mailto:ugyfelszolgalat@herbals.hu">ugyfelszolgalat@herbals.hu</a> email címen.
                                <br /> Örömmel segítünk! 😊</p>
                        </div>
                        : <div className='successful-order-container'>
                            <h3>Köszönjük megrendelésed!</h3>
                            <h5>Rendelés azonosító: {orderID}</h5>
                            <h4>Fizetendő: {sumPriceCalc(orderList)} {currency}</h4>
                            <p>Megrendelt tételek:</p>
                            <div className='ordered-items-list-container'>
                                {orderList.map((orderedItem, idx) => <OrderListItem key={idx} orderedItem={orderedItem} currency={currency} />)}
                            </div>
                        </div>
                }
            </div>
    )
}

export default SuccessfulOrder