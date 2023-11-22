import  { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import axios from 'axios'

const Signup = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit= async (e)=>{

     e.preventDefault();

     if (user.password !== user.confirmpassword) {
      console.log("Passwords do not match"); 
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", user);
      console.log("Signup success", response.data);
    } catch (error) {
      console.log("signup fail", error.message);
      if (error.response && error.response.status === 400) {
        console.log("User already exists");
      } else {
        console.log("Signup failed");
      }
    } 
    
    navigate('/login')
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
                            className="mx-auto w-10"
                            src="https://componentland.com/images/JOJj79gp_Djhwdp_ZOKLL.png"
                            alt="Elstar logo"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mb-4">
                          <h3 className="mb-1 text-xl font-bold md:text-2xl py-2">
                            Sign Up
                          </h3>
                          <p>And lets get started with your free trial</p>
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
                                <label className="form-label mb-2">Email</label>
                                <div>
                                  <input
                                    className="input"
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    placeholder="Email"
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
                              <div className="form-item vertical">
                                <label className="form-label mb-2">
                                  Confirm Password
                                </label>
                                <div>
                                  <span className="input-wrapper">
                                    <input
                                      className="input pr-8"
                                      type="password"
                                      id="confirmpassword"
                                      autoComplete="off"
                                      placeholder="Confirm Password"
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
                              <button
                                className="btn btn-solid w-full"
                                type="submit"
                              >
                                Sign Up
                              </button>
                              <div className="mt-4 text-center">
                                <span>Already have an account?</span>
                                <Link
                                  className="text-primary-600 hover:underline"
                                  to="/login"
                                >
                                  Sign In
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

export default Signup;
