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
      "Image",
      [
        {
          id: 6,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495995/p8fshpdlzf3twknlve6e.jpg",
        },
        {
          id: 7,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495995/y8uldvgwlrssq3umvxyl.jpg",
        },
        {
          id: 8,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495995/umff1rle9p220t2jjhgh.jpg",
        },
        {
          id: 9,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495994/mtiort1malk91takha87.jpg",
        },
        {
          id: 10,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740496007/a5gfzg7v6wjsfhgj5fcm.jpg",
        },
        {
          id: 11,
          house_id: 10,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1740495999/owtznrr1614sfpxobwvt.jpg",
        },
        {
          id: 18,
          house_id: 13,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741541260/witqqi4asbkflobgikt0.jpg",
        },
        {
          id: 19,
          house_id: 13,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741541261/nvkfnmz37phtt6iwm20t.jpg",
        },
        {
          id: 20,
          house_id: 13,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741541262/o86khb7e1dsb6hwqhccg.jpg",
        },
        {
          id: 21,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/e8gyw4t04dihdv4mjaoe.jpg",
        },
        {
          id: 22,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/um3k0xdl8ktfearfjt9h.jpg",
        },
        {
          id: 23,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/mqllo1zpemglvntjgxyh.jpg",
        },
        {
          id: 24,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/vu9izkgazpicubr7sjll.jpg",
        },
        {
          id: 25,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/t3u9l5evmlo9sdynpesr.jpg",
        },
        {
          id: 26,
          house_id: 14,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935492/zxtgbnhuhvbk7pgklhw4.jpg",
        },
        {
          id: 27,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935717/kvvdomeaz6vzfrzc2qrk.jpg",
        },
        {
          id: 28,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935717/gr1eo0xg7xep2vrgbzg8.jpg",
        },
        {
          id: 29,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935717/z5dguuc3oepayqr66nt4.jpg",
        },
        {
          id: 30,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935718/g8ngnyhvdgsxjhuv4eye.jpg",
        },
        {
          id: 31,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935717/my0aj5a7dgxg4q0tm2as.jpg",
        },
        {
          id: 32,
          house_id: 15,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935718/jmnmd9jczdadk3yojblt.jpg",
        },
        {
          id: 33,
          house_id: 16,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935895/pyji4ivt9xzavjy4vb6c.jpg",
        },
        {
          id: 34,
          house_id: 16,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935894/crl3icvp73fjlw3szaqc.jpg",
        },
        {
          id: 35,
          house_id: 16,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935894/hjlksx2mypck7xybg90s.jpg",
        },
        {
          id: 36,
          house_id: 16,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1741935895/fvcy9i6oqyyffxkm1j2d.jpg",
        },
        {
          id: 37,
          house_id: 17,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742353929/cmgvt3fd3fzq35xinego.jpg",
        },
        {
          id: 38,
          house_id: 17,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742353929/krfnoxlhem2nvr7bnams.jpg",
        },
        {
          id: 39,
          house_id: 17,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742353931/l3e5qsdloptuc3pmstru.jpg",
        },
        {
          id: 40,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354167/wruwo7uxbxfm4tnesnnk.jpg",
        },
        {
          id: 41,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354167/yll1eaqx4rhivwt5jibd.jpg",
        },
        {
          id: 42,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354165/g6jzbxn1vi48mfh1huwj.jpg",
        },
        {
          id: 43,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354168/xqwkpcaoqcjfoxb4fnas.jpg",
        },
        {
          id: 44,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354168/c5ymnhighiqozuxlsa7v.jpg",
        },
        {
          id: 45,
          house_id: 18,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742354168/yx1ub2evne7g6omuu6hh.jpg",
        },
        {
          id: 46,
          house_id: 19,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742825780/zkc21i6knfw5c71ifmdx.jpg",
        },
        {
          id: 47,
          house_id: 19,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742825781/xm99jqgjemwjfrfkfecn.jpg",
        },
        {
          id: 48,
          house_id: 19,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742825777/vllbrkjikhwzp64i7s9f.jpg",
        },
        {
          id: 49,
          house_id: 19,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1742825781/mblyw05skju2kxi03pfx.jpg",
        },
        {
          id: 54,
          house_id: 21,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519308/gjrsqnabyz2w2p2rgxij.jpg",
        },
        {
          id: 55,
          house_id: 21,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519309/yombocjvisnbfif92jcy.jpg",
        },
        {
          id: 56,
          house_id: 21,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519308/crwrehxindmpsf1k3avr.jpg",
        },
        {
          id: 57,
          house_id: 21,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519308/dcupzewuaxoj4jxr34nm.jpg",
        },
        {
          id: 58,
          house_id: 22,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519396/pzj7igehkollmkkbwsq2.jpg",
        },
        {
          id: 59,
          house_id: 22,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519396/ox8as50mqnyuv6qmsjwf.jpg",
        },
        {
          id: 60,
          house_id: 22,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519396/aftlbmdqfmtjbtnfclyx.jpg",
        },
        {
          id: 61,
          house_id: 23,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519635/ya6yoq588bth0lmcv1fo.jpg",
        },
        {
          id: 62,
          house_id: 23,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519635/zalqkq76kadaobbqsnqm.jpg",
        },
        {
          id: 63,
          house_id: 23,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519635/p2y3hg53gto1nvk3uxet.jpg",
        },
        {
          id: 64,
          house_id: 24,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519725/gapww9ltdblqvzhoauzr.jpg",
        },
        {
          id: 65,
          house_id: 24,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519724/xjuz0hyupemjxzbpujvg.jpg",
        },
        {
          id: 66,
          house_id: 25,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519835/vmyi2k6tj3mxqbesefbx.jpg",
        },
        {
          id: 67,
          house_id: 25,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519835/yt9qy8o3tsl80smhq6te.jpg",
        },
        {
          id: 68,
          house_id: 25,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519837/dhi8frfayiagy8fw4qyj.jpg",
        },
        {
          id: 69,
          house_id: 25,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743519836/f15feavfgbpokllfp72s.jpg",
        },
        {
          id: 70,
          house_id: 26,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520053/n5ewxaibzxuplkvxg2nn.jpg",
        },
        {
          id: 71,
          house_id: 27,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520223/ymp9b2cezki12wwuzkui.jpg",
        },
        {
          id: 72,
          house_id: 27,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520223/zzaibwbkul3kxsnmvlp8.jpg",
        },
        {
          id: 73,
          house_id: 28,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520408/mwxpqbj6vb59opwq1htc.jpg",
        },
        {
          id: 74,
          house_id: 28,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520409/n25houc7pithyztfum9f.jpg",
        },
        {
          id: 75,
          house_id: 28,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520410/uxz1j69vavjga4cvwlnq.jpg",
        },
        {
          id: 76,
          house_id: 29,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520739/mtqeyli6ehwlqkrbh75a.jpg",
        },
        {
          id: 77,
          house_id: 29,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520739/x8ipb8of3hcd08lcvfmr.jpg",
        },
        {
          id: 78,
          house_id: 30,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520972/njcyosmuo1bd6fn6f165.jpg",
        },
        {
          id: 79,
          house_id: 30,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520972/tw9cvpbx9egby20bnndc.jpg",
        },
        {
          id: 80,
          house_id: 30,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743520974/buawiiyzzkyzi7ssmj2o.jpg",
        },
        {
          id: 81,
          house_id: 31,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521474/knkrfl4wzmngpowmx4cn.jpg",
        },
        {
          id: 82,
          house_id: 31,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521474/c7xyzbjc9vp9hl9g6txm.jpg",
        },
        {
          id: 83,
          house_id: 31,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521475/q0miyvezwtt4ryvjvth9.jpg",
        },
        {
          id: 84,
          house_id: 32,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521847/rbsgu7fz7p78xffsmkrk.jpg",
        },
        {
          id: 85,
          house_id: 32,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521846/ml8kefgorffmhy8ieyu5.jpg",
        },
        {
          id: 86,
          house_id: 32,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743521847/lawm8sbv74xjkddb8rr1.jpg",
        },
        {
          id: 87,
          house_id: 33,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743522100/gftglcqbsy5qpghvjjg2.jpg",
        },
        {
          id: 88,
          house_id: 33,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743522101/dj7y0zmkz6pst7y61enr.jpg",
        },
        {
          id: 89,
          house_id: 33,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743522100/beng2jtxeysw7z27szpo.jpg",
        },
        {
          id: 90,
          house_id: 33,
          images:
            "http://res.cloudinary.com/dcalaazrt/image/upload/v1743522101/vvzcwgk7dnvbsdjsvnkw.jpg",
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
