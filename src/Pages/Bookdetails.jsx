import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Bookdetailscard from "../Components/Bookdetailscard";

const Bookdetails = () => {
  const booksinfo = useLoaderData();
  const { id } = useParams();
  const [booksdetail, setbooksdetail] = useState([]);
  console.log(booksdetail);

  useEffect(() => {
    const bookexist = booksinfo.filter((bookinfo) => bookinfo._id === id);
    if (bookexist) {
      setbooksdetail(bookexist);
    }
  }, [booksinfo, id]);

  return (
    <div>
      <div>
        {booksdetail.map((bookdetail) => (
          <Bookdetailscard
            key={bookdetail._id}
            bookdetail={bookdetail}
          ></Bookdetailscard>
        ))}
      </div>
    </div>
  );
};

export default Bookdetails;
