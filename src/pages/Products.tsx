import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const items = [
  {
    id: 1,
    title: "Set Bánh Kể Chuyện",
    price: "20.000đ - 38.000đ",
    description: "Set 2 bánh: 20.000đ | Set 4 bánh: 38.000đ",
    img: "/assets/Set4.jpg",
    link: "https://example.com/set-banh-ke-chuyen",
  },
  {
    id: 2,
    title: "Hội Sử Mùa Thu - Báo Lịch Sử",
    price: "60.000đ",
    description:
      "Chuyên san lịch sử Đảng - Hành trình bảo vệ và xây dựng Tổ quốc",
    img: "/assets/background.jpg",
    link: "https://example.com/hoi-su-mua-thu",
  },
];

const bookmarks = [
  {
    id: 1,
    title: "Kỷ Niệm Quốc Khánh",
    price: "15.000đ",
    img: "/assets/b1.png",
    link: "https://example.com/bookmark-1",
  },
  {
    id: 2,
    title: "Độc Lập Tự Do",
    price: "15.000đ",
    img: "/assets/b2.png",
    link: "https://example.com/bookmark-2",
  },
  {
    id: 3,
    title: "Chiến Thắng Lịch Sử",
    price: "15.000đ",
    img: "/assets/b3.png",
    link: "https://example.com/bookmark-3",
  },
  {
    id: 4,
    title: "Lãnh Tụ Vĩ Đại",
    price: "15.000đ",
    img: "/assets/b4.png",
    link: "https://example.com/bookmark-4",
  },
  {
    id: 5,
    title: "Anh Hùng Dân Tộc",
    price: "15.000đ",
    img: "/assets/b5.png",
    link: "https://example.com/bookmark-5",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      {/* Traditional Vietnamese pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Traditional decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-red-800/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 border-4 border-yellow-700/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-red-700/15 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Traditional Vietnamese motifs */}
        <div
          className="absolute top-1/4 left-1/2 text-6xl text-red-800/10 transform -rotate-12 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3s" }}
        >
          🏮
        </div>
        <div
          className="absolute top-3/4 left-1/4 text-5xl text-yellow-700/15 transform rotate-12 animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        >
          🌸
        </div>
        <div
          className="absolute top-1/2 right-1/4 text-4xl text-red-700/10 animate-bounce"
          style={{ animationDelay: "2.5s", animationDuration: "5s" }}
        >
          🐉
        </div>

        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-transparent to-red-100/20"></div>
      </div>

      <Header />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Traditional title with historical feel */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            {/* Traditional frame */}
            <div className="absolute -inset-8 border-4 border-red-800 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 shadow-2xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-red-800 to-red-900 text-yellow-100 px-12 py-8 rounded-lg shadow-inner">
              <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-4 tracking-wide">
                SET BÁNH KỂ CHUYỆN
              </h1>
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-16 h-1 bg-yellow-400"></div>
                <span className="text-yellow-300 text-2xl">🏛️</span>
                <div className="w-16 h-1 bg-yellow-400"></div>
              </div>
              <p className="text-yellow-200 text-lg font-montserrat italic">
                "Độc Lập - Tự Do - Hạnh Phúc"
              </p>
            </div>
          </div>

          <p className="text-red-800 text-xl mt-8 font-montserrat max-w-2xl mx-auto leading-relaxed antialiased" style={{ fontFamily: 'Montserrat, "Noto Sans", system-ui, -apple-system, sans-serif' }}>
            Khám phá lịch sử dân tộc qua từng chiếc bánh nhỏ
          </p>
        </div>

        {/* Historical product showcase */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group w-full"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {index === 0 ? (
                // First product - Set Bánh (original design)
                <div className="relative flex justify-center">
                  <div className="w-full max-w-5xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-yellow-100/80 via-orange-50/70 to-red-100/60 backdrop-blur-sm border-4 border-red-800/30 rounded-2xl p-10 hover:border-red-600 transition-all duration-700 hover:shadow-2xl hover:shadow-red-800/30 transform hover:-translate-y-2 group-hover:scale-105 shadow-xl">
                      {/* Product Image with traditional frame */}
                      <div className="relative flex-shrink-0 lg:w-1/2">
                        <div className="relative">
                          {/* Traditional ornate frame */}
                          <div className="absolute -inset-4 border-8 border-yellow-600 rounded-xl bg-gradient-to-br from-yellow-200 to-orange-200 shadow-2xl transform transition-all duration-700 group-hover:rotate-1"></div>
                          <div className="absolute -inset-2 border-4 border-red-700 rounded-lg"></div>

                          <div className="relative bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg p-6 shadow-inner">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-auto object-contain transform transition-all duration-700 group-hover:scale-105"
                            />

                            {/* Traditional decorative corners */}
                            <div className="absolute top-2 left-2 text-red-800 text-2xl">
                              🌸
                            </div>
                            <div className="absolute top-2 right-2 text-red-800 text-2xl">
                              🌸
                            </div>
                            <div className="absolute bottom-2 left-2 text-red-800 text-2xl">
                              🌸
                            </div>
                            <div className="absolute bottom-2 right-2 text-red-800 text-2xl">
                              🌸
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Info with traditional styling */}
                      <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="transform transition-all duration-500 group-hover:translate-x-2">
                          <h3 className="text-red-900 font-bold text-4xl lg:text-5xl mb-4 font-montserrat leading-tight transform transition-all duration-500">
                            {item.title}
                          </h3>
                          <div className="flex justify-center lg:justify-start items-center gap-4 mb-6">
                            <div className="w-16 h-1 bg-red-700"></div>
                            <span className="text-yellow-600 text-xl">⚜️</span>
                            <div className="w-16 h-1 bg-red-700"></div>
                          </div>
                        </div>

                        <div className="relative">
                          <p className="text-5xl lg:text-6xl font-bold text-red-800 mb-6 transform transition-all duration-500 group-hover:scale-110 font-montserrat">
                            {item.price}
                          </p>
                        </div>

                        <div className="bg-yellow-100/80 border-2 border-yellow-600 rounded-lg p-4 shadow-inner">
                          <p className="text-red-900 text-xl leading-relaxed font-montserrat italic">
                            "{item.description}"
                          </p>
                        </div>

                        {/* Traditional CTA Button */}
                        <div className="relative">
                          <Button
                            asChild
                            className="relative overflow-hidden w-full lg:w-auto px-12 py-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-800 hover:via-red-900 hover:to-red-950 text-yellow-100 font-bold text-xl rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-4 border-yellow-600"
                          >
                            <a
                              href={"https://docs.google.com/forms/d/e/1FAIpQLSdHZMl3CA5lrCP2oZmzlvsw_Tvc_dIS78mytj9X1YuWQ5TmNw/viewform"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-10 flex items-center justify-center gap-3 font-montserrat"
                            >
                              <span className="text-2xl">🏮</span>
                              <span>Đặt Mua Ngay</span>
                              <span className="text-2xl">🏮</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Second product - Newspaper (different design)
                <div className="relative">
                  {/* Newspaper-style design */}
                  <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 border-8 border-amber-800 rounded-none shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 overflow-hidden">
                    {/* Newspaper header */}
                    <div className="bg-red-900 text-yellow-100 py-4 px-8 border-b-4 border-yellow-600">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-montserrat">SỐ ĐẶC BIỆT</div>
                        <div className="text-center">
                          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat tracking-wider">
                            HỘI SỬ MÙA THU
                          </h2>
                          <p className="text-yellow-300 text-sm italic">
                            Chuyên san lịch sử Đảng
                          </p>
                        </div>
                        <div className="text-sm font-montserrat text-right">
                          <div>⭐⭐⭐⭐⭐</div>
                          <div>LỊCH SỬ</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                      {/* Newspaper image */}
                      <div className="lg:w-2/3 p-6">
                        <div className="relative border-4 border-amber-700 shadow-lg">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-auto object-contain transform transition-all duration-700 group-hover:scale-105"
                          />
                          {/* Vintage photo corners */}
                          <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-amber-800"></div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-amber-800"></div>
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-amber-800"></div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-amber-800"></div>
                        </div>
                      </div>

                      {/* Newspaper content */}
                      <div className="lg:w-1/3 p-6 bg-yellow-50/80 border-l-4 border-amber-700">
                        <div className="space-y-6">
                          <div className="text-center">
                          <h3 className="text-2xl lg:text-3xl font-bold text-amber-900 font-montserrat mb-2 leading-tight">
                              {item.title}
                            </h3>
                            <div className="w-full h-1 bg-amber-700 mb-4"></div>
                          </div>

                          {/* Price in newspaper style */}
                          <div className="text-center bg-red-900 text-yellow-100 py-4 px-6 rounded border-4 border-yellow-600 shadow-inner">
                            <div className="text-sm font-montserrat mb-1">
                              GIÁ ĐẶC BIỆT
                            </div>
                            <div className="text-4xl font-bold font-montserrat">
                              {item.price}
                            </div>
                            <div className="text-xs italic mt-1">
                              Miễn phí vận chuyển
                            </div>
                          </div>

                          {/* Description */}
                          <div className="bg-amber-50 border-2 border-amber-600 rounded p-4 shadow-inner">
                            <p className="text-amber-900 text-base leading-relaxed font-montserrat italic text-justify">
                              {item.description}
                            </p>
                          </div>

                          {/* Newspaper-style CTA Button */}
                          <div className="relative">
                            <Button
                              asChild
                              className="relative overflow-hidden w-full px-8 py-4 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:via-amber-900 hover:to-amber-950 text-yellow-100 font-bold text-lg rounded-none shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-red-700"
                            >
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 flex items-center justify-center gap-3 font-montserrat"
                              >
                                <span className="text-xl">📰</span>
                                <span>ĐẶT MUA NGAY</span>
                                <span className="text-xl">📰</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bookmark Collection Section */}
        <div className="mt-32">
          {/* Bookmark Title */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-3 bg-red-900 rounded-lg transform -rotate-1 shadow-lg"></div>
              <div className="relative bg-gradient-to-r from-red-800 to-red-900 text-yellow-100 px-8 py-4 rounded-lg shadow-inner">
                <h2 className="text-3xl font-bold font-montserrat tracking-wide">BOOKMARK LỊCH SỬ</h2>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <div className="w-12 h-1 bg-yellow-400"></div>
                  <span className="text-yellow-300 text-xl">📖</span>
                  <div className="w-12 h-1 bg-yellow-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bookmark Grid */}
          <div className="max-w-10xl mx-auto">
            <div className="flex justify-center gap-6">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="flex flex-col items-center">
                  {/* Simple Bookmark Image */}
                  <img
                    src={bookmark.img}
                    alt={bookmark.title}
                    className="w-80 h-auto object-contain"
                    style={{ aspectRatio: "1/4" }}
                  />
                </div>
              ))}
            </div>

            {/* Styled Price Section */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* Price background frame */}
                <div className="absolute -inset-4 border-4 border-amber-700 rounded-xl bg-gradient-to-br from-yellow-200 to-orange-200 shadow-xl transform -rotate-1"></div>
                <div className="relative bg-gradient-to-br from-red-900 to-red-800 text-yellow-100 px-10 py-6 rounded-xl shadow-inner border-2 border-yellow-600">
                  <div className="flex items-center justify-center gap-3">
                  </div>
                  <div className="text-4xl font-bold font-montserrat text-yellow-300 mb-1">10.000đ</div>
                  <div className="text-yellow-200 text-lg font-montserrat italic">mỗi bookmark</div>
                  <div className="flex justify-center items-center gap-3 mt-3">
                    <div className="w-16 h-1 bg-yellow-400"></div>
                    <span className="text-yellow-300 text-lg">⚜️</span>
                    <div className="w-16 h-1 bg-yellow-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional back to home button */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <Button
              asChild
              variant="outline"
              className="relative overflow-hidden border-4 border-red-700 text-red-800 hover:bg-red-700 hover:text-yellow-100 px-10 py-4 text-lg rounded-xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-red-700/50 transform hover:scale-110 hover:-translate-y-2 bg-yellow-100/80 font-montserrat"
            >
              <Link to="/" className="flex items-center gap-3">
                <span className="text-xl">🏠</span>
                <span>Về Trang Chủ</span>
                <span className="text-xl">🇻🇳</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
