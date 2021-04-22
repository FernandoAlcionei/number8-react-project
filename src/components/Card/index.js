import './styles.scss';

const getInteger = (value) => Math.floor(value);

const getRetailPrice = (price, retailPrice) => price !== retailPrice ? getInteger(retailPrice) : 0;

const Card = ({ product, history, product: { Name, Price, ThumbnailURL, ProductID } }) => {
  const retailPrice = getRetailPrice(Price, product['Retail Price']);

  const renderRetailPrice = () => retailPrice ? (
    <span className="retail-price">
      ${ retailPrice }
    </span>
  ) : null;

  return (
    <div className="card-component">
      <div>
        <img src={ThumbnailURL} alt={Name} />
      </div>

      <div className="product-info">
        <h3 className="name">
          { Name }
        </h3>

        <div className="wrap-price">
          <span className="price">
            ${ getInteger(Price) }
          </span>

          { renderRetailPrice() }
        </div>
      </div>

      <div className="wrap-detail">
        <button className="btn-primary" onClick={() => history.push('details', { productId: ProductID })}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
