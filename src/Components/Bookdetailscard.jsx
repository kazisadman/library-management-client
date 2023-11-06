import PropTypes from "prop-types";

const Bookdetailscard = ({ bookdetail }) => {
  const {
    name,
    image,
    quantity,
    author,
    rating,
    category,
    long_description,
    format,
  } = bookdetail;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold"> {name}</h1>
            <h2>{rating}</h2>
            <p className="py-6 text-lg">{long_description}</p>
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="text-2xl font-bold">Author:</span> {author}
            </h2>
            <h2 className="text-xl font-semibold">
              {" "}
              <span className="text-2xl font-bold">Quantity:</span> {quantity}
            </h2>
            <div className="card-actions justify-start my-8">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">{format}</div>
            </div>{" "}
            <div className="flex justify-between items-center">
              <button className="btn btn-primary">Borrow</button>
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

Bookdetailscard.propTypes = {
  bookdetail: PropTypes.object,
};

export default Bookdetailscard;
