import profile from "../../assets/images/profilePhoto.svg";
export default function SearchList({ filteredOrder }) {
  console.log(filteredOrder);
  return (
    <div className="min-w-fit">
      {filteredOrder.map((filter) => {
        return (
          <div className="py-1">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 border-solid rounded-md border-2 border-black-200 p-2"
            >
              <li className="sm:py-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={profile}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {filter.orderId}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {filter.dropoffLocation}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
