import { useLoaderData } from "react-router-dom";
import Borrowedtable from "../Components/Borrowedtable";

const Borrowbook = () => {
  const borrowedbooks = useLoaderData();
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
                <th></th>
              </tr>
            </thead>

            {borrowedbooks.map((borrowedbook) => (
              <Borrowedtable
                key={borrowedbook._id}
                borrowedbook={borrowedbook}
              ></Borrowedtable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Borrowbook;
