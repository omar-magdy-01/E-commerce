import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/productsSlice';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container } from 'react-bootstrap';
import ErrorPage from './ErrorPage';
import Loading from '../components/Loading';
import Seeking from '../components/Seeking';
import NotFound from '../components/NotFound';
function HomeScreen() {
    const dispatch = useDispatch();
    const { products, status} = useSelector((state) => state.products);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [ dispatch, status ]);

    return (
        <Container>
            <Seeking />
            <div className=' row  justify-content-around '>
                {
                    status === 'loading' && <Loading />
                }
                {
                    status === 'succeeded' && products?.map((product) => (
                        <ProductCard product={ product } key={ product._id } />))
                }
                {
                    status === 'succeeded' && !products.length && <NotFound/>
                }
                {
                    status === 'failed' && <ErrorPage />
                }
            </div>
        </Container>
    );
}

export default HomeScreen;