import { useEffect, useState } from "react";
import Bestsellingbook from "./Bestsellingbook";

const Bestsellingbooks = () => {
  const [booksinfo, setbooksinfo] = useState([]);
  const [bestsellings, setBestsellings] = useState([]);

  useEffect(() => {
    fetch("/booksinfo.json")
      .then((res) => res.json())
      .then((data) => setbooksinfo(data));
  }, []);

  useEffect(() => {
    if (booksinfo.length > 0) {
      const bestsellingexist = booksinfo.filter(
        (bookinfo) => bookinfo.best_selling === true
      );
      setBestsellings(bestsellingexist);
    }
  }, [booksinfo]);

  return (
    <div className="mt-8">
      <h2>People’s Choice</h2>
      <h1 className="text-5xl text-gray-600">Bestselling Books</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {bestsellings.slice(0, 6).map((bestselling, index) => (
          <Bestsellingbook
            key={index}
            bestselling={bestselling}
          ></Bestsellingbook>
        ))}
      </div>
    </div>
  );
};

export default Bestsellingbooks;
