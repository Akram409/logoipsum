import pic1 from "/public/picture-1.png";
import pic2 from "/public/picture-2.png";
import pic3 from "/public/picture-3.png";
import "./style.css";
const Banner = () => {
  return (
    <div>
      <div className="absolute ms-32 me-10">
        <div className="grid grid-cols-2 gap-16 ">
          <div className="mt-11">
            <h1 className="text-[65px] font-bold text-black mb-4">
              Find <span className="textGradient">Partners</span> (CAs)
              available online
            </h1>
            <p className="paraStyle">
              <span className="text-lg font-semibold text-black">CONNECT</span>{" "}
              with us where your services are listed and visible to a myriad of
              businesses seeking CA’s for compliance support
            </p>
            <div className="search flex justify-between items-center mt-[60px]">
              <input type="text" placeholder="Search here" className="input w-full py-[35px]" />
              <button className="bg-[#0076CE] text-white py-[27px] px-[66px] rounded-lg">
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 w-[629.741px] items-start gap-[16.793px]">
            <div className="layout1">
              <img src={pic1} alt="" className="img1" />
            </div>
            <div className="">
              <img src={pic2} alt="" className="img2" />
            </div>
            <div className="layout3">
              <img src={pic3} alt="" className="img3" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1536"
          height="210"
          viewBox="0 0 1536 210"
          fill="none"
        >
          <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
