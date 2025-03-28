import { useState } from "react";
import { Menu, X, Home, User, Package, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-4 py-2 shadow-md relative md:hidden">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="font-semibold text-lg">Arul Jayam Agri Machinery</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      
      
      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden">
        <ul className="flex justify-around py-2 text-green-700">
          <li className="flex flex-col items-center"><Home size={24} /><span className="text-xs">Home</span></li>
          <li className="flex flex-col items-center"><User size={24} /><span className="text-xs">Profile</span></li>
          <li className="flex flex-col items-center"><Package size={24} /><span className="text-xs">Our Range</span></li>
          <li className="flex flex-col items-center"><Phone size={24} /><span className="text-xs">Call Us</span></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
