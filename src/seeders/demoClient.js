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
      "Client",
      [
        {
          email: "dduccraft@gmail.com",
          phone: "035310295",
          password: "123123",
          gender: "male",
          username: "Anh Duc",
        },
        {
          email: "nguyenvietanh98@gmail.com",
          phone: "0353101231231",
          password: "123123",
          gender: "male",
          username: "Viet Anh",
        },
        {
          email: "hlam123123@gmail.com",
          phone: "035310295",
          password: "123123",
          gender: "male",
          username: "Lam Nguyen",
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


// import { House } from '../models'; // Import model House
const { House } = require('../models'); // Import model House
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tạo dữ liệu giả cho bảng houses
    await House.bulkCreate([
      {
        house_name: 'Luxury Villa',
        address: '123 Luxury Street, City',
        number_of_room: 5,
        image: 'luxury_villa.jpg',
        average_rate: 4.8,
      },
      {
        house_name: 'Cozy Apartment',
        address: '456 Cozy Road, Downtown',
        number_of_room: 3,
        image: 'cozy_apartment.jpg',
        average_rate: 4.2,
      },
      {
        house_name: 'Modern House',
        address: '789 Modern Avenue, Suburb',
        number_of_room: 4,
        image: 'modern_house.jpg',
        average_rate: 4.5,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa tất cả dữ liệu trong bảng houses (hoặc bạn có thể thêm điều kiện xóa nếu cần)
    await queryInterface.bulkDelete('Houses', null, {});
  },
};