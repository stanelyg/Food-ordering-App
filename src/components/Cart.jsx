import { useContext } from "react"
import Modal from "./UI/Modal.jsx"
import CartContext  from "../store/CartContext.jsx"
import UserProgressContext from "../store/UserProgressContext.jsx"
import { currencyFormatter } from "../util/formatting.js"
import Button from "./UI/Button.jsx"
import CartItem from "./CartItem.jsx"
const Cart = () => {
    const cartContext = useContext(CartContext)
    const userProgressContext = useContext(UserProgressContext);
    const totalPrice=cartContext.items.reduce((sum,item) => sum + item.price * item.quantity,0);
    function closeCartHandler() {   
        userProgressContext.hideCart(); 
    }
    function goToCheckoutHandler() {        
        userProgressContext.showCheckout();
    }
  return (
    <Modal className="cart" open={userProgressContext.progress === 'cart'} onClose={userProgressContext.progress === 'cart'?closeCartHandler:null}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map(item => (
          <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onRemove={()=>cartContext.removeItem(item.id)} onAdd={()=>cartContext.addItem(item)} />        
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">

        <Button textOnly onClick={closeCartHandler}>Close</Button>
        {cartContext.items.length > 0 &&  <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>}
        
      </p>
    </Modal>
  )
}

export default Cart