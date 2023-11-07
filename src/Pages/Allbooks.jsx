import { useLoaderData } from "react-router-dom";
import Allbookinfocard from "../Components/Allbookinfocard";
import { useState } from "react";

const Allbooks = () => {
  const booksInfo = useLoaderData();
  const [selectedbooks, setselectedbooks] = useState(booksInfo);

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
    <div className="my-3">
      <div className="flex justify-between items-center my-3">
        <div>
          <h1>All the</h1>
          <h1 className="text-3xl font-bold">Books Here</h1>
        </div>
        <button className="btn btn-primary" onClick={handleAvailable}>
          Available Only
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedbooks.map((bookinfo) => (
          <Allbookinfocard
            key={bookinfo._id}
            bookinfo={bookinfo}
          ></Allbookinfocard>
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
