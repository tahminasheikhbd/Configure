/** @format */
import React from "react";
import { FaLeaf } from "react-icons/fa";

const Navmenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
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
      className='
    '>
      <div className='container bg-[yellow] px-4  sm:px-8 md:px-12 lg:px-16'>
        <div className=' flex items-center justify-between '>
          {/* Menu-section */}
          <div className='flex items-center font-bold text-2xl gap-2 uppercase'>
            <p className='text-primary'>Fruit</p>
            <p className='text-secondary'>Store</p>
            <FaLeaf className='text-green-500' />
          </div>

          {/* Logo section */}

          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600 '>
              {Navmenu.map((menu) => (
                <li key={menu.id} className='text-xl black'>
                  <a
                    href={menu.link}
                    className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#de2c4d ] font-semibold before:w-1.5 before:h-1 before:bg-black before:top-1.5'>
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
