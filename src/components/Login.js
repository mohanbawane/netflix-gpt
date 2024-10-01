import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const Toggalehandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (

    // logo
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg"
          alt="logo"
        />
      </div>


    {/* sign and sign UP form */}
      <form className="bg-black w-4/12  absolute p-12  my-36 right-0 left-0 mx-auto text-white bg-opacity-80 rounded-lg">
        <h1 className="text-center font-bold text-2xl py-4">
          {isSignInForm ? "sign In" : "Sign UP"}
        </h1>


        {!isSignInForm && <input
          type="text"
          placeholder="Username"
          className="p-4 my-4  w-full  bg-gray-700 rounded-lg"
        />}

        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4  w-full  bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign UP"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={Toggalehandler}>
          {isSignInForm ?"new to a Netflix? Sign Up Now" : "you Allready user !  sign In" } 
        </p>
      </form>

      <Header />
    </div>
  );
};

export default Login;
