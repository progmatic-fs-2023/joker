import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator'
import {API_URL} from '../../constants';
import useAuth from "../../hooks/useAuth";

function OrderAccordion({ userOrder, fetchOrdersOfUser }) {
    const { auth } = useAuth();

    const deleteMe = async (orderId) => {
        const fetchOptions = {
            method: "DELETE",
            // TODO verify the user trough middleware
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        }
        const response = await fetch(`${API_URL}/orders/${orderId}`, fetchOptions);
        if (!response.ok) {
            throw new Error(`Couldn't fetch user data, status: ${response.status}`);
        }
        await response.json();
        fetchOrdersOfUser()
    }

    return (
        <Accordion className='m-4'>
            {
                userOrder && userOrder.map((order, idx) => (
                    <Accordion.Item key={uniqueKeyGenerator()} eventKey={idx}>
                        <Accordion.Header>Rendelés #{idx + 1}</Accordion.Header>
                        <Accordion.Body>
                            {
                            auth.role === 'SUPERADMIN'
                                ? <Button variant='outline-danger' type='button' onClick={() => deleteMe(order.id)} >Rendelés törlés</Button>
                                : <small>A rendelés törléséhez írjon az info@herbalism.hu email címre!</small>
                            }
                            <h5>
                                Rendelésszám: {order.id}
                            </h5>
                            <p>
                                Állapot: {order.status === 'CART' ? <span>Nem lezárt</span> : <span>Lezárt</span>}
                            </p>
                            <p>
                                Megjegyzés: {order.customerNote}
                            </p>
                            <div className='d-flex flex-wrap'>
                                {
                                    order.quantity.map((item, indx) => (
                                        <div key={uniqueKeyGenerator()} className='text-center mx-3'>
                                            <h5>#{indx + 1} {item.targetHerb.herbName} / {item.quantity} gramm</h5>
                                            <img style={{ width: '10vw' }} src={item.targetHerb.image[0]} alt='herb pic' />
                                        </div>
                                    ))
                                }
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
}

OrderAccordion.propTypes = {
    userOrder: PropTypes.arrayOf({
        image: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        unitPrice: PropTypes.number,
        map: PropTypes.func,
        length: PropTypes.func,
    }),
    fetchOrdersOfUser: PropTypes.func
};
OrderAccordion.defaultProps = {
    userOrder: undefined,
    fetchOrdersOfUser: PropTypes.func
};

export default OrderAccordion;