import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import auth from "../../../firebase/firebase.init";
import { useState } from "react";

const Register = () => {
  const [errorRegister, setErrorRegister] = useState("");
  const [successRegister, setSuccessRegister] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (events) => {
    events.preventDefault();
    console.log("form submitted");
    const email = events.target.email.value;
    const password = events.target.password.value;
    const accepted = events.target.checkbox.checked;
    console.log(accepted);
    var regularExpression = /[A-Z]/;

    setErrorRegister("");
    setSuccessRegister("");

    if (password.length < 6) {
      setErrorRegister("Password should be at least 6 characters or longer");
      return;
    } else if (!regularExpression.test(password)) {
      setErrorRegister("Your Password must not contain any Uppercase letters");
      return;
    } else if (!accepted) {
      setErrorRegister("You need to accept the terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessRegister("Account created successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorRegister(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <div
                    className="absolute top-14 left-72 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <div className="text-red-800">
                        <FaEyeSlash></FaEyeSlash>
                      </div>
                    ) : (
                      <FaEye></FaEye>
                    )}
                  </div>
                  <div className="my-4 ">
                    <input type="checkbox" name="checkbox" id="terms" />
                    <label>
                      <span className="ml-3">
                        accept our terms and condition
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary ">Register Now</button>
                </div>
              </form>
              {errorRegister && <p className="text-red-600">{errorRegister}</p>}
              {successRegister && (
                <p className="text-green-600">{successRegister}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
