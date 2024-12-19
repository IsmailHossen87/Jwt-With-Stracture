import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import Swal from "sweetalert2";
import loginAnimation from "../assets/lotte/loginAnimation.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context/AuthProvider/AuthProvier";

const Login = () => {
  const location = useLocation()
  const from = location.state || '/'
  const navigate = useNavigate()

  const { loginGoogle, loginByemail } = useContext(AuthContext);

  const handleloginGoogle = (media) => {
    media();
    navigate(from)
    Swal.fire("Good job!", "You login succesfuly", "success");
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginByemail(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("Good job!", "You login succesfuly", "success");
        navigate(from)
       ;

        // window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire("Sorry", "Something wrong", "error");
      });
  };

  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl my-3 font-bold ">Login now!</h1>
      </div>
      <div className="md:flex ">
        <div className=" md:w-2/4 mx-auto">
          <Lottie
            className="md:w-96 w-60 mx-auto"
            animationData={loginAnimation}
          ></Lottie>
        </div>
        <div className="hero md:w-2/4 mx-auto md:flex ">
          <div className="hero-content md:flex-1 flex-col w-full ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLoginEmail} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    <a
                      href="#"
                      className="label-text-alt !text-black link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="">
                <p className="flex justify-center font-sans !text-black text-sm font-light leading-normal text-inherit antialiased">
                  Don't have an account?
                  <Link to="/register">
                    <p className="text-red-600 ml-2 font-bold">Sing up</p>
                  </Link>
                </p>
              </div>
              <div className="flex justify-center p-5">
                <button
                  onClick={() => handleloginGoogle(loginGoogle)}
                  className="btn"
                >
                  <FcGoogle className="text-3xl"></FcGoogle>
                  Continue with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
