import React from "react";
import line from "../../assets/images/line.svg";
import { useNavigate } from "react-router-dom";

export default function TermsAndCondition() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="relative flex flex-col max-w-screen bg-white -top-14 items-start rounded-t-2xl p-4">
        <div
          className="flex -mx-2
     items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
            onClick={() => handleBack()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="font-bold">Terms and Conditions</p>
        </div>
        <p className="my-2 text-xs mx-2">
          Please read the following terms and conditions carefully before using
          our truck booking app. By accessing or using our app, you agree to
          comply with and be bound by these terms and conditions.
        </p>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Service Usage</p>
          <p className="my-2 text-xs mx-2">
            Our truck booking app is intended for use by individuals or
            businesses who need to book truck services for transportation
            purposes. By using our app, you represent and warrant that you have
            the legal authority to enter into a binding contract and that you
            will use our app only for lawful purposes.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Booking and Payment</p>
          <p className="my-2 text-xs mx-2">
            Bookings made through our app are subject to availability and
            confirmation. You agree to provide accurate and complete information
            when making a booking, including payment information. Payment for
            services booked through our app will be processed as per the payment
            terms and conditions specified during the booking process.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <div className="relative mx-1">
          <p className="font-bold">Cancellation and Refunds</p>
          <p className="my-2 text-xs mx-2">
            Cancellation and refund policies may vary depending on the truck
            service provider and the specific booking. Please review the
            cancellation and refund policy provided during the booking process
            for details. Any refunds, if applicable, will be processed as per
            the specified policy.
          </p>
        </div>
        <div className="m-2">
          <img src={line} alt="alt : line"></img>
        </div>
      </div>
    </>
  );
}
