// components/Navbar.tsx

import SigninButton from "./SigninButton";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-xl font-semibold">
            My Website
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <Link href={"/UserPost"} className="text-white hover:underline">
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
