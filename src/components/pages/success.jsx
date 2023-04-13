import { useNavigate } from "react-router-dom";
import sucessGif from "../../assets/images/successGif.svg";
export default function Success() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/track");
  }, 4000);
  return (
    <div className="flex mt-64 items-center justify-center">
      <img src={sucessGif} alt="alt : sucessGif"></img>
    </div>
  );
}
