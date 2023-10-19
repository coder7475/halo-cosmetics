const brandLoader = async () => {
  const response1 = await fetch(
    "https://server-halo-ejzeyd8x6-robiul-hossains-projects.vercel.app/sliders"
  );
  const sliders = await response1.json();
  const res = await fetch("https://server-halo-ejzeyd8x6-robiul-hossains-projects.vercel.app/brands");
  const brands = await res.json();

  return { sliders, brands };
}

export default brandLoader;