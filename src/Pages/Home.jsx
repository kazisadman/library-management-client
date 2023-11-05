import According from "../Components/According";
import Banner from "../Components/Banner/Banner";
import Bestsellingbooks from "../Components/BestSelling/Bestsellingbooks";
import Bookcatagories from "../Components/BookCatagories/Bookcatagories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Bookcatagories></Bookcatagories>
      <Bestsellingbooks></Bestsellingbooks>
      <According></According>
    </div>
  );
};

export default Home;
