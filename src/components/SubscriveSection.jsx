import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform subscription logic here, such as making an API call or storing the email in a database
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="bg-gray-800 py-10 items-center flex justify-center text-center rounded-xl my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white mb-6">
          Stay up to date with the latest action hero toys and exclusive offers!
        </p>
        <div className="mx-auto flex justify-center">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row md:items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 mb-4 md:mb-0 w-full md:w-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
