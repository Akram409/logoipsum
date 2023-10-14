import { useEffect, useState } from "react";

const AccountentCard = () => {
  const [searching, setSearching] = useState();
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/details");
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
  console.log(data);
  return (
    <div className="mt-16">
      <div className="join flex justify-center ">
        <input
          className="input input-bordered join-item"
          onChange={(e) => handleChange(e)}
          placeholder="Search here"
        />
        <button
          className="btn btn-info text-white font-bold join-item rounded-r-full"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 mt-7 mx-32">
        {data &&
          data.map((item) => (
            <>
              <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="w-full h-60 object-fill"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-3xl text-center font-bold">
                    {item.name}
                  </h2>
                  <p>{item.intro}</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-outline btn-info w-full">
                      Details
                    </button>
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
