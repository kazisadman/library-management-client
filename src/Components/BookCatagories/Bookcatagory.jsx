import PropTypes from "prop-types";

const Bookcatagory = ({ catagoryinfo }) => {
  const { image, name } = catagoryinfo;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

Bookcatagory.propTypes = {
  catagoryinfo: PropTypes.object,
};

export default Bookcatagory;
