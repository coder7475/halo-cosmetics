
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const brand = form.get("brand");
    const price = form.get("price");
    const type = form.get("type");
    const rating = form.get("rating");
    const description = form.get("description");

    const product = {
      name,
      image,
      brand,
      price,
      type,
      rating,
      description
    }

    // send to database via server
    fetch("https://server-halo.vercel.app/products", {
      // fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      // eslint-disable-next-line no-unused-vars
      .then(data => Swal.fire(
        "Added!",
        "You product has been added!",
        "success"
      ))

    // console.log(name, image, brand, price);
    // console.log(type, rating, description);


  }

  return (
    <section className="min-h-screen dark:bg-neutral-600">
      <div className="py-8 px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white text-center">
          Add a new product
        </h2>

        <form 
          className="form-control"
          onSubmit={handleAddProduct}
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Paste Image URL here"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <select
                id="brand"
                name="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="DEFAULT" disabled>Select brand</option>
                <option value="Flower Cosmetics">Flower Cosmetics</option>
                <option value="Naturae Skincare">Naturae Skincare</option>
                <option value="Luminance Makeup">Luminance Makeup</option>
                <option value="Borcelle Salon">Borcelle Salon</option>
                <option value="Nails Fashion">Nails Fashion</option>
                <option value="Luxme Hair Extensions">Luxme Hair Extensions</option>
                
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="9999"
                required
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option disabled>Select type</option>
                <option value="MK">Makeup </option>
                <option value="hC">Hair Care</option>
                <option value="SC">Skin Care</option>
                <option value="BC">Body Care</option>
                <option value="NC">Nail Care</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option disabled  >Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 btn btn-primary"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
