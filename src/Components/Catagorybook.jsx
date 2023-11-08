import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Catagorybook = ({ selectedbook }) => {
  const { _id, name, image, author, category, rating, format } = selectedbook;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>By: {author}</p>
          <Rating initialRating={rating} readonly></Rating>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{format}</div>
          </div>
          <Link to={`${_id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Catagorybook.propTypes = {
  selectedbook: PropTypes.object,
};

export default Catagorybook;
