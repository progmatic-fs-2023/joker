const OrderListItem = ({ orderedItem, currency }) => {
    return (
        <div className="ordered-item-container">
            <img className="ordered-item-img" src={orderedItem.image} alt={orderedItem.name} />
            <h4 className="ordered-item">{orderedItem.name} | <small>{orderedItem.quantity}{orderedItem.packing}</small></h4>
            <p className="ordered-item-price">Egységár: {orderedItem.unitPrice} {currency}/{orderedItem.packing}</p>
            <p className="ordered-item-sum">Össz.: {orderedItem.unitPrice * orderedItem.quantity} {currency}</p>
        </div>
    );
};

export default OrderListItem