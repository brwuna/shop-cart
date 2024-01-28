import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../context/AppContext'
import './CartButton.css'
import { useContext } from 'react'

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button
      type="button"
      className="cart_button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart_status">{cartItems.length}</span>
      )}
    </button>
  )
}

export default CartButton
