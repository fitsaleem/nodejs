import React from "react";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
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
                          <h3 className="mb-1 text-xl md:text-2xl font-bold py-2">Set new password</h3>
                          <p>
                            Your new password must different to previos password
                          </p>
                        </div>
                        <div>
                          <form action="#">
                            <div className="form-container vertical">
                              <div className="form-item vertical">
                                <label className="form-label mb-2">
                                  Password
                                </label>
                                <div>
                                  <span className="input-wrapper">
                                    <input
                                      className="input pr-8"
                                      type="password"
                                      name="password"
                                      autoComplete="off"
                                      placeholder="Password"
                                      defaultValue=""
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
                                      name="password"
                                      autoComplete="off"
                                      placeholder="Confirm Password"
                                      defaultValue=""
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
                                Submit
                              </button>
                              <div className="mt-4 text-center">
                                <span>Back to</span>
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

export default ForgetPassword;
