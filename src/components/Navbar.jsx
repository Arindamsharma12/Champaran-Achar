import { LuUser  } from "react-icons/lu";

const Navbar = ()=>{
    return (
        <nav className="absolute top-0 left-0 w-full z-20 px-8 md:px-24 py-4 flex items-center justify-between bg-transparent font-montserrat">
              {/* Left Nav Items */}
              <div className="flex items-center space-x-8 text-black font-medium">
                <a href="#" className="hover:text-orange-600">SHOP <span className="text-xs">▼</span></a>
                <a href="#" className="hover:text-orange-600">ABOUT US</a>
                <a href="#" className="hover:text-orange-600">CONTACT US</a>
              </div>
        
              {/* Logo */}
              <div className="flex-shrink-0">
                <img src="/logo.png" alt="Waah Logo" className="h-20 md:h-20" />
              </div>
        
              {/* Right Nav Items */}
              <div className="flex items-center space-x-8 text-black font-medium">
                <a href="#" className="hover:text-orange-600">SEARCH</a>
                <a href="#" className="hover:text-orange-600">MY CART</a>
                <LuUser  className="text-2xl hover:text-orange-600 cursor-pointer" />
              </div>
            </nav>
    )
}

export default Navbar;