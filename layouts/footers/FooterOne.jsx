import Link from "next/link";
import React from "react";
import {DockDemo} from '@/components/common/IconsDemo'
const FooterOne = () => {
  return (
    <div className="w-full mt-5 p-2 border-t ">
      <div className="w-full flex md:flex-row flex-col text-center  justify-between md:px-28 font-poppins">
        <div className="">
          <ul className="list-none text-base leading-10">
            <li>
              <Link href="/about" className="text-black hover:text-gray-700">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-black hover:text-gray-700">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                ALBUMS
              </Link>
            </li>
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none text-base leading-10">
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="" className="text-black hover:text-gray-700">
                TERMS OF CONDITIONS
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <ul className="list-none text-base leading-10">
              <li>
                <Link href="/contact" className="text-black hover:text-gray-700">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-black hover:text-gray-700">
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-black hover:text-gray-700">
                  FACEBOOK
                </Link>
              </li>
              <li>
                <Link href="#!" className="text-black hover:text-gray-700">
                  TWITTER
                </Link>
              </li>
            </ul>
        </div>
      </div>
      <p className="text-center mt-4 text-xs md:text-base font-poppins font-light">© 2025 MM Weddings® Global Inc.</p>
    </div>
  );
};

export default FooterOne;
