import React from "react";
import ReactDOM from "react-dom";
import "./styles/AuthFormStyle.css";

function App() {
  const [signIn, toggle] = React.useState(true);
  return (
    <div className="bg-white rounded-lg shadow-lg relative overflow-hidden w-[678px] max-w-full min-h-[400px] text-sm">
      <div
        className={`absolute top-0 h-full transition-all duration-1000 ease-in-out left-0 w-1/2 opacity-0 z-10 ${
          !signIn ? "transform translate-x-full opacity-100 z-50" : ""
        }`}
      >
        <form className="bg-white flex flex-col items-center justify-center p-12 text-center h-full">
          <h1 className="font-bold m-0">Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <button className="rounded-2xl border border-black bg-black text-white font-bold text-xs px-12 py-3 uppercase tracking-wider transform transition-transform duration-80 active:scale-95 focus:outline-none">
            Sign Up
          </button>
        </form>
      </div>

      <div
        className={`absolute top-0 h-full transition-all duration-1000 ease-in-out left-0 w-1/2 z-20 ${
          !signIn ? "transform translate-x-full" : ""
        }`}
      >
        <form className="bg-white flex flex-col items-center justify-center p-12 text-center h-full">
          <h1 className="font-bold m-0">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <button className="rounded-2xl border border-black bg-black text-white font-bold text-xs px-12 py-3 uppercase tracking-wider transform transition-transform duration-80 active:scale-95 focus:outline-none">
            Sign In
          </button>
        </form>
      </div>

      <div
        className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-1000 ease-in-out z-[100] ${
          !signIn ? "transform -translate-x-full" : ""
        }`}
      >
        <div
          className={`bg-gradient-to-r from-black to-gray-500 text-white absolute left-[-100%] h-full w-[200%] transition-transform duration-1000 ease-in-out ${
            !signIn ? "transform translate-x-1/2" : ""
          }`}
        >
          <div
            className={`absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transition-transform duration-1000 ease-in-out ${
              !signIn ? "transform translate-x-0" : "-translate-x-1/5"
            }`}
          >
            <h1 className="font-bold m-0">Welcome Back!</h1>
            <p className="text-sm font-light leading-5 tracking-wide my-5">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => toggle(true)}
              className="rounded-2xl border border-white bg-transparent text-white font-bold text-xs px-12 py-3 uppercase tracking-wider transform transition-transform duration-80 active:scale-95 focus:outline-none"
            >
              Sign In
            </button>
          </div>
          <div
            className={`absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transition-transform duration-1000 ease-in-out right-0 ${
              !signIn ? "transform translate-x-[20%]" : ""
            }`}
          >
            <h1 className="font-bold m-0">Hello, Friend!</h1>
            <p className="text-sm font-light leading-5 tracking-wide my-5">
              Enter your personal details and start your journey with us
            </p>
            <button
              onClick={() => toggle(false)}
              className="rounded-2xl border border-white bg-transparent text-white font-bold text-xs px-12 py-3 uppercase tracking-wider transform transition-transform duration-80 active:scale-95 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
