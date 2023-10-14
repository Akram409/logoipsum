import "./style.css";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import Slider from "react-slick";
import Banner from "/public/detailsBanner.png";
import Banner1 from "/public/detailsBanner-1.jpg";
import Banner2 from "/public/detailsBanner-2.jpg";
import Banner3 from "/public/detailsBanner-3.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EmployDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://logoipsum-j6tp.onrender.com/details");
        const datas = await response.json();
        setAllData(datas.slice(0, 3));
        const singleData = datas.find((item) => item.id === parseInt(id));
        setData(singleData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:mx-32 mx-12 mt-20 mb-[132px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[132px]">
        <div>
          <div>
            <h1 className="text-[35px] font-bold mb-4">{data?.name}</h1>
            <p className="text-xl font-normal">{data?.intro}</p>
            <div className="flex items-center gap-2 my-8">
              <AiFillStar color="#0076CE" size="1.5em" />
              <p>
                <span className="text-[#0076CE] font-semibold">
                  {data?.rating}
                </span>
                ({data?.reviewCount})
              </p>
            </div>
            <div className="card w-full detailBox1">
              <div className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                  <h1 className="text-sm font-normal">
                    {data?.taskComplexity}
                  </h1>
                  <h1 className="text-2xl font-bold lg:text-end">{data?.price}</h1>
                </div>
                <div className="flex gap-1 items-center mt-8 mb-6">
                  <AiOutlineCalendar color="#0076CE" size="1.5em" />
                  <p className="text-xl font-normal">{data?.deliveryTime}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 w-full">
                  <button className="btn bg-[#0076CE] text-white text-base mb-2">
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
            <div className="carouselBox border-2 w-full mt-8 lg:mb-7">
              <div className=" px-8 pt-7 mb-7">
                <div>
                  <Slider {...settings}>
                    <div>
                      <h1 className="text-[35px] font-bold mb-4">
                        What people say?
                      </h1>
                      <p className="text-xl font-normal lg:mb-[60px]">
                        {data?.testimonial?.text}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-[35px] font-bold mb-4">
                        What people say?
                      </h1>
                      <p className="text-xl font-normal lg:mb-[60px]">
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
              About {data?.name}
            </h1>
            <div className="grid grid-cols-3 mb-[32px]">
              <div>
                <p className="text-[#999] font-bold text-base">FROM</p>
                <h1 className="text-xl font-normal">{data?.about?.from}</h1>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base">PARTNER SINCE</p>
                <h1 className="text-xl font-normal">
                  {data?.about?.partnerSince}
                </h1>
              </div>
              <div>
                <p className="text-[#999] font-bold text-base">
                  AVERAGE RESPONSE TIME
                </p>
                <h1 className="text-xl font-normal">
                  {data?.about?.averageResponseTime}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-[#999] font-bold text-base mb-2">ABOUT</h1>
              <p className="text-xl font-normal mb-8">
                {data?.about?.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-[#999] font-bold text-base mb-2">
                  SERVICES I OFFER
                </h1>
                <ul className="circle text-lg font-normal ms-7">
                  {data?.about?.services.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-[#999] font-bold text-base mb-2">
                  WHY ME?
                </h1>
                <ul className="circle text-lg font-normal ms-7">
                  {data?.about?.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-8">Recommended for you</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allData.map((item, index) => (
            <>
              <div className="card bg-white shadow-2xl" key={index}>
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="w-full h-60 object-left-top"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-between mb-[5px]">
                    <h1>{item.name}</h1>
                    <h1>{item.price}</h1>
                  </h2>
                  <p className="text-base font-normal">{item.intro}</p>
                  <div className="flex items-center gap-2 mt-3 mb-8">
                    <AiFillStar color="#0076CE" size="1.5em" />
                    <p>
                      <span className="text-[#0076CE] font-semibold">
                        {item.rating}
                      </span>
                      ({item.reviewCount})
                    </p>
                  </div>
                  <div className="">
                    <Link to={`/employDetails/${item.id}`}>
                      <button className="btn bg-[#0076CE] text-white text-base w-full">
                        View services
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployDetails;
