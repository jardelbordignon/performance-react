import { useMemo } from 'react'

import { ProductItem } from './ProductItem'

interface ProductProps {
  id: number
  price: number
  priceFormatted: string
  title: string
}

interface SearchResultProps {
  totalPrice: number
  results: ProductProps[]
  onAddToWishlist: (id: number) => void
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultProps) {

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
