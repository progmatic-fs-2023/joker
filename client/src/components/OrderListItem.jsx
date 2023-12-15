import React from 'react'
import PropTypes from 'prop-types'

function OrderListItem({ orderedItem, currency }) {
    return (
        <div className="ordered-item">
            <img className="ordered-item-img" src={orderedItem.image} alt={orderedItem.name} />
            <h4 className="ordered-item">{orderedItem.name} | <small>{orderedItem.quantity}{orderedItem.packing}</small></h4>
            <p className="ordered-item-price">Egységár: {orderedItem.unitPrice} {currency}/{orderedItem.packing}</p>
            <p className="ordered-item-sum">Össz.: {orderedItem.unitPrice * orderedItem.quantity} {currency}</p>
        </div>
    );
};

OrderListItem.propTypes = {
    orderedItem: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        packing: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
    }).isRequired,
    currency: PropTypes.string.isRequired,
};

export default OrderListItem