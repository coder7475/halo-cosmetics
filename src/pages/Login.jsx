import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/Authentication/AuthProvider";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const { signin, facebookSignIn, setFbpic } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password);
    signin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Logged in");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleFbSignIn = () => {
    facebookSignIn()
      .then((res) => {
        console.log(res);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken;
        fetch(
          `https://graph.facebook.com/${res.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
        )
          .then((response) => response.blob())
          .then((blob) => {
            setFbpic(URL.createObjectURL(blob));
          })
          .catch((err) => console.log(err));

        navigate("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="hero font-display bg-neutral-50 py-10 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
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
                Don&apos;t have an Account yet? Please{" "}
                <Link to={`/signup`} className="text-blue text-xl font-bold">
                  SignUp
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-darkBlue text-white text-xl">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="divider">OR</div>
        <div className="w-full bg-base-100 shadow-xl max-w-5xl">
          <button
            className="btn w-full rounded-xl text-xl "
            onClick={handleFbSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current border rounded-full p-1 bg-darkBlue text-white"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
            Signin with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
