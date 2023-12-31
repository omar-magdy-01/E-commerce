import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../rtk/orderSlice';
import { useNavigate } from 'react-router-dom';

function FormAddress() {
    const dispatch = useDispatch()
    const goto = useNavigate()
    const order = useSelector(state => state.order);
    const [ address, setAddress ] = useState({
        street: '',
        city: '',
        state: '',
        details:''
    });
    const cart = JSON.parse(localStorage.getItem('cartState'))
    const products = cart.map(product =>   ( {product: product._id, qty: product.quantity} ) )


    const handelChange = ({ target }) => {
        setAddress({ ...address, [ target.name ]: target.value });
        
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchOrder({ products, address }));
        
        goto('/orders')
    }
    return (
        <Form onSubmit={ handleSubmit } style={{maxWidth:'20rem' ,margin:'auto'}} >
            <Form.Group className="mb-3" controlId="state">
                <Form.Label>state</Form.Label>
                <Form.Control name='state' onChange={handelChange} type="text" placeholder="Egypt" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control name='city' onChange={handelChange} type="text" placeholder="Giza" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="street">
                <Form.Label>Street</Form.Label>
                <Form.Control name='street' onChange={ handelChange } type="text" placeholder="El haram"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="details">
                <Form.Label>details</Form.Label>
                <Form.Control name='details' onChange={ handelChange } as="textarea" rows={ 3 } placeholder="we will use details to find you" required />
            </Form.Group>
            { order.error !== null && <Alert variant='danger'>
                { order.error }
            </Alert> }
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default FormAddress;