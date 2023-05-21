import { useEffect, useState } from "react";

import AllToyRow from "../components/AllToyRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-legend-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  if (allToys.length > 20) {
    setAllToys(allToys.slice(0, 20));
  }
  const handleSearch = (event) => {
    event.preventDefault();
    const searchName = event.target.search.value;
    const searchedToys = allToys.filter((t) => t.name === searchName);
    setAllToys(searchedToys);
  };
  return (
    <div>
      <form onSubmit={handleSearch} className="form-control">
        <div className="input-group">
          <input
            type="text"
            name="search"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
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
              <AllToyRow key={toy._id} toyInfo={toy}></AllToyRow>
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
