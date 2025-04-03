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
      "Comment",
      [
        {
          comment_id: 5,
          rater_id: 1,
          rater_name: "Đào Anh Đức",
          rating: 5,
          description: "đẹp",
          createdAt: "2025-02-26T15:08:58.000Z",
          house_id: 1,
        },
        {
          comment_id: 6,
          rater_id: 1,
          rater_name: "Đào Anh Đức",
          rating: 5,
          description: "đẹp",
          createdAt: "2025-02-26T15:09:18.000Z",
          house_id: 1,
        },
        {
          comment_id: 7,
          rater_id: 1,
          rater_name: "Đào Anh Đức",
          rating: 1,
          description: "xấu",
          createdAt: "2025-02-26T15:11:27.000Z",
          house_id: 1,
        },
        {
          comment_id: 8,
          rater_id: 1,
          rater_name: "Đào Anh Đức",
          rating: 3,
          description: "bình thường",
          createdAt: "2025-02-26T15:12:40.000Z",
          house_id: 1,
        },
        {
          comment_id: 9,
          rater_id: 1,
          rater_name: "Đào Anh Đức",
          rating: 4,
          description: "chủ dễ tính lắm ạ",
          createdAt: "2025-02-26T15:18:21.000Z",
          house_id: 1,
        },
        {
          comment_id: 21,
          rater_id: 1,
          rater_name: "Đào Anh Duck",
          rating: 5,
          description: "Nhà đẹp quá mọi người ơi ",
          createdAt: "2025-03-17T14:23:25.000Z",
          house_id: 15,
        },
        {
          comment_id: 22,
          rater_id: 1,
          rater_name: "Đào Anh Duck",
          rating: 3,
          description: "Không như mong đợi",
          createdAt: "2025-03-17T14:23:36.000Z",
          house_id: 15,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
