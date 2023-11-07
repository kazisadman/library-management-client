import axios from "axios";
import PropTypes from "prop-types";

const Borrowedtable = ({ borrowedbook }) => {
  const { _id, image, name, author, category, borrowdate, returndate } =
    borrowedbook;

  const handleBorrowdelete = (id) => {
    axios
      .delete(`http://localhost:5000/borrowbook/${id}`, borrowedbook)
      .then((data) => {
        console.log(data);
        const toast = document.getElementById("success-alert");
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">By: {author}</div>
              </div>
            </div>
          </td>
          <td>
            <div className="font-bold">{category}</div>
          </td>
          <td>{borrowdate}</td>
          <td>{returndate}</td>
          <th>
            <button
              onClick={() => handleBorrowdelete(_id)}
              className="btn btn-ghost btn-xs"
            >
              Return
            </button>
          </th>
        </tr>
      </tbody>
      {/* foot */}
      <div id="success-alert" className="toast hidden">
        <div className="alert alert-success">
          <span>Returned Book Successfully</span>
        </div>
      </div>
    </>
  );
};

Borrowedtable.propTypes = {
  borrowedbook: PropTypes.object,
};

export default Borrowedtable;
