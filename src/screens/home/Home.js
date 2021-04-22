import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import api from '../../api';
import './styles.scss';

const renderProducts = (products, history) => (
    products.map(product => (
        <Card key={product.ProductID} product={product} history={history} />
    ))
);

const Home = ({ history }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = api.getAllProduct();
        setProducts(list);
    }, []);

    return (
        <div className="home-screen">
            { renderProducts(products, history) }
        </div>
    );
}
export default Home;

