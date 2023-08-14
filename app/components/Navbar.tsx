// components/Navbar.tsx

import SigninButton from "./SigninButton";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-bg-black border-b-rem border-custom-gray p-4 max-[768px]:hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" hover:opacity-70 z-50">
            <Image
              src={"/logougv.png"}
              alt={"logo-ugv"}
              width={35}
              height={35}
              priority
            />
          </div>
          <ul className="flex space-x-4 items-center z-50">
            <li>
              <a href="#" className=" text-white hover:text-custom-color-blue">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-custom-color-blue">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-custom-color-blue">
                Construção
              </a>
            </li>
            <li>
              <Link
                href={"/UserPost"}
                className="text-white hover:text-custom-color-blue"
              >
                User Posts
              </Link>
            </li>
            <SigninButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
