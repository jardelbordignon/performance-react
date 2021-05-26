import { useMemo } from 'react'

import { ProductItem } from './ProductItem'

interface ProductProps {
  id: number
  price: number
  title: string
}

interface SearchResultProps {
  results: ProductProps[]
  onAddToWishlist: (id: number) => void
}

export function SearchResults({ results, onAddToWishlist }: SearchResultProps) {
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
            <ProductItem
              key={product.id}
              product={product}
              onAddToWishlist={onAddToWishlist}
            />
          )
        })
      }
    </div>
  )
}
