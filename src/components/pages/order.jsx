import { useNavigate } from "react-router-dom";
import vehicelSVG from "../../assets/images/vehicelsvg.svg";
import line from "../../assets/images/line.svg";
// import { Context } from "../Context/context";

export default function Order() {
  const navigate = useNavigate();
  console.log("ORDER");
  // <Context.Consumer>
  //   {(context) => console.log(context.bookingDetails)}
  // </Context.Consumer>;
  // const { bookingDetails } = useContext(Context);
  // console.log();
  function handleclick(e) {
    console.log("clicked");
    navigate("/success");
  }
  return (
    <>
      <div className="relative flex max-w-screen bg-white -top-14 items-center rounded-t-2xl p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="font-semibold"> Order Summary</p>
      </div>
      <div className="relative -top-16">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-3 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                    />
                  </svg>
                  Delhi (DL)
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </svg>
                <p className="flex flex-row items-center gap-2 justify-center text-gray-700 text-sm font-normal dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="red"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Mumbai (MH)
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                  <img src={vehicelSVG} className="w-4 h-4"></img>
                  <p className="text-gray-700 text-xs dark:text-gray-400">
                    TRUCK REQUIRED
                  </p>
                </div>
                <p className="text-gray-700 text-xs font-medium dark:text-gray-400">
                  10.0 Tonne(s) Truck
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-xs shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-3 justify-center items-center">
              <div>
                <p className="font-semibold text-sm">Damage Protection </p>
                <p className="text-gray-700 text-xs dark:text-gray-400">
                  Feature that applies to your consignment, providing protection
                  against accidental damage in transit
                  <a href="www.google.com"> learn more.</a>
                </p>
              </div>
              <div>
                <button
                  className="text-xs border border-blue text-blue font-semibold
               rounded-lg px-3 py-1"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-3 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                  </svg>
                  Boxes
                </p>
                <p className="flex flex-row gap-2 text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  10 Tones
                </p>
                <p className="text-gray-700 text-sm font-medium dark:text-gray-400">
                  ₹ 2000/TONNE
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg font-semibold dark:text-gray-400">
                  ₹ 16,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-12">
        <img src={line} alt="alt : line"></img>
      </div>

      <p className="flex relative -top-12 m-2 w-screen max-w-md px-6 font-semibold">
        Payment Option
      </p>
      <div className="relative -top-14 mt-6 mx-8 mb-3">
        <p className="-mt-3 mx-4">Mode</p>
        <div className="flex flex-row border border-solid  border-gray-300 rounded-md p-2 justify-start gap-6 mx-4">
          <div className="flex items-center ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Advance
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              To-Pay
            </label>
          </div>
        </div>
        <p className="mt-3 mx-4">Pay Via</p>
        <div className="flex flex-col border border-solid  border-gray-300 rounded-md p-2 justify-start gap-2 mx-4 divide-y">
          <div className="flex items-center ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Cash
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              UPI
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Internet Banking
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="btn btn-wide mt-3 bg-blue hover:bg-blue"
            onClick={handleclick}
          >
            Request
          </button>
        </div>
      </div>
    </>
  );
}
