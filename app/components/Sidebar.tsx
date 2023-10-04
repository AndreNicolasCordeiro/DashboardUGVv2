"use client";

import { FaHome, FaUser, FaCog, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

import DashboardAluno from "./DashboardAluno";
import Link from "next/link";

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
          className={`bg-custom-bg-black h-screen p-5 pt-8 border-rem border-custom-gray rounded-lg ${
            open ? "w-72" : "w-20"
          } relative duration-300`}
          onClick={() => setOpen(!open)}
        >
          <div className="inline-flex items-center rounded-lg">
            <Link href={"/"}>
              <FaHome className="text-white text-4xl rounded cursor-pointer block float-left mr-2" />
            </Link>
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              UGV
            </h1>
          </div>
          <div className="flex items-center rounded-md bg-white mt-6 px-4 py-2">
            <FaUser className="text-black text-lg block float-left cursor-pointer" />
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black duration-300 rounded-md ${
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
        <DashboardAluno />
      </div>
    </>
  );
};

export default Sidebar;
