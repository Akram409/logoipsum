import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Company from "../Company/Company";
import Platform from "../Platform/Platform";
import AccountentCard from "../Accountent/AccountentCard";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Logoipsum</title>
      </Helmet>
      <div className="flex-shrink-0 HomeBanner ">
        <Navbar />
        <Banner />
      </div>
      <div>
        <Company />
        <AccountentCard />
        <Platform />
      </div>
    </div>
  );
};

export default Home;
