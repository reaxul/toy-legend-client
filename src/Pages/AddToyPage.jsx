import { useContext } from "react";
import { RiImageAddFill, RiUserFill, RiMailLine } from "react-icons/ri";
import { AuthContext } from "../providers/AuthProvider";

const AddToyPage = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const picture = form.picture.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addToy = {
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      description,
      picture,
    };
    console.log(addToy);
    fetch("http://localhost:5000/toy-collection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.insertedId) {
            alert('Toy added successfully')
          }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full md:max-w-3xl p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Add A Toy</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="picture"
                  className="block mb-1 font-medium text-white"
                >
                  Picture URL of the Toy
                </label>
              </div>
              <input
                type="text"
                id="picture"
                name="picture"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the URL of the toy's picture"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiUserFill className="text-white mr-2" />
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-white"
                >
                  Name
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the name of the toy"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiUserFill className="text-white mr-2" />
                <label
                  htmlFor="sellerName"
                  className="block mb-1 font-medium text-white"
                >
                  Seller Name
                </label>
              </div>
              <input
                type="text"
                id="sellerName"
                name="sellerName"
                defaultValue={user?.displayName}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the name of the seller"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiMailLine className="text-white mr-2" />
                <label
                  htmlFor="sellerEmail"
                  className="block mb-1 font-medium text-white"
                >
                  Seller Email
                </label>
              </div>
              <input
                type="email"
                id="sellerEmail"
                name="sellerEmail"
                defaultValue={user?.email}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the email of the seller"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="subcategory"
                  className="block mb-1 font-medium text-white"
                >
                  Sub-category
                </label>
              </div>
              <select
                id="subcategory"
                name="subcategory"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a sub-category</option>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="Star Wars">Star Wars</option>
              </select>
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="price"
                  className="block mb-1 font-medium text-white"
                >
                  Price
                </label>
              </div>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the price of the toy"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="rating"
                  className="block mb-1 font-medium text-white"
                >
                  Rating
                </label>
              </div>
              <select
                id="rating"
                name="rating"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="quantity"
                  className="block mb-1 font-medium text-white"
                >
                  Available Quantity
                </label>
              </div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the available quantity of the toy"
              />
            </div>

            <div className="col-span-2">
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="description"
                  className="block mb-1 font-medium text-white"
                >
                  Detail Description
                </label>
              </div>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a detailed description of the toy"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToyPage;
