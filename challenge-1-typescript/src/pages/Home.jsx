import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-md-6 d-flex align-items-center bg-light">
          <div className="p-5">
            <h1 className="display-4 text-success mb-3">
              Bring your home to life
            </h1>
            <p className="lead text-muted mb-4">
              Elevate your living space with a touch of nature. We offer a range
              of easy-care house plants
            </p>
            <Link to="/shop" className="btn btn-success btn-lg">
              Browse Plants
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg"
            alt="Picture of a houseplant"
            className="img-fluid h-80 w-80 object-fit-cover image-border"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
