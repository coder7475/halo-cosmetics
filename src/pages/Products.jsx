import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { id } = useParams();
  const { sliders, brands, products } = useLoaderData();
  // console.log(brands, sliders, id);
  const brand = brands.find((brand) => brand._id === id);
  const { name } = brand;
  const sliderObj = sliders.find(obj => obj.name === name);
  console.log(products);
  const brandProducts = products.filter(product => product.brand === name);
  console.log(name);
  console.log(brandProducts);


  return (
    <div className="min-h-screen pt-10 bg-neutral-50 dark:bg-neutral-600">
      <h1 className="text-5xl font-bold text-center dark:text-neutral-200">{name}</h1>
      
      <div className="max-w-5xl mx-auto max-h-screen mt-10">
        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliderObj.slider1} 
              className="w-full h-96 dark:brightness-75"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={sliderObj.slider2}
              className="w-full h-96 dark:brightness-75"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={sliderObj.slider3}
              className="w-full h-96 dark:brightness-75"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="min-h-screen dark:bg-neutral-500 ">
        <h1 className="text-5xl font-semibold text-center p-10 dark:text-neutral-300 ">Products</h1>
        {
          brandProducts.length === 0 ? 
        <p className="text-3xl max-w-5xl mx-auto text-center mt-10 dark:text-white">Sorry, we don&apos;t have any products available come back later</p>
          : <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto pb-10">
            {
              brandProducts.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
            }
          </div>
        }
      </div>

    </div>
  );
};

export default Products;
