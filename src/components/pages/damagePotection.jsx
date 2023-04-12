import { useNavigate } from "react-router-dom";
import vehicelSVG from "../../assets/images/vehicelsvg.svg";
import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";

export default function DamageProtection() {
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);
  return (
    <>
      <div className="relative flex flex-col max-w-screen bg-white -top-14 items-center rounded-t-2xl p-4">
        <div className="relative  mx-1">
          <p className="font-bold ">Damage Protection</p>
          <p className=" p-2 -my-2">
            feature that applies to your consignment, providing protection
            against accidental damage in transit.
          </p>
          <div className="m-2">
            <img src={line} alt="alt : line"></img>
          </div>
        </div>
        <div className="relative  mx-1">
          <p className="font-bold "> Insurance Type </p>
          <p className=" p-2 -my-2">
            feature that applies to your consignment, providing protection
            against accidental damage in transit.
          </p>
          <div className="m-2">
            <img src={line} alt="alt : line"></img>
          </div>
        </div>
        <div className="relative  mx-1">
          <p className="font-bold "> Insurance Liability </p>
          <p className=" p-2 -my-2">
            feature that applies to your consignment, providing protection
            against accidental damage in transit.
          </p>
          <div className="m-2">
            <img src={line} alt="alt : line"></img>
          </div>
        </div>
        <div className="relative  mx-1">
          <p className="font-bold"> Insurance Cost </p>
          <p className=" p-2 -my-2">
            feature that applies to your consignment, providing protection
            against accidental damage in transit.
          </p>
          <div className="m-2">
            <img src={line} alt="alt : line"></img>
          </div>
        </div>
      </div>
    </>
  );
}
