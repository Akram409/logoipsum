import "./style.css";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import Slider from "react-slick";
import Banner from "/public/detailsBanner.png";
import Banner1 from "/public/detailsBanner-1.jpg";
import Banner2 from "/public/detailsBanner-2.jpg";
import Banner3 from "/public/detailsBanner-3.jpg";

const CompanyDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-32 mt-20 mb-[132px]">
      <div className="grid grid-cols-2 gap-8 mb-[132px]">
        <div>
          <div>
            <h1 className="text-[35px] font-bold mb-4">Michael Jackson</h1>
            <p className="text-xl font-normal">
              I am here to provide my expertise in accounting and finance, which
              includes financial statements, economics, and auditing, all to
              assist you effectively
            </p>
            <div className="flex items-center gap-2 my-8">
              <AiFillStar color="#0076CE" size="1.5em" />
              <p>
                <span className="text-[#0076CE] font-semibold">4.8</span> (89)
              </p>
            </div>
            <div className="card lg:w-[515px] detailBox1">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-normal">
                    Basic to complex tasks
                  </h1>
                  <h1 className="text-2xl font-bold">₹4,370</h1>
                </div>
                <div className="flex gap-1 items-center mt-8 mb-6">
                  <AiOutlineCalendar color="#0076CE" size="1.5em" />
                  <p className="text-xl font-normal">
                    Delivers the job within 2 days
                  </p>
                </div>
                <div className="flex justify-center gap-6">
                  <button className="btn bg-[#0076CE] text-white text-base ">
                    Request Proposal
                  </button>

                  <button className="btn border-[#0076CE] text-[#0076CE] text-base ">
                    Chat with me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="carouselBox border-2 w-[515px] mt-8 mb-7">
              <div className=" px-8 pt-7 mb-7">
                <div>
                  <Slider {...settings}>
                    <div>
                      <h1 className="text-[35px] font-bold mb-4">
                        What people say?
                      </h1>
                      <p className="text-xl font-normal mb-[60px]">
                        I cannot express enough gratitude for the support
                        Micheal has provided in managing my personal finances.
                        Their attention to detail and deep understanding of
                        financial markets has ensured that my investments are in
                        safe hands. I highly recommend their services to anyone
                        seeking financial guidance.
                      </p>
                    </div>
                    <div>
                      <h1 className="text-[35px] font-bold mb-4">
                        What people say?
                      </h1>
                      <p className="text-xl font-normal mb-[60px]">
                        I cannot express enough gratitude for the support
                        Micheal has provided in managing my personal finances.
                        Their attention to detail and deep understanding of
                        financial markets has ensured that my investments are in
                        safe hands. I highly recommend their services to anyone
                        seeking financial guidance.
                      </p>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full mb-8">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src={Banner}
                    alt=""
                    className="w-full h-[281px] object-cover rounded-[20px]"
                  />
                </div>
                <div>
                  <img
                    src={Banner1}
                    alt=""
                    className="w-full h-[281px] object-cover rounded-[20px]"
                  />
                </div>
                <div>
                  <img
                    src={Banner2}
                    alt=""
                    className="w-full h-[281px] object-cover rounded-[20px]"
                  />
                </div>
                <div>
                  <img
                    src={Banner3}
                    alt=""
                    className="w-full h-[281px] object-cover rounded-[20px]"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div>
            <h1 className="text-[35px] font-bold mb-[22px]">
              About Michael Jackson
            </h1>
            <div className="grid grid-cols-3 mb-[32px]">
              <div>
                <p className="text-[#999] font-bold text-base">FROM</p>
                <h1 className="text-xl font-normal">INDIA</h1>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base">PARTNER SINCE</p>
                <h1 className="text-xl font-normal">2011</h1>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base">
                  AVERAGE RESPONSE TIME
                </p>
                <h1 className="text-xl font-normal">30 minutes</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[#999] font-bold text-base mb-2">ABOUT</h1>
              <p className="text-xl font-normal mb-8">
                I am a Professional Charted Accountant here to offer
                professional services of accounting and finance, financial
                statements, Bookkeeping in affordable price.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-[#999] font-bold text-base mb-2">
                  SERVICES I OFFER
                </h1>
                <ul className="circle text-lg font-normal ms-7">
                  <li>Financial accounting</li>
                  <li>Financial statements</li>
                  <li>Bookkeeping</li>
                  <li>Accounting and finance</li>
                  <li>Corporate Finance</li>
                  <li>Maintain Charts of Accounts</li>
                  <li>Profit and loss statements</li>
                  <li>Bank Reconciliation</li>
                  <li>Balance Sheets</li>
                </ul>
              </div>
              <div>
                <h1 className="text-[#999] font-bold text-base mb-2">
                  WHY ME?
                </h1>
                <ul className="circle text-lg font-normal ms-7">
                  <li>One-time delivery</li>
                  <li>24/7 customer support</li>
                  <li>Error-free documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-8">Recommended for you</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="card bg-white shadow-2xl">
            <figure>
              <img src={Banner} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-[5px]">
                <h1>Michael Jackson</h1>
                <h1>₹4,370</h1>
              </h2>
              <p className="text-base font-normal">
                I will do business evaluation and corporate services
              </p>
              <div className="flex items-center gap-2 mt-3 mb-8">
                <AiFillStar color="#0076CE" size="1.5em" />
                <p>
                  <span className="text-[#0076CE] font-semibold">4.8</span> (89)
                </p>
              </div>
              <div className="card-actions">
                <button className="btn bg-[#0076CE] text-white text-base w-full">
                  View services
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-2xl">
            <figure>
              <img src={Banner} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-[5px]">
                <h1>Stevie Wonder</h1>
                <h1>₹4,370</h1>
              </h2>
              <p className="text-base font-normal">
                I will do business evaluation and corporate services
              </p>
              <div className="flex items-center gap-2 mt-3 mb-8">
                <AiFillStar color="#0076CE" size="1.5em" />
                <p>
                  <span className="text-[#0076CE] font-semibold">5.0</span> (62)
                </p>
              </div>
              <div className="card-actions">
                <button className="btn bg-[#0076CE] text-white text-base w-full">
                  View services
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-2xl">
            <figure>
              <img src={Banner} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-[5px]">
                <h1>Ray Charles</h1>
                <h1>₹2,586</h1>
              </h2>
              <p className="text-base font-normal">
                I will do business evaluation and corporate services
              </p>
              <div className="flex items-center gap-2 mt-3 mb-8">
                <AiFillStar color="#0076CE" size="1.5em" />
                <p>
                  <span className="text-[#0076CE] font-semibold">4.8</span> (89)
                </p>
              </div>
              <div className="card-actions">
                <button className="btn bg-[#0076CE] text-white text-base w-full">
                  View services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
