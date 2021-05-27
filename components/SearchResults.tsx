import { List, ListRowRenderer } from 'react-virtualized'

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{ totalPrice.toFixed(2) }</h2>

      <List 
        height={300}
        width={900}
        rowHeight={25}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

    </div>
  )
}
