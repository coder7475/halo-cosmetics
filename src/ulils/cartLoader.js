const cartLoader = async() => {
  const response = await fetch(
    "http://localhost:3002/cart"
  );
  const products = await response.json();

  return { products };
};

export default cartLoader;