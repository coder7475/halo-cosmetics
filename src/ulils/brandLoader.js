
const brandLoader = async () => {
  const response1 = await fetch(
    "https://server-halo.vercel.app/sliders"
  );
  const sliders = await response1.json();

  const res2 = await fetch("https://server-halo.vercel.app/brands");
  const brands = await res2.json();
  
  const res3 = await fetch("https://server-halo.vercel.app/products");
  const products = await res3.json();

  return { sliders, brands, products };
}

export default brandLoader;