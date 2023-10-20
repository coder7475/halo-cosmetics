const cartLoader = async() => {
  const response = await fetch(
    "https://server-halo.vercel.app/cart"
  );
  const products = await response.json();

  return { products };
};

export default cartLoader;