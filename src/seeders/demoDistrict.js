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
      "District",
      [
        {
          district_name: "Ba Đình",
          city_name: "Hà Nội",
        },
        {
          district_name: "Đống Đa",
          city_name: "Hà Nội",
        },
        {
          district_name: "Hai Bà Trưng",
          city_name: "Hà Nội",
        },
        {
          district_name: "Tây Hồ",
          city_name: "Hà Nội",
        },
        {
          district_name: "Cầu Giấy",
          city_name: "Hà Nội",
        },
        {
          district_name: "Thanh Xuân",
          city_name: "Hà Nội",
        },
        {
          district_name: "Hoàng Mai",
          city_name: "Hà Nội",
        },
        {
          district_name: "Long Biên",
          city_name: "Hà Nội",
        },
        {
          district_name: "Hà Đông",
          city_name: "Hà Nội",
        },
        {
          district_name: "Bắc Từ Liêm",
          city_name: "Hà Nội",
        },
        {
          district_name: "Nam Từ Liêm",
          city_name: "Hà Nội",
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
