import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { removeItem, incrementQuantity, decrementQuantity } from './CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (name) => dispatch(incrementQuantity(name));
  const handleDecrement = (name) => dispatch(decrementQuantity(name));
  const handleDelete = (name) => dispatch(removeItem(name));

  const handleCheckout = () => {
    setCheckoutMessage('Coming Soon');
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-content">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-total">
              Total Cart Amount: <strong>${totalAmount.toFixed(2)}</strong>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-unit-price">Unit Price: ${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item.name)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.name)}>+</button>
                    </div>
                    <p className="cart-item-total">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.name)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>

            {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
