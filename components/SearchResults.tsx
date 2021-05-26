import { useMemo } from 'react'

import { ProductItem } from './ProductItem'

interface ProductProps {
  id: number
  price: number
  title: string
}

interface SearchResultProps {
  results: ProductProps[]
}

export function SearchResults({ results }: SearchResultProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h2>{ totalPrice.toFixed(2) }</h2>
      { 
        results.map(product => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}
