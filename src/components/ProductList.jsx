import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import productsData from './productsData';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedPlants, setAddedPlants] = useState({});

  const isInCart = (name) =>
    Boolean(addedPlants[name]) || cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant, category) => {
    dispatch(addItem({ ...plant, category }));
    setAddedPlants((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Navbar />
      <div className="product-list-content">
        <h1>Our Plants</h1>
        {productsData.map((section) => (
          <div className="category-section" key={section.category}>
            <h2>{section.category}</h2>
            <div className="plants-grid">
              {section.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">${plant.price}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isInCart(plant.name)}
                    onClick={() => handleAddToCart(plant, section.category)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
