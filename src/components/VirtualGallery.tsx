import { useState } from "react";
import { PaintingFrame } from "./PaintingFrame";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  PanelsTopLeft,
  Eye,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SAMPLE_PAINTINGS } from "@/data/paintings";

interface Painting {
  id: string;
  src: string;
  originalSrc?: string;
  info: {
    title: string;
    artist: string;
    year: number;
    description: string;
  };
}

export const VirtualGallery = () => {
  const [paintings] = useState<Painting[]>(SAMPLE_PAINTINGS);
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [showStory, setShowStory] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nextPainting = () => {
    setCurrentPaintingIndex((prev) => (prev + 1) % paintings.length);
  };

  const prevPainting = () => {
    setCurrentPaintingIndex(
      (prev) => (prev - 1 + paintings.length) % paintings.length
    );
  };

  const currentPainting = paintings[currentPaintingIndex];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
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
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <span className="font-montserrat">Sản phẩm</span>
                <ChevronDown className="w-3 h-3" />
              </Link>
              <Link
                to="/exhibition"
                className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1"
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

      <main className="flex items-center justify-center min-h-screen pt-0 p-8 mt-6 ">
        <div className="relative max-w-[680px] w-full">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[580px]">
              <PaintingFrame
                imageSrc={currentPainting.src}
                paintingInfo={currentPainting.info}
                className="mx-auto"
              />
            </div>
          </div>

          {paintings.length > 1 && (
            <>
              <Button
                variant="outline"
                size="lg"
                onClick={prevPainting}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-black/30 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black shadow-lg w-14 h-14"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={nextPainting}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-black/30 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black shadow-lg w-14 h-14"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}
          <div className="mt-6 flex items-center gap-4 justify-center">
            <Button
              size="sm"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
              onClick={() => setShowStory(!showStory)}
            >
              <PanelsTopLeft className="w-4 h-4 mr-2" />{" "}
              {showStory ? "Hide Story" : "Show Story"}
            </Button>
            {currentPainting.originalSrc && (
              <Button
                size="sm"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                onClick={() =>
                  window.open(currentPainting.originalSrc, "_blank")
                }
              >
                <Eye className="w-4 h-4 mr-2" /> View Original
              </Button>
            )}
          </div>

          {showStory && (
            <Card className="mt-4 p-4 bg-black/30 backdrop-blur-sm border-gray-700 text-sm text-gray-300">
              {currentPainting.info.description}
            </Card>
          )}

          <div className="mt-6 flex items-center justify-center gap-3 overflow-x-auto">
            {paintings.map((p, idx) => (
              <button
                key={p.id}
                className={`relative w-20 h-16 rounded-md overflow-hidden ring-2 ${
                  idx === currentPaintingIndex
                    ? "ring-yellow-500"
                    : "ring-transparent"
                }`}
                onClick={() => setCurrentPaintingIndex(idx)}
              >
                <img
                  src={p.src}
                  alt={p.info.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </div>
  );
};
