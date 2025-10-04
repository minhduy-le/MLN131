import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";

interface HeaderProps {
  showLogo?: boolean;
}

export const Header = ({ showLogo = true }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-colors flex items-center space-x-1";
    const isCurrentActive = isActive(path);

    if (isCurrentActive) {
      return `${baseClasses} text-yellow-400 hover:text-yellow-300`;
    }

    return `${baseClasses} text-white hover:text-yellow-400`;
  };

  return (
    <nav
      className="relative z-10 backdrop-blur-sm border-b border-gray-700"
      style={{ backgroundColor: "#532218" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <img
              src="/assets/Logo_Trường_Đại_học_FPT.svg.png"
              alt="Logo"
              className="h-12 w-auto mr-4"
            /> */}
            <Link to="/" className="flex items-center group cursor-pointer">
              <h1
                className="text-3xl font-bold font-sans-serif transition-colors"
                style={{ color: "#e7e3e1" }} 
              >
                Hội Sử Mùa Thu
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={getLinkClassName("/")}
            >
              <span className="font-montserrat">Trang chủ</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
            <Link
              to="/members"
              className={getLinkClassName("/members")}
            >
              <span className="font-montserrat">Thành viên</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
            <Link
              to="/products"
              className={getLinkClassName("/products")}
            >
              <span className="font-montserrat">Sản phẩm</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
            <Link
              to="/exhibition"
              className={getLinkClassName("/exhibition")}
            >
              <span className="font-montserrat">Triển lãm</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-white hover:text-amber-400 transition-colors cursor-pointer">
              <Search className="w-5 h-5" />
            </div>

            <button
              className="md:hidden text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-gray-700">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-yellow-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/members"
              className="block text-white hover:text-yellow-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Thành viên
            </Link>
            <Link
              to="/products"
              className="block text-white hover:text-yellow-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link
              to="/exhibition"
              className="block text-white hover:text-yellow-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Triển lãm
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
