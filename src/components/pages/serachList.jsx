import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchList({ filteredOrder }) {
  const navigate = useNavigate();

  const handleOrderClick = (data) => {
    // Navigate to /map with the orderId as a query parameter
    const orderId = data._id;
    console.log("order ID  in search list", orderId);
    navigate(`/orderDetail?orderId=${orderId}`, { state: { data } });
  };

  return (
    <div className="max-w-sm max-h-screen mx-1">
      {filteredOrder.length > 0 ? (
        filteredOrder.map((filter) => {
          return (
            <div className="py-1" key={filter._id}>
              <ul
                role="list"
                className="divide-y divide-gray-700 border-dotted rounded-md border-2 border-black-200 p-2"
              >
                <li
                  className="sm:py-2 cursor-pointer"
                  onClick={() => handleOrderClick(filter)}
                >
                  {/* Add onClick event handler to the order item */}
                  <div className="flex flex-col items-start justify-center mx-2 gap-2">
                    <div>
                      <p className="text-sm font-bold text-gray-900 wrap dark:text-white">
                        Order Id: {filter._id}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold warp dark:text-gray-400 m">
                        📍 {filter.pickupLocation} {"--->"} 🏁{" "}
                        {filter.dropoffLocation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold warp dark:text-gray-400 m">
                        📦 {filter.goodsType}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center font-semibold text-lg">
          No orders found !
        </div>
      )}
    </div>
  );
}
