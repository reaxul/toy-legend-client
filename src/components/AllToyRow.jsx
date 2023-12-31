import { Link } from "react-router-dom";

const AllToyRow = ({toyInfo}) => {
    const { name, price, quantity, rating, sellerName, subcategory, _id } =
    toyInfo;

  return (
    <tr>
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
    </tr>
  );
};

export default AllToyRow;