import React from "react";
import { useNavigate } from "react-router-dom";
import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";

export default function DamageProtection() {
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);

  return (
    <>
      <div className="relative flex flex-col max-w-screen bg-white -top-14 items-center rounded-t-2xl p-4">
        <div className="relative mx-1">
          <p className="font-bold">Damage Protection</p>
          <p className="my-2 text-xs mx-2">
            Cargo insurance is a feature that applies to your consignment,
            providing protection against accidental damage in transit.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Insurance Type</p>
          <p className="my-2 text-xs mx-2">
            There are various types of cargo insurance available, such as
            comprehensive coverage, liability coverage, and more. Please consult
            with your insurance provider for more details.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Insurance Liability</p>
          <p className="my-2 text-xs mx-2">
            The insurance liability refers to the maximum amount that the
            insurance provider will cover in case of damage or loss to the
            cargo. It may vary depending on the insurance policy and coverage
            chosen.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Insurance Cost</p>
          <p className="my-2 text-xs mx-2">
            The cost of cargo insurance is typically calculated based on various
            factors such as the value of the cargo, the type of coverage, the
            destination, and more. Please check with your insurance provider for
            the exact cost of cargo insurance.
          </p>
        </div>
      </div>
    </>
  );
}
