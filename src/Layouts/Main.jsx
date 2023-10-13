import { Outlet } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">

      <Outlet></Outlet>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
