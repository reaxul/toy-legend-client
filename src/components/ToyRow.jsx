const ToyRow = ({ toyInfo }) => {
    const {name,price,quantity,rating,sellerName,subcategory}=toyInfo
    console.log(toyInfo);
  return (
    
      <tr>
        <td>{sellerName}</td>
          <td>{ name}</td>
        <td>{subcategory}</td>
        <td>{price}/=</td>
          <td>{ quantity}</td>
          <td>{rating}</td>
        <td>
          <button className="btn btn-outline btn-sm">View Details</button>
        </td>
      </tr>
    
  );
};

export default ToyRow;
