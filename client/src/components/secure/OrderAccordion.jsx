import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';
import SingleOrderItem from '../order/SingleOrderItem';

function OrderAccordion({ allOrders, deleteMe, modifyMe, modifyBtnState, saveModifiedOrder }) {
  return (
    <Accordion className="m-4">
      {allOrders &&
        allOrders.map((order, idx) => (
          <Accordion.Item key={uniqueKeyGenerator()} eventKey={idx}>
            <Accordion.Header>Rendelés #{idx + 1}</Accordion.Header>
            <Accordion.Body>
              <SingleOrderItem
                singleOrder={order}
                modifyMe={modifyMe}
                deleteMe={deleteMe}
                modifyBtnState={modifyBtnState}
                saveModifiedOrder={saveModifiedOrder}
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

OrderAccordion.propTypes = {
  allOrders: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.arrayOf(PropTypes.shape({})),
      unitPrice: PropTypes.number,
      map: PropTypes.func,
      length: PropTypes.func,
    }),
  ),
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyBtnState: PropTypes.func,
  saveModifiedOrder: PropTypes.func,
};

OrderAccordion.defaultProps = {
  allOrders: undefined,
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyBtnState: PropTypes.func,
  saveModifiedOrder: PropTypes.func,
};

export default OrderAccordion;
