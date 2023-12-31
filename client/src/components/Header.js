
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import LogOut from './LogOut';
import { useSelector } from 'react-redux';


function Header() {
    const user = localStorage.getItem('userData');
    const cart = useSelector(state =>state.cart.items.length)
    const like = useSelector(state => state.like.items.length)
    console.log(cart)
    const expand = 'lg';
    return (
        <Navbar expand={ expand } className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand to="/"><strong>Mega Store</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls={ `offcanvasNavbar-expand-${expand}` } />
                <Navbar.Offcanvas
                    id={ `offcanvasNavbar-expand-${expand}` }
                    aria-labelledby={ `offcanvasNavbarLabel-expand-${expand}` }
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={ `offcanvasNavbarLabel-expand-${expand}` }>
                            <strong>Mega Store</strong>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 p-0">
                            <NavLink className='p-2 mb-1' to="/"><i className="fa-solid fa-house "></i>{ "  " }Home</NavLink>
                            <NavLink className='p-2 mb-1' to="/cart"><i className="fa-solid fa-cart-shopping"></i>{ "  " }Cart <strong className='text-danger ps-2 '>{cart}</strong></NavLink>
                            <NavLink className='p-2 mb-1' to="/like"><i className="fa-solid fa-heart"></i>{ "  " }Watch List<strong className='text-danger ps-2 '>{ like }</strong></NavLink>
                            { user ?
                                <>
                                    <NavLink className='p-2 mb-1' to="/orders"><i className="fa-solid fa-truck"></i>{ "  " }Trucking Orders</NavLink>
                                    <div className='p-2 mb-1'><LogOut /></div>
                                </>
                                :
                                <NavLink className='p-2 mb-1' to="/register"><i className="fa-solid fa-user"></i>{ "  " }Sign Up</NavLink>
                            }
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}


export default Header;
