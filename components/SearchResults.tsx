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
  return (
    <div>
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
