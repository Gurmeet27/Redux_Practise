import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={loading ? 'blur' : ''}>
      <h1 style={{ fontSize: '20px', display: 'flex', justifyContent: 'center' }}>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '10px', width: '200px', textAlign: 'center' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h2 style={{ fontSize: '1rem' }}>{product.title}</h2>
            <p>${product.price}</p>
            <button style={{}}>Add Item</button>
          </div>
          
        ))}
        
      </div>
    </div>
  );
}

export default Home;
