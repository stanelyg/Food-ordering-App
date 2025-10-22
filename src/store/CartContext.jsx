import { act, createContext ,useReducer} from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});
function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
      //...update the state to add the item
      // state.items.push(action.item); this is wrong because we should not mutate the state directly
      const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const updatedItems = [...state.items];  
      if(existingItemIndex !== -1) {
        //item already exists in the cart, update the amount
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1
        };
        updatedItems[existingItemIndex] = updatedItem;

      } else {
          //item does not exist in the cart, add it
          const newItem = {
              ...action.item,
              quantity: 1
          };
          updatedItems.push(newItem);
      }
      return { ...state, items: updatedItems};
    }         
    if(action.type === 'REMOVE_ITEM') {
      //...update the state to remove the item
      const existingItemIndex = state.items.findIndex(item => item.id === action.id);
      const existingItem = state.items[existingItemIndex];
      const updatedItems = [...state.items];
      if(existingItem.quantity === 1) {
        updatedItems.splice(existingItemIndex, 1);
         
      }
      else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1
        };
       
        updatedItems[existingItemIndex] = updatedItem;
    }
      return { ...state, items: updatedItems};
    }
    if (action.type === 'CLEAR_CART') {
      return {...state,items: []};
    }
    return state;
}

export function CartContextProvider({ children }) {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, {
       items: [],
       totalAmount: 0
   });

   function addItemToCart(item) {
       dispatchCartAction({ type: 'ADD_ITEM', item: item });
   }
    function removeItemFromCart(id) {       
       dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
   }
    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' });
    }

   const cartContext={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearCart,
   }
    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
