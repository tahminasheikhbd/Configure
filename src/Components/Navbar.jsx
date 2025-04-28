/** @format */
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { TbDeviceAirpods } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
const Navmenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav
      className='container text-white py-5 flex items-cente justify-between
    '>
      <div className=' flex items-center justify-between '>
        {/* Menu-section */}
        <div className='flex items-center gap-2 text-3xl font-semibold'>
          <FaApple />
          Airpod Max
        </div>
        {/* Logo section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 '>
            {Navmenu.map((menu) => (
              <li key={menu.id} className='text-xl black'>
                <a
                  href={menu.link}
                  className='inline-block py-1 px-3  hover:shadow-[0_3px_0_-1px_ ] font-semibold '>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className=''>
              <FaRegCircleUser className='text-xl ps-14' />
            </button>
          </ul>
        </div>
        {/* Hamburger Menu logo */}
      </div>

      <button>
        <IoIosMenu className='text-4xl md:hidden ' />
      </button>
    </nav>
  );
};

export default Navbar;
