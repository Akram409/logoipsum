import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Logoipsum</title>
      </Helmet>
      <div className="flex-shrink-0 HomeBanner">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
