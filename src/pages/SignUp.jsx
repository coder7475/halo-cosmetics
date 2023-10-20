import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/Authentication/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../features/Authentication/firebase.config";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const profile = form.get("profile");
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password, name, profile);

    // password validation
    const re = /(?=.*[A-Z])(?=.*[\W_]).{6,}/g;
    const ans = re.test(password);

    // console.log(ans);
    if (!ans) {
      return Swal.fire("Invalid!", "Your password must be at least 6 characters long, must have a a special character and a capital letter!", "error");
    }

    signUp(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profile,
        }).then((res) => console.log(res));
        Swal.fire("Success!", `Successful Registration. Please Login`, "success");
        signout();
        navigate("/login");
      })
      .catch((err) => Swal.fire("Error!", `${err}`, "error"));
  };

  return (
    <div className="hero font-display bg-neutral-50 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text text-xl font-semibold">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="form-control" htmlFor="profile">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Profile
                </span>
              </label>
              <input
                id="profile"
                name="profile"
                type="text"
                placeholder="Profile Picture URL"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>
                Already Have an Account? Please{" "}
                <Link to={`/login`} className="text-blue text-xl font-bold">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-darkBlue text-white text-xl">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
