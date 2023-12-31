import React from 'react';

function Recipte({cart ,user}) {
    return (
        <div className='receipt p-3 mx-auto' style={ { maxWidth: "20rem", backgroundColor: "#F8F9FA" } }>
            <h3>#Receipt</h3>
            <div className='d-flex justify-content-between'>
                <span>user name:</span>
                <span> { user.name }</span>
            </div>
            <div className='d-flex justify-content-between'>
                <span>Email:</span>
                <span> { user.email }</span>
            </div>
            <div className='d-flex justify-content-between'>
                <span>phone:</span>
                <span> { user.phone }</span>
            </div>

            <hr />
            <div >
                { cart.map(product => {
                    const { name, price, quantity, _id } = product;
                    return (
                        <div className='product ' key={_id}>
                            <div className='d-flex justify-content-between'>
                                <span>product name:</span>
                                <span> { name }</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>product count:</span>
                                <span> { quantity } pic</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>product price:</span>
                                <span> { price } LE</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>total:</span>
                                <span>{ quantity * price } LE</span>
                            </div>
                            <hr />
                        </div>
                    );
                }) }
            </div>

            <div className='d-flex justify-content-between'>
                <span>total amount:</span>
                <span>amount</span>

            </div>
            <hr />
            
            


        </div>
    );
}

export default Recipte;