import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import AnimationBg from '../components/AnimationBg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../rtk/userSlice';
import { Link, useNavigate } from 'react-router-dom';




function Login() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const Nav = useNavigate();

    console.log(user);

    const [ data, setData ] = useState({
        email: "",
        password: "",
        route: "login"
    });

    const handelChang = ({ target }) => {
        setData({ ...data, [ target.name ]: target.value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log("data", data);
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
                        <h1>Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' value={ data.email } type="email" placeholder="Enter email" onChange={ handelChang } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><i className="text-light fa-solid fa-key"></i> Password</Form.Label>
                            <Form.Control name='password' value={ data.password } type="password" placeholder="Password" onChange={ handelChang } />
                        </Form.Group>
                        { user.error !== null && <Alert variant='danger'>
                            { user.error }
                        </Alert> }
                        <Button className='mt-3 w-100 text-center' variant="primary" type="submit" disabled={ user.loading }>
                            Login
                        </Button>
                        <Link to={'/register'} className= 'btn btn-light mt-3 w-100 text-center' >
                            Sign Up
                        </Link>
                    </Form>
                </Card>
66            </div>
        </Container>
    );
}

export default Login;