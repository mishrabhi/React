const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the first product.",
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the second product.",
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the third product.",
      price: "$30",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is the fourth product.",
      price: "$40",
    },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
