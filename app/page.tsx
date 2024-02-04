"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import Navbar from "./components/Navbar";

interface ItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const itemsData: ItemProps[] = [
  {
    src: "/tailwindicon.png",
    alt: "Imagem 1",
    title: "Tailwind",
    description:
      "Simplifique o desenvolvimento de UI com o Tailwind, um framework CSS utilitário que permite criar designs elegantes com classes pré-definidas.",
  },
  {
    src: "/typescripticon.png",
    alt: "Imagem 2",
    title: "Typescript",
    description:
      "Eleve a robustez do seu código com TypeScript, uma linguagem de programação que adiciona tipagem estática ao JavaScript, facilitando a detecção de erros antes da execução.",
  },
  {
    src: "/yarn.png",
    alt: "Imagem 2",
    title: "Yarn",
    description:
      "Gerencie suas dependências JavaScript de forma eficiente com o Yarn, um gerenciador de pacotes que oferece desempenho aprimorado e recursos de segurança.",
  },
  {
    src: "/ubuntu.png",
    alt: "Imagem 2",
    title: "Ubuntu",
    description:
      "Experimente a potência do Ubuntu, um sistema operacional de código aberto baseado no Linux, conhecido por sua estabilidade e facilidade de uso.",
  },
  {
    src: "/visualcode.webp",
    alt: "Imagem 2",
    title: "Visual Code",
    description:
      "Maximize a produtividade do desenvolvedor com o Visual Studio Code, um editor de código leve e extensível, repleto de recursos e suporte para diversas linguagens.",
  },
  {
    src: "/nexticon.png",
    alt: "Imagem 2",
    title: "Nextjs",
    description:
      "Desenvolva aplicações web modernas e escaláveis com o Next.js, um framework React que simplifica o processo de criação e renderização de páginas.",
  },
  {
    src: "/nextauth.jpg",
    alt: "Imagem 2",
    title: "Next Auth",
    description:
      "Adicione autenticação fácil e segura às suas aplicações Next.js com o Next Auth, simplificando a implementação de fluxos de login social e autenticação JWT.",
  },
  {
    src: "/jwt.png",
    alt: "Imagem 2",
    title: "JWT",
    description:
      "Garanta a segurança na comunicação entre serviços com JWT, uma técnica de autenticação que permite transmitir informações de forma assinada e criptografada em formato JSON.",
  },
  {
    src: "/bcrypt.png",
    alt: "Imagem 2",
    title: "Bcrypt",
    description:
      "Proteja as senhas em suas aplicações com Bcrypt, um algoritmo de hash projetado para ser lento e resistente a ataques de força bruta, proporcionando maior segurança.",
  },
];

const Home: React.FC<ItemProps> = ({ src, alt, title, description }) => {
  return (
    <>
      <Navbar />
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
          <span className="block rounded-md bg-white pr-10 pl-10 pt-2 pb-2 text-sm font-medium text-dark dark:bg-custom-bg-black">
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
                fillOpacity="0.8"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#E5A303" />
                  <stop offset="1" stopColor="#204B9A" />
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
      <section className="mx-auto text-center mb-[500px]">
        <div className="text-blue-600 text-xl mb-2 sm:text-2xl lg:text-3xl">
          Quais
        </div>
        <div className="text-white text-3xl font-bold sm:text-4xl lg:text-5xl">
          Tecnologias Utilizadas
        </div>
        <div className="mt-2 text-lg leading-8 text-gray-300 sm:text-xl">
          No projeto Dashboard UGV?
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-start items-start mt-5">
          {itemsData.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-start items-start gap-5 py-5 px-5 rounded-lg w-[30rem] mx-auto sm:w-[90%] h-[20rem]"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image src={item.src} alt={item.alt} height={55} width={55} />
              </div>
              <h4 className="text-black text-[1.8rem] pt-4">{item.title}</h4>
              <p className="text-left text-lg text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden bg-custom-bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Dashboard
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Um fluxo melhor de estudo
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Lorem ipsum, dolor sit amet consetetetetur elit adipisicing.
                    Maiores impedem perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-white"></dt>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Texto01
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Texto02
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Texto03
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-custom-bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Transactions every 24 hours
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  text-white sm:text-5xl">
                  44 million
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  Assets under holding
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  text-white sm:text-5xl">
                  $119 trillion
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  New users annually
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  text-white sm:text-5xl">
                  46,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 md:w-1/2 w-full p-4">
            <div className="p-8 rounded-xl">
              <h4 className="mb-2 text-lg font-semibold">Title</h4>
              <a className="text-base">
                {/* <div className="bg-white p-[3.5rem] rounded-lg"> */}
                <div>
                  <Image
                    src={"/instagramnotback.png"}
                    alt={"Icone do TailwindCss"}
                    height={30}
                    width={30}
                    className=""
                  />
                </div>
                {/* </div> */}
              </a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full p-4">
            <div className="p-8 rounded-xl">
              <h4 className="mb-2 text-lg font-semibold">Title</h4>
              <a className="text-base"> Link Text</a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full p-4">
            <div className="p-8 rounded-xl">
              <h4 className="mb-2 text-lg font-semibold">Title</h4>
              <a className="text-base"> Link Text</a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
              <br />
              <a className="text-base"> Link Text </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full p-4">
            <div className="p-8 rounded-xl">
              <h4 className="mb-2 text-lg font-semibold">More Info</h4>
              <p className="text-base">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                recusandae libero possimus culpa quod{" "}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="px-12 py-2">
          <p className="text-sm">
            © 2023 <a href="https://uniao.ugv.edu.br">CodeBusters</a>. All
            rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
