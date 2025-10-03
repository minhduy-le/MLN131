import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Artwork ${i + 1}`,
  artist: `Artist ${String.fromCharCode(65 + i)}`,
  year: 2020 + i,
  img: "/assets/sample-painting.jfif",
}));

const Products = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <nav
        className="relative z-10 backdrop-blur-sm border-b border-gray-700"
        style={{ backgroundColor: "#532218" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <span className="font-montserrat">Trang chủ</span>
                <ChevronDown className="w-3 h-3" />
              </Link>
              <Link
                to="/members"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <span className="font-montserrat">Thành viên</span>
                <ChevronDown className="w-3 h-3" />
              </Link>
              <Link
                to="/products"
                className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1"
              >
                <span className="font-montserrat">Sản phẩm</span>
                <ChevronDown className="w-3 h-3" />
              </Link>
              <Link
                to="/exhibition"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
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
                HOME
              </Link>
              <Link
                to="/products"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PAGE
              </Link>
              <Link
                to="/members"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ARTIST
              </Link>
              <Link
                to="/exhibition"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FEATURES
              </Link>
              <Link
                to="/products"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                to="/members"
                className="block text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4 font-montserrat">
            ART COLLECTION
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our curated selection of contemporary artworks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-black/30 backdrop-blur-sm border-gray-700 hover:border-amber-400 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-amber-400 text-sm mb-1">{item.artist}</p>
                <p className="text-gray-400 text-xs">{item.year}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
