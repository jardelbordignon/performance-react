import { memo, useState } from 'react'
import dynamic from 'next/dynamic'

import { AddProductToWishlistProps } from './AddProductToWishlist'

//import { AddProductToWishlist } from './AddProductToWishlist'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  product: {
    id: number
    price: number
    priceFormatted: string
    title: string
  }
  onAddToWishlist: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      { product.title } - <strong>{ product.priceFormatted }</strong>

      <button onClick={() => setIsAddingToWishlist(true)}>Add to wishlist</button>
      
      { isAddingToWishlist &&
        <AddProductToWishlist
          onAddToWishlist={() => {
            onAddToWishlist(product.id),
            setIsAddingToWishlist(false)
          }}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
      
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})
