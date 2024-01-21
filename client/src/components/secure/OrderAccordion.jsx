import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import EditorButtonGroup from '../micro/EditorButtonGroup';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';
import useAuth from '../../hooks/useAuth';
import BlockButton from '../micro/BlockButton';

function OrderAccordion({ allOrders, deleteMe, modifyMe, modifyOrder, setModifiedOrder }) {
  const { auth } = useAuth();

  return (
    <Accordion className="m-4">
      {allOrders &&
        allOrders.map((order, idx) => (
          <Accordion.Item key={uniqueKeyGenerator()} eventKey={idx}>
            <Accordion.Header>Rendelés #{idx + 1}</Accordion.Header>
            <Accordion.Body>
              {auth.role === 'SUPERADMIN' ? (
                <EditorButtonGroup modifyMe={modifyMe} deleteMe={deleteMe} orderId={order.id} />
              ) : (
                <small>A rendelés törléséhez írjon az info@herbalism.hu email címre!</small>
              )}
              <h5>Rendelésszám: {order.id}</h5>
              <p>
                Állapot: {order.status === 'CART' ? <span>Nem lezárt</span> : <span>Lezárt</span>}
              </p>
              <p>Megjegyzés: {order.customerNote}</p>
              {modifyOrder && (
                <BlockButton
                  btnName="Mentés"
                  variant="outline-success"
                  size="md"
                  classNames="mx-auto w-50 my-3"
                  // TODO handle onCLick
                  onClick={() => {}}
                />
              )}
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {modifyOrder
                  ? order.quantity.map((item, indx) => (
                      <div
                        key={uniqueKeyGenerator()}
                        className="mx-auto text-center mx-3 p-3"
                        style={{ border: '1px solid #f4bbff', borderRadius: '8px', width: '15%' }}
                      >
                        <h5 className="mx-auto">
                          #{indx + 1} {item.targetHerb.herbName}
                        </h5>
                        <input
                          type="text"
                          className="d-block"
                          style={{ maxWidth: '90%', textAlign: 'center' }}
                          value={item.quantity}
                          onChange={(e) => setModifiedOrder(e.target.value)}
                        />
                        <div>gramm</div>
                      </div>
                    ))
                  : order.quantity.map((item, indx) => (
                      <div
                        key={uniqueKeyGenerator()}
                        className="text-center mx-3 p-2"
                        style={{ border: '1px solid #f4bbff', borderRadius: '8px' }}
                      >
                        <h5>
                          #{indx + 1} {item.targetHerb.herbName} / {item.quantity} gramm
                        </h5>
                        {/* <DivImage imgLink={item.targetHerb.image[0]} width='25vw' height='15vh' /> */}
                        <img
                          style={{ width: '10vw', borderRadius: '5px' }}
                          src={item.targetHerb.image[0]}
                          alt="herb pic"
                        />
                      </div>
                    ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

OrderAccordion.propTypes = {
  allOrders: PropTypes.arrayOf({
    image: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    map: PropTypes.func,
    length: PropTypes.func,
  }),
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyOrder: PropTypes.func,
  setModifiedOrder: PropTypes.func,
};

OrderAccordion.defaultProps = {
  allOrders: undefined,
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyOrder: PropTypes.func,
  setModifiedOrder: PropTypes.func,
};

export default OrderAccordion;
