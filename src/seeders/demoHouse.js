"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "House",
      [
        {
          house_name:
            "Cho thuê phòng tại Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội, 4,5 triệu, 25m2",
          address:
            "Ngõ 445, Đường Nguyễn Khang, Phường Yên Hòa, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/12/25/20241225091926-bc51_wm.jpg",
          area: 25,
          cost: 4500000,
          average_rate: 5,
          utilities: "Nội thất, Full đồ",
          description:
            "Gần chợ, siêu thị xung quanh, tiện lợi cho cuộc sống hàng ngày và rất thuận tiện cho người đi làm.",
        },
        {
          house_name:
            "Cho thuê phòng căn hộ mini nhiều tiện nghi, mới tinh, có ban công nhà số 14, ngõ 7 Tú Mỡ, Trung Hòa",
          address:
            "Số 14 Ngõ 7, Đường Tú Mỡ, Phường Trung Hòa, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/02/20250102160938-2fd3_wm.jpg",
          area: 26,
          cost: 4500000,
          average_rate: 4.8,
          utilities: "Nội thất phòng đẹp ảnh có nâng cấp.",
          description:
            "Trung tâm Hội Nghị Quốc Gia và các trường đại học Luật, Hành Chính, Ngoại Giao, Giao Thông, Lao Động Xã Hội, cạnh khu Trung Hòa Nhân Chính.",
        },
        {
          house_name:
            "CCMN 10 tầng xây mới, full đồ tại Xuân Thủy - 30m2 - ô tô đỗ cửa - gần chợ - nhận phòng luôn",
          address: "Đường Xuân Thủy, Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/01/11/20240111105833-3f18_wm.jpg",
          area: 30,
          cost: 4500000,
          average_rate: 4.8,
          utilities:
            "Full nội thất, chỉ xách mỗi vali về ở: Điều hòa, nóng lạnh, giường, tủ quần áo, chăn ga gối đệm, tivi, kệ tivi, tủ lạnh, tủ bếp, máy lọc nước, bếp nồi, máy hút mùi, sàn gỗ, máy giặt, rèm",
          description:
            "Chính chủ cho thuê CCMN full đồ tại Xuân Thủy, xây mới tinh, phòng giường đơn, giường tầng.",
        },
        {
          house_name:
            "Cho thuê phòng trọ khép kín đầy đủ tiện nghi tại 173 phố Lò đúc,quận Hai Bà Trưng,Hà nội",
          address: "Phố Lò Đúc, Phường Đồng Nhân, Hai Bà Trưng, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/16/20250116155930-885d_wm.jpg",
          area: 30,
          cost: 360000,
          average_rate: 3.5,
          utilities:
            "Đầy đủ tiện nghi có phòng Wc, tủ bếp,chậu rửa,điều hòa,máy giặt,chỗ phơi đồ,Wifi,để xe máy tầng một.",
          description:
            "Cho thuê phòng trọ khép kín 30 m² tại 173 phố Lò đúc,quận Hai Bà Trưng,Hà nội,cách mặt phố 8m",
        },
        {
          house_name: "Cho thuê phòng đẹp tại vị trí trung tâm 218 Đội Cấn",
          address: "218 Đường Đội Cấn, Phường Liễu Giai, Ba Đình, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/14/20250114091241-bff8_wm.jpg",
          area: 40,
          cost: 500000,
          average_rate: 5,
          utilities:
            "Phòng đầy đủ tiện ích, bếp, nhà vệ sinh, tủ lạnh, điều hòa,",
          description:
            "Vị trí đắc địa trung tâm, cách Lotte, Metropolis 1km, gần Hồ Tây, Lăng Bác và các trường đại học: FTU, Luật, Học viện phụ nữ,",
        },
        {
          house_name:
            "Nhà có 4 phòng khép kín, full đồ, giá thuê 2 - 3tr/phòng/tháng hoặc có thể thuê nguyên căn giá 9tr",
          address: "Đường Phương Trạch, Xã Xuân Canh, Đông Anh, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/15/20250115142327-cb1d_wm.jpg",
          area: 30,
          cost: 300000,
          average_rate: 4.6,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Nhà riêng, 3 mặt thoáng, các phòng đều có ban công, từ nhà ra mặt đường lớn chỉ 30m, ô tô vào nhà và có chỗ để ô tô. Sân để được 10 - 15 xe máy.",
        },
        {
          house_name:
            "Comi Homes cho thuê phòng Studio đủ đồ - hiện đại - tiện nghi tại 55 Lê Quý Đôn, Lò Đúc",
          address:
            "55, Đường Lê Quý Đôn, Phường Bạch Đằng, Hai Bà Trưng, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/02/19/20240219094259-7d5e_wm.jpg",
          area: 25,
          cost: 660000,
          average_rate: 4.9,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Thiết kế mỗi tầng có 3 phòng, hành lanh rộng thoáng đãng diện tích sử dụng khoảng 25m được thiết kế tối giản mà lại tiện nghi, hiện đại và đầy đủ công năng..",
        },
        {
          house_name:
            "1N 1K - 2WC 55m2 rẻ bất ngờ, cực kì hợp lý cho hộ gia đình tại Nguyễn Hoàng - Lê Đức Thọ - Mỹ Đình",
          address:
            "5B ngõ 9, Đường Lê Đức Thọ, Phường Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/02/25/20240225125358-70b2_wm.jpg",
          area: 55,
          cost: 750000,
          average_rate: 4.9,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Chính chủ 1N 1K 1WC 7,5tr full đồ tủ lạnh, máy giặt, ngay trung tâm Mỹ Đình, 21 Lê Đức Thọ, ô tô vào tận nhà. Sofa ngoài phòng khách là sofa giường 2in1, ngã ra thành giường 1m6. Phòng y như hình.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Xóa toàn bộ dữ liệu trong bảng House
    await queryInterface.bulkDelete("House", null, {});
  },
};
