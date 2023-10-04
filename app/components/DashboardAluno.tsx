"use client";

import { FaHome, FaUser, FaCog, FaArrowLeft } from "react-icons/fa";

import { useSession } from "next-auth/react";

const DashboardAluno = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <>
      <div className="w-[98vw]">
        <div className="p-7">
          <h4 className="text-white text-lg font-semibold">
            <span className="text-white">Dashboard /</span> Início
          </h4>
          <h1 className="text-2xl font-semibold text-white">
            <span className="text-2xl font-light text-white">
              Welcome back,&nbsp;
            </span>
            {session.user.name}
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-[1rem] px-7">
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">
                    Subscriptions
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +2350
                  </h4>
                  <p className="text-white text-xs">+180.1% from last month</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">
                    Subscriptions
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +2350
                  </h4>
                  <p className="text-white text-xs">+180.1% from last month</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">
                    Subscriptions
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +2350
                  </h4>
                  <p className="text-white text-xs">+180.1% from last month</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[9rem] flex flex-col justify-center items-center items-left">
            <div className="inline-block text-left">
              <div className="flex gap-[5rem]">
                <div>
                  <p className="text-white text-sm font-medium">
                    Subscriptions
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight text-white pt-3">
                    +2350
                  </h4>
                  <p className="text-white text-xs">+180.1% from last month</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[1rem] py-7 px-7">
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[27rem]"></div>
          <div className="border-rem border-custom-gray rounded-lg w-[100%] h-[27rem]"></div>
        </div>
      </div>
    </>
  );
};

export default DashboardAluno;
