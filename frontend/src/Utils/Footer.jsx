// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ecobazar Description */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ecobazar</h3>
            <p className="text-sm mb-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <p className="text-sm"> 
              <span className="block"> <a href="tel:+2195550114">(219) 555-0114</a> </span>
              <span><a href="mailto:Proxy@gmail.com">Proxy@gmail.com</a></span>
            </p>
          </div>

          {/* My Account Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">My Account</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">My Account</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Order History</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Helps</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Proxy Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Proxy</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Shop</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Product</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-500">Facebook</a>
            <a href="#" className="text-white hover:text-gray-500">Twitter</a>
            <a href="#" className="text-white hover:text-gray-500">Pinterest</a>
            <a href="#" className="text-white hover:text-gray-500">Instagram</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <img src="https://cdn-icons-png.flaticon.com/512/179/179430.png" alt="Apple Pay" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/217/217429.png" alt="MasterCard" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Discover" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
