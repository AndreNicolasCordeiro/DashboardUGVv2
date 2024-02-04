import React from "react";

const NotFound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative items-center">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-white font-bold text-2xl">
                OCORREU UM ERRO!{" "}
              </h1>
              <p className="my-2 text-white">
                Desculpe por isso! Entre em contato ou retorne a página inicial!
              </p>
              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Voltar{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};

export default NotFound;
