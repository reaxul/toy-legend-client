import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const CategoryCard = ({ toy }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden m-5">
      <figure className="h-60">
        <img
          src={toy.picture}
          alt="Toy"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{toy.name}</h2>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Price:</span>
            <span className="text-lg font-bold ">${toy.price}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Rating:</span>
            <span>{toy.rating}</span>
            <span className="text-lg font-bold flex items-center">
              {Array.from(Array(toy.rating), (_, i) => (
                <AiFillStar key={i} className="text-amber-500" />
              ))}
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Link to={`/details/${toy._id}`}><button className="btn btn-sm btn-info btn-outline">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
