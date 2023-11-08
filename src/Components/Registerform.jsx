import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontextprovider } from "../Context/Authcontext";

const Registerform = () => {
  const { userRegister } = useContext(Authcontextprovider);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleRegister = (e) => {
    setError("");

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setError("Password should be atleast 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have atleast 1 capital letter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password should have atleast 1 special character");
    } else {
      userRegister(email, password)
        .then((user) => {
          console.log(user);
          const toast = document.getElementById("register");
          toast.classList.remove("hidden");
          setTimeout(() => {
            toast.classList.add("hidden");
          }, 3000);
          nav("/home");
        })
        .catch((err) => {
          setError("This email is already in use");
          console.error(err);
        });
    }
    e.target.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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
                  Have an account?{" "}
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Login
                  </Link>
                </h3>
              </label>
              {error && <h2>{error}</h2>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
      <div id="register" className="toast hidden">
        <div className="alert alert-info ">
          <span>Registered successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
