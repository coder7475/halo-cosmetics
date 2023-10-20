import { useState } from 'react';
import { useEffect } from 'react';
import BrandCard from './BrandCard';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {   
    fetch('https://server-halo.vercel.app/brands')
      .then(res => res.json())
      .then(data => setBrands(data))

  }, []);
  // console.log(brands);
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-5xl mx-auto ">
      <h1 className="text-5xl  font-bold text-center text-darkBlue dark:text-white">Our Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 ">

      {
        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
      }
      </div>
    </div>
  );
};

export default Brands;