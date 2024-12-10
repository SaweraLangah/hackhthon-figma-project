import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaInstagram, FaRegHeart, FaSearch, FaShoppingCart, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { MdOutlineFacebook } from 'react-icons/md';

const UpperHeader= () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="material-icons">
            <FiPhone /> 
            </span>
            <a href="tel:+9212345678" className="hover:underline">+9212345678</a>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons">
            <IoIosMail />
            </span>
            <a
              href="saweralangah347@gmail.com"
              className="hover:underline"
            >
             saweralangah347@gmail.com
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:block">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <span>Follow Us :</span>
          <a
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
            <FaInstagram />
          </a>

          <a
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube"></i>
            <FaYoutube />
          </a>

          <a
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
            <MdOutlineFacebook />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;



export const Header = () => {
  return (
    <div>
     
    <header className="bg-white border-b border-white-200">
      <div className="container mx-auto flex items-center justify-between py-2 px-2">
        {/* Logo Section */}
        <div className="text-xl font-bold text-black">
          <a href="/">
            <a>Bandage</a>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-6 text-black-700">
          <a href="/">
            <a className="hover:text-black-600 transition">Home</a>
          </a>
          <section className='text-black'>
            <option value="Shop">Shop</option>
          </section>
          <a href="/about">
            <a className="hover:text-black-600 transition">About</a>
          </a>
          <a href="/blog">
            <a className="hover:text-black-600 transition">Blog</a>
          </a>
          <a href="/contact">
            <a className="hover:text-black-600 transition">Contact</a>
          </a>
          <a href="/pages">
            <a className="hover:text-black-600 transition">Pages</a>
          </a>
        </nav>

        {/* Right Section */}
       
        <div className="flex items-center gap-4"><CgProfile className="text-blue-700 hover:text-blue-600"/>
          <a href="/login">
        
            <a className="text-blue-600 hover:underline ">Login / Register </a>
          </a>
         
          <button className="text-blue-700 hover:text-blue-600">
            <i className="fas fa-search"><FaSearch className='gap-4'/></i>
          </button>
          <button className="text-blue-700 hover:text-blue-600">
            <i className="fas fa-shopping-cart"><FaShoppingCart /></i>
          </button>
          <button className="text-blue-700 hover:text-blue-600">
            <i className="fas fa-heart"><FaRegHeart /></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between py-2 px-4 border-t border-blue-200">
        <button className="text-gray-700 hover:text-blue-600">
          <i className="fas fa-bars"></i>
        </button>
        <a href="/">
          <a className="text-xl font-bold text-black">Bandage</a>
        </a>
      </div>
    </header>




    </div>
  )
}


