import { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div className="mt-8">
      <h2>Choose the best book</h2>
      <h1 className="text-5xl text-gray-600">From Catagroies</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {reviews.map((catagoryinfo, index) => (
          <Review key={index} catagoryinfo={catagoryinfo}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
