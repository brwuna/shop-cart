import { BsFillCartPlusFill } from 'react-icons/bs'
import './ProductCard.css'
import formatCurrency from '../../utils/formatCurrency'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

function ProductCard({ data }) {
  const { title, thumbnail, price } = data
  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card_image"
      />

      <div className="card_details">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button onClick={handleAddCart} type="button" className="card_btn">
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard
