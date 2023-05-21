import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyRow = ({ toyInfo, handleDelete, handleUpdate }) => {
  const { name, price, quantity, rating, sellerName, subcategory, _id } =
    toyInfo;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}/=</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-outline btn-sm">View Details</button>
        </Link>
      </td>
      <td>
       <Link to={'/update-toy'}> <button onClick={() => handleUpdate(_id,toyInfo)}>
          <FaEdit></FaEdit>
        </button></Link>
      </td>
    </tr>
  );
};

export default ToyRow;
