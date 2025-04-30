import React from "react";
 // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#E7762F] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src="/logo.png" alt="Waah logo" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 bg-white rounded-md"></div>
            <div className="w-10 h-10 bg-white rounded-md"></div>
            <div className="w-10 h-10 bg-white rounded-md"></div>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">SHOP</h4>
          <ul className="space-y-2 text-sm">
            <li>All Products</li>
            <li>New Launches</li>
            <li>Most Loved</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Orders and Shipping</li>
            <li>Returns and Refunds</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
          <ul className="space-y-2 text-sm">
            <li>Ph: 0000000000</li>
            <li>We are available Monday to Saturday: 10 AM - 6 PM</li>
            <li>Email: hello@champaranachar.com</li>
            <li>We try to respond within 48 hours</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
