import icon1 from "/public/icon-1.png";
import icon2 from "/public/icon-2.png";
import icon3 from "/public/icon-3.png";
import icon4 from "/public/icon-4.png";
import person1 from "/public/person-1.png";
import person2 from "/public/person-2.png";
const Platform = () => {
  return (
    <div className="mb-[132px]">
      <div className="grid grid-cols-2">
        <div className="border border-red-700">
          <h1 className="text-[65px] font-bold mb-[14px]">
            <span className="textGradient">All-in-One</span> platformthat Makes
            Easier
          </h1>
          <p className="text-2xl font-normal">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
          <div className="grid grid-cols-2 mt-8">
            <div>
              <div className="flex items-center gap-4">
                <img src={icon2} alt="" className="w-[65px] h-[65px]" />
                <p className="text-lg">
                  <span className="font-bold">SEARCH</span> for vital company
                  information
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={icon1} alt="" className="w-[65px] h-[65px]" />
                <p className="text-lg">
                  <span className="font-bold">RESEARCH</span> and generate
                  reports that drive growth
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img src={icon3} alt="" className="w-[65px] h-[65px]" />
                <p className="text-lg">
                  <span className="font-bold">CONNECT</span> with the resources
                  to meet your business needs
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={icon4} alt="" className="w-[65px] h-[65px]" />
                <p className="text-lg">
                  <span className="font-bold">ACADEMY</span> to give you the
                  skills for success in your career
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-green-700">
          <div className="">
            <div className="flex">
              <div>
                <h1>Hey, check out loreumipsum services.</h1>
                <h1>I learned from their videos, got my first job.</h1>
                <h1>You wont be disappointed with their services.</h1>
                <div>
                  <h1>I got a perfect analysis report from them too</h1>
                  <h1>Oh, thats great.</h1>
                </div>
              </div>

              <div>
                <img src={person2} alt="" className="absolute"/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="233"
                  height="310"
                  viewBox="0 0 233 310"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z"
                    fill="#EFD9F9"
                  />
                </svg>
              </div>
            </div>
            <div>
              <img src={person1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
