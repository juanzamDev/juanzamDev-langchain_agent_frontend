import React from "react";

const ButtonSideBarT = ({ open, openT, setOpenT }) => {
  return (
    // Button movil
    <div className={`flex-initial w-7 bg-gray-300 pt-32 pr-2 block sm:hidden ` }>
      <button
        onClick={() => setOpenT((newState) => !newState)}
        className={`text-gray-700 hover:text-blue-900 `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`w-6 h-6 ${openT && "hidden"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`w-6 h-6 ${!openT && "hidden"}`}
        >
          <path
            strokeinecap="round"
            strokeinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonSideBarT;
