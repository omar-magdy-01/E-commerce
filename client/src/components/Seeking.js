import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/productsSlice';

function Seeking() {
    const dispatch = useDispatch() 
    const [ query, setQuery ] = useState({keyword:""});
    const handelSubmit = (e) => {
        setQuery({ keyword: e.target.value || ' ' })
        dispatch(fetchProducts(query))
    }
    

    return (<>
        <Form className="d-flex mb-5">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={ handelSubmit }
            />
            <Button  variant="outline-success">Search</Button>
        </Form>
    </>
    )
}

export default Seeking;