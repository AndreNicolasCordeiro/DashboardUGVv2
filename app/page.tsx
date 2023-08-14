"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-20 ">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl uppercase font-poppins text-center max-w-2xl z-50">
          Dashboard UGV
        </h1>
        <p className="leading-8 text-gray-300 text-lg md:text-xl font-space-grotesk pt-2 pb-5 text-center max-w-lg z-50">
          Conheça a nova dashboard do ecossistema UGV para você!
        </p>

        <button
          onClick={() => signIn()}
          className="animate-border inline-block rounded-lg bg-gray-00 from-blue-800 to-yellow-500 bg-[length:400%_400%] p-0.5 [animation-duration:_2s] hover:bg-gradient-to-r dark:bg-gray-800 z-50"
        >
          <span className="block rounded-md bg-white pr-10 pl-10 pt-2 pb-2 text-sm font-medium text-gray-900 dark:bg-custom-bg-black dark:text-white">
            Entrar
          </span>
        </button>
        <div className="mt-11 z-50">
          <dl className="grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Mais rápido</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                12x
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Responsivo</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                100%
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Usuários</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                10.000
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Satisfação</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                200+
              </dd>
            </div>
          </dl>
        </div>
      </main>

      <div className="lights"></div>
      <div className="lightsleft"></div>
      <div className="lightsblack"></div>
      <div className="lightsblackbottom"></div>
      <div className="items-center justify-center w-full h-full overflow-hidden">
        <div className="![perspective:1000px] block-background_container">
          <div className="transform:rotateX(75deg);position:absolute;top:0;bottom:0;left:0;right:0 containerblock">
            <div className="blockhero-background"></div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-custom-bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 border-2 border-custom-gray">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.8"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#E5A303" />
                  <stop offset="1" stop-color="#204B9A" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Aumente sua produtividade. Comece a usar nosso aplicativo hoje.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Acesse tudo o que você precisa em um só lugar! Desenvolvido com
                as melhores tecnologias do mercado.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Entrar
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Saiba mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative h-80">
              <img
                className="absolute top-5 w-[57rem] max-w-none rounded-md bg-white/5"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width="1824"
                height="1080"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto text-center">
        <div className="text-blue-600 text-xl mb-1">Quais</div>
        <div className=" text-white text-3xl font-bold sm:text-4xl">
          Tecnologias Utilizadas
        </div>
        <div className="mt-2 text-lg leading-8 text-gray-300">
          No projeto Dashboard UGV?
        </div>

        <div className="grid grid-cols-3 px-[10rem] pt-[5rem] gap-10">
          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/tailwindicon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              TailwindCss
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>

          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/nexticon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              NextJs
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>

          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/typescripticon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              TypeScript
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>

          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/tailwindicon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              TailwindCss
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>

          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/nexticon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              NextJs
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>

          <div className="bg-white p-[3.5rem] rounded-lg">
            <div className=" w-[50px] h-[30px]">
              <Image
                src={"/typescripticon.png"}
                alt={"Icone do TailwindCss"}
                height={55}
                width={55}
              />
            </div>
            <h4 className="text-black text-3xl font-bold sm:text-4xl text-start pt-8">
              TypeScript
            </h4>
            <p className="mt-3 text-lg leading-2 text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              enim sem, fringilla tempor id risus. Ut in viverra metus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
