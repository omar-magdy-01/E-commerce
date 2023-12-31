import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartDetails({ cartItem }) {
    const [ items, setItems ] = useState(0);
    const [ price, setPrice ] = useState(0);
    const user = JSON.parse(localStorage.getItem('userData'))
    

    useEffect(() => {
        setItems(0);
        setPrice(0);
        if (cartItem.length) {
            const itemCount = cartItem.map(item => item.quantity).reduce((a, c) => a + c);
            const price = cartItem.map(item => item.price * item.quantity).reduce((a, c) => a + c);
            setItems(itemCount);
            setPrice(price);
        }

    }, [ cartItem ]);

    return (
        <div className='row'>

            <div className="alert alert-light" role="alert">
                <h3>Cart Details:</h3>

                <span className='d-flex gap-3'><h5 className='text-success'>items:</h5>{ items } </span>
                <span className='d-flex gap-3'><h5 className='text-success'>price: </h5>{ price } LE</span>
                <Link to={ user?'/checkout':'/login'} className='mt-3 btn btn-warning pb-1 text-light '>
                    <h5><i className="text-success fa-solid fa-dollar-sign"></i>{ " " }Check Out Now </h5>

                </Link>
            </div>

        </div>
    );


}

export default CartDetails;


