import React from 'react';
import products from '../data/products.json';
import './Features.css';

const Features = () => (
  <section id="features" className="features container">
    <h2>Produk Makanan Kami</h2>
    <div className="cards">
      {products.map(item => (
  <div className="card" key={item.id}>
  <img src={item.image} alt={item.name} className="card-image" />
  <h3>{item.name}</h3>
  <p className="price">Rp {item.price.toLocaleString('id-ID')}</p>
</div>

))}

    </div>
  </section>
);

export default Features;
