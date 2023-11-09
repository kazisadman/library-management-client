import { useEffect, useState } from "react";
import Bookcatagory from "./Bookcatagory";

const Bookcatagories = () => {
  const [catagoriesinfo, setcatagoriesinfo] = useState([]);

  useEffect(() => {
    fetch(
      "https://library-management-8ios7w9wo-sadman-nafes-projects.vercel.app/catagoriesinfo"
    )
      .then((res) => res.json())
      .then((data) => setcatagoriesinfo(data));
  }, []);
  return (
    <div className="mt-8">
      <h2>Choose the best book</h2>
      <h1 className="text-5xl text-gray-600">From Catagroies</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {catagoriesinfo.map((catagoryinfo, index) => (
          <Bookcatagory key={index} catagoryinfo={catagoryinfo}></Bookcatagory>
        ))}
      </div>
    </div>
  );
};

export default Bookcatagories;
