export interface PaintingInfo {
  title: string;
  artist: string;
  year: number;
  description: string;
}

export interface PaintingItem {
  id: string;
  src: string;
  originalSrc?: string;
  info: PaintingInfo;
}

export const SAMPLE_PAINTINGS: PaintingItem[] = [
  {
    id: "1",
    src: "/assets/phongcanh.jpg",
    originalSrc: "/assets/phongcanh.jpg",
    info: {
      title: "Hồ Chiều Tà Yên Bình",
      artist: "Nguyễn Văn A",
      year: 1872,
      description:
        "Bức tranh sơn dầu mô tả phong cảnh hồ nước êm đềm dưới ánh nắng vàng cam cuối ngày, tạo nên sự ấm áp và thư giãn.",
    },
  },
  {
    id: "2",
    src: "/assets/phongcanh.jpg",
    originalSrc: "/assets/phongcanh.jpg",
    info: {
      title: "Cánh Đồng Gió",
      artist: "Trần Thị B",
      year: 1890,
      description:
        "Gam màu nhẹ nhàng với những vệt cỏ lay động, gợi cảm giác bình yên của miền quê.",
    },
  },
  {
    id: "3",
    src: "/assets/phongcanh.jpg",
    originalSrc: "/assets/phongcanh.jpg",
    info: {
      title: "Phố Xưa",
      artist: "Lê Văn C",
      year: 1901,
      description:
        "Phố cổ với mái ngói rêu phong, ánh nắng sớm mai chiếu qua những vòm cây xanh.",
    },
  },
];
