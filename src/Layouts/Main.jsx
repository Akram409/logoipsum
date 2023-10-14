import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/employDetails');
  console.log(location.pathname)
  return (
    <div className="container mx-auto">
      { noHeaderFooter && <Navbar />}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
