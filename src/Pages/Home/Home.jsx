import { Link } from "react-router-dom";
import "../../App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./donationData.json");
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [trueOrFalse, setTrueOrFalse] = useState(false);

  return (
    <>
      <div className="background_image mb-32">
        <div className="mx-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 min-[530px]:mb-8 lg:mb-10">
            I Grow By Helping People In Need
          </h1>
          <form action="" className="flex justify-center items-center">
            <input
              className="w-full max-w-[600px] py-3 px-4 rounded-l-lg border border-slate-400 focus:outline-0"
              type="text"
              placeholder="Seach here ..."
              onChange={(event) => setInputValue(event.target.value)}
            />
            <Link
              className="py-3 px-4 bg-[#FF444A] text-white rounded-r-lg"
              onClick={() => setTrueOrFalse(true)}
            >
              Search
            </Link>
          </form>
        </div>
      </div>

      <div className="grid mx-5 min-[670px]:grid-cols-2 min-[970px]:grid-cols-3 min-[1260px]:grid-cols-4 xl:max-w-screen-xl xl:mx-auto gap-5 mb-6">
        {trueOrFalse
          ? Array.from(
              data.filter((filterData) => {
                if (inputValue === "") {
                  return filterData;
                } else if (
                  filterData.category
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                ) {
                  return filterData;
                }
              })
            ).map((data, index) => <Card key={index} data={data}></Card>)
          : Array.from(data).map((data, index) => (
              <Card key={index} data={data}></Card>
            ))}
      </div>
    </>
  );
};

export default Home;
