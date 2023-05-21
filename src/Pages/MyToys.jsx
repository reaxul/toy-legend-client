import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ToyRow from "../components/ToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const URL = `http://localhost:5000/my-toys?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  return (
    <div>
      <h3>Total : {myToys.length}</h3>
      <div className="overflow-x-auto mb-10">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
                          <th>Quantity</th>
                          <th>Rating</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <ToyRow key={toy._id} toyInfo={toy}></ToyRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
                          <th>Quantity</th>
                          <th>Rating</th>
              <th>View Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
