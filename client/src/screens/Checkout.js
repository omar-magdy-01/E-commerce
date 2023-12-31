import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import Receipt from '../components/Receipt';
import FormAddress from '../components/FormAddress';
function Checkout() {
    const cart = JSON.parse(localStorage.getItem('cartState'));
    const user = JSON.parse(localStorage.getItem('userData'));
    const [ confirmed, setConfirmed ] = useState(false);
    

  

    return (
        <div>
            { !confirmed && <Receipt user={ user } cart={ cart } /> }
            { confirmed && <FormAddress /> }
            { !confirmed && <div className='p-3 d-flex justify-content-between'>
                <Button>Update</Button>
                <Button onClick={ () => setConfirmed(true) }>Confirm</Button>
            </div> }
        </div>
    );
}

export default Checkout;