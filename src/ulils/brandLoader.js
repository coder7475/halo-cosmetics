
const brandLoader = async () => {
  const response1 = await fetch(
    "http://localhost:3002/sliders"
  );
  const sliders = await response1.json();

  const res2 = await fetch("http://localhost:3002/brands");
  const brands = await res2.json();
  
  const res3 = await fetch("http://localhost:3002/products");
  const products = await res3.json();

  return { sliders, brands, products };
}

export default brandLoader;