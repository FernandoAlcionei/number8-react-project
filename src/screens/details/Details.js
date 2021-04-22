import { useState, useEffect } from 'react';
import './styles.scss';
import api from '../../api';

const getInteger = (value) => Math.floor(value);

const getRetailPrice = (price, retailPrice) => price !== retailPrice ? getInteger(retailPrice) : 0;

const renderRetailPrice = (retailPrice) => retailPrice ? (
  <span className="retail-price">
    ${ retailPrice }
  </span>
) : null;

const renderMsgStock = (product) => !product.Stock ? (
  <span className="alert-out-stock">
    Out of Stock
  </span>
) : null;


const renderBadges = (badges) => {
  if (badges) {
    const itens = badges.split('|');
    
    return (
      <div className="wrap-badges">
        { itens.map(badge => renderBadge(badge)) }
      </div>
    )
  }
  return null;
}

const renderBadge = (badge) => (
  <div key={badge} className="badge">
    { badge }  
  </div>
);

const Details = ({ history: { location: { state: { productId } } } }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = api.getProductById(productId);
    setProduct(product);
  }, []);

  const retailPrice = getRetailPrice(product.Price, product['Retail Price']);

  return (
    <div className="details-screen">
      <div className="details">
        <div className="wrap-picture">
          <img className="picture" src={product.PictureURL} alt={product.Name} />

          { renderBadges(product.Badges) }
        </div>

        <div className="product-info">
          <h3 className="name">
            { product.Name }
          </h3>

          <p className="description">
            { product.Description }
          </p>
        </div>

        <div className="wrap-cart">
          <div className="wrap-price">
            <span className="price">
              ${ getInteger(product.Price) }
            </span>

            { renderRetailPrice(retailPrice) }
          </div>

          <div className="wrap-btns">
            { renderMsgStock(product) }

            <button className="btn-primary" onClick={() => console.log('ADD!')}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="wrap-brand">
        <div>
          <span>
            <b>Brand:</b> { product.Brand}
          </span>
        </div>

        <span>
          <b>Color:</b> { product.Color}
        </span>
      </div>
    </div>
  );
};

export default Details;
