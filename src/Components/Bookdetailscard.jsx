import axios from "axios";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Bookdetailscard = ({ bookdetail }) => {
  const {
    _id,
    name,
    image,
    author,
    rating,
    category,
    long_description,
    format,
    short_description,
  } = bookdetail;

  let { quantity } = bookdetail;

  useEffect(() => {
    if (quantity <= 0) {
      const borrowBtn = document.getElementById("borrow-btn");
      borrowBtn.classList.add("btn-disabled");
    }
  }, [quantity]);

  const updateQuantity = () => {
    quantity -= 1;
    const updatedQuantity = {
      name,
      image,
      author,
      rating,
      category,
      short_description,
      format,
      quantity,
    };

    axios
      .put(`http://localhost:5000/booksinfo/${_id}`, updatedQuantity)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleBorrowbook = (e) => {
    e.preventDefault();
    const form = e.target;

    const username = form.name.value;
    const email = form.email.value;
    const borrowdate = form.borrowdate.value;
    const returndate = form.returndate.value;
    const id = _id
    console.log(name, author);

    const newbook = {
      username,
      email,
      id,
      borrowdate,
      returndate,
      name,
      image,
      author,
      category,
      quantity,
      format,
      rating,
      short_description,
    };

    axios
      .post("http://localhost:5000/borrowbook", newbook)
      .then((data) => {
        console.log(data);
        const toast = document.getElementById("success-alert");
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3000);
        updateQuantity();
      })
      .catch((err) => console.error(err));

    e.target.reset();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold"> {name}</h1>
            <Rating initialRating={rating} readonly></Rating>
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
            <div className="flex justify-start items-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                id="borrow-btn"
                className="btn btn-primary mr-6"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Borrow
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleBorrowbook}>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="Email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Borrow Date</span>
                      </label>
                      <input
                        type="date"
                        name="borrowdate"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Return Date</span>
                      </label>
                      <input
                        type="date"
                        name="returndate"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <button className="btn btn-primary my-4">Submit</button>
                  </form>
                </div>
              </dialog>{" "}
              <Link to={"read"}>
                <button className="btn btn-primary ">Read</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="success-alert" className="toast hidden">
        <div className="alert alert-success">
          <span>Borrowed Book Successfully</span>
        </div>
      </div>
    </div>
  );
};

Bookdetailscard.propTypes = {
  bookdetail: PropTypes.object,
};

export default Bookdetailscard;
