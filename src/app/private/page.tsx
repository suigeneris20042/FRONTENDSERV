import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full p-2 border border-red-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full p-2 border border-red-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="w-full flex items-center justify-center p-2 border border-red-900 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-red-700">
            <img
              src="/google_icon.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
