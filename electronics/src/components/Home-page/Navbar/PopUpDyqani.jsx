import './PopUpDyqani.css'
import { useCart } from '../../../contexts/CartContext'

const PopUpDyqani = ({ butoniDyqani }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div id="wrapper">
      <div
        className={`ZgjidhDyqanin ${butoniDyqani ? "hapPopUpZgjidhDyqanin" : " "}`}
        id="ZgjidhDyqanin"
      >
        <div className="ZgjidhDyqanin-Popup">
          <p>Shporta ({getTotalItems()} produkte)</p>
          <button>
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="ZgjidhDyqanin-input">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Shporta është bosh</p>
              <p>Shtoni produkte për të filluar blerjen</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <img src={item.img} alt={item.paisja} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.paisja}</h4>
                        <p>{item.llojiPaisjes}</p>
                        <p className="cart-item-price">{item.cmimi}</p>
                      </div>
                    </div>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="hr-ZgjidhDyqanin" />

              <div className="cart-summary">
                <div className="total-price">
                  <span>Totali:</span>
                  <span className="total-amount">{formatPrice(getTotalPrice())}</span>
                </div>
                
                <button className="clear-cart-btn" onClick={clearCart}>
                  Pastro Shportën
                </button>
                
                <button className="checkout-btn">
                  Vazhdo me Blerjen
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpDyqani;
