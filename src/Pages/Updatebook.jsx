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
    name,
    image,
    author,
    category,
    rating,
    short_description,
    format,
    quantity,
  } = selectedbook;

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl border-b-4 border-gray-500 my-3">
          Update book
        </h1>
      </div>
      <form action="">
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="book-name"
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
              name="author-name"
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
              defaultValue={format}
            >
              <option disabled selected>
                Format
              </option>
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
              defaultValue={category}
            >
              <option disabled selected>
                Category
              </option>
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
              type="text"
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
            name="short-description"
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
    </div>
  );
};

export default Updatebook;
