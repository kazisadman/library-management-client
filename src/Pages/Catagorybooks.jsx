import { useEffect, useState } from "react";
import { useLoaderData, useParams  } from "react-router-dom";
import Catagorybook from "../Components/Catagorybook";

const Catagorybooks = () => {
  const catagorybooks = useLoaderData();
  const {catagory} = useParams();
  const [selectedbooks, setselectedbooks] = useState([]);
  useEffect(() => {
    const filterBooks = catagorybooks.filter(
      (catagorybook) => catagorybook.category === catagory
    );
    console.log(filterBooks);
    if (filterBooks) {
      setselectedbooks(filterBooks);
    }
  }, [catagory, catagorybooks]);
  return (
    <div>
      <h1>this is catagory books</h1>
      {
        selectedbooks.map(selectedbook => {
            <Catagorybook selectedbook={selectedbook}></Catagorybook>;
        })
      }
    </div>
  );
};

export default Catagorybooks;
