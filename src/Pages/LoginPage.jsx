import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LoginPage = () => {
    const [error, setError] = useState(null)
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate=useNavigate()
    const from = location.state?.from?.pathname || '/'
  const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
      .then((userCredential) => {
        
          const user = userCredential.user;
          console.log(user);
          navigate(from,{replace: true})
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
      });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace: true})
            }).catch((error) => { setError(error.message); });
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full p-6 bg-gray-800 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
              {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-gray-300">Or sign in with</p>
          <div className="flex justify-center mt-2 space-x-2">
            <button onClick={handleGoogleSignIn} className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              <FaGoogle className="h-5 w-5" />
            </button>
            <Link
              to="/register"
              className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
