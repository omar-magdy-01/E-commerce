import React, { useEffect} from 'react';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyOrder } from '../rtk/myOrderSlice';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Order() {
    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.myOrder);


    useEffect(() => {
        dispatch(fetchMyOrder());
    }, [ dispatch ]);


    return (
        <>
            {
                loading
                    ?
                    <Loading />
                    :
                    <Container>
                        { data.data?.map(order => {
                            return (<Card key={ order._id } className='mt-3'>
                                <Card.Header>Day: { "  " } { order.createdAt.replace(/T/g, " hour: ").slice(0,order.createdAt.indexOf('.'))}</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                                <p></p>
                                                <div className="blockquote-footer">
                                            Price : <strong >{ order.totalPrice } LE</strong>
                                                </div>
                                                <div className="blockquote-footer">
                                            Delivered : <strong >{ order.isDelivered ? "is Delivered" : "not Delivered yet" } LE</strong>
                                                </div>
                                    </blockquote>
                                    <Link to={`/orders/${order._id}`}>details</Link>
                                        </Card.Body>
                                    </Card>
                                
                            )
                        })}
                    </Container>
            }

        </>
    );
}

export default Order;