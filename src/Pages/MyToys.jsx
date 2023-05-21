import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ToyRow from "../components/ToyRow";

const MyToys = () => {
  const [asc,setAsc]=useState(true);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const URL = `https://toy-legend-server.vercel.app/my-toys?sellerEmail=${user?.email}&sort=${asc?'asc':'desc' }`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [asc,URL]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://toy-legend-server.vercel.app/my-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete completed successfully");
            const remaining = myToys.filter((t) => t._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };
  const handleUpdate = (id, toyInfo) => {
    fetch(`https://toy-legend-server.vercel.app/my-toys/${id}`, {
      method: "PATCH",
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update
        }
      });
  };
  return (
    <div>
      <div className="flex justify-between">
        <h3>Total : {myToys.length}</h3>
        <button onClick={()=>setAsc(!asc)} className="btn btn-active btn-ghost">{ asc?"Descending":"Ascending"}</button>
      </div>
      <div className="overflow-x-auto mb-10">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>View Details</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <ToyRow
                key={toy._id}
                toyInfo={toy}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></ToyRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Delete</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>View Details</th>
              <th>Edit</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
