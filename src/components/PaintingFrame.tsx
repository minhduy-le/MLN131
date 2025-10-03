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
}

export const PaintingFrame = ({
  imageSrc,
  paintingInfo,
  onImageChange,
  className = "",
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
      <div className="relative transform transition-all duration-500">
        <div
          className="relative p-6 rounded-xl"
          style={{
            background: "var(--gradient-frame)",
          }}
        >
          <div className="relative p-2  rounded-lg">
            <div className="relative bg-white rounded overflow-hidden aspect-[4/3]">
              <img
                src={imageSrc}
                alt={paintingInfo.title}
                className={`w-full h-full object-cover transition-transform duration-700 
                  ${isZoomed ? "scale-110" : "scale-100"}`}
              />

              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="bg-white/90 hover:bg-white text-foreground"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>

                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setShowInfo(!showInfo)}
                  className="bg-white/90 hover:bg-white text-foreground"
                >
                  <Info className="w-4 h-4" />
                </Button>
              </div>

              {onImageChange && (
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-foreground"
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
