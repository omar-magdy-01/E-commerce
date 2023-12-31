import React, {  useEffect } from 'react';
import { useState } from 'react';
import { Button, Card,  Tab, Tabs } from 'react-bootstrap';
import { addItem, deleteItem, removeItem } from '../rtk/cartSlice';
import { useDispatch } from 'react-redux';
import CartDetails from '../components/CartDetails';

function CartPage() {
    const dispatch = useDispatch();
    const [ cartItem, setCartItem ] = useState([]);


    const handelCart = (expression, product) => {
        expression === '+' && dispatch(addItem(product));
        expression === '-' && dispatch(removeItem(product));
        expression === 'x' && dispatch(deleteItem(product));
        setCartItem(JSON.parse(localStorage.getItem('cartState')));

    };
    useEffect(() => {
        setCartItem(JSON.parse(localStorage.getItem('cartState')))
    }, [  ])

    return (

        <div className='container'>
        <div className='row justify-content-around'>
            
            <CartDetails cartItem={ cartItem } />


            {
                cartItem?.map(product => {
                    return (
                        <Card className='p-0' key={ product._id } style={ { width: "18rem" } }>

                            <Tabs
                                defaultActiveKey="image"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >

                                <Tab eventKey="image" title="image">
                                    <img style={ { width: "100%" } } src={ product.gallery[ 0 ].url } loading='lazy' alt='...' />
                                </Tab>
                                <Tab eventKey="price" className='px-3' title="price">
                                    <h4><strong>Item Price :</strong> <span>{ product.price }</span> LE</h4>
                                    <hr></hr>
                                    <h4><strong>Quantity in Cart :</strong> <span>{ product.quantity }</span> </h4>
                                    <hr></hr>
                                    <h4><strong>Total Price :</strong> <span>{ product.quantity * product.price } LE</span> </h4>
                                </Tab>
                                <Tab eventKey="Edit" className='px-2' title="Edit" >
                                    <h4><strong>Quantity in Cart </strong></h4>
                                    <div className='d-flex justify-content-center align-items-center py-2'>
                                        <Button className='me-4' onClick={ () => handelCart('+', product) } ><i className="fa-solid fa-plus"></i></Button>
                                        <h1 className='mx-2' style={ { fontSize: "6rem" } }>{ product.quantity }</h1>
                                        <Button className='ms-4' variant='success' onClick={ () => handelCart('-', product) } disabled={ (product.quantity * 1) === 1 ? true : false }><i className="fa-solid fa-minus"></i></Button>
                                    </div>
                                    <Button className='w-100 mb-3' variant='danger' onClick={ () => handelCart('x', product) }><i className="fa-solid fa-trash"></i></Button>

                                </Tab>
                            </Tabs>
                        </Card>
                    );
                }) }

                
        </div>
        </div>
    );
}

export default CartPage;