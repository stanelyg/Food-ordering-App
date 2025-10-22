import { useContext } from 'react'
import logImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'

const Header = () => {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  function cartButtonClickHandler() {
    userProgressContext.showCart();
  }
 
  return <header  id="main-header">
    <div id='title'>
        <img  src={logImg} alt="Header Image " />
        <h1>Food Order App</h1>
    </div>
    <nav>
        <Button textOnly onClick={cartContext.items.length > 0 ? cartButtonClickHandler : null}>Cart ({cartContext.items.reduce((total, item) => total + item.quantity, 0)})</Button>
    </nav>
  </header>
}

export default Header