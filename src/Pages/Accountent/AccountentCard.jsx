import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountentCard = () => {
  const [searching, setSearching] = useState();
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://logoipsum-j6tp.onrender.com/details");
        const datas = await response.json();
        setInitialData(datas);
        setData(datas.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearching(e.target.value);
  };

  const handleClick = () => {
    const searchData = initialData.filter((item) =>
      item.name.toLowerCase().includes(searching.toLowerCase())
    );
    setData(searchData);
  };

  return (
    <div className="mt-16 mb-32">
      <div className="join flex justify-center ">
        <input
          className="input input-bordered join-item"
          onChange={(e) => handleChange(e)}
          placeholder="Search Candidate"
        />
        <button
          className="btn btn-info text-white font-bold join-item rounded-r-full"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 lg:mx-32 mx-12 gap-5">
        {data &&
          data.map((item) => (
            <>
              <div className="card card-compact bg-base-100 shadow-2xl mb-5">
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="w-full h-60 object-left-top "
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-3xl text-center font-bold">
                    {item.name}
                  </h2>
                  <p>{item.intro}</p>
                  <div className="card-actions mt-4 w-full justify-end">
                    <Link to={`/employDetails/${item.id}`}><button className="btn btn-outline btn-info">
                      Details
                    </button></Link>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default AccountentCard;
