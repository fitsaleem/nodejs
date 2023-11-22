import { Link ,useNavigate} from "react-router-dom";
import  { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import axios from "axios";
import "../App.css";

const Signin = () => {

  const [user, setUser] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit= async (e)=>{

     e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signin", user);
      console.log("SignIn success", response.data);
    } catch (error) {
      console.log("signIn fail", error.message);
      if (error.response && error.response.status === 400) {
        console.log("User already exists");
      } else {
        console.log("SignIn failed");
      }
    } 
    
    navigate('/');     //it will redirect to home page if the response will success

  }
  return (
    <div>
      <div id="root">
        {/* App Layout*/}
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
          <main className="h-full">
            <div className="page-container relative h-full flex flex-auto flex-col">
              <div className="h-full">
                <div className="container mx-auto flex flex-col flex-auto items-center justify-center min-w-0 h-full">
                  <div
                    className="card min-w-[320px] md:min-w-[450px] card-shadow"
                    role="presentation"
                  >
                    <div className="card-body md:p-10">
                      <div className="text-center">
                        <div className="logo">
                          <img
                            className="mx-auto w-10 py-3"
                            src="https://componentland.com/images/JOJj79gp_Djhwdp_ZOKLL.png"
                            alt="Elstar logo"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mb-4">
                          <h3 className="mb-1 text-2xl font-bold">
                            Welcome back!
                          </h3>
                          <p>Please enter your credentials to sign in!</p>
                        </div>
                        <div>
                          <form onSubmit={handleSubmit}>
                            <div className="form-container vertical">
                              <div className="form-item vertical">
                                <label className="form-label mb-2">
                                  User Name
                                </label>
                                <div>
                                  <input
                                    className="input"
                                    type="text"
                                    id="username"
                                    autoComplete="off"
                                    placeholder="User Name"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-item vertical">
                                <label className="form-label mb-2">
                                  Password
                                </label>
                                <div>
                                  <span className="input-wrapper">
                                    <input
                                      className="input pr-8"
                                      type="password"
                                      id="password"
                                      autoComplete="off"
                                      placeholder="Password"
                                      onChange={handleChange}
                                    />
                                    <div className="input-suffix-start right-0 px-2">
                                      <span className="cursor-pointer text-xl">
                                        <BsEyeSlash />
                                      </span>
                                    </div>
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between mb-6">
                                <label className="checkbox-label mb-0">
                                  <input
                                    className="checkbox"
                                    type="checkbox"
                                    defaultValue="true"
                                    defaultChecked=""
                                  />
                                  <span className="ltr:ml-2 rtl:mr-2">
                                    Remember Me
                                  </span>
                                </label>
                                <Link
                                  className="text-primary-600 hover:underline"
                                  to="/forget-password"
                                >
                                  Forgot Password?
                                </Link>
                              </div>

                              <button
                                className="btn btn-solid w-full"
                                type="submit"
                              >
                                Sign In
                              </button>

                              <div className="mt-4 text-center">
                              <span>Don&apos;t have an account yet?</span>
                                <Link
                                  to="/regester"
                                  className="text-primary-600 hover:underline"
                                >
                                  Sign up
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signin;
