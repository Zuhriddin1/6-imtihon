import { useEffect, useState } from "react";
import Cards from "./Cards";
const Home = () => {
  const [get, setGet] = useState([]);
  // const [loading, setLoading] = useState();
  const getPost = async () => {
    const res = await fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries`
    );
    const data = await res.json();
    setGet(data.data);
    // setLoading(true);
  };
  useEffect(() => {
    getPost();
    // setLoading(false);
  }, []);
  return (
    <main key={get.id}>
      <div className="relative items-center dark:bg-black mt-[55px] ml-[58px] flex">
        <svg
          width="18"
          height="18"
          className="absolute translate-x-8"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
        <input
          type="text"
          placeholder="                Search for a country…"
          className="input input-bordered h-[56px]  dark:bg-black dark:text-white rounded w-[480px]"
        />
        <div className="collapse bg-white text-black w-[200px] ml-[590px]">
          <input type="checkbox" className="peer" />
          <div className="collapse-title ">Filter by Region</div>
          <div className="collapse-content peer-checked:text-secondary-content text-black">
            <p className="cursor-pointer">Africa</p>
            <p className="mt-2 cursor-pointer">America</p>
            <p className="mt-2 cursor-pointer">Asia</p>
            <p className="mt-2 cursor-pointer">Europe</p>
            <p className="mt-2 cursor-pointer">Oceania</p>
          </div>
        </div>
      </div>
      {get.map(() => (
        <Cards key={get.id} get={get} />
      ))}
    </main>
  );
};
export default Home;
