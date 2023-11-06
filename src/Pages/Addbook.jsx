const Addbook = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl border-b-4 border-gray-500 my-3">
          Add a new book
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              placeholder="Author Name"
              className="input input-bordered"
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
            placeholder="Image Link"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Format</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Format
              </option>
              <option>Hardcover</option>
              <option>Paperback</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Catagory</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Catagory
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
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered"
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
            placeholder="Short Description"
            className="input input-bordered textarea textarea-lg w-full "
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add book</button>
        </div>
      </form>
    </div>
  );
};

export default Addbook;
