import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Info, ZoomIn } from "lucide-react";

interface PaintingInfo {
  title: string;
  artist: string;
  year: number;
  description: string;
}

interface PaintingFrameProps {
  imageSrc: string;
  paintingInfo: PaintingInfo;
  onImageChange?: (file: File) => void;
  className?: string;
  isFlipping?: boolean;
}

export const PaintingFrame = ({
  imageSrc,
  paintingInfo,
  onImageChange,
  className = "",
  isFlipping = false,
}: PaintingFrameProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageChange) {
      onImageChange(file);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer shadow layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-800/30 rounded-2xl blur-xl transform rotate-1 scale-105"></div>

      {/* Main frame container */}
      <div className="relative transform transition-all duration-500 ">
        {/* Decorative corner elements */}

        {/* Main frame with multiple layers */}
        <div className="relative p-8 rounded-2xl shadow-2xl pb-2 pt-0">
          {/* Frame border with ornate design */}
          <div className="relative p-1 rounded-xl overflow-hidden artistic-frame-outer">
            {/* Inner decorative border */}
            <div className="relative p-2 rounded-lg artistic-frame-inner">
              {/* Canvas area */}
              <div className="relative bg-white rounded-lg overflow-hidden aspect-[4/3] shadow-inner border-2 border-amber-100">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

                <img
                  src={imageSrc}
                  alt={paintingInfo.title}
                  className={`w-full h-full object-cover transition-all duration-700 flip-image
                    ${isZoomed ? "scale-110" : "scale-100"} filter drop-shadow-lg`}
                />

                {/* Subtle vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Control buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="bg-white/95 hover:bg-white text-foreground shadow-lg backdrop-blur-sm border border-amber-200"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>

                  {/* <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setShowInfo(!showInfo)}
                    className="bg-white/95 hover:bg-white text-foreground shadow-lg backdrop-blur-sm border border-amber-200"
                  >
                    <Info className="w-4 h-4" />
                  </Button> */}
                </div>

                {/* Upload button */}
                {onImageChange && (
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/95 hover:bg-white text-foreground shadow-lg backdrop-blur-sm border border-amber-200"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Thay ảnh
                      </Button>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showInfo && (
        <Card
          className="absolute top-4 left-4 p-4 max-w-xs z-10 animate-in slide-in-from-left-5 duration-300"
          style={{
            background: "var(--gradient-info)",
            boxShadow: "var(--shadow-info)",
          }}
        >
          <div className="text-white">
            <h3 className="font-bold text-lg mb-2">{paintingInfo.title}</h3>
            <p className="text-sm opacity-90 mb-1">
              <span className="font-medium">Tác giả:</span>{" "}
              {paintingInfo.artist}
            </p>
            <p className="text-sm opacity-90 mb-3">
              <span className="font-medium">Năm sáng tác:</span>{" "}
              {paintingInfo.year}
            </p>
            <p className="text-xs opacity-80 leading-relaxed">
              {paintingInfo.description}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
