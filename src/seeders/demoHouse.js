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
          house_id: 1,
          house_name:
            "Cho thuê phòng tại Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội, 4,5 triệu, 25m2",
          address:
            "Ngõ 445, Đường Nguyễn Khang, Phường Yên Hòa, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/12/25/20241225091926-bc51_wm.jpg",
          area: 25,
          cost: 4500000,
          number_of_room: null,
          average_rate: 3.6,
          utilities: "Nội thất, Full đồ",
          description:
            "Gần chợ, siêu thị xung quanh, tiện lợi cho cuộc sống hàng ngày và rất thuận tiện cho người đi làm.",
          owner_id: 0,
          createdAt: null,
          updatedAt: "2025-03-24T14:56:00.000Z",
        },
        {
          house_id: 2,
          house_name:
            "Cho thuê phòng căn hộ mini nhiều tiện nghi, mới tinh, có ban công nhà số 14, ngõ 7 Tú Mỡ, Trung Hòa",
          address:
            "Số 14 Ngõ 7, Đường Tú Mỡ, Phường Trung Hòa, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/02/20250102160938-2fd3_wm.jpg",
          area: 26,
          cost: 4500000,
          number_of_room: null,
          average_rate: 4.8,
          utilities: "Nội thất phòng đẹp ảnh có nâng cấp.",
          description:
            "Trung tâm Hội Nghị Quốc Gia và các trường đại học Luật, Hành Chính, Ngoại Giao, Giao Thông, Lao Động Xã Hội, cạnh khu Trung Hòa Nhân Chính.",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 3,
          house_name:
            "CCMN 10 tầng xây mới, full đồ tại Xuân Thủy - 30m2 - ô tô đỗ cửa - gần chợ - nhận phòng luôn",
          address: "Đường Xuân Thủy, Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/01/11/20240111105833-3f18_wm.jpg",
          area: 30,
          cost: 4500000,
          number_of_room: null,
          average_rate: 4.8,
          utilities:
            "Full nội thất, chỉ xách mỗi vali về ở: Điều hòa, nóng lạnh, giường, tủ quần áo, chăn ga gối đệm, tivi, kệ tivi, tủ lạnh, tủ bếp, máy lọc nước, bếp nồi, máy hút mùi, sàn gỗ, máy giặt, rèm",
          description:
            "Chính chủ cho thuê CCMN full đồ tại Xuân Thủy, xây mới tinh, phòng giường đơn, giường tầng.",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 4,
          house_name:
            "Cho thuê phòng trọ khép kín đầy đủ tiện nghi tại 173 phố Lò đúc,quận Hai Bà Trưng,Hà nội",
          address: "Phố Lò Đúc, Phường Đồng Nhân, Hai Bà Trưng, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/16/20250116155930-885d_wm.jpg",
          area: 30,
          cost: 360000,
          number_of_room: null,
          average_rate: 3.5,
          utilities:
            "Đầy đủ tiện nghi có phòng Wc, tủ bếp,chậu rửa,điều hòa,máy giặt,chỗ phơi đồ,Wifi,để xe máy tầng một.",
          description:
            "Cho thuê phòng trọ khép kín 30 m² tại 173 phố Lò đúc,quận Hai Bà Trưng,Hà nội,cách mặt phố 8m",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 5,
          house_name: "Cho thuê phòng đẹp tại vị trí trung tâm 218 Đội Cấn",
          address: "218 Đường Đội Cấn, Phường Liễu Giai, Ba Đình, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/14/20250114091241-bff8_wm.jpg",
          area: 40,
          cost: 500000,
          number_of_room: null,
          average_rate: 5,
          utilities:
            "Phòng đầy đủ tiện ích, bếp, nhà vệ sinh, tủ lạnh, điều hòa,",
          description:
            "Vị trí đắc địa trung tâm, cách Lotte, Metropolis 1km, gần Hồ Tây, Lăng Bác và các trường đại học: FTU, Luật, Học viện phụ nữ,",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 6,
          house_name:
            "Nhà có 4 phòng khép kín, full đồ, giá thuê 2 - 3tr/phòng/tháng hoặc có thể thuê nguyên căn giá 9tr",
          address: "Đường Phương Trạch, Xã Xuân Canh, Đông Anh, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2025/01/15/20250115142327-cb1d_wm.jpg",
          area: 30,
          cost: 300000,
          number_of_room: null,
          average_rate: 4.6,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Nhà riêng, 3 mặt thoáng, các phòng đều có ban công, từ nhà ra mặt đường lớn chỉ 30m, ô tô vào nhà và có chỗ để ô tô. Sân để được 10 - 15 xe máy.",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 7,
          house_name:
            "Comi Homes cho thuê phòng Studio đủ đồ - hiện đại - tiện nghi tại 55 Lê Quý Đôn, Lò Đúc",
          address:
            "55, Đường Lê Quý Đôn, Phường Bạch Đằng, Hai Bà Trưng, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/02/19/20240219094259-7d5e_wm.jpg",
          area: 25,
          cost: 660000,
          number_of_room: null,
          average_rate: 4.9,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Thiết kế mỗi tầng có 3 phòng, hành lanh rộng thoáng đãng diện tích sử dụng khoảng 25m được thiết kế tối giản mà lại tiện nghi, hiện đại và đầy đủ công năng..",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 8,
          house_name:
            "1N 1K - 2WC 55m2 rẻ bất ngờ, cực kì hợp lý cho hộ gia đình tại Nguyễn Hoàng - Lê Đức Thọ - Mỹ Đình",
          address:
            "5B ngõ 9, Đường Lê Đức Thọ, Phường Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
          image:
            "https://file4.batdongsan.com.vn/resize/1275x717/2024/02/25/20240225125358-70b2_wm.jpg",
          area: 55,
          cost: 750000,
          number_of_room: null,
          average_rate: 4.9,
          utilities:
            "Phòng đã full đồ như tủ, giường... Chỉ cần xách vali tới ở.",
          description:
            "Chính chủ 1N 1K 1WC 7,5tr full đồ tủ lạnh, máy giặt, ngay trung tâm Mỹ Đình, 21 Lê Đức Thọ, ô tô vào tận nhà. Sofa ngoài phòng khách là sofa giường 2in1, ngã ra thành giường 1m6. Phòng y như hình.",
          owner_id: 0,
          createdAt: null,
          updatedAt: null,
        },
        {
          house_id: 10,
          house_name:
            "Cho thuê 1 căn studio vừa ở vừa kinh doanh tại Số 5, ngõ 495 Nguyễn Trãi, 6,5 triệu, 20 m2",
          address:
            "Số 5, Ngõ 495 Đường Nguyễn Trãi, Phường Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495995/p8fshpdlzf3twknlve6e.jpg",
          area: 20,
          cost: 6500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Nhanh tay sở hữu 1 căn studio duy nhất mặt ngõ có thể vừa ở vừa kinh doanh hiếm có tại Số 5, Ngõ 495, Nguyễn Trãi, Phường Thanh Xuân Bắc, Thanh Xuân, Hà Nội. Nhà đầy đủ nội thất với diện tích 20m², giá thuê chỉ 6,5 triệu VND/tháng.\n\n+ Nội thất bao gồm: Đi",
          owner_id: 1,
          createdAt: "2025-02-25T15:06:51.000Z",
          updatedAt: "2025-02-25T15:06:51.000Z",
        },
        {
          house_id: 13,
          house_name:
            "Comi Homes cho thuê phòng Studio đủ đồ, xinh xắn thoáng mát tại ngõ 34 Hoàng Cầu, Đống Đa",
          address: "Ngõ 34, Phố Hoàng Cầu, Phường Ô Chợ Dừa, Đống Đa, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741541260/witqqi4asbkflobgikt0.jpg",
          area: 19,
          cost: 6300000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Comi Homes 34 Hoàng Cầu mới trống 1 phòng Studio xinh xắn chờ cư dân yêu thương về ở!\nVị trí toà nhà ở ngõ 34 Hoàng Cầu, trung tâm quận Đống Đa đi đâu cũng tiện, xung quanh là toà nhà chung cư, văn phòng, hàng quán, tiện ích không thiếu gì.\nNhà lô góc, xâ",
          owner_id: 1,
          createdAt: "2025-03-09T17:27:45.000Z",
          updatedAt: "2025-03-09T17:27:45.000Z",
        },
        {
          house_id: 14,
          house_name:
            "Chính chủ cho thuê phòng studio 25,30m2 KĐT Đô Nghĩa, Hà Đông ngay sát đại học Phenikaa ô tô đỗ cửa",
          address: "Đường Nguyễn Trác, Phường Yên Nghĩa, Hà Đông, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/e8gyw4t04dihdv4mjaoe.jpg",
          area: 29,
          cost: 4200000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Chính chủ cho thuê phòng studio 25, 30m² KĐT Đô Nghĩa, Hà Đông.\n\nNgay sát đại học Phenikaa, ô tô đỗ cửa, phòng mới ban công, cửa sổ cực thoáng.\n\\n\nPhòng full đồ như hình, thang máy, PCCC cửa vân tay đầy đủ.",
          owner_id: 1,
          createdAt: "2025-03-14T06:58:17.000Z",
          updatedAt: "2025-03-14T06:58:17.000Z",
        },
        {
          house_id: 15,
          house_name:
            "Cho thuê nhà trọ tại Trung Kính, 6,5 triệu, 35m2, giá tốt, chính chủ, xây mới tinh",
          address: "Phố Trung Kính, Phường Trung Hòa, Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935717/kvvdomeaz6vzfrzc2qrk.jpg",
          area: 34,
          cost: 6500000,
          number_of_room: null,
          average_rate: 4,
          utilities: null,
          description:
            "Nhà trọ cho thuê tọa lạc tại phố Trung Kính, phường Trung Hòa, quận Cầu Giấy, Hà Nội, với diện tích 35m² và nội thất đầy đủ, đáp ứng nhu cầu sinh hoạt của người thuê trong môi trường hiện đại.\n\n- Điểm đặc biệt:\n+ Giá cho thuê chỉ 6,5 triệu VND, phù hợp vớ",
          owner_id: 1,
          createdAt: "2025-03-14T07:02:01.000Z",
          updatedAt: "2025-03-17T14:23:36.000Z",
        },
        {
          house_id: 16,
          house_name:
            "Chính chủ cho thuê phòng CCMN đủ nội thất giá 2,7tr/th tại 116 Nguyễn Văn Cừ",
          address: "Đường Nguyễn Văn Cừ, Phường Bồ Đề, Long Biên, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935895/pyji4ivt9xzavjy4vb6c.jpg",
          area: 24,
          cost: 2700000,
          number_of_room: null,
          average_rate: 0,
          utilities: null,
          description:
            "Toà nhà 6 tầng mặt phố chính chủ cho thuê căn hộ mini đủ tiện nghi cơ bản, toà nhà có đặc điểm như sau:\n+ Toà nhà không chung chủ.\n+ Camera, bảo vệ toà nhà 24/7.\n+ Internet wifi tốc độ cao.\n+ Được thiết kế hiện đại và trang bị: Giường, tủ quần áo, điều ho",
          owner_id: 1,
          createdAt: "2025-03-14T07:04:57.000Z",
          updatedAt: "2025-03-14T07:43:53.000Z",
        },
        {
          house_id: 17,
          house_name:
            "Chính chủ cho thuê phòng trọ khép kín tại 483 Âu Cơ giá 3,5tr/th",
          address: "483, Đường Âu Cơ, Phường Nhật Tân, Tây Hồ, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742353929/cmgvt3fd3fzq35xinego.jpg",
          area: 35,
          cost: 3500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Nhà tôi cho thuê phòng diện tích 35m.\nĐường vào nhà rộng xe cộ ra vào và chỗ để xe thoải mái.\nCó vs khép kín.\nCó ban công làm sân phơi đồ.\nGiường tủ nóng lạnh điều hoà đầy đủ.\nCó bàn bếp để nấu ăn.\nKhông chung chủ giờ giấc ra vào 24/7 cửa ra vào có vân ta",
          owner_id: 1,
          createdAt: "2025-03-19T03:12:21.000Z",
          updatedAt: "2025-03-19T03:12:21.000Z",
        },
        {
          house_id: 18,
          house_name:
            "Cho thuê phòng ngõ 310 Nghi Tàm, Tây Hồ. Vệ sinh ở giữa nhà có thang máy. Ưu tiên nhận 1 bạn nữ",
          address: "Ngõ 310, đường Nghi Tàm, Phường Quảng An, Tây Hồ, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354167/wruwo7uxbxfm4tnesnnk.jpg",
          area: 22,
          cost: 2900000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Cho thuê phòng ngõ 310 Nghi Tàm, Quảng An, Tây Hồ. Ưu tiên nhận 1 bạn nữ. 1 xe máy. Sẵn phòng tầng 2.\nVệ sinh ở giữa chung với 1 bạn nữ.\nHoặc có thể đi vệ sinh tầng 1.\nNấu ăn tầng 1. Giặt tầng 6.Chưa bao gồm tiền dịch vụ.\nNước 100 k.\nWifi 100k.",
          owner_id: 1,
          createdAt: "2025-03-19T03:16:13.000Z",
          updatedAt: "2025-03-19T03:16:13.000Z",
        },
        {
          house_id: 21,
          house_name:
            "Cho thuê phòng trọ tại Số 83, ngách 130/44, Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
          address:
            "Số 83,ngách 130/44, Ngõ 44 Trần Thái Tông, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519308/gjrsqnabyz2w2p2rgxij.jpg",
          area: 10,
          cost: 2500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Tình trạng: Nhà trống. Cho thuê phòng trọ tại Số 83, ngách 130/44, Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội\n",
          owner_id: 1,
          createdAt: "2025-04-01T14:55:19.000Z",
          updatedAt: "2025-04-01T14:55:19.000Z",
        },
        {
          house_id: 22,
          house_name: "CHO THUÊ PHÒNG TRỌ Ở GHÉP GIÁ RẺ TẠI CẦU GIẤY",
          address:
            "132A, Ngõ 36 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519396/pzj7igehkollmkkbwsq2.jpg",
          area: 20,
          cost: 1500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Nội thất đầy đủ\nSĐT Liên hệ: 033222 ***\nNHỮNG ƯU ĐIỂM KHI THUÊ PHÒNG TẠI ĐÂY: 1.TIỆN NGHI ĐẦY ĐỦ: điều hoà, máy giặt, tủ lạnh, wifi tốc độ cao, khoá vân tay an toàn, an ninh tốt... 2.KHU VỰC THUẬN TIỆN: gần các trường ĐH Sư Phạm, Báo Chí, Thương Mại, Giao",
          owner_id: 1,
          createdAt: "2025-04-01T14:56:45.000Z",
          updatedAt: "2025-04-01T14:56:45.000Z",
        },
        {
          house_id: 23,
          house_name: "Còn phòng giá rẻ tại 36 Dịch Vọng Hậu",
          address:
            " số 36 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519635/ya6yoq588bth0lmcv1fo.jpg",
          area: 17,
          cost: 2700000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "SĐT Liên hệ: 096166 ***\nTại 36 dịch vọng hậu có 2 phòng cho thuê Diện tích : 17m2 - 20m2 Giá cho thuê 2,7tr và 3tr ( có điều hoà + nóng lạnh) tất cả các phòng có giường, tủ, chỗ nấu ăn, để xe. Đi lại tự do. Liên hệ trước khi đến xem phòng .\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:00:42.000Z",
          updatedAt: "2025-04-01T15:00:42.000Z",
        },
        {
          house_id: 24,
          house_name:
            "Cho thuê phòng trọ ở tách với chủ tại Cầu Giấy vào ở ngay",
          address:
            "Ngõ 68 Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519725/gapww9ltdblqvzhoauzr.jpg",
          area: 25,
          cost: 2600000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "\n+Gần các trường đại học Quốc Gia, Sư phạm, Giao thông, Thương mại, Điện lực, Du lịch\n+ Phù hợp cho người đi làm và sinh viên đại học thuê\n+ Lối vào ngõ rộng rãi, sạch sẽ\n+ Có chỗ để xe ra vào thoải mái\n+ Phòng thoáng mát sạch sẽ, có cửa sổ thông thoáng\n+",
          owner_id: 1,
          createdAt: "2025-04-01T15:02:16.000Z",
          updatedAt: "2025-04-01T15:02:16.000Z",
        },
        {
          house_id: 25,
          house_name:
            "Cho thuê phòng khép kín vào ở ngay tại 16A Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy",
          address:
            "16A Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519835/vmyi2k6tj3mxqbesefbx.jpg",
          area: 24,
          cost: 2000000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Vị trí thoáng mát, xung quanh cây xanh, chợ cách 50m.\n Có nhà để xe riêng.\n Diện tích phòng rộng rãi (25m2), trang bị đầy đủ tiện nghi: điều hoà, bình nóng lạnh, tủ quần áo...\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:04:00.000Z",
          updatedAt: "2025-04-01T15:04:00.000Z",
        },
        {
          house_id: 26,
          house_name: "Có phòng cho thuê ngõ 36 Dịch Vọng Hậu - Cầu Giấy",
          address: "ngõ 36 Dịch Vọng Hậu - Cầu Giấy",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520053/n5ewxaibzxuplkvxg2nn.jpg",
          area: 25,
          cost: 2600000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Có ban công rộng, cửa sổ thoáng mát\nGiờ giấc tự do, không chung chủ\nPhòng đầy đủ nội thất: giường, tủ, điều hoà, nóng lạnhgiặt chung,…\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:08:00.000Z",
          updatedAt: "2025-04-01T15:08:00.000Z",
        },
        {
          house_id: 27,
          house_name: " Studio KHÉP KÍN  66/18 dịch vọng hậu, Cầu Giấy ",
          address: "66/18 dịch vọng hậu, Cầu Giấy ",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520223/ymp9b2cezki12wwuzkui.jpg",
          area: 25,
          cost: 2500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Loại phòng: Studio KHÉP KÍN.\n Nội thất: Đồ cơ bản.\n Dịch vụ: Dv điện 4k/số, nước 100k/ng, dvc 150k/ng, mạng 100k.\n LH 0375340657\n\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:10:32.000Z",
          updatedAt: "2025-04-01T15:10:32.000Z",
        },
        {
          house_id: 28,
          house_name: "CHO THUÊ PHÒNG TRỌ GIÁ CHỈ 2tr8",
          address: "ngõ 44 Dịch vọng hậu, Cầu Giấy, Hà Nội",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520408/mwxpqbj6vb59opwq1htc.jpg",
          area: 18,
          cost: 2800000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "An ninh an toàn. Không chung chủ, giờ giấc thoải mái, có cửa sổ mát mẻ thoáng mát. Đặc biệt: PCCC an toàn đảm bảo quy định. Liên hệ chính chủ: 0834795688/ 0914576640\n\n\n\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:13:40.000Z",
          updatedAt: "2025-04-01T15:13:40.000Z",
        },
        {
          house_id: 29,
          house_name: "Nhà mới xây,có thang máy, từng phòng,điện nước giá dân.",
          address: "Ngõ 36 phố Dịch Vọng Hậu",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520739/mtqeyli6ehwlqkrbh75a.jpg",
          area: 30,
          cost: 2500000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Full đồ: vệ sinh khép kín điều hoà, nóng lạnh, giường, tủ quần áo,bàn bếp, tủ bếp dưới,mạng wifi dùng riêng từng phòng ,an ninh cực đảm bảo,carmera từng tầng, ra vào vân tay...\n- Vị trí đẹp, đi đâu cũng tiện,gần chợ,gần siêu thị và các trường đại học Sư p",
          owner_id: 1,
          createdAt: "2025-04-01T15:19:01.000Z",
          updatedAt: "2025-04-01T15:19:01.000Z",
        },
        {
          house_id: 30,
          house_name:
            "NHƯỢNG PHÒNG GIÁ 2TR2 Ngõ 85-Xuân Thuỷ-Dịch Vọng Hậu-Cầu Giấy( gần đh qgia, sư phạm,báo chí..)",
          address: "Ngõ 85, Xuân Thuỷ, Dịch Vọng Hậu, Cầu Giấy",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520972/njcyosmuo1bd6fn6f165.jpg",
          area: 24,
          cost: 2200000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "điện:4k5\nnước 130k/1ng , xe free\nwifi:50k/1ng,máy giặt100k,vsc:50k\nk giới hạn giờ, chung chủ nhưng chủ k qtam can thiệp j\n\n",
          owner_id: 1,
          createdAt: "2025-04-01T15:23:22.000Z",
          updatedAt: "2025-04-01T15:23:22.000Z",
        },
        {
          house_id: 31,
          house_name: "Cho thuê nhà Nguyễn Khang, Cầu Giấy từ 1tr6",
          address: "15, Nguyễn Khang, Cầu Giấy",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521474/knkrfl4wzmngpowmx4cn.jpg",
          area: 17,
          cost: 1600000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description: "Full nội thât\n. Liên hệ 0386635107. Vệ sinh chung",
          owner_id: 1,
          createdAt: "2025-04-01T15:31:19.000Z",
          updatedAt: "2025-04-01T15:31:19.000Z",
        },
        {
          house_id: 32,
          house_name:
            "Cho thuê nhà 58 Nguyễn Khánh Toàn, có vệ sinh khép kín, tầng 6",
          address: "Ngách 45/58 ngõ 58 nguyễn khánh toàn, Cầu Giấy",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521847/rbsgu7fz7p78xffsmkrk.jpg",
          area: 31,
          cost: 2300000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Trống Phòng vskk, tầng 6 thang bộ. Có đh, nl, tủ quần áo, kệ giường như ảnh. Điện 4K, nước 25k, vệ sinh 25k, mạng 100k. Điện 4K, nước 25k, vệ sinh 25k, mạng 100k\n23h đóng cổng ( về muộn thì báo trước có thể thêm 15-20p) Chung cổng vs chủ nhà nhưng ở thì 2",
          owner_id: 1,
          createdAt: "2025-04-01T15:37:37.000Z",
          updatedAt: "2025-04-01T15:37:37.000Z",
        },
        {
          house_id: 33,
          house_name: "Nhà chung cư 68, Cầu Giấy",
          address: "NGÕ 68, CẦU GIẤY",
          image:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743522100/gftglcqbsy5qpghvjjg2.jpg",
          area: 25,
          cost: 4000000,
          number_of_room: null,
          average_rate: null,
          utilities: null,
          description:
            "Giá dịch vụ: Điện: 3,8k/số. Nước: 100k/ng. Wifi: 100k/ph. Vệ sinh: 50k/ng. Máy giặt chung: 50k/ng. Thang máy: 50k/ng. Full đồ: đh, nl, giường, tủ quần áo, bàn bếp, chậu rửa...Bếp tách riêng",
          owner_id: 1,
          createdAt: "2025-04-01T15:42:15.000Z",
          updatedAt: "2025-04-01T15:42:15.000Z",
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
