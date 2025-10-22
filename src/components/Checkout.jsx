
import {useContext, useActionState } from 'react'
import Modal from './UI/Modal.jsx'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import { currencyFormatter } from '../util/formatting.js'
import Input from './UI/Input.jsx'
import Button from './UI/Button.jsx'
import useHttp from '../hooks/useHttp.js'
import Error from './UI/Error.jsx'


const requestConfig={
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
}

const Checkout = () => {
    const cartContext = useContext(CartContext)
    const userProgressContext = useContext(UserProgressContext);
    const { data,error,sendRequest,ClearData } = useHttp('http://localhost:3000/orders', requestConfig);

    function closeCheckoutHandler() {   
        userProgressContext.hideCheckout(); 
    }
    function handleFinish() {
        cartContext.clearCart();
        userProgressContext.hideCheckout();
        ClearData();
    }
    const totalPrice=cartContext.items.reduce((sum,item) => sum + item.price * item.quantity,0);
    async function submitOrderHandler(prevState,fd) {       
        const userData=Object.fromEntries(fd.entries()); 
        await sendRequest(JSON.stringify({
                order :{
                    items: cartContext.items,
                    customer:userData,
                }
              
            }));       
    }
    const[formState,formAction,isSending]=useActionState(submitOrderHandler,null);
    let actions=<>
        <Button type="button" textOnly onClick={closeCheckoutHandler}>Close</Button>
        <Button>Submit Order</Button>
    </>;
    if(isSending){
        actions=<span>Sending order data...</span>;
    }

    if(data && !error)
    {
       return (
        <Modal open={userProgressContext.progress === 'checkout'} onClose={handleFinish}>
            <div>
                <h2>Success!</h2>      
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Close</Button>
                </p>
            </div>
        </Modal>
       );
    }
   

  return (
    <Modal  open={userProgressContext.progress === 'checkout'} onClose={closeCheckoutHandler}>
     <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
            <Input id="name" label="Full Name" type="text" />
            <Input id="street" label="Street" type="text" />
            <Input id="email" label="E-Mail Address" type="email" />
            <div className="control-row">
                <Input id="postal-code" label="Postal Code" type="text" />
                <Input id="city" label="City" type="text" />
            </div>
            {error && <Error title="Failed to send order" message={error} />}
             <p className="modal-actions">
               {actions}
             </p>
    </form>
    </Modal>
    )
  
}

export default Checkout