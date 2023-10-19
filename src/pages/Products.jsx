import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const { sliders, brands } = useLoaderData();
  console.log(brands, sliders, id);
  const brand = brands.find((brand) => brand._id === id);
  const { name } = brand;
  const sliderObj = sliders.find(obj => obj.name === name);
  

  return (
    <div className="min-h-screen pt-10 bg-neutral-50 ">
      <h1 className="text-5xl text-center ">{name}</h1>
      <div className="mx-auto max-w-full max-h-screen mt-10">
        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliderObj.slider1} 
              className="w-full h-96"
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
              className="w-full h-96"
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
              className="w-full h-96"
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
    </div>
  );
};

export default Products;
