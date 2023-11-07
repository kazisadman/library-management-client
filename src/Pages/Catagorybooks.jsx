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

  const handleAvailable = () => {
    setselectedbooks([]);
    const available = selectedbooks.filter(
      (availablebook) => availablebook.quantity > 0
    );

    if (available) {
      setselectedbooks(available);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div>
          <h1>According to</h1>
          <h1 className="text-3xl font-bold">Category</h1>
        </div>
        <button className="btn btn-primary" onClick={handleAvailable}>
          Available Only
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedbooks.map((selectedbook, index) => (
          <Catagorybook key={index} selectedbook={selectedbook}></Catagorybook>
        ))}
      </div>
    </div>
  );
};

export default Catagorybooks;
