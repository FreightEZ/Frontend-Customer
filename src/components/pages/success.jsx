import { useNavigate } from "react-router-dom";
import sucessGif from "../../assets/images/successGif.svg";
export default function Success() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/book");
  }, 5000);
  return (
    <div className="flex flex-col mt-40 items-center justify-center">
      <img
        className="animate-bounce"
        src={sucessGif}
        alt="alt : sucessGif"
      ></img>
      <div className="text-center p-5">
        <p className="text-lg font-semibold text-gray-900">
          Your request for cargo transit is being shared with all registered
          drivers in your area.
        </p>
        <p className="mt-2 text-gray-600">
          Please wait while we search for available drivers to fulfill your
          request.
        </p>
        <p className="mt-2 text-gray-600">Thank you for your patience!</p>
      </div>
    </div>
  );
}
