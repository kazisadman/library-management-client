import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Read = () => {
  const booksinfo = useLoaderData();
  const { id } = useParams();
  const [selectedbook, setSelectedbook] = useState("");

  useEffect(() => {
    const selectedbookinfo = booksinfo.find((bookinfo) => bookinfo._id === id);

    if (selectedbookinfo) {
      setSelectedbook(selectedbookinfo);
    }
  }, [booksinfo, id]);

  const { name, image, content } = selectedbook;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-3">{name}</h1>
            <h1 className="text-3xl font-bold">Introduction:</h1>
            <p className="py-6">{content}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Read;
