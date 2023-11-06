import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Catagorybook from "../Components/Catagorybook";

const Catagorybooks = () => {
  const catagorybooks = useLoaderData();
  const { catagory } = useParams();
  const [selectedbooks, setselectedbooks] = useState([]);

  useEffect(() => {
    const filterBooks = catagorybooks.filter(
      (catagorybook) => catagorybook.category === catagory
    );
    if (filterBooks) {
      setselectedbooks(filterBooks);
    }
  }, [catagory, catagorybooks]);

  return (
    <div>
      <h1>this is catagory books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedbooks.map((selectedbook, index) => (
          <Catagorybook key={index} selectedbook={selectedbook}></Catagorybook>
        ))}
      </div>
    </div>
  );
};

export default Catagorybooks;
