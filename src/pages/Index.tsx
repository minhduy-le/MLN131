import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const originalItems = [
    { id: 1, image: "anh1.png", year: "1977", title: "Nguyên Khởi" },
    { id: 2, image: "anh2.png", year: "1979", title: "Bước Ngoặt" },
    { id: 3, image: "anh3.png", year: "1991", title: "Đổi Mới" },
    { id: 4, image: "anh4.png", year: "1995", title: "Hội Nhập" },
    { id: 5, image: "anh5.png", year: "2007", title: "WTO" },
  ];

  const carouselItems = [...originalItems, ...originalItems, ...originalItems];
  const itemWidth = 272;
  const visibleItems = 3;
  const maxPosition = originalItems.length * itemWidth;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-animate-id");
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, id || ""]));
          } else {
            setVisibleElements((prev) => {
              const newSet = new Set(prev);
              newSet.delete(id || "");
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-animate-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = (id: string) => {
    const isVisible = visibleElements.has(id);
    return `transition-all duration-1000 ease-out ${
      isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-8 scale-95"
    }`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCarouselPosition((prev) => {
          const newPosition = prev + itemWidth;
          if (newPosition >= maxPosition) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCarouselPosition(0);
            }, 100);
            return newPosition;
          }
          return newPosition;
        });
        setTimeout(() => setIsTransitioning(false), 1500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [maxPosition, itemWidth, isTransitioning]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCarouselPosition((prev) => {
        const newPosition = prev - itemWidth;
        if (newPosition < 0) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCarouselPosition(maxPosition - itemWidth);
          }, 100);
          return newPosition;
        }
        return newPosition;
      });
      setTimeout(() => setIsTransitioning(false), 1500);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCarouselPosition((prev) => {
        const newPosition = prev + itemWidth;
        if (newPosition >= maxPosition) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCarouselPosition(0);
          }, 100);
          return newPosition;
        }
        return newPosition;
      });
      setTimeout(() => setIsTransitioning(false), 1500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <nav
        className="relative z-10 backdrop-blur-sm border-b border-gray-700"
        style={{ backgroundColor: "#532218" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/assets/Logo_Trường_Đại_học_FPT.svg.png"
                alt="Logo"
                className="h-12 w-auto mr-4"
              />
              <h1
                className="text-xl font-bold text-white font-montserrat"
                style={{ color: "#532218" }}
              >
                Hội Sử Mùa Thu
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-white/10 font-medium"
              >
                <span className="font-montserrat">Phòng Chính</span>
              </Link>
              <Link
                to="/members"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-white/10 font-medium"
              >
                <span className="font-montserrat">Thành viên</span>
              </Link>
              <Link
                to="/products"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-white/10 font-medium"
              >
                <span className="font-montserrat">Phòng trưng bày</span>
              </Link>
              <Link
                to="/exhibition"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-white/10 font-medium"
              >
                <span className="font-montserrat">Phòng Triển Lãm</span>
              </Link>
            </div>
            <div className="w-32"></div>
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
        </div>
      </nav>

      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6"
        style={{
          backgroundImage: `url('/assets/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="flex justify-center items-start space-x-24 relative z-20">
                <div className="relative group">
                  <div className="w-56 h-72 bg-black border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src="/assets/1977.png"
                      alt="Artwork 1977"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative group mt-20">
                  <div className="w-56 h-72 bg-black border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src="/assets/1979.png"
                      alt="Artwork 1979"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="w-56 h-72 bg-black border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src="/assets/1991.png"
                      alt="Artwork 1991"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative group mt-20">
                  <div className="w-56 h-72 bg-black border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src="/assets/1995.jpg"
                      alt="Artwork 1995"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 relative z-20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                <Button
                  asChild
                  className="hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-4 rounded-xl border-0 text-lg flex-1 sm:flex-none sm:w-64 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/exhibition">Tham gia triển lãm</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold px-12 py-4 rounded-xl text-lg flex-1 sm:flex-none sm:w-64 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/products">Mua hàng</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className={`text-gray-400 text-sm uppercase tracking-widest mb-4 font-montserrat ${getAnimationClasses(
                "event-label"
              )}`}
              data-animate-id="event-label"
            >
              Sự kiện nổi bật
            </p>
            <h5
              className={`text-2xl md:text-5xl font-bold text-gray-800 font-montserrat ${getAnimationClasses(
                "event-title"
              )}`}
              data-animate-id="event-title"
              style={{ color: "#532218" }}
            >
              Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO). Hình ảnh_ Lễ
              ký kết thỏa thuận gia nhập WTO tại TP. Hồ Chí Minh (2006), trước
              khi chính thức trở thành thành viên WTO
            </h5>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`relative ${getAnimationClasses("event-image")}`}
              data-animate-id="event-image"
            >
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/2007.png"
                  alt="Art Studio"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div
              className={`space-y-6 ${getAnimationClasses("event-content")}`}
              data-animate-id="event-content"
            >
              <h3
                className="text-2xl font-bold text-gray-800 font-montserrat"
                style={{ color: "#532218" }}
              >
                Thông tin triển lãm
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Triển lãm "Hội Sử Mùa Thu" là một dự án nghệ thuật đặc biệt
                  nhằm tôn vinh những dấu mốc quan trọng trong lịch sử dân tộc
                  Việt Nam.
                </p>
                <p>
                  Thông qua các tác phẩm nghệ thuật độc đáo, chúng tôi mong muốn
                  đưa người xem về với những khoảnh khắc lịch sử đáng nhớ, từ
                  những ngày đầu giải phóng đến quá trình hội nhập quốc tế.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('/assets/background_2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="text-center mb-12">
          <h2
            className={`text-white text-lg mt-4 opacity-90 ${getAnimationClasses(
              "carousel-title"
            )}`}
            data-animate-id="carousel-title"
          >
            Khám phá những khoảnh khắc quan trọng trong lịch sử đất nước
          </h2>
        </div>
        <div
          className={`relative overflow-hidden ${getAnimationClasses(
            "carousel-container"
          )}`}
          data-animate-id="carousel-container"
        >
          <div
            ref={carouselRef}
            className="flex pb-4"
            style={{
              transform: `translate3d(-${carouselPosition}px, 0, 0)`,
              width: `${carouselItems.length * itemWidth}px`,
              transition: isTransitioning
                ? "transform 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
              willChange: "transform",
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
                style={{ width: `${itemWidth - 16}px`, marginRight: "16px" }}
              >
                <div className="w-64 h-80 bg-black border-4 border-gray-300 shadow-2xl rounded-lg overflow-hidden">
                  <img
                    src={`/assets/${item.image}`}
                    alt={`Lịch sử ${item.year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        {item.year} - {item.title}
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Dấu mốc quan trọng trong lịch sử dân tộc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-300 z-1000"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="relative transition-all duration-700 ease-in-out mt-8 min-h-[600px]">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
            <h3 className="text-white text-3xl font-bold mb-8 text-center font-montserrat">
              Một số thông tin triển lãm
            </h3>
            <div
              className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 ${getAnimationClasses(
                "image-grid"
              )}`}
              data-animate-id="image-grid"
            >
              <div
                className={`break-inside-avoid group cursor-pointer ${getAnimationClasses(
                  "image-1"
                )}`}
                data-animate-id="image-1"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/1977.png"
                    alt="Artwork 1"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        1977
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Việt Nam gia nhập Liên Hợp Quốc
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`break-inside-avoid group cursor-pointer ${getAnimationClasses(
                  "image-2"
                )}`}
                data-animate-id="image-2"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/1979.png"
                    alt="Artwork 2"
                    className="w-full h-[210px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        1979
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Chiến tranh biên giới Việt – Trung
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh8.png"
                    alt="Artwork 3"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        14_3_1976
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Đồng chí Phạm Công Khanh, Bí thư BCH Trung ương Đoàn và
                        đồng chí Lê Danh Xương, Bí thư thành Đoàn Hải Phòng tham
                        gia “Ngày thứ 7 lao động cộng sản chủ nghĩa” tại Hải
                        Phòng
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh9.png"
                    alt="Artwork 4"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        29_3_1976
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Đồng chí Võ Văn Kiệt, Chủ tịch UBND Thành phố Hồ Chí
                        Minh cùng lao động với các đội viên TNXP ngày thành lập
                        Lực lượng TNXP miền Nam xây dựng vùng kinh tế mới
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh10.png"
                    alt="Artwork 5"
                    className="w-full h-[225px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat">
                        7_5_1975
                      </h3>
                      <p className="text-white text-sm opacity-90">
                        Nhân dân thành phố Sài Gòn mít tinh chào mừng Ủy ban
                        Quân quản thành phố ra mắt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh11.png"
                    alt="Artwork 6"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat"></h3>
                      <p className="text-white text-sm opacity-90">
                        Phi công Phạm Tuân trở thành nhà du hành vũ trụ đầu tiên
                        của Việt Nam bay vào vũ trụ, ngày 23_7_1980, trên tàu
                        Liên hợp 37 cùng nhà du hành vũ trụ Liên Xô Vichtor
                        Gorbatko
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh12.png"
                    alt="Artwork 7"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat"></h3>
                      <p className="text-white text-sm opacity-90">
                        Tại Lễ kỷ niệm 45 năm Ngày thành lập Đoàn (26_3_1976),
                        tổ chức Đoàn trong cả nước đã được thống nhất mang tên
                        chung là Đoàn Thanh niên Lao động Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src="/assets/anh13.png"
                    alt="Artwork 8"
                    className="w-full h-[645px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg font-montserrat"></h3>
                      <p className="text-white text-sm opacity-90">
                        Sau giải phóng miền Nam, thống nhất Tổ quốc, đất nước ta
                        gặp muôn vàn khó khăn. Đảng lãnh đạo nhân dân tập trung
                        xây dựng cơ sở vật chất của chủ nghĩa xã hội
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
