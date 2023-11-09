import { useLoaderData, useParams } from "react-router-dom";
import Borrowedtable from "../Components/Borrowedtable";
import { useEffect, useState } from "react";

const Borrowbook = () => {
  const borrowedbooks = useLoaderData();
  const { email } = useParams();

  const [matchedbooks, setMatchedbooks] = useState([]);
  console.log(matchedbooks);

  useEffect(() => {
    const exist = borrowedbooks.filter(
      (borrowedbook) => borrowedbook.email === email
    );
    console.log(exist);
    if (exist) {
      setMatchedbooks(exist);
    }
  }, [borrowedbooks, email]);
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
                <th></th>
              </tr>
            </thead>

            {matchedbooks.map((matchedbook) => (
              <Borrowedtable
                key={matchedbook._id}
                matchedbook={matchedbook}
              ></Borrowedtable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Borrowbook;
