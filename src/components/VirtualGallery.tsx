import { useState, useEffect, useCallback } from "react";
import { PaintingFrame } from "./PaintingFrame";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  PanelsTopLeft,
  Eye,
} from "lucide-react";
import { Header } from "./Header";

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

export const VirtualGallery = ({ initialPaintings }: { initialPaintings: Painting[] }) => {
  const [paintings] = useState<Painting[]>(initialPaintings);
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [isShowingOriginal, setIsShowingOriginal] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // --- Logic chuyển ảnh ---
  const changePainting = useCallback((newIndex: number) => {
    if (newIndex === currentPaintingIndex) return;
    setCurrentPaintingIndex(newIndex);
    setIsShowingOriginal(false);
  }, [currentPaintingIndex]);

  const nextPainting = useCallback(() => {
    const newIndex = (currentPaintingIndex + 1) % paintings.length;
    changePainting(newIndex);
  }, [currentPaintingIndex, paintings.length, changePainting]);

  const prevPainting = useCallback(() => {
    const newIndex = (currentPaintingIndex - 1 + paintings.length) % paintings.length;
    changePainting(newIndex);
  }, [currentPaintingIndex, paintings.length, changePainting]);

  // --- Logic lật ảnh ---
  const toggleOriginalImage = () => {
    if (!currentPainting.originalSrc || isFlipping) return;

    setIsFlipping(true);
    setTimeout(() => {
      setIsShowingOriginal(!isShowingOriginal);
      setIsFlipping(false);
    }, 300);
  };

  const currentPainting = paintings[currentPaintingIndex];
  const hasOriginal = !!currentPainting.originalSrc; 
  
  useEffect(() => {
      if (!hasOriginal && isShowingOriginal) {
          setIsShowingOriginal(false);
      }
  }, [currentPaintingIndex, hasOriginal, isShowingOriginal]);

  const currentImageSrc = isShowingOriginal && hasOriginal
    ? currentPainting.originalSrc
    : currentPainting.src;

  // Keyboard navigation (Giữ nguyên)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevPainting();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextPainting();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPainting, prevPainting]);

  // --- Bố cục Fixed ---
  return (
    <div className="h-screen relative overflow-hidden gallery-background flex flex-col">
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 1. HEADER - Cố định ở trên cùng */}
      <div className="relative z-30 w-full">
        <Header />
      </div>

      {/* 2. MAIN CONTENT - Phần cuộn được */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 relative overflow-y-auto z-10 
                       pb-[7rem]"> 
        
        {/* Vùng chứa toàn bộ các thành phần (Ảnh, Mô tả, Nút) */}
        <div className="flex flex-col items-center w-full max-w-5xl 2xl:max-w-6xl">

            {/* Vùng ảnh chính */}
            <div className="relative w-full flex-shrink-0">
                
                {/* 💥 THAY ĐỔI: Tăng kích thước nút trái */}
                <Button
                    // Thay size="icon" bằng size tùy chỉnh
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:bg-white/30 transition-colors 
                                p-3 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/30 md:bg-transparent hover:bg-black/50"
                    onClick={prevPainting}
                    aria-label="Previous painting"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </Button>

                {/* Khung ảnh - Hiệu ứng trượt/chuyển cảnh */}
                <div className="w-full h-full">
                    <PaintingFrame
                    key={currentPainting.id + currentImageSrc} 
                    imageSrc={currentImageSrc}
                    paintingInfo={currentPainting.info}
                    className={`w-full max-w-[48rem] 2xl:max-w-[56rem] mx-auto transition-all duration-500 ease-in-out ${isFlipping ? 'flipping' : ''}`}
                    isFlipping={isFlipping}
                    />
                </div>

                {/* 💥 THAY ĐỔI: Tăng kích thước nút phải */}
                <Button
                    // Thay size="icon" bằng size tùy chỉnh
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:bg-white/30 transition-colors 
                                p-3 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/30 md:bg-transparent hover:bg-black/50"
                    onClick={nextPainting}
                    aria-label="Next painting"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </Button>
            </div>

            {/* VÙNG MÔ TẢ (STORY) & NÚT */}
            <div className={`w-full max-w-[48rem] 2xl:max-w-[56rem] mt-4 flex-shrink-0 transition-all duration-300 ease-in-out`}>
                
                {/* PHẦN MÔ TẢ */}
                <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${showStory ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    aria-hidden={!showStory}
                >
                    <Card className="p-4 bg-black/70 backdrop-blur-sm border-gray-700 text-sm text-gray-300">
                        <h3 className="text-xl font-bold text-amber-500 mb-1">{currentPainting.info.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">
                            {currentPainting.info.artist} - {currentPainting.info.year}
                        </p>
                        <p>{currentPainting.info.description}</p>
                    </Card>
                </div>
                
                {/* HAI NÚT TƯƠNG TÁC - Đặt ngay dưới vùng Mô tả */}
                <div className="mt-4 mb-8 flex items-center gap-4 justify-center">
                    
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300"
                        onClick={() => setShowStory(!showStory)}
                    >
                        <PanelsTopLeft className="w-4 h-4 mr-2" />
                        {showStory ? "Ẩn Mô tả" : "Hiện Mô tả"}
                    </Button>

                    <Button
                        size="sm"
                        variant="outline"
                        disabled={!hasOriginal} 
                        className={`border-amber-500 transition-all duration-300 ${!hasOriginal
                            ? "text-gray-500 border-gray-500 cursor-not-allowed bg-black/50" 
                            : isShowingOriginal
                                ? "bg-amber-500 text-black hover:bg-amber-600" 
                                : "text-amber-500 hover:bg-amber-500 hover:text-black" 
                            }`}
                        onClick={toggleOriginalImage}
                    >
                        <Eye className="w-4 h-4 mr-2" />
                        {isShowingOriginal ? "Xem Đã xử lý" : "Xem Bản gốc"}
                    </Button>
                </div>
            </div>

        </div> 
      </main>
      
      {/* 3. THUMBNAIL BAR - Cố định ở dưới cùng */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex-shrink-0 py-4 px-8 flex items-center justify-center gap-3 overflow-x-auto bg-black/70 backdrop-blur-sm border-t border-gray-700">
        {paintings.map((p, idx) => (
          <button
            key={p.id}
            className={`relative w-20 h-16 rounded-md overflow-hidden ring-2 transition-all duration-300 flex-shrink-0 ${idx === currentPaintingIndex
                ? "ring-yellow-500 scale-105" 
                : "ring-transparent opacity-70 hover:opacity-100"
              }`}
            onClick={() => {
              changePainting(idx);
            }}
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
  );
};