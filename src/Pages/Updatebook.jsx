// import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Updatebook = () => {
  const booksinfo = useLoaderData();
  const { id } = useParams();
  const [selectedbook, setSelectedbook] = useState("");

  useEffect(() => {
    const selectedbookinfo = booksinfo.find((bookinfo) => bookinfo._id === id);

    if (selectedbookinfo) {
      setSelectedbook(selectedbookinfo);
    }
  }, [booksinfo, id]);

  const {
    _id,
    name,
    image,
    author,
    category,
    rating,
    short_description,
    format,
    quantity,
  } = selectedbook;

  const [formatvalue, setFormatvalue] = useState("");
  const [categoryvalue, setCategoryvalue] = useState("");

  useEffect(() => {
    if (format && category) {
      setFormatvalue(format);
      setCategoryvalue(category);
    }
  }, [format, category]);

  const handleUpdatebook = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.bookname.value;
    const author = form.author.value;
    const image = form.image.value;
    const format = formatvalue;
    const category = categoryvalue;
    const quantity = parseInt(form.quantity.value);
    const rating = parseFloat(form.rating.value);
    const short_description = form.shortdescription.value;

    const newbook = {
      name,
      author,
      image,
      format,
      category,
      quantity,
      rating,
      short_description,
    };
    console.log(newbook);

    // axios
    //   .patch(
    //     `https://library-management-8ios7w9wo-sadman-nafes-projects.vercel.app/booksinfo/${_id}`,
    //     { withCredentials: true },
    //     newbook
    // )
    fetch(
      `https://library-management-8ios7w9wo-sadman-nafes-projects.vercel.app/booksinfo/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newbook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const toast = document.getElementById("success-alert");
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3000);
      });
    // .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl border-b-4 border-gray-500 my-3">
          Update book
        </h1>
      </div>
      <form onSubmit={handleUpdatebook}>
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="bookname"
              className="input input-bordered"
              defaultValue={name}
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="input input-bordered"
              defaultValue={author}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image Link"
            className="input input-bordered"
            defaultValue={image}
            required
          />
        </div>
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Format</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="format"
              value={formatvalue}
              defaultValue={format}
              onChange={(e) => setFormatvalue(e.target.value)}
            >
              <option disabled>Format</option>
              <option value="Hardcover">Hardcover</option>
              <option value="Paperback">Paperback</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="category"
              value={categoryvalue}
              defaultValue={category}
              onChange={(e) => setCategoryvalue(e.target.value)}
            >
              <option disabled>Category</option>
              <option>History</option>
              <option>Drama</option>
              <option>Fashion</option>
              <option>Sci-fi</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
              defaultValue={quantity}
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
              defaultValue={rating}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            type="text"
            name="shortdescription"
            placeholder="Short Description"
            className="input input-bordered textarea textarea-lg w-full "
            defaultValue={short_description}
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update book</button>
        </div>
      </form>
      <div id="success-alert" className="toast hidden">
        <div className="alert alert-success">
          <span>Updated Book Successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Updatebook;
