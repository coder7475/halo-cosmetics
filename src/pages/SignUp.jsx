import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../features/Authentication/AuthProvider';
import { updateProfile } from "firebase/auth";
import auth from '../features/Authentication/firebase.config';

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const handleSignUp = (e) => {
      e.preventDefault();
  
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const profile = form.get("profile");
      const email = form.get("email");
      const password = form.get("password");
  
      console.log(email, password, name, profile);
  
      // password validation
      const re = /(?=.*[A-Z])(?=.*[\W_]).{6,}/g;
      const ans = re.test(password);
      
      // console.log(ans);
      if (!ans) {
        return alert("Invalid password");
      }
      
      signUp(email, password)
        .then((res) => {
          updateProfile(auth.currentUser, {
            displayName: name, photoURL: profile
          })
            .then(res => console.log("signed Up"))
        } 
        )
        .catch((err) => console.log(err));
  }

  return (
    <div className="hero font-display bg-neutral-50 py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSignUp}
          >
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
        <div className="divider">OR</div>
        <div className="w-full bg-base-100 shadow-xl max-w-5xl">
          <button
            className="btn w-full rounded-xl text-xl "
            // onClick={googleSignIn}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current border rounded-full p-1 bg-darkBlue text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>           
            Register with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

