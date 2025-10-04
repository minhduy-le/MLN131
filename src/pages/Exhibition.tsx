import { VirtualGallery } from "@/components/VirtualGallery";

const MY_CUSTOM_PAINTINGS = [
  {
    id: 'p1',
    src: '/assets/recovery/sp1.png',
    originalSrc: '/assets/pictures/sc1.png',
    info: {
      title: 'Hiến pháp năm 1980',
      artist: '',
      year: 1980,
      description: 'Đồng chí Nguyễn Hữu Thọ, quyền Chủ tịch nước CHXHCN Việt Nam ký lệnh công bố Hiến pháp mới, sáng 19/12/1980. Ngày 18/12/1980, tại kỳ họp thứ 7 Quốc hội khóa VI đã nhất trí thông qua Hiến pháp. Với 12 chương, 147 điều, Hiến pháp năm 1980 đã xác định bản chất giai cấp của Nhà nước ta là Nhà nước chuyên chính vô sản, có sứ mệnh lịch sử là thực hiện quyền làm chủ tập thể của nhân dân lao động, động viên và tổ chức nhân dân xây dựng thắng lợi chủ nghĩa xã hội, tiến lên chủ nghĩa cộng sản. (Ảnh: Xuân Lâm/TTXVN)',
    },
  },
  {
    id: 'p2',
    src: '/assets/recovery/sp2.png',
    originalSrc: '/assets/pictures/sc2.png',
    info: {
      title: 'Đại hội đại biểu toàn quốc lần thứ IV của Đảng Cộng sản Việt Nam',
      artist: '',
      year: 1976,
      description: 'Đại hội đại biểu Đảng Cộng sản Việt Nam lần thứ IV được tổ chức từ ngày 14 - 20/12/1976 tại Hà Nội. Đồng chí Lê Duẩn được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng khoá IV (nhiệm kỳ 1976 - 1982). Đại hội xác định đường lối chung của cách mạng xã hội chủ nghĩa trong giai đoạn mới ở nước ta là: Nắm vững chuyên chính vô sản, phát huy quyền làm chủ tập thể của nhân dân lao động; tiến hành đồng thời 3 cuộc cách mạng: cách mạng về quan hệ sản xuất, cách mạng khoa học-kỹ thuật, cách mạng tư tưởng và văn hóa, trong đó, cách mạng khoa học-kỹ thuật là then chốt; đẩy mạnh công nghiệp hóa xã hội chủ nghĩa là nhiệm vụ trung tâm của cả thời kỳ quá độ lên chủ nghĩa xã hội; xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa, xây dựng nền sản xuất lớn xã hội chủ nghĩa, xây dựng nền văn hóa mới, xây dựng con người mới xã hội chủ nghĩa; xóa bỏ chế độ người bóc lột người, xóa bỏ nghèo nàn và lạc hậu; không ngừng đề cao cảnh giác, thường xuyên củng cố quốc phòng, giữ gìn an ninh chính trị và trật tự xã hội; xây dựng thành công Tổ quốc Việt Nam hòa bình, độc lập, thống nhất và xã hội chủ nghĩa; góp phần tích cực vào cuộc đấu tranh của nhân dân thế giới vì hòa bình, độc lập dân tộc, dân chủ và chủ nghĩa xã hội. (Ảnh: Kim Hùng/TTXVN)',
    },
  },
  {
    id: 'p3',
    src: '/assets/recovery/sp3.png',
    originalSrc: '/assets/pictures/sc3.png',
    info: {
      title: 'Khu tập thể Thanh Xuân Bắc, Hà Nội những năm 80',
      artist: '',
      year: 1985,
      description: 'Sau khi đất nước thống nhất năm 1975, Đảng bộ và nhân dân Hà Nội khẩn trương khôi phục những cơ sở kinh tế, văn hoá bị chiến tranh tàn phá, bảo vệ vững chắc Tổ quốc; mặt khác cùng cả nước trăn trở tìm tòi, từng bước tháo gỡ khó khăn để cùng nhau đi lên. Trong ảnh: Khu tập thẻ Thanh Xuân Bắc (năm 1985) (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p4',
    src: '/assets/recovery/sp4.png',
    originalSrc: '/assets/pictures/sc4.png',
    info: {
      title: 'Tuyến đường Nhà Bè - Duyên Hải (nay là Quốc lộ 50)',
      artist: '',
      year: 1984,
      description: 'Tuyến đường Nhà Bè - Duyên Hải được khởi công làm nền đường vào ngày 07 tháng 4 năm 1984 - công trình chào mừng 10 năm thống nhất đất nước (30/4/1975 - 30/4/1985). Công trình mang dấu ấn của đồng chí Võ Văn Kiệt, Ủy viên Bộ Chính trị, Phó Chủ tịch Hội đồng Bộ trưởng, kiêm Chủ nhiệm Ủy ban Kế hoạch Nhà nước. (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p5',
    src: '/assets/recovery/sp5.png',
    originalSrc: '/assets/pictures/sc5.png',
    info: {
      title: 'Lễ cắt băng khánh thành Nhà máy Nhiệt điện Phả Lại',
      artist: '',
      year: 1983,
      description: '(Ảnh: TTXVN)',
    },
  },
  {
    id: 'p6',
    src: '/assets/recovery/sp6.png',
    originalSrc: '/assets/pictures/sc6.png',
    info: {
      title: 'Một cửa hàng mậu dịch quốc doanh thời bao cấp',
      artist: '',
      year: null,
      description: '(Ảnh: Sưu tầm)',
    },
  },
  {
    id: 'p7',
    src: '/assets/recovery/sp7.png',
    originalSrc: '/assets/pictures/sc7.png',
    info: {
      title: 'Cố Tổng bí thư Đỗ Mười và chuyến thăm lịch sử đến Trung Quốc',
      artist: '',
      year: 1991,
      description: 'Từ ngày 5 - 10/11/1991, Tổng Bí thư Đỗ Mười và Chủ tịch Hội đồng Bộ trưởng Võ Văn Kiệt thăm Trung Quốc, đánh dấu việc chính thức bình thường hoa quan hệ giữa hai nước. Trong ảnh: Tổng Bí thư, Chủ tịch Trung Quốc Giang Trạch Dân đón, hội đàm với Tổng Bí thư Đỗ Mười tại Bắc Kinh, sáng 6/11/1991. (Ảnh:TTXVN)',
    },
  },
  {
    id: 'p8',
    src: '/assets/recovery/sp8.png',
    originalSrc: '',
    info: {
      title: 'Hiệp định gia nhập WTO tại TP. Hồ Chí Minh',
      artist: '',
      year: 2006,
      description: 'Ngày 31/5/2006, tại TP. Hồ Chí Minh, Thứ trưởng Bộ Thương mại Lương Văn Tự ký Hiệp định gia nhập WTO với ông Karan Bhatia - Phó đại diện thương mại Hoa Kỳ. Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) từ ngày 7/11/2006. (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p9',
    src: '/assets/recovery/sp9.png',
    originalSrc: '',
    info: {
      title: 'Việt Nam gia nhập ASEAN',
      artist: '',
      year: 1995,
      description: 'Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký Tuyên bố kết nạp Việt Nam trở thành thành viên của Hiệp hội Các quốc gia Đông Nam Á (ASEAN) ngày 28-7-1995. Việt Nam trở thành thành viên thứ 7 của ASEAN (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p10',
    src: '/assets/recovery/sp10.png',
    originalSrc: '/assets/pictures/sc10.png',
    info: {
      title: 'Bộ đội hành quân lên biên giới chi viện cho mặt trận Cao Bằng.',
      artist: '',
      year: 1979,
      description: 'Chiến tranh biên giới Việt - Trung (2/1979) đã lùi xa 40 năm, là một phóng viên từng lăn lộn trên mặt trận Cao Bằng ngay từ ngày đầu, nhà báo, NSNA Trần Mạnh Thường vẫn còn lưu những những bức ảnh và ký ức không thể nào quên về cuộc chiến tranh vệ quốc hào hùng của dân tộc. (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p11',
    src: '/assets/recovery/sp11.png',
    originalSrc: '/assets/pictures/sc11.png',
    info: {
      title: 'Lễ kéo cờ Việt Nam tại trụ sở LHQ ngày 20/9/1977',
      artist: '',
      year: 1977,
      description: 'Lễ kéo cờ Việt Nam tại trụ sở LHQ ngày 20/9/1977, đánh dấu sự kiện Việt Nam chính thức là thành viên của tổ chức lớn nhất hành tinh này. Gia nhập Liên hợp quốc là một sự kiện trọng đại, giúp Việt Nam thiết lập vị thế trên trường quốc tế, góp phần bảo vệ sự nghiệp hòa bình, phát triển và tiến bộ xã hội chung toàn cầu, cũng như tranh thủ sự ủng hộ lớn về tinh thần và vật chất của các tổ chức quốc tế thuộc Liên hợp quốc cho công cuộc tái thiết đất nước vừa bị chiến tranh tàn phá cũng như trong thời kỳ bị bao vây, cấm vận. (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p12',
    src: '/assets/recovery/sp12.png',
    originalSrc: '/assets/pictures/sc12.png',
    info: {
      title: 'Nắm chắc thời cơ, tranh thủ từng ngày để kịp thời phát động tiến công',
      artist: '',
      year: 1975,
      description: 'Cuối tháng 3-1975, đồng chí Lê Đức Thọ từ miền Bắc vào Nam cùng đồng chí Phạm Hùng và Đại tướng Văn Tiến Dũng thay mặt Bộ Chính trị trực tiếp chỉ đạo chiến dịch giải phóng Sài Gòn. Nắm bắt kịp thời toàn bộ diễn biến của tình hình chiến trường trong nước, trong khu vực có liên quan, trong bức điện gửi cho Bộ Tư lệnh chiến dịch Hồ Chí Minh vào lúc 15 giờ 30 phút ngày 22-4-1975, Bộ Chính trị chỉ rõ: "Thời cơ để mở cuộc tổng tiến công về quân sự và chính trị vào Sài Gòn đã chín muồi. Ta cần tranh thủ từng ngày để kịp thời phát động tiến công. Hành động trong lúc này là bảo đảm chắc chắn nhất để giành thắng lợi hoàn toàn. Nếu để chậm sẽ không có lợi cả về quân sự và chính trị". (Ảnh tư liệu).',
    },
  },
  {
    id: 'p13',
    src: '/assets/recovery/sp13.png',
    originalSrc: '/assets/pictures/sc13.png',
    info: {
      title: 'Khát vọng xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa',
      artist: '',
      year: 1976,
      description: 'Đồng chí Phạm Công Khanh, Bí thư BCH Trung ương Đoàn và đồng chí Lê Danh Xương, Bí thư thành Đoàn Hải Phòng tham gia “Ngày thứ 7 lao động cộng sản chủ nghĩa” tại Hải Phòng, ngày 14/3/1976.\n Tháng 12/1975, Hội nghị lần thứ 21 Ban Chấp hành Trung ương Đoàn (khoá III) đã phát động bốn phong trào lớn: Lao động tình nguyện xây dựng Tổ quốc, Quyết thắng, Học tập, và Rèn luyện thân thể - nếp sống mới. Sự kiện chính trị quan trọng nhất là vào tháng 12/1976, Đại hội Đảng toàn quốc lần thứ IV đã quyết định đổi tên Đoàn Thanh niên Lao động Hồ Chí Minh thành Đoàn Thanh niên Cộng sản Hồ Chí Minh. Đây là sự kiện thể hiện sự tin tưởng sâu sắc của Đảng và quyết tâm của thế hệ trẻ đi theo con đường cách mạng. Từ đó, nhiều phong trào thanh niên đã nổi lên mạnh mẽ, với hàng nghìn người xung phong đi làm kinh tế mới và sản xuất vượt mức kế hoạch ngay trong năm 1976. (Ảnh: Sưu tầm)',
    },
  },
  {
    id: 'p14',
    src: '/assets/recovery/sp14.png',
    originalSrc: '/assets/pictures/sc14.png',
    info: {
      title: 'Khát vọng xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa',
      artist: '',
      year: 1976,
      description: 'Đồng chí Võ Văn Kiệt, Chủ tịch UBND Thành phố Hồ Chí Minh cùng lao động với các đội viên TNXP ngày thành lập Lực lượng TNXP miền Nam xây dựng vùng kinh tế mới, ngày 29/3/1976.\n Tháng 12/1975, Hội nghị lần thứ 21 Ban Chấp hành Trung ương Đoàn (khoá III) đã phát động bốn phong trào lớn: Lao động tình nguyện xây dựng Tổ quốc, Quyết thắng, Học tập, và Rèn luyện thân thể - nếp sống mới. Sự kiện chính trị quan trọng nhất là vào tháng 12/1976, Đại hội Đảng toàn quốc lần thứ IV đã quyết định đổi tên Đoàn Thanh niên Lao động Hồ Chí Minh thành Đoàn Thanh niên Cộng sản Hồ Chí Minh. Đây là sự kiện thể hiện sự tin tưởng sâu sắc của Đảng và quyết tâm của thế hệ trẻ đi theo con đường cách mạng. Từ đó, nhiều phong trào thanh niên đã nổi lên mạnh mẽ, với hàng nghìn người xung phong đi làm kinh tế mới và sản xuất vượt mức kế hoạch ngay trong năm 1976. (Ảnh: Sưu tầm)',
    },
  },
  {
    id: 'p15',
    src: '/assets/recovery/sp15.png',
    originalSrc: '/assets/pictures/sc15.png',
    info: {
      title: 'Chiến dịch Hồ Chí Minh - Đỉnh cao thắng lợi của cách mạng Việt Nam',
      artist: '',
      year: 1975,
      description: 'Nhân dân thành phố Sài Gòn míttinh chào mừng Ủy ban Quân quản Thành phố ra mắt 7/5/1975. (Ảnh: Lâm Hồng Long/TTXVN)',
    },
  },
  {
    id: 'p16',
    src: '/assets/recovery/sp16.png',
    originalSrc: '/assets/pictures/sc16.png',
    info: {
      title: 'Khát vọng xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa',
      artist: '',
      year: 1976,
      description: 'Tại Lễ kỷ niệm 45 năm Ngày thành lập Đoàn (26/3/1976), tổ chức Đoàn trong cả nước đã được thống nhất mang tên chung là Đoàn Thanh niên Lao động Hồ Chí Minh. (Ảnh: Sưu tầm)',
    },
  },
  {
    id: 'p17',
    src: '/assets/recovery/sp17.png',
    originalSrc: '/assets/pictures/sc17.png',
    info: {
      title: 'Chuyến bay mang tầm vóc lịch sử',
      artist: '',
      year: 1980,
      description: 'Nhà du hành vũ trụ Phạm Tuân và Gorbatko tại trạm huấn luyện "Chào mừng 6", Liên Xô tháng 7/1980. Cách đây 45 năm, ngày 23/7/1980, nhà du hành vũ trụ Việt Nam Phạm Tuân và nhà du hành vũ trụ Liên Xô Vichtor Vaxilievich Gorbatco đã thực hiện thành công chuyến bay vào vũ trụ trên tàu vũ trụ Liên hợp 37. Chuyến bay ghi một mốc son mới vào sự phát triển tình hữu nghị truyền thống và sự hợp tác toàn diện Việt Nam-Liên Xô trước đây, cũng như đối với Liên bang Nga ngày nay. (Ảnh: Tiến Dũng - TTXVN)',
    },
  },
  {
    id: 'p18',
    src: '/assets/recovery/sp18.png',
    originalSrc: '/assets/pictures/sc18.png',
    info: {
      title: 'Đại hội đại biểu toàn quốc lần thứ V',
      artist: '',
      year: 1982,
      description: 'Đại hội đại biểu toàn quốc lần thứ V của Đảng họp từ ngày 27 đến 31-3-1982 tại Thủ đô Hà Nội. Đồng chí Lê Duẩn tiếp tục được bầu làm Tổng Bí thư của Đảng. Sau khi Tổng Bí thư Lê Duẩn từ trần (10/7/1986), đồng chí Trường Chinh được bầu làm Tổng Bí thư của Đảng (14/7/1986). (Ảnh tư liệu)',
    },
  },
  {
    id: 'p19',
    src: '/assets/recovery/sp19.png',
    originalSrc: '/assets/pictures/sc19.png',
    info: {
      title: 'Cuộc chiến chính nghĩa vì sự trường tồn hai dân tộc',
      artist: '',
      year: 1979,
      description: 'Lực lượng vũ trang cách mạng Campuchia và bộ đội tình nguyện Việt Nam phối hợp luyện tập, nâng cao kỹ thuật, năng lực tác chiến để củng cố và bảo vệ vững chắc thành quả Chiến thắng 7/1/1979. Ngày Chiến thắng cuộc chiến tranh bảo vệ biên giới Tây Nam của Tổ quốc là dịp để tưởng nhớ về sự hy sinh to lớn của các thế hệ cha anh đi trước cũng như sự mất mát, đau thương của nhân dân ta khi bị chế độ diệt chủng Pol Pot - Ieng Sary (còn gọi là Khmer Đỏ) ra tay thảm sát dã man, tiến hành cuộc chiến tranh xâm lược biên giới Tây Nam của Tổ quốc. (Ảnh: TTXVN)',
    },
  },
  {
    id: 'p20',
    src: '/assets/recovery/sp20.png',
    originalSrc: '/assets/pictures/sc20.png',
    info: {
      title: 'Kỳ họp thứ 3 Quốc hội khóa VIII (1987-1992)',
      artist: '',
      year: 1975,
      description: 'Ngày 20/6/1987, tại Hà Nội, Quốc hội khóa VIII khai mạc kỳ họp thứ 3. Đây là kỳ họp đầu tiên của Quốc hội sau Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12/1986) và là kỳ họp đầu tiên trong nhiệm kỳ Quốc hội khóa VIII thực hiện Hiến pháp năm 1980. Kỳ họp đã xem xét, quyết định nhiều vấn đề quan trọng về kinh tế - xã hội, quốc phòng - an ninh, đối ngoại và công tác xây dựng Đảng, Nhà nước. (Ảnh: TTXVN)',
    },
  },

];
const Exhibition = () => {
  return <VirtualGallery initialPaintings={MY_CUSTOM_PAINTINGS} />;
};

export default Exhibition;


