module.exports = () => {
  const data = { products: [] }

  for (let i = 0; i < 1000; i++) {
    const product = {
      id: i + 1,
      price: 49.9,
      title: `Produto ${i + 1}`
    }
    data.products.push(product)
  }

  return data
}
