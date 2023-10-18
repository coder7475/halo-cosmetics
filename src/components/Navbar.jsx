import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex flex-col lg:flex-row justify-between items-center bg-white ">
      <div className=" flex gap-2">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <img src="novy_kanal.svg" alt="logo" className="w-12" />
            <h1 className="text-2xl font-bold">Halo</h1>
          </div>
          <p className="font-light text-sm">Cosmetics & Beauty</p>
        </div>
      </div>
      <div>
        <ul className=" flex gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active font-bold bg-blue p-1 text-white" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isActive ? "active font-bold bg-blue p-1 text-white" : isPending ? "pending" : ""
              }
            >Add Product</NavLink>
          </li>
          <li>
            <NavLink 
            to="/cart"
            className={({ isActive, isPending }) =>
                isActive ? "active font-bold bg-blue p-1 text-white" : isPending ? "pending" : ""
              }
            >My Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-2 justify-center items-center">
          <li>
            <NavLink to="/login"
              className={({ isActive, isPending }) =>
              isActive ? "active font-bold bg-blue p-1 text-white" : isPending ? "pending" : ""
            }
            >Login</NavLink>
          </li>
          <li>
            <NavLink 
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isActive ? "active font-bold bg-blue p-1 text-white" : isPending ? "pending" : ""
              }
              >SignUp</NavLink>
          </li>
          <li className="w-12">
            <img
              src="https://i.ibb.co/85ySkY3/anya.jpg"
              className="rounded-full"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
