import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchList({ filteredOrder }) {
  const navigate = useNavigate();

  const handleOrderClick = (orderId) => {
    // Navigate to /map with the orderId as a query parameter
    navigate(`/orderDetail?orderId=${orderId}`);
  };

  return (
    <div className="min-w-fit">
      {filteredOrder.length > 0 ? (
        filteredOrder.map((filter) => {
          return (
            <div className="py-1" key={filter.orderId}>
              <ul
                role="list"
                className="divide-y divide-gray-700 border-dotted rounded-md border-2 border-black-200 p-2"
              >
                <li
                  className="sm:py-2 cursor-pointer"
                  onClick={() => handleOrderClick(filter.orderId)}
                >
                  {/* Add onClick event handler to the order item */}
                  <div className="flex items-center justify-start space-x-4">
                    <p className="text-xs font-semibold text-gray-900 truncate dark:text-white">
                      Order Id: {filter.orderId}
                    </p>
                    <p>|</p>
                    <p className="text-xs font-semibold truncate dark:text-gray-400 m">
                      📍 {filter.pickupLocation} {"--->"} 🏁{" "}
                      {filter.dropoffLocation}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div>No orders found.</div>
      )}
    </div>
  );
}
