import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiUserFill,
  RiMailLine,
  RiLockPasswordFill,
  RiImageAddFill,
} from "react-icons/ri";
import { AuthContext } from "../providers/AuthProvider";
import useTitle from "../hooks/useTitle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  useTitle('Register')
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Registration</h2>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="flex items-center">
            <RiUserFill className="text-white mr-2" />
            <label htmlFor="name" className="block mb-1 font-medium text-white">
              Name
            </label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          <div className="flex items-center">
            <RiMailLine className="text-white mr-2" />
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-white"
            >
              Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <div className="flex items-center">
            <RiLockPasswordFill className="text-white mr-2" />
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-white"
            >
              Password
            </label>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <div className="flex items-center">
            <RiImageAddFill className="text-white mr-2" />
            <label
              htmlFor="photo"
              className="block mb-1 font-medium text-white"
            >
              Photo URL
            </label>
          </div>
          <input
            type="url"
            id="photo"
            name="photoURL"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the URL of your photo"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Already have an account?</p>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
