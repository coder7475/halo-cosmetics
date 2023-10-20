import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/Authentication/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useLoaderData();
  const product = products.find((product) => product._id === id);
  const { name, brand, image, rating, type, price, description } = product;
  const { user } = useContext(AuthContext);
  const { uid } = user;

  const handleCart = () => {
    const cartProduct = {
      uid,
      name,
      brand,
      image,
      rating,
      type,
      price,
    };

    fetch("http://localhost:3002/cart", {
      // fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) =>
        Swal.fire(
          "Success!",
          "You product has been added to the cart!",
          "success"
        )
      );
  };

  // console.log(uid);

  return (
    <div className="relative max-w-3xl mx-auto text-3xl text-center flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-10 mb-10">
      <h1 className="font-bold">Product Details</h1>
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 h-96 bg-white rounded-xl bg-clip-border">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="p-6 text-center">
        <div className="items-center justify-between mb-2">
          <p className="antialiased font-medium leading-relaxed text-blue-gray-900">
            <span className="font-bold">Name:</span> {name}
          </p>
          <p className="antialiased leading-relaxed text-blue-gray-900">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p className="antialiased leading-relaxed text-blue-gray-900">
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p className="antialiased leading-relaxed text-blue-gray-900">
            <span className="font-bold">Type:</span> {type}
          </p>
          <p className="flex items-center mx-auto justify-center gap-1.5 leading-relaxed text-blue-gray-900 antialiased text-center">
            <span className="font-bold">Rating:</span> {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </p>
        </div>
      </div>
      <div className="w-1/2 mx-auto text-base pb-4">
        <h1 className="font-bold text-xl py-1">Description:</h1>
        <p>{description}</p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="btn block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
