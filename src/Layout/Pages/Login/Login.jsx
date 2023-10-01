import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../../firebase/firebase.init";
import { useRef, useState } from "react";

const Login = () => {
  const [logInUser, setLoginUser] = useState("");
  const [successRegister, setSuccessRegister] = useState("");
  const refEmail = useRef(null);

  const handleLogin = (events) => {
    events.preventDefault();
    const email = events.target.email.value;
    const password = events.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessRegister("Sussecfully loggedin");
      })
      .catch((error) => {
        setLoginUser(error.message);
      });
  };

  const handleForget = () => {
    const email = refEmail.current.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log("forget triggered", email);
    if (!email) {
      console.log("please input a valid email");
      return;
    } else if (!emailRegex.test(email)) {
      console.log("invalid email");
      return;
    }
    // password reset in email
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        alert("please check your email");
        console.log(result.user);
        console.log("please check your email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    ref={refEmail}
                    className="input input-bordered"
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
                  />
                  <label className="label">
                    <a
                      onClick={handleForget}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>

              {logInUser && <div className="text-red-700">{logInUser}</div>}
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

export default Login;
