import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Bookcatagory = ({ catagoryinfo }) => {

  const { image, name, description } = catagoryinfo;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img className="w-96 h-56" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <Link to={`/${name}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Explore</button>
            </div>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

Bookcatagory.propTypes = {
  catagoryinfo: PropTypes.object,
};

export default Bookcatagory;
