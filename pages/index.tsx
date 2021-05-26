import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

interface Results {
  totalPrice: number
  data: any[]
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({ totalPrice: 0, data: [] })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const totalPrice = data.reduce((total, product) => {
      return total + product.price
    }, 0)

    const products = data.map(product => ({
      ...product,
      priceFormatted: formatter.format(product.price)
    }))
    
    setResults({ totalPrice, data: products })
  }

  const addToWishlist = useCallback(async (id: number) => {
      console.log(id)
    }, [],
  )
 

  return (
    <div>
      <h1>Pesquisa de produtos</h1>

      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
          <button type='submit'>Buscar</button>
      </form>

      <SearchResults 
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </div>
  )
}
