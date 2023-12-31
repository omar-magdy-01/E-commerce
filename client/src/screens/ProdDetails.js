import React from 'react';
import { useParams } from 'react-router-dom';
import ViewImages from '../components/ViewImages';
import { Container } from 'react-bootstrap';


function ProdDetails() {
    const { id } = useParams();
    const products = JSON.parse(localStorage.getItem('productState'));
    const product = products.find(product => product._id === id);
    return (
        <Container>
            <div className='item-page'>
                <div className='row justify-content-around p-2'>
                    <div className='col-12  col-md-8 col-lg-6  col-xl-4 '>
                        <ViewImages gallery={ [ ...product.gallery, product.image ] } />
                    </div>
                    <div className='col-12  col-md-4 col-lg-4  '>
                        <h4>{ product.name }</h4>
                        <p>{ product.description } </p>
                        <></>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default ProdDetails;