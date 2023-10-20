import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../features/Authentication/AuthProvider";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const { products } = useLoaderData();
  const { user } = useContext(AuthContext);
  const { uid } = user;
  // console.log(products);
  const filtered = products.filter((product) => product.uid === uid);
  // console.log(myProducts);
  const [myProducts, setMyProducts] = useState(filtered);
  

  const handleDelete = (id) => {
    const rem = myProducts.filter((product) => product._id !== id);
    setMyProducts(rem);
    const data = {
      id,
      uid    
    }
    fetch("http://localhost:3002/cart", {
      // fetch("http://localhost:3001/products", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) =>
        Swal.fire(
          "DELETED!",
          "You product has been deleted!",
          "error"
        )
        
      );
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-5xl mx-auto">
      <div className="text-5xl font-bold text-center text-darkBlue">
        MY CART
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
        {myProducts.map((product) => (
          <div
            className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
            key={product._id}
          >
            <div className="relative mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-60 rounded-xl bg-clip-border">
              <img
                src={product.image}
                alt="profile-picture"
                className="h-full w-full"
              />
            </div>
            <div className="pt-6 text-center">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {product.name}
              </h4>
            </div>
            <div className="p-6 text-center">
              
                <button
                  type="button"
                  className="btn btn-error text-white"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
