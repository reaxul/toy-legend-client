import { useLoaderData } from "react-router-dom";
import { FaUser, FaEnvelope, FaDollarSign, FaStar, FaBox } from 'react-icons/fa';
import useTitle from "../hooks/useTitle";

const ToyDetails = () => {
  useTitle('Toy-Details');
    const toy = useLoaderData();
  return (

    <div className="container mx-auto px-4 py-6 bg-gray-900 rounded-md shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:flex md:items-center">
          <img src={toy.picture} alt={toy.name} className="w-full md:w-auto h-auto rounded-md shadow-lg" />
        </div>
        <div className="text-gray-100">
          <h2 className="text-3xl font-bold mb-4">{toy.name}</h2>
          <div className="flex items-center mb-2">
            <FaUser className="text-gray-300 mr-2" />
            <p className="text-gray-300">{toy.sellerName}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-gray-300 mr-2" />
            <p className="text-gray-300">{toy.sellerEmail}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaDollarSign className="text-gray-300 mr-2" />
            <p className="text-gray-300">{toy.price}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaStar className="text-yellow-400 mr-2" />
            <p className="text-gray-300">{toy.rating}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaBox className="text-gray-300 mr-2" />
            <p className="text-gray-300">{toy.availableQuantity}</p>
          </div>
          <p className="text-gray-300">Description: {toy.description}</p>
        </div>
      </div>
    </div>
    

  );
};

export default ToyDetails;
