import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'
import { useEffect, useContext } from 'react'

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('ipad').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [setProducts, setLoading])

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  )
}

export default Products
