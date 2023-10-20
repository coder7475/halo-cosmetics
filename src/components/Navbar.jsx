import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/Authentication/AuthProvider";
import Switcher from './Switcher';

const Navbar = () => {
  const { user, signout, fbpic, setFbpic } = useContext(AuthContext);

  // console.log(user);

  const handleLogout = () => {
    setFbpic(null);
    signout();
  };

  return (
    <div className="navbar font-medium flex flex-col lg:flex-row justify-between items-center bg-white dark:bg-neutral-800 dark:text-white" >
      <div className=" flex gap-2">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <img src="/novy_kanal.svg" alt="logo" className="w-12" />
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
                isActive
                  ? "active font-bold bg-darkBlue p-1 text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active font-bold bg-darkBlue p-1 text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active font-bold bg-darkBlue p-1 text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              My Cart
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="flex gap-2 justify-center items-center">
        <li className="w-14 rounded-full">
          {user ? (
            fbpic ? (
              <img src={fbpic} className="rounded-full" />
            ) : (
              <img src={user.photoURL} className="rounded-full" />
            )
          ) : (
            <img src="/novy_kanal.svg" className="rounded-full w-12" />
          )}
        </li>
        <li>
          {user ? (
            user.displayName
          ) : (
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active font-bold bg-darkBlue text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <button type="button " className="btn dark:btn-primary">
                SignUp
              </button>
            </NavLink>
          )}
        </li>

        <li>
          {user ? (
            <button className="btn dark:btn-primary" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active font-bold bg-darkBlue text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <button type="button " className="btn dark:btn-primary">
                Login
              </button>
            </NavLink>
          )}
        </li>
        <li>
          <Switcher/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
