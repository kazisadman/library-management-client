import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Authcontextprovider } from "../Context/Authcontext";

const Loginform = () => {
  const { userLogin, userGoogle } = useContext(Authcontextprovider);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((user) => {
        console.log(user);
        const toast = document.getElementById("login");
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3000);
        nav("/");
      })
      .catch((err) => setError(err));

    e.target.reset();
  };

  const handleGoogleLogin = () => {
    userGoogle()
      .then((result) => {
        console.log(result);
        nav("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <h3 className="label-text-alt">
                  Don&apos;t have an account?{" "}
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover"
                  >
                    Register
                  </Link>
                </h3>
              </label>
            </div>
            {error && <h2>Please check email or password</h2>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex justify-center">
              <button onClick={handleGoogleLogin}>
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="login" className="toast hidden">
        <div className="alert alert-info ">
          <span>Logged in successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
