import PropTypes from "prop-types";
import Rating from "react-rating";

const Bestsellingbook = ({ bestselling }) => {
  const { image,name, author, rating, format } = bestselling;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-56" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>By: {author}</p>
        <Rating initialRating={rating} readonly></Rating>
        <h3>{format}</h3>
      </div>
    </div>
  );
};

Bestsellingbook.propTypes = {
  bestselling: PropTypes.object,
};

export default Bestsellingbook;
