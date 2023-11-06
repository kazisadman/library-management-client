import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Allbookinfocard = ({ bookinfo }) => {
  const { _id, name, image, author, category, rating, format } = bookinfo;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-56" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>By: {author}</p>
          <p>{rating}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{format}</div>
          </div>
          <Link to={`${_id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Update</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Allbookinfocard.propTypes = {
  bookinfo: PropTypes.object,
};

export default Allbookinfocard;
