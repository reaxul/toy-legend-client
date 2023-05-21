import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gray-900 py-12 rounded-md">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mb-4">
            Welcome to Toy Legends!
          </h1>
          <p className="text-lg text-white">
            Explore a wide range of action figure toys from your favorite
            franchises
          </p>
        <Link to={'/all-toys'}>  <button className="bg-red-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-red-600">
            Shop Now
          </button></Link>
        </div>
      </div>
      {/* carousel section  */}
      <div className="carousel w-full mt-4 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/VTLnJ0X/JOYTOY-FIGURE-EMAIL-BANNER.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/yS6BR8C/TFS-111422-001.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Rhx1PNn/tfs-spring-sale-2023-main.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/vhhx2dp/TFS-04242023-001.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
