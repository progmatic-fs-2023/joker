import { useState } from 'react';
import PropTypes from 'prop-types';
import EditorButtonGroup from '../micro/EditorButtonGroup';
import BlockButton from '../micro/BlockButton';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';
import useAuth from '../../hooks/useAuth';

function SingleOrderItem({ singleOrder, deleteMe, saveModifiedOrder }) {
  const { auth } = useAuth();
  const [modifyBtnState, setModifyBtnState] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});

  const updateCurrentValue = (newValues) => {
    const orderRefresh = { ...singleOrder };
    if (Number.isNaN(newValues.value)) return null;
    orderRefresh.quantity[newValues.indx].quantity = Number(newValues.value);
    setCurrentOrder(orderRefresh);
    return null;
  };

  return (
    <>
      {auth.role === 'SUPERADMIN' ? (
        <EditorButtonGroup
          setModifyBtnState={setModifyBtnState}
          deleteMe={deleteMe}
          currentOrder={singleOrder}
        />
      ) : (
        <small>A rendelés törléséhez írjon az info@herbalism.hu email címre!</small>
      )}
      <h5>Rendelésszám: {singleOrder.id}</h5>
      <p>
        Állapot: {singleOrder.status === 'CART' ? <span>Nem lezárt</span> : <span>Lezárt</span>}
      </p>
      <p>Megjegyzés: {singleOrder.customerNote}</p>

      {modifyBtnState && (
        <BlockButton
          btnName="Mentés"
          variant="outline-success"
          size="md"
          classNames="mx-auto w-50 my-3"
          onClick={() => {
            saveModifiedOrder(currentOrder);
            setModifyBtnState(false);
          }}
        />
      )}

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {modifyBtnState
          ? singleOrder.quantity.map((item, indx) => (
              <div
                key={`${(indx + 1) * 2}`}
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
                  onChange={(e) =>
                    updateCurrentValue({
                      indx,
                      value: e.target.value,
                    })
                  }
                />
                <div>gramm</div>
              </div>
            ))
          : singleOrder.quantity.map((item, indx) => (
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
    </>
  );
}

SingleOrderItem.propTypes = {
  singleOrder: PropTypes.shape({
    createdAt: PropTypes.string,
    customerNote: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.arrayOf({
      herbID: PropTypes.string,
      orderID: PropTypes.string,
      quantity: PropTypes.number,
      targetHerb: PropTypes.shape({}),
    }),
    status: PropTypes.string,
    updatedAt: PropTypes.string,
    userID: PropTypes.string,
    map: PropTypes.func,
    length: PropTypes.func,
  }),
  deleteMe: PropTypes.func,
  saveModifiedOrder: PropTypes.func,
};

SingleOrderItem.defaultProps = {
  singleOrder: undefined,
  deleteMe: PropTypes.func,
  saveModifiedOrder: PropTypes.func,
};

export default SingleOrderItem;
