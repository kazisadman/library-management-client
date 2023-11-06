import { useLoaderData } from "react-router-dom";
import Allbookinfocard from "../Components/Allbookinfocard";

const Allbooks = () => {
  const booksInfo = useLoaderData();
  return (
    <div className="my-3">
      <h2>All the</h2>
      <h2 className="text-4xl">Books Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {booksInfo.map((bookinfo) => (
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
