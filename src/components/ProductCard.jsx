import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    brand,
    price,
    type,
    rating,
    // description
  } = product;

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border dark:bg-neutral-400">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 h-96 bg-white rounded-xl bg-clip-border">
        <img src={image} className="w-full h-full dark:brightness-75" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="antialiased font-medium leading-relaxed text-blue-gray-900">
            {name}
          </p>
          <p className="antialiased font-bold leading-relaxed text-blue-gray-900">
            ${price}
          </p>
          <p className="flex items-center gap-1.5 leading-relaxed text-blue-gray-900 antialiased">
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
            {rating}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {brand}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {type}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
      <Link to={`/updateProduct/${_id}`}>
        <button
          className="btn block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:btn-primary"
          type="button"
        >
          Update
        </button>
        </Link>
        <Link to={`/productDetails/${_id}`}>
          <button
            className="btn block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2 dark:btn-primary"
            type="button"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
