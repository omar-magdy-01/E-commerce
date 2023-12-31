import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../rtk/orderByIdSlice';
import { Card, Container } from 'react-bootstrap';
function OrderDetails() {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(state => state.orderById.data.data);
    console.log(order);
    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [ dispatch, orderId ]);
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>Date:</h3>  <h4>{ new Date(order?.createdAt).toLocaleDateString('en-US') }</h4>
            </div>
            <hr />
            <ul className="list-group">
                <h1>Items :</h1>
                <li className="order-items-trucking list-group-item d-flex justify-content-between align-items-start p-3">
                    { order?.products?.map(({ product, qty }) => {
                        return (
                            <Card border="danger" className='p-2 mx-3' style={ { minWidth: '14rem'} }>
                                <Card.Header>
                                    <h6># { product.name }</h6>
                                </Card.Header>
                                <Card.Img src={ product.image.url } />
                                <hr />
                                <div className='d-flex justify-content-between px-3'>
                                    <span>Quantity:</span>
                                    <span> { qty } Pic</span>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between px-3'>
                                    <span>price per Item:</span>
                                    <span> {product.price}</span>
                                </div>
                            </Card>
                        );
                    }) }
                </li>
            </ul>




        </Container>
    );
}

export default OrderDetails;