import PropTypes from "prop-types";

const Borrowedtable = ({ borrowedbook }) => {
  const { image, name, author, category } = borrowedbook;

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
          <td>11/12/2023</td>
          <td>23/12/2013</td>
          <th>
            <button className="btn btn-ghost btn-xs">Return</button>
          </th>
        </tr>
      </tbody>
      {/* foot */}
    </>
  );
};

Borrowedtable.propTypes = {
  borrowedbook: PropTypes.object,
};

export default Borrowedtable;
