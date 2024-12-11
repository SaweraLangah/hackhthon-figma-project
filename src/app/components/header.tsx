import React from 'react';
import Link from 'next/link';
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
            <Link href="tel:+9212345678" className="hover:underline">+9212345678</Link>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons">
            <IoIosMail />
            </span>
            <Link
              href="saweralangah347@gmail.com"
              className="hover:underline"
            >
             saweralangah347@gmail.com
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:block">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <span>Follow Us :</span>
          <Link
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
            <FaInstagram />
          </Link>

          <Link
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube"></i>
            <FaYoutube />
          </Link>

          <Link
            href="#"
            className="hover:text-white-300 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
            <MdOutlineFacebook />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
            <FaTwitter />
          </Link>
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
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-6 text-black-700">
          <Link href="/" className="hover:text-black-600 transition">
            Home
          </Link>
          <section className='text-black'>
            <option value="Shop">Shop</option>
          </section>
          <Link href="/about" className="hover:text-black-600 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-black-600 transition">
           Blog
          </Link>
          <Link href="/contact" className="hover:text-black-600 transition">
           Contact
          </Link>
          <Link href="/pages" className="hover:text-black-600 transition">
            Pages
          </Link>
        </nav>

        {/* Right Section */}
       
        <div className="flex items-center gap-4"><CgProfile className="text-blue-700 hover:text-blue-600"/>
          <Link href="/login" className="text-blue-600 hover:underline ">
           Login / Register
          </Link>
         
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
        <Link href="/" className="text-xl font-bold text-black">
          Bandage
        </Link>
      </div>
    </header>




    </div>
  )
}


