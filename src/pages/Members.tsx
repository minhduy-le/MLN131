import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

// 1. CẬP NHẬT DỮ LIỆU: Thêm trường 'image' cho ảnh đại diện
const members = [
  {
    name: "Trần Thị Phương Thảo",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/phuongthao.png"
  },
  {
    name: "Lê Nguyễn Phương An",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/phuongan.png"
  },
  {
    name: "Phan Thị Ngọc Giàu",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/ngocgiau.png"
  },
  {
    name: "Nguyễn Ngọc Bảo Trân",
    role: "Thành viên",
    description: "Phát triển web và vận hành dự án",
    image: "/assets/members/baotran.png"
  },
  {
    name: "Bùi Ngọc Nhi",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/ngocnhi.png"
  },
  {
    name: "Nguyễn Hạnh Duyên",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/hanhduyen.png"
  },
  {
    name: "Trịnh Đình Ngọc An",
    role: "Thành viên",
    description: "Phục hồi ảnh cũ, vận hành dự án",
    image: "/assets/members/ngocan.png"
  },
  {
    name: "Nguyễn Lê Thu Hằng",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/thuhang.png"
  },
  {
    name: "Lê Đức Trọng",
    role: "Thành viên",
    description: "Phát triển web và vận hành dự án",
    image: "/assets/members/ductrong.png"
  },
  {
    name: "Lê Quang Huy",
    role: "Thành viên",
    description: "Phát triển web và vận hành dự án",
    image: "/assets/members/quanghuy.png"
  },
  {
    name: "Trần Nguyễn Thảo Nhi",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/thaonhi.png"
  },
  {
    name: "Trần Ngọc Châu Anh",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/chauanh.png"
  },
  {
    name: "Lê Minh Duy",
    role: "Thành viên",
    description: "Phát triển web và vận hành dự án",
    image: "/assets/members/minhduy.png"
  },
  {
    name: "Nguyễn Khánh Luân",
    role: "Thành viên",
    description: "Ý tưởng và triển khai, vận hành dự án",
    image: "/assets/members/luankhanh.png"
  },
  {
    name: "Trần Duy Anh",
    role: "Thành viên",
    description: "Ấn phẩm truyền thông, ấn phẩm sự kiện, vận hành dự án",
    image: "/assets/members/duyanh.png"
  },
];


const Members = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-red-200 via-yellow-50 to-red-100 relative overflow-hidden">
      
      <Header />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4 font-montserrat">
            Nhóm Phát Triển
          </h1>
          <p className="text-gray-600 text-lg"> {/* Đã đổi màu chữ cho dễ đọc hơn */}
            Nhóm sinh viên tại gian hàng của Hội Sử Mùa Thu - 
            <span className="text-amber-400 font-semibold">
              Hồi Ảnh Việt
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Card
              key={member.name}
              className="bg-white/50 backdrop-blur-md border border-gray-200 hover:border-amber-400 transition-all duration-300 p-6 group shadow-xl"
            >
              <div className="text-center">
                
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-amber-400 group-hover:border-amber-600 transition-all"
                  />
                </div>
                
                <h3 className="text-gray-800 font-bold text-xl mb-1"> 
                  {member.name}
                </h3>
                
                <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 text-base"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Members;