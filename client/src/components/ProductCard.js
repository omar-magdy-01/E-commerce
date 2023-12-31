import Card from 'react-bootstrap/Card';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, removeItem } from '../rtk/cartSlice';
import { like, unLike } from '../rtk/likeSlice';
import { useState } from 'react';
import Share from './Share';



const ProductCard = ({ product }) => {
    let alreadyInCart = false;
    if (localStorage.getItem('cartState')) {
        const productInStorage = JSON.parse(localStorage.getItem('cartState'));
        alreadyInCart = productInStorage.find(item => item._id === product._id);
    }
    let alreadyLiked = false;
    if (localStorage.getItem('likeState')) {
        const productInStorage = JSON.parse(localStorage.getItem('likeState'));
        alreadyLiked = productInStorage.find(item => item._id === product._id);
    }
    const [ cartLook, setCartLook ] = useState(alreadyInCart);
    const [ likeLook, setLikeLook ] = useState(alreadyLiked);
    const [ modalShow, setModalShow ] = useState(false);
    const dispatch = useDispatch();

    const handelCart = () => {

        setCartLook(!cartLook);
        if (cartLook) {
            dispatch(removeItem(product));
        } else {
            dispatch(addItem(product));
            
        }
    };


    const handelLike = () => {
        setLikeLook(!likeLook);
        if (likeLook) {
            dispatch(unLike(product));
        } else {
            dispatch(like(product));
        }
    };


    return (
        <Card className='p-0 col-10 col-md-6 col-lg-4 mb-4' style={{width:"16rem"}} >
            <Card.Img variant="top" src={ product.image.url } />
            <Card.Body>
                <Card.Title style={ { fontSize: '1rem' } }>{ product.name } </Card.Title>
                <div>
                    <span className='h5' style={ { fontSize: '1rem' } }>Price:</span>
                    <span className='ms-2 '>{ product.price }</span>
                </div>
                <button className='card-cart-btn' onClick={ handelCart }>
                    { cartLook ? <i className="fa-solid fa-cart-shopping"></i> : <i className="fa-solid fa-cart-plus"></i> }
                </button>

                <button className='card-share-btn'>
                        <i onClick={ () => setModalShow(true) }className="fa-solid fa-share-nodes"></i>
                    <Share show={ modalShow } onHide={ () => setModalShow(false) } id={ product._id } />
                </button>

                <button className='card-like-btn' onClick={ handelLike }>
                    { !likeLook ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i> }
                </button>
                <Link to={ `/product/${product._id}` } className='btn btn-primary mt-2' >Show more </Link>
            </Card.Body>
        </Card>
    );
};
export default ProductCard;
