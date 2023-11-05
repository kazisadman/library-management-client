import PropTypes from "prop-types";

const Bestsellingbook = ({ bestselling }) => {
  const { name, author, rating, format } = bestselling;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>By: {author}</p>
        <p>{rating}</p>
        <h3>{format}</h3>
      </div>
    </div>
  );
};

Bestsellingbook.propTypes = {
  bestselling: PropTypes.object,
};

export default Bestsellingbook;
