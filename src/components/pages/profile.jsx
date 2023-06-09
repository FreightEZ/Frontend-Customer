import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mandala from "../../assets/images/headerMandala.svg";
import profile from "../../assets/images/profilePhoto.svg";
import axios from "axios";
import { noteContext } from "../../Context/noteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Profile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const { emailLog } = useContext(noteContext);
  console.log("email note context: ", emailLog);
  const getDate = async (event) => {
    try {
      // Send POST request to /register endpoint with form data
      const response = await axios.post("/getProfileDetail", {
        email: emailLog,
      });

      // Handle successful response
      console.log(response);
      setFullName(response.data.fullName);
      setCompanyName(response.data.companyName);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phoneNumber);
      setCompanyAddress(response.data.companyAddress);
      setAboutCompany(response.data.aboutCompany);

      // Do something with response data, e.g., redirect to another page
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  useEffect(() => {
    getDate();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send PUT request to /updateProfileDetail endpoint with form data
      const response = await axios.put(`/updateProfileDetail/${email}`, {
        fullName: fullName, // assuming fullName is the updated field name
        companyName: companyName, // assuming companyName is the updated field name
        phoneNumber: phoneNumber, // assuming phoneNumber is the updated field name
        companyAddress: companyAddress, // assuming companyAddress is the updated field name
        aboutCompany: aboutCompany, // assuming aboutCompany is the updated field name
      });
      if (response.status == 200) {
        toast.success(response.data, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(response.data, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      // Handle successful response
      console.log(response);

      // Do something with response data, e.g., redirect to another page
    } catch (error) {
      // Handle error
      console.error(error);
      toast.error(error, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleBack = () => {
    navigate("/book");
  };

  return (
    <div>
      <ToastContainer />
      <div className="max-w-sm">
        <img src={mandala} alt="mandla pattern"></img>
        <div className="relative flex max-w-screen bg-white -top-14 items-center rounded-t-2xl p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
            onClick={() => handleBack()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <p className="font-semibold"> Profile</p>
        </div>
      </div>
      <div className="relative flex flex-col drop-shadow-2xl -top-9 items-center justify-center bg-white max-w-sm ">
        <img className="-mt-10 w-20 h-20" src={profile}></img>
        <div className="flex flex-col justify-center items-center">
          <div>
            <form className="flex flex-col items-center justify-start min-h-screen">
              <div className="">
                <label
                  for="fullName"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>

                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Name"
                    required
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>

                <label
                  for="companyName"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </label>

                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="companyName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your company Name"
                    required
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                  />
                </div>

                <label
                  for="phoneNumber"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91 111 111 111"
                    required
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
                <label
                  for="companyAddress"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Address
                </label>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="companyAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="eg: dalal street, Stock Exchange"
                    required
                    value={companyAddress}
                    onChange={(event) => setCompanyAddress(event.target.value)}
                  />
                </div>
                <label
                  for="bio"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About Company
                </label>
                <div className="relative mb-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <textarea
                    type="text"
                    id="bio"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min"
                    placeholder="Enter your secret"
                    required
                    rows="2"
                    value={aboutCompany}
                    onChange={(event) => setAboutCompany(event.target.value)}
                  />
                </div>
              </div>
              <button
                className="btn btn-wide mt-4 mb-16 bg-blue hover:bg-blue"
                onClick={handleFormSubmit}
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
