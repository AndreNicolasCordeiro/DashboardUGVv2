"use client";

import { FaHome, FaUser, FaCog, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    { title: "Media" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={`bg-slate-900 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } relative duration-300`}
        >
          <FaArrowLeft
            className={`bg-white rounded-full absolute text-3xl -right-3 top-9 border border-slate-900 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <FaHome className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2" />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              UGV
            </h1>
          </div>
          <div className="flex items-center rounded-md bg-slate-500 mt-6 px-4 py-2">
            <FaUser className="text-white text-lg block float-left cursor-pointer" />
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  } `}
                >
                  <span className="text-2xl block float-left">
                    <FaCog />
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>

        <div className="p-7">
          <h1 className="text-2xl font-semibold text-white">Homepage</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
