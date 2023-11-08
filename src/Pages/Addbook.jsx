import axios from "axios";

const Addbook = () => {
  const handleAddbook = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.bookname.value;
    const author = form.author.value;
    const image = form.image.value;
    const format = form.format.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
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

    axios
      .post("http://localhost:5000/booksinfo", newbook)
      .then((data) => {
        console.log(data);
        const toast = document.getElementById("success-alert");
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => console.error(err));

    e.target.reset();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl border-b-4 border-gray-500 my-3">
          Add a new book
        </h1>
      </div>
      <form onSubmit={handleAddbook}>
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
            required
          />
        </div>
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Format</span>
            </label>
            <select className="select select-bordered w-full" name="format">
              <option disabled selected>
                Format
              </option>
              <option>Hardcover</option>
              <option>Paperback</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full" name="category">
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
              type="number"
              name="quantity"
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
              type="number"
              name="rating"
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
            name="shortdescription"
            placeholder="Short Description"
            className="input input-bordered textarea textarea-lg w-full "
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add book</button>
        </div>
      </form>
      <div id="success-alert" className="toast hidden">
        <div className="alert alert-success">
          <span>Added Book Successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
