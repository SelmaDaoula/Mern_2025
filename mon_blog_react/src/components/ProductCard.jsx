import Badge from './Badge';

function ProductCard({ name, price, category }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white'
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2ecc71',
    margin: '10px 0'
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <p style={priceStyle}>{price} €</p>
      <Badge text={category} color="#3498db" />
    </div>
  );
}

export default ProductCard;