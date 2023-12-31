import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container } from 'react-bootstrap';

function WatchList() {
    const watchList = JSON.parse(localStorage.getItem('likeState')) || []
    
    
    return (
        <Container>
        <h1 className='text-secondary'>Watch List </h1>
            <div className=' h-100 row  justify-content-around'>
                {
                    watchList.length ? watchList?.map((product) => (
                        <ProductCard product={ product } key={ product._id } />))
                        :
                        <div className='text-center text-secondary  mt-5'>
                        <i style={{fontSize:"7rem"}} className="mt-5 fa-solid fa-box-open"></i>
                        <h4>List is Empty !!</h4>
                        </div>
                }
            </div>
        </Container>
    );
}

export default WatchList;