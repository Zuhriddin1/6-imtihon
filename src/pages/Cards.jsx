import { Link } from "react-router-dom";
const Cards = ({ get }) => {
  return (
    <main className="">
      <div>
        <div className="container flex flex-wrap dark:text-white">
          {get.map((d) => {
            return (
              <div className="grid grid-[2fr] bg-white dark:bg-black mt-[31px] gap-x-12 borderbox-border ">
                <div className="ml-12  mt-5">
                  <img
                    src={d.flags.svg}
                    width={284}
                    height={160}
                    className="ml-6"
                    alt=""
                  />
                  <div className="p-7 mb-[42px]">
                    <Link to={"/product:id"}>
                      <h2 className="card-title">{d.name.common}</h2>
                    </Link>
                    <div className="flex items-centem grow-0 gap-3 pt-2">
                      <p className="inline-block mt-3">
                        Population:<span>{d.population}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="mt-3">
                        Region:<span>{d.region}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="mt-3">
                        Capital:<span>{d.capital}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Cards;
