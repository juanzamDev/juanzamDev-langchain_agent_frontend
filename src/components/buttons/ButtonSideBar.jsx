import React from "react";

const ButtonSideBar = ({ open, setOpen }) => {
  return (
    <>
    {/* Button PC  */}
    <div className="w-8 md:w-6 bg-gray-300 pt-32 pl-1 hidden sm:block">
      <button
        onClick={() => setOpen((newState) => !newState)}
        className=" border-spacing-0 text-gray-700 hover:text-blue-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`w-6 h-6 ${open && "hidden"}`}
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
          className={`w-6 h-6 ${!open && "hidden"}`}
        >
          <path
            strokeinecap="round"
            strokeinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
    {/* Button movil */}
    <div className="w-8 md:w-6 bg-gray-300 pt-32 pl-1 block sm:hidden">
    <button
      onClick={() => setOpen((newState) => !newState)}
      className=" border-spacing-0 text-gray-700 hover:text-blue-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className={`w-6 h-6 ${!open && "hidden"}`}
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
        className={`w-6 h-6 ${open && "hidden"}`}
      >
        <path
          strokeinecap="round"
          strokeinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  </div>
  </>
  );
};

export default ButtonSideBar;
