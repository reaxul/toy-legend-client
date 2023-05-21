import { useEffect, useState } from "react";
import ToyRow from "../components/ToyRow";

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
        .then(data=>setAllToys(data))
    },[])
    return (
        <div>
        <h3>Total : {allToys.length}</h3>
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
              {allToys.map((toy) => (
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

export default AllToys;