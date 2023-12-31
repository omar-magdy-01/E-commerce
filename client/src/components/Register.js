import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import AnimationBg from '../components/AnimationBg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../rtk/userSlice';
import { Link, useNavigate } from 'react-router-dom';




function Register() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const Nav = useNavigate();

 
    const [ data, setData ] = useState({
        email: "",
        password: "",
        phone: "",
        address:'',
        city:'',
        route: "register"
    });

    const handelChang = ({ target }) => {
        setData({ ...data, [ target.name ]: target.value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
      
        const { payload } = await dispatch(fetchUser(data));


        if (payload.status === 'success') {
            Nav('/');
        }


    };


    return (
        <Container>
            <AnimationBg />
            <div className=' d-flex justify-content-center'>
                <Card className='Account-form text-light p-4 col-12 p-3 mt-5' style={ { maxWidth: "23rem" } }>
                    <Form onSubmit={ handelSubmit } >
                        <h1>Register</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control name='name' value={ data.name } type="name" placeholder="User name" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>phone</Form.Label>
                            <Form.Control name='phone' value={ data.phone } type="text" placeholder="Enter phone" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' value={ data.email } type="email" placeholder="Enter email" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><i className="text-light fa-solid fa-key"></i> Password</Form.Label>
                            <Form.Control name='password' value={ data.password } type="password" placeholder="Password" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> city</Form.Label>
                            <Form.Control name='city' value={ data.city } type="text" placeholder="city" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> address</Form.Label>
                            <Form.Control name='address' value={ data.address } type="text" placeholder="address" onChange={ handelChang } />
                        </Form.Group>
                        { user.error !== null && <Alert variant='danger'>
                            { user.error }
                        </Alert> }
                        <Button className='mt-3 w-100 text-center' variant="primary" type="submit" disabled={ user.loading }>
                            Sign Up
                        </Button>
                        <Link className='btn btn-light mt-3 w-100 text-center'   >
                            Login
                        </Link>
                        
                        
                    </Form>
                </Card>
            </div>
        </Container>
    );
}

export default Register;