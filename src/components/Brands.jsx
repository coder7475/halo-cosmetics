import { useState } from 'react';
import { useEffect } from 'react';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {   
    fetch('https://server-halo.vercel.app/brands')
      .then(res => res.json())
      .then(data => setBrands(data))

  }, []);
  console.log(brands);
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold text-center text-darkBlue">Our Brands</h1>
      {
        brands.map(brand => <li>{brand.name}</li>)
      }
    </div>
  );
};

export default Brands;