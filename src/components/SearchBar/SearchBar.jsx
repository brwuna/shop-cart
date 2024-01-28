import { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import fetchProducts from '../../api/fetchProducts'
import './SearchBar.css'
import AppContext from '../../context/AppContext'

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext)

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)

    const products = await fetchProducts(searchValue)

    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form className="search_bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos..."
        className="search_input"
        required
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="search_button">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar
