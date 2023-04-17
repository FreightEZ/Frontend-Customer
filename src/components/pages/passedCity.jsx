import profile from "../../assets/images/profilePhoto.svg";

export default function PassedCity({ city }) {
  console.log(city);

  return (
    <div className="min-w-fit">
      {city.length > 0
        ? city.map((city) => {
            return (
              <div className="py-2">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700 rounded-md shadow-[0px_2px_2px_2px_rgba(0,0,0,0.1)] p-2"
                >
                  <li className="sm:py-2 h-10">
                    <div className="flex items-center justify-centers space-x-4">
                      <div className="flex-1 ">
                        <p className=" text-sm font-medium text-gray-900 truncate dark:text-white">
                          Crossed : {city.passed}
                        </p>
                        <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                          {" "}
                          {city.time} : {city.Date}{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })
        : null}
    </div>
  );
}
