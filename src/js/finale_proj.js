$(function () {
  const products = [
    {
      sku: 1,
      gender: 1, // 0 => male , 1 => female
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_f8c47cd0-d848-4660-a83f-f232674f7b6a_315x.jpg?v=1570226362",
      name: "Slim Fit Cotton Oxford Shirt",
      brand: "LEVI'S",
      price: 500.0,
      quick_filter: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_f8c47cd0-d848-4660-a83f-f232674f7b6a_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_1_b910401d-b317-4182-8510-612d52a7420b_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_2_bae09298-697a-45c3-9caa-dc04a946d8de_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_3_618bf153-0bd3-4939-ac7c-8b760e2559ab_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_4_3cd52a35-5462-4b28-8e48-c5f6904f524a_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_5_4d0a3e25-047a-4ba3-a084-348f2897bcc8_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_6_489d55f9-6725-4050-a9ea-3d58b4439ac6_2048x2048.jpg?v=1570226362",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_7_e12fc077-1df4-4d2e-ba07-5381725892e8_2048x2048.jpg?v=1570226362",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 2,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_4f2c0cff-e946-439d-adbe-a5d0d99774e3_315x.jpg?v=1570226453",

      name: "Paint-Splatter Fleence Pullover",
      brand: "ZARA",
      price: 40.0,
      quick_filter: ["NEW ARRIVALS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_4f2c0cff-e946-439d-adbe-a5d0d99774e3_2048x2048.jpg?v=1570226453",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_2_ffea3602-da5b-453d-8d81-aacfaf245936_2048x2048.jpg?v=1570226453",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_3_2048x2048.jpg?v=1570226453",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_1_3591ac7d-05bd-4df8-b7d3-4ed11c7bb251_2048x2048.jpg?v=1570226453",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 3,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_71a9994a-829c-484a-92f5-b6b765b0da7d_315x.jpg?v=1570226456",

      name: "Pink Pony Leather Sneaker",
      brand: "POLO",
      price: 60.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_71a9994a-829c-484a-92f5-b6b765b0da7d_2048x2048.jpg?v=1570226456",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_1_12cca0c2-3ed3-4748-abfa-69570c903591_2048x2048.jpg?v=1570226456",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_2_77e3945e-ec1a-41dd-9e3c-dae8b1f6a268_2048x2048.jpg?v=1570226456",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_3_a48747bc-c81e-4ce3-8eef-245d056f3d00_2048x2048.jpg?v=1570226456",
      ],
      type: "Shoes",
      collections: "Best Seller",
    },
    {
      sku: 4,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_315x.jpg?v=1570226459",

      name: "Polka-Dot Lightweight Scarf",
      brand: "LACOSTE",
      price: 80.0,
      quick_filter: ["MOST VIEWED", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_2048x2048.jpg?v=1570226459",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_3_f303dd5d-ae1d-41db-bdf4-1c6e2af2b47f_2048x2048.jpg?v=1570226459",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_c2209b5d-da80-4baf-a821-cf1d14091826_2048x2048.jpg?v=1570226459",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_1_030fca94-3a25-49dc-baca-c37157fad0c0_2048x2048.jpg?v=1570226459",
      ],
      type: "Scarf",
      collections: "Trending",
    },
    {
      sku: 5,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_33ed1bdb-f45a-4fa7-be40-48700ac622cc_315x.jpg?v=1570226461",

      name: "Rae Suede Sandal",
      brand: "GUESS",
      price: 100.0,
      quick_filter: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_33ed1bdb-f45a-4fa7-be40-48700ac622cc_2048x2048.jpg?v=1570226461",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_1_e571a069-3f8e-4bc5-a4a4-dbf3ba15b91d_2048x2048.jpg?v=1570226461",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_2_77e499a1-ee93-4726-bd64-1235a700c23a_2048x2048.jpg?v=1570226461",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_3_7fd3c114-c684-4d81-b9bc-0eb21f5c4295_2048x2048.jpg?v=1570226461",
      ],
      type: "Shoes",
      collections: "Best Seller",
    },
    {
      sku: 6,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ralph_s_Coffee_Hat_e5f795d7-eba3-4834-ba51-f52bd8fda361_315x.jpg?v=1570226462",

      name: "Ralph Coffee Hat",
      brand: "LEVI'S",
      price: 120.0,
      quick_filter: ["BESTSELLERS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ralph_s_Coffee_Hat_e5f795d7-eba3-4834-ba51-f52bd8fda361_2048x2048.jpg?v=1570226462",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ralph_s_Coffee_Hat_2_8274ff4c-ea42-4f1a-902e-eecb593cca5f_2048x2048.jpg?v=1570226462",
      ],
      type: "Hat",
      collections: "Trending",
    },
    {
      sku: 7,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_a05b7822-2e2f-40da-986f-4bcd650ba584_315x.jpg?v=1570226466",

      name: "Relaxed Painted Oxford Shirt",
      brand: "GAP",
      price: 180.0,
      quick_filter: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_a05b7822-2e2f-40da-986f-4bcd650ba584_2048x2048.jpg?v=1570226466",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_1_72403822-a75f-475c-bbe4-ac13f63d7da9_2048x2048.jpg?v=1570226466",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_2_d3881564-6976-4c31-ae85-04b23d2bebb2_2048x2048.jpg?v=1570226466",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_3_969ea1b8-e82d-4735-9ea5-386cb59fdeb1_2048x2048.jpg?v=1570226466",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 8,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_e4f9c613-d342-416c-b358-0c1202da8bbc_315x.jpg?v=1570226468",

      name: "Reversible Down Vest",
      brand: "ZARA",
      price: 160.0,
      quick_filter: ["SPECIALS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_e4f9c613-d342-416c-b358-0c1202da8bbc_2048x2048.jpg?v=1570226468",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_1_d3a96c3e-797e-463e-8cb5-cfc700027f60_2048x2048.jpg?v=1570226468",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_2_22a34682-ba64-4ce7-8cd2-04150c5f3e3a_2048x2048.jpg?v=1570226468",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_3_ec1d6602-9769-465f-b06a-dd545d267b6b_2048x2048.jpg?v=1570226468",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 9,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_eede27e8-6157-4f21-b2f8-a7967bfe1108_315x.jpg?v=1570226548",

      name: "Skinny Fit Stretch Mesh Polo",
      brand: "LEVI'S",
      price: 20.0,
      quick_filter: ["SPECIALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_1_c25a6fea-1b7b-4e87-8a96-3d1fc98e9dce_2048x2048.jpg?v=1570226548",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_2_e8b1bf30-e4ca-4bc2-a2c5-b0f037984fbd_2048x2048.jpg?v=1570226548",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_3_c23cc386-264d-4338-bbd7-9a837c8cfe2b_2048x2048.jpg?v=1570226548",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_4_01eba637-2021-46a6-a8b7-9b60faf6b9e0_2048x2048.jpg?v=1570226548",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_5_2aab648f-b876-4f83-a0a5-1f09fbd6413f_2048x2048.jpg?v=1570226548",
      ],
      type: "Polo",
      collections: "Best Seller",
    },
    {
      sku: 10,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_4_315x.jpg?v=1570226530",

      name: "Relaxed-Fit Cotton Shirt",
      brand: "GUESS",
      price: 480.0,
      quick_filter: ["BESTSELLERS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_4_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_5_7c017f4c-14af-4aeb-bd71-483698f89154_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_6_71c33530-7a06-4448-b128-765fbd45f87f_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_7_47b47890-c6cc-48dc-ad12-25a99012fcb6_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_aa1763f1-2949-471d-9d67-38088c1aa987_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_1_cb5951bf-ef65-4d30-84f4-f42135a58f69_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_2_f2bfd2d3-a06b-4fe5-8cfd-53369bde74d8_2048x2048.jpg?v=1570226530",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_3_c376c2f7-4ba3-489c-ac9c-6a7409667b5f_2048x2048.jpg?v=1570226530",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 11,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_4_600x.jpg?v=1570226523",

      name: "Viscose-Cashmere Scarf",
      brand: "ZARA",
      price: 440.0,
      quick_filter: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_4_2048x2048.jpg?v=1570226523",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_5_2048x2048.jpg?v=1570226523",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_2048x2048.jpg?v=1570226523",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_1_2048x2048.jpg?v=1570226523",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_2_2048x2048.jpg?v=1570226523",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_3_2048x2048.jpg?v=1570226523",
      ],
      type: "Scarf",
      collections: "Best Seller",
    },
    {
      sku: 12,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_4_fbb62c6f-e20f-4e08-9b0d-ca08b7d1f792_315x.jpg?v=1570226519",

      name: "Tailored Fit Mesh-Panel Polo",
      brand: "POLO",
      price: 420.0,
      quick_filter: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_4_fbb62c6f-e20f-4e08-9b0d-ca08b7d1f792_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_5_49984807-9a7e-4307-90d8-15e486309532_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_6_dd54ee26-2a61-44f9-b523-d3fb4f9d559c_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_7_436aa5df-9ab4-4ce8-a14a-a53228745e45_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_0484496c-d892-4fa3-b97c-f8c6101aa855_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_1_8e4a2325-0d73-4777-aae3-6db61e434baf_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_2_81cc0d4a-3266-4411-b024-eacb58d76577_2048x2048.jpg?v=1570226519",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_3_fd4d47c7-fee4-48ab-b0ef-a98b84fb611a_2048x2048.jpg?v=1570226519",
      ],
      type: "Polo",
      collections: "Trending",
    },
    {
      sku: 13,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_4_fba54f8e-368e-4537-92ff-03fef8a6c09c_315x.jpg?v=1570226512",

      name: "Fit Mesh-Panel Polo",
      brand: "ZARA",
      price: 460.0,
      quick_filter: ["SPECIALS", "BESTSELLERS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_4_fba54f8e-368e-4537-92ff-03fef8a6c09c_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_5_6e4e7cab-0a65-4d5a-9919-1d00485d3165_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_6_0c4ffb9c-fbba-41a3-aff6-72bf3cffa8b6_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_7_7903a58c-e74d-4046-a97e-bb61df9a951b_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_a2af7d12-3500-4ac1-b571-fa9a6ae09cc9_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_1_5581b10b-5bd4-40aa-bda9-7f90b49fe111_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_2_2176d908-0592-4918-ac6b-941082bf3779_2048x2048.jpg?v=1570226512",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_3_4ccbf0e4-3f04-40d1-accc-522c5e0402af_2048x2048.jpg?v=1570226512",
      ],
      type: "Polo",
      collections: "Best Seller",
    },
    {
      sku: 14,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_13_8d64f29d-9ef1-4cb1-9fa6-6193c913ccd0_315x.jpg?v=1570226505",

      name: "Premier Cropped Skinny Jean",
      brand: "GAP",
      price: 380.0,
      quick_filter: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_13_8d64f29d-9ef1-4cb1-9fa6-6193c913ccd0_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_15_fa5625d4-2ad2-4b1e-a7e7-03226bbf0951_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_12_5533f5b6-4c3c-4f64-8b5b-f2fd98f41843_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_14_41d8f950-4c4d-42fa-b65a-ec9f1134ab1b_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_5_0b8a2869-d963-44f2-8d54-f09ce9129dc0_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_4_13a457d8-3725-48f1-ae9d-8da5af16cf70_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_6_3a2bc33a-9ef3-45b9-8122-91a25a9aaea6_2048x2048.jpg?v=1570226505",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_7_d0b94a30-7362-4b83-9088-79e339d0a767_2048x2048.jpg?v=1570226505",
      ],
      type: "Jeans",
      collections: "Trending",
    },
    {
      sku: 15,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_28748ea1-66d5-4ed6-bfb4-15fab63f00af_315x.jpg?v=1570226388",

      name: "Doughlas Calfskin Buckle Belt",
      brand: "LEVI'S",
      price: 120.0,
      quick_filter: ["MOST VIEWED", "SPECIALS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_28748ea1-66d5-4ed6-bfb4-15fab63f00af_2048x2048.jpg?v=1570226388",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_2_27965908-eb09-4ad8-841a-08120aba110a_2048x2048.jpg?v=1570226388",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_1_9d8b6d84-3d69-4264-bc79-96755e5dc1d2_2048x2048.jpg?v=1570226388",
      ],
      type: "Belt",
      collections: "Best Seller",
    },
    {
      sku: 16,
      gender: 1,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_f192f146-f7a0-4d4e-a453-89fa116f9cd0_315x.jpg?v=1570226414",

      name: "Vachetta Sahara Duffel Bag",
      brand: "LEVI'S",
      price: 360.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_f192f146-f7a0-4d4e-a453-89fa116f9cd0_2048x2048.jpg?v=1570226414",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_1_34fd1e35-6c4e-4f03-8406-d0e8e60c4f29_2048x2048.jpg?v=1570226414",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_2_ce3a32ad-735e-4925-a350-40ae750632b3_2048x2048.jpg?v=1570226414",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_3_93fd2fe0-6d5a-44b4-b512-547f54546f90_2048x2048.jpg?v=1570226414",
      ],
      type: "Bag",
      collections: "Trending",
    },
    {
      sku: 17,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Custom_Fit_Soft-Touch_Polo_2_6911facc-a20c-4583-9715-d6a5381a9806_202x.jpg?v=1570226386",

      name: "Custom Fit Soft-Touch Polo",
      brand: "LACOSITE",
      price: 80.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Custom_Fit_Soft-Touch_Polo_2_6911facc-a20c-4583-9715-d6a5381a9806_2048x2048.jpg?v=1570226386",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Custom_Fit_Soft-Touch_Polo_3_2048x2048.jpg?v=1570226386",
      ],
      type: "Polo",
      collections: "Best Seller",
    },
    {
      sku: 18,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_86a12e62-fe99-4e26-839b-30b36d34bbf0_202x.jpg?v=1570226390",

      name: "Hampton Straight-Fit Jean",
      brand: "GAP",
      price: 140.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_86a12e62-fe99-4e26-839b-30b36d34bbf0_2048x2048.jpg?v=1570226390",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_3_a0360433-16b7-4f01-bcef-1745adf7c090_2048x2048.jpg?v=1570226390",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_2_3da16ce6-5e15-4d84-b5b6-666990f9e74b_2048x2048.jpg?v=1570226390",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_1_2db8c79f-5461-409b-b567-d34bf8d36633_2048x2048.jpg?v=1570226390",
      ],
      type: "Jeans",
      collections: "Trending",
    },
    {
      sku: 19,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_62cec630-27d4-44ed-af76-707495d3a98e_202x.jpg?v=1570226392",

      name: "Heritage Sunglasses",
      brand: "ZARA",
      price: 160.0,
      quick_filter: ["BESTSELLERS", "SPECIALS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_62cec630-27d4-44ed-af76-707495d3a98e_2048x2048.jpg?v=1570226392",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_1_84f39183-2fdd-4dfc-a619-7b182ba1ad90_2048x2048.jpg?v=1570226392",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_2_b4688e91-1135-4661-ae5d-0ea8d14bad8f_2048x2048.jpg?v=1570226392",
      ],
      type: "Sunglasses",
      collections: "Best Seller",
    },
    {
      sku: 20,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_bf3d7287-c8bf-458e-bd19-8d583a4760d6_202x.jpg?v=1570226395",

      name: "Ocean Wash Linen Sport Shirt",
      brand: "GUESS",
      price: 220.0,
      quick_filter: ["NEW ARRIVALS", "SPECIALS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_bf3d7287-c8bf-458e-bd19-8d583a4760d6_2048x2048.jpg?v=1570226395",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_3_e536dfd1-66c0-4690-9b4d-44bdd8c02d88_2048x2048.jpg?v=1570226395",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_1_c1b58474-7655-4ace-96a7-11fe9fbf1e88_2048x2048.jpg?v=1570226395",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_2_c1448817-559f-4548-8e9a-c46aff962292_2048x2048.jpg?v=1570226395",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 21,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_4_ec2daea3-368e-4d00-afb5-eee718d165a7_202x.jpg?v=1570226399",

      name: "Packable Jacket",
      brand: "LEVI'S",
      price: 240.0,
      quick_filter: ["BESTSELLERS", "MOST VIEWED", "SPECIALS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_4_ec2daea3-368e-4d00-afb5-eee718d165a7_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_5_3d95cd60-df79-4113-9437-7622f47d39dd_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_6_007297f6-9c33-42b9-a17d-5a8496c200e7_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_7_828eeb88-750c-402a-b0bb-1b3737928529_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_fc11b8f2-c023-4643-8206-c7bbc9bd59ad_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_1_ff9a1675-fb57-45a1-ba92-3015b2cd43ee_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_2_f0e9c281-4ba6-4b4e-bb99-0e42092d2581_2048x2048.jpg?v=1570226399",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_3_2fb39795-449b-4e95-a538-02a736d0c7d9_2048x2048.jpg?v=1570226399",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 22,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_816a4590-aaad-439c-8da3-3202db510010_202x.jpg?v=1570226402",

      name: "Performance Jersey T-Shirt",
      brand: "GAP",
      price: 260.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_816a4590-aaad-439c-8da3-3202db510010_2048x2048.jpg?v=1570226402",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_1_0b4f5947-7a4b-4b7e-8986-cd4b214c9afc_2048x2048.jpg?v=1570226402",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_2_f15ba0fb-5d36-408c-8390-7737a0818ea4_2048x2048.jpg?v=1570226402",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_3_15156ef6-a6d8-41be-bdef-4a4e2d7f5a83_2048x2048.jpg?v=1570226402",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 23,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_393ba8d0-a0fd-4b7c-8f4e-838818720a5c_202x.jpg?v=1570226404",

      name: "Prima Cotton Sweater",
      brand: "ZARA",
      price: 280.0,
      quick_filter: ["SPECIALS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_393ba8d0-a0fd-4b7c-8f4e-838818720a5c_2048x2048.jpg?v=1570226404",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_1_e1fb7a49-df30-46ef-8d8e-1fe582bbf72d_2048x2048.jpg?v=1570226404",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_2_7f4640a7-6ffd-48e9-94a4-3036fb591039_2048x2048.jpg?v=1570226404",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_3_2730f89a-e4a7-4186-a248-2c3a8bcc2a5c_2048x2048.jpg?v=1570226404",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 24,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_212x.jpg?v=1570226424",

      name: "East Hampton Fleece Hoodie",
      brand: "GAP",
      price: 440.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_5_dfb5e35a-3b82-4aae-a6d0-f826bb5ae631_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_6_bc57b5a5-e161-4aa6-abd2-bf0aaf135a8b_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_7_b9c39168-34b8-4d8b-bb21-b2cd155bad75_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_7270f97f-f554-4568-bf1a-30e7490a5a92_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_1_07c107d9-51d7-4c24-9c8f-61e704872bb7_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_2_e7a14dda-2762-41b4-903c-5c6dbe2e84a0_2048x2048.jpg?v=1570226424",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_3_69d7e410-fdbf-4087-a5f8-503d2e6826a3_2048x2048.jpg?v=1570226424",
      ],
      type: "Shirt",
      collections: "Trending",
    },
    {
      sku: 25,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Stretch_Jean_c71f28ab-fe93-419b-8576-4534dd3aeee2_212x.jpg?v=1570226407",

      name: "Slim Fit Stretch Jean",
      brand: "POLO",
      price: 300.0,
      quick_filter: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Stretch_Jean_c71f28ab-fe93-419b-8576-4534dd3aeee2_2048x2048.jpg?v=1570226407",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Stretch_Jean_1_c14662ef-b170-4218-85ef-9a454aa32148_2048x2048.jpg?v=1570226407",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Stretch_Jean_2_e3715b0c-e601-45de-a755-9507efc8bb42_2048x2048.jpg?v=1570226407",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Stretch_Jean_3_d42132a3-8410-438e-a3a7-626207430930_2048x2048.jpg?v=1570226407",
      ],
      type: "Jeans",
      collections: "Best Seller",
    },
    {
      sku: 26,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_1_8a94289f-c9c8-4e47-afa1-c436717fc271_212x.jpg?v=1570226439",

      name: "Raxon Chambray Low-Top Sneaker",
      brand: "POLO",
      price: 480.0,
      quick_filter: ["BESTSELLERS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_1_8a94289f-c9c8-4e47-afa1-c436717fc271_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_3147efd1-3505-4775-ba55-f49ef2179732_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_2_3c0664a3-3be1-4d84-80fd-7d85df4656fe_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_3_a28fa382-1d9a-434c-bd0e-217d8c150b22_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_5_320f4ff2-9e9b-43e3-a710-d0f5febbaa97_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_4_ad8248fa-fd37-4c40-a742-6bad2762b93c_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_6_510e4b98-3109-4b37-9cd2-60054cde0d3c_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_7_c761882e-606e-4cd3-85dc-b1ed857f33fb_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_9_98544197-19b9-4ec8-b8ce-927e449280bf_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_8_fd10b8f8-082c-4a1a-b10b-d16b7d674003_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_10_ad1404c2-476c-4856-99c6-48f458190fd8_2048x2048.jpg?v=1570226439",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_11_ec5c92fd-667e-428e-a164-40a7e04b19e4_2048x2048.jpg?v=1570226439",
      ],
      type: "Shoes",
      collections: "Trending",
    },
    {
      sku: 27,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_8_a45b2d4e-994e-4ffe-9909-04331f601478_212x.jpg?v=1570226447",

      name: "Plaid Cotton Oxford Shirt",
      brand: "LEVI'S",
      price: 20.0,
      quick_filter: ["NEW ARRIVALS", "FEATURED PRODUCTS", "MOST VIEWED"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_8_a45b2d4e-994e-4ffe-9909-04331f601478_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_9_a2b0ae7d-117f-47fc-800f-84e8c84b3b8e_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_10_d4510248-5245-475c-a0e4-a340d1ce5621_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_11._2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_92a6ee34-62b1-46f7-aa61-d83f2dda325a_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_1_22b60ea9-4027-4386-bfff-e64136a484f8_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_2_e45f3fed-3fc1-4292-b9e5-c97e98ecaa01_2048x2048.jpg?v=1570226447",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_3_918d63d9-7caf-41d0-8f57-0ec9b93e5012_2048x2048.jpg?v=1570226447",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 28,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Varick_Slim_Straight_Jean_39e1cb1c-c2ce-4daa-a1b0-d8d5330342f6_212x.jpg?v=1570226415",

      name: "Varick Slim Straight Jean",
      brand: "GAP",
      price: 380.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS", "SPECIALS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Varick_Slim_Straight_Jean_39e1cb1c-c2ce-4daa-a1b0-d8d5330342f6_2048x2048.jpg?v=1570226415",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Varick_Slim_Straight_Jean_1_5b61db70-16c6-4b33-8dbd-0c841d94b105_2048x2048.jpg?v=1570226415",
      ],
      type: "Jeans",
      collections: "Trending",
    },
    {
      sku: 29,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Waffle_Cotton-Blend_Hoodie_d1761aff-d36c-4b82-9728-6729b314bb71_212x.jpg?v=1570226418",

      name: "Waffle Cotton-Blend Hoodie",
      brand: "ZARA",
      price: 400.0,
      quick_filter: ["MOST VIEWED", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Waffle_Cotton-Blend_Hoodie_d1761aff-d36c-4b82-9728-6729b314bb71_2048x2048.jpg?v=1570226418",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Waffle_Cotton-Blend_Hoodie_1_6b95df86-fe8b-49d4-9b08-d98337196613_2048x2048.jpg?v=1570226418",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Waffle_Cotton-Blend_Hoodie_2_1310ce2a-a92f-49a6-ac1c-edc7f0064d02_2048x2048.jpg?v=1570226418",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Waffle_Cotton-Blend_Hoodie_3_4abbdac6-82c4-415f-bd8f-949e620ca7c1_2048x2048.jpg?v=1570226418",
      ],
      type: "Shirt",
      collections: "Best Seller",
    },
    {
      sku: 30,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_Featured_212x.jpg?v=1570226431",

      name: "Faxon Canvas Low-Top Sneaker",
      brand: "ZARA",
      price: 460.0,
      quick_filter: ["NEW ARRIVALS", "BESTSELLERS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_Featured_2048x2048.jpg?v=1570226431",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_9_2048x2048.jpg?v=1570226431",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_8_2048x2048.jpg?v=1570226431",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_10_2048x2048.jpg?v=1570226431",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_11_2048x2048.jpg?v=1570226431",
      ],
      type: "Shoes",
      collections: "Trending",
    },
    {
      sku: 31,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Wimbledon_Cross_Court_Cap_d320c1e5-2530-4eb7-9cce-fceef14b2fa8_212x.jpg?v=1570226419",

      name: "Wimbledon Cross Court Cap",
      brand: "LEVI'S",
      price: 420.0,
      quick_filter: ["NEW ARRIVALS", "SPECIALS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Wimbledon_Cross_Court_Cap_d320c1e5-2530-4eb7-9cce-fceef14b2fa8_2048x2048.jpg?v=1570226419",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Wimbledon_Cross_Court_Cap_1_92c4b4c3-f04b-400e-bc69-f44efd7dc0e6_2048x2048.jpg?v=1570226419",
      ],
      type: "Hat",
      collections: "Best Seller",
    },
    {
      sku: 32,
      gender: 0,
      img:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Woven_Shield_Sunglasses_3890188c-15a3-459b-94c3-4e46e2149215_212x.jpg?v=1570226490",

      name: "Woven Shield Sunglasses",
      brand: "LEVI'S",
      price: 360.0,
      quick_filter: ["MOST VIEWED", "BESTSELLERS", "FEATURED PRODUCTS"],
      gallery: [
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Woven_Shield_Sunglasses_3890188c-15a3-459b-94c3-4e46e2149215_2048x2048.jpg?v=1570226490",
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Woven_Shield_Sunglasses_1_ad768208-b3c1-4cb6-a95f-0583417d5335_2048x2048.jpg?v=1570226490",
      ],
      type: "Sunglasses",
      collections: "Trending",
    },
  ];
  // clear all data in the local storage when back to home page or others page
  if (window.location.pathname == "/finale_proj.html") {
    $("nav li").removeClass("active");
  }
  if (window.location.pathname == "/product-view.html") {
    $("nav li").removeClass("active");
  }
  $(".nav-header .logo").click(function (e) {
    e.preventDefault();
    window.location.href = "./finale_proj.html";
  });

  // when header dropdown is hover
  $(".header-dropdown").hover(
    function () {
      // over
      $(this).parent().find("> a").addClass("active");
    },
    function () {
      // out
      $(this).parent().find("> a").removeClass("active");
    }
  );
  $(window).scroll(function () {
    const currentPos = $(window).scrollTop();
    if (currentPos > 77) {
      $(".nav-fixed").fadeIn();
      $(".nav-fixed").css("display", "block");
    } else $(".nav-fixed").css("display", "none");

    // show the back to top button
    if (currentPos > 700) {
      $(".back-to-top").fadeIn();
      $(".back-to-top").css("display", "block");
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  // open / close search bar
  // open
  $("header .search").click(function (e) {
    e.preventDefault();
    // e.stopPropagation();
    $(".search-bar").css("display", "block");
  });

  // close
  $(".search-bar .close").click(function (e) {
    e.preventDefault();
    $(".search-bar").fadeOut();
    $(".search-input").val("");
    $(".search-res").hide();
  });
  // filter the search result and render it for auto search
  $(".search-input").keyup(function (e) {
    const search_input = $(this).val();
    const search_result = products.filter((product) =>
      product.name.match(search_input)
    );
    $(".search-res").empty();
    if (search_result.length > 0 && search_input.length > 0) {
      // hightlight the search input
      $(".search-res").fadeIn();
      search_result.forEach((product) => {
        const hight_search = product.name
          .split(search_input)
          .join(`<span style="color : #2879fe;">${search_input}</span>`);

        renderSearchRes(hight_search);
      });
    } else $(".search-res").hide();
  });
  // click the search res for input zone
  $("body").on("click", ".search-res a", function (e) {
    e.stopPropagation();
    e.preventDefault();
    const currentRes = $(this).text();
    $(".search-input").val(currentRes);
    $(".search-res").hide();
  });

  // thiết lập owl carousel
  // tạo carousel cho woman quickview
  $(".women-quickview").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    },
  });
  // tạo carousel cho men quick view
  $(".men-quickview").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    },
  });

  // render women-quickview carousel
  const women_quickview = products.filter((product) => product.gender === 1);
  if (women_quickview.length > 0) {
    renderProductsQuickView(".women-quickview", women_quickview);
    // filter in women quick view
    $(".women-quick-filter a").click(function (e) {
      e.preventDefault();
      $(".women-quick-filter a").removeClass("active");
      $(this).addClass("active");
      let quickfilter_data = $(this).attr("data-quickfilter");
      const women_quickfilter = women_quickview.filter((product, index) =>
        product.quick_filter.includes(quickfilter_data)
      );
      for (let i = 0; i < $(".women-quickview .product-content").length; i++) {
        $(".women-quickview .product-content")
          .trigger("remove.owl.carousel", [i])
          .trigger("refresh.owl.carousel");
      }
      if (women_quickfilter.length > 0) {
        renderProductsQuickView(".women-quickview", women_quickfilter);
      } else renderProductsQuickView(".women-quickview", women_quickview);
    });
  }
  // render men-quickview carousel
  const men_quickview = products.filter((product) => product.gender === 0);
  if (men_quickview.length > 0) {
    renderProductsQuickView(".men-quickview", men_quickview);
    // filter in men quick view
    $(".men-quick-filter a").click(function (e) {
      e.preventDefault();
      $(".men-quick-filter a").removeClass("active");
      $(this).addClass("active");
      let quickfilter_data = $(this).attr("data-quickfilter");
      const men_quickfilter = men_quickview.filter((product) =>
        product.quick_filter.includes(quickfilter_data)
      );
      for (let i = 0; i < $(".men-quickview .product-content").length; i++) {
        $(".men-quickview .product-content")
          .trigger("remove.owl.carousel", [i])
          .trigger("refresh.owl.carousel");
      }
      if (men_quickfilter.length > 0) {
        renderProductsQuickView(".men-quickview", men_quickfilter);
      } else renderProductsQuickView(".men-quickview", men_quickview);
    });
  }
  // close and open the newsletter signup zone
  $(".newsletter-signup .title a").click(function (e) {
    e.preventDefault();
  });
  // action that only happen with screen size smaller than large(992px)
  if ($(window).width() < 992) {
    // open the newsletter signup zone
    $(".newsletter-signup .title").click(function (e) {
      e.preventDefault();
      if ($(".newsletter-signup .signup-zone").css("display") === "none") {
        $(".open").css("display", "none");
        $(".close").css("display", "block");
        $(".newsletter-signup .signup-zone").css("display", "block");
      } else {
        $(".open").css("display", "block");
        $(".close").css("display", "none");
        $(".newsletter-signup .signup-zone").css("display", "none");
      }
    });
    // sideber nav activate / unactivate
    // open sidebar
    $("header .menu").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".nav-sidebar").css("display", "block");
    });
    // close sidebar
    $(".nav-sidebar .close").click(function (e) {
      e.preventDefault();
      $(".nav-sidebar").fadeOut();
    });
  }

  // back to top
  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $(window).scrollTop(0);
  });

  // click product content to go to another page
  // go to product-view.html
  // get the clicked product to render
  var product_sku;
  // if you click the whole product-content
  $("body").on("click", ".product-content", function () {
    // localStorage.clear();
    window.location.href = "./product-view.html";
    product_sku = $(this).find(".sku").text();
    const click_product = products.find(
      (product) => product.sku === parseInt(product_sku)
    );
    localStorage.setItem("product", JSON.stringify(click_product));
  });
  // if you click the product name
  $("body").on("click", ".product-content-name a", function (e) {
    e.preventDefault();
    // e.stopPropagation();
    // localStorage.clear();
    window.location.href = "./product-view.html";
    product_sku = $(this).parents(".product-content").find(".sku").text();
    const click_product = products.find(
      (product) => product.sku === parseInt(product_sku)
    );
    localStorage.setItem("product", JSON.stringify(click_product));
  });
  // if you search the product in the search bar
  $(".search-submit").click(function (e) {
    e.preventDefault();
    // localStorage.clear();
    let product_name = $(".search-input").val();
    if (product_name.length > 0) {
      const searched_product = products.find(
        (product) => product.name === product_name
      );
      if (searched_product !== undefined) {
        localStorage.setItem("product", JSON.stringify(searched_product));
        window.location.href = "./product-view.html";
      } else alert("NO RESULT");
    } else alert("PLEASE TYPE IN THE SEARCH BAR");
  });
  const product_raw = localStorage.getItem("product") || {};
  const product_get = product_raw.length ? JSON.parse(product_raw) : {};
  // render the clicked product to product-view.html
  $(".item-view-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    swipe: true,
    fade: false,
    asNavFor: ".product-gallery",
  });
  // create the product gallery carousel in product-view.html
  $(".product-gallery").slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: false,
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".item-view-gallery",
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  // click the gallery and its will show the img in the items img view
  $("body").on("click", ".product-gallery .img-wrapper", function () {
    const pictureToGo = $(this).data("slide");
    $(".img-wrapper").removeClass("active");
    $(this).addClass("active");
    $(".item-view-gallery").slick("slickGoTo", pictureToGo);
  });
  renderProductView(product_get);

  // product-view-name indicate
  $(`<span>${product_get.name}</span>`).appendTo(".product-view-name h5");

  // increase or decrease quantities of the product
  $(".item-to-cart .minus").click(function (e) {
    e.preventDefault();
    let item_quantity = $(this).parent().find(".item-number").val();
    if (item_quantity > 1) {
      item_quantity--;
    }
    $(".item-number").val(item_quantity);
  });
  $(".item-to-cart .plus").click(function (e) {
    e.preventDefault();
    let item_quantity = $(this).parent().find(".item-number").val();
    if (item_quantity < 10) {
      item_quantity++;
    }
    $(".item-number").val(item_quantity);
  });
  // show the info of description , additional info
  showInfo(".page-description");
  showInfo(".add-info");
  // able the buy button if agree with term
  $("#agree").change(function (e) {
    e.preventDefault();
    if ($("#agree").prop("checked") === true) {
      $(".buy-it-now").prop("disabled", false);
      $(".buy-it-now").addClass("active");
    } else {
      $(".buy-it-now").prop("disabled", true);
      $(".buy-it-now").removeClass("active");
    }
  });

  // product filter page functions
  // product-filter-crums and nav active settings
  $(".go-home").click(function (e) {
    e.preventDefault();
    window.location.href = "./finale_proj.html";
  });
  $(".shop-all").click(function (e) {
    e.preventDefault();
    window.location.href = "./product-filter.html";
    let crums = $(this).data("crums");
    // save the all product to local storage
    localStorage.setItem("filter_page_items", JSON.stringify(products));
    localStorage.setItem("crums", crums);
    localStorage.setItem("collections", 0);
  });
  const genderShopClick = (selector, index, list) => {
    window.location.href = "./product-filter.html";
    let crums = $(selector).data("crums");
    // save the women product to local storage
    localStorage.setItem("filter_page_items", JSON.stringify(list));
    localStorage.setItem("crums", crums);
    localStorage.setItem("collections", index);
  };
  $(".women-only").click(function (e) {
    e.preventDefault();
    genderShopClick(this, 1, women_quickview);
  });
  $(".women-banner .shop_now").click(function (e) {
    e.preventDefault();
    genderShopClick(".women-banner .title", 1, women_quickview);
  });
  $(".men-only").click(function (e) {
    e.preventDefault();
    genderShopClick(this, 2, men_quickview);
  });
  $(".men-banner .shop_now").click(function (e) {
    e.preventDefault();
    genderShopClick(".men-banner .title", 2, men_quickview);
  });
  if (window.location.pathname == "/product-filter.html") {
    const crums_get = localStorage.getItem("crums") || "";
    // get filtered product array to page product-filter.html
    const filter_items_raw = localStorage.getItem("filter_page_items") || [];
    const filter_items_get = filter_items_raw.length
      ? JSON.parse(filter_items_raw)
      : [];
    // always render outside the event
    $("nav li").find(`[data-crums="${crums_get}"]`).addClass("active");
    $(`<span>${crums_get}</span>`).appendTo(".product-filter-crums h5");
    // render the option title
    $(
      `<span class="tag">${crums_get}</span> 
        <span class="quantity"> (${filter_items_get.length})</span>`
    ).appendTo(".filter-view .title-options .title");
    var crums_nograve = crums_get.split("'").join("");
    $(`.collections .${crums_nograve}`).addClass("active");
    // open the filter side bar in mobile/tablet mode
    $(".filter-view .filter-open").click(function (e) {
      e.preventDefault();
      $(".filter-choices.sided").addClass("open");
    });
    // close the filter side bar in mobile/tablet mode
    $(".filter-choices .close").click(function (e) {
      e.preventDefault();
      $(".filter-choices.sided").removeClass("open");
    });
    // the filter flag in cases to render and to turn on/off flag
    var filter_items = [...filter_items_get];
    (filter_grid = 2), //grid two view is default
      (filter_select = 1), //name ascending is default
      (filter_collections = parseInt(localStorage.getItem("collections"))), //the default base on what tbs you choose
      (filter_type = 0), //default is none
      (filter_color = 0), //default is none
      (filter_size = 0), //default is none
      (filter_price = 0), //default is none
      (filter_vendor = 0);

    // default render when open the active tabs
    filterFlagRender(
      filter_grid,
      filter_select,
      filter_collections,
      filter_type,
      filter_price,
      filter_vendor,
      filter_items
    );
    // filter in collections
    // women only filter
    $(".collections a").click(function (e) {
      e.preventDefault();
      $(".collections a").not(this).removeClass("active");
      $(this).toggleClass("active");
      let collections_tag = $(this).text();
      switch (collections_tag) {
        case "Women's":
          filter_collections = 1;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Men's":
          filter_collections = 2;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Trending":
          filter_collections = 3;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Best Seller":
          filter_collections = 4;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        default:
          break;
      }
      $(".filter-view .title-options .title .tag").empty();
      $(`<span>${collections_tag.split("'").join("")}</span>`).appendTo(
        ".filter-view .title-options .title .tag"
      );
      if ($(".collections").find("a.active").length === 0) {
        filter_collections = 0;
        filterFlagRender(
          filter_grid,
          filter_select,
          filter_collections,
          filter_type,
          filter_price,
          filter_vendor,
          filter_items
        );
        $(".filter-view .title-options .title .tag").empty();
        $(`<span>Collections</span>`).appendTo(
          ".filter-view .title-options .title .tag"
        );
      }
    });

    // product type click action
    $(".product-types a").click(function (e) {
      e.preventDefault();
      $(".product-types a").not(this).removeClass("active");
      $(this).toggleClass("active");
      let type_tag = $(this).text();
      switch (type_tag) {
        case "Shirt":
          filter_type = 1;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Hat":
          filter_type = 2;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Jeans":
          filter_type = 3;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Polo":
          filter_type = 4;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Belt":
          filter_type = 5;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Shoes":
          filter_type = 6;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Sunglasses":
          filter_type = 7;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Scarf":
          filter_type = 8;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Bag":
          filter_type = 9;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        default:
          filter_type = 0;
          break;
      }
      if ($(".product-types").find("a.active").length === 0) {
        filter_type = 0;
        filterFlagRender(
          filter_grid,
          filter_select,
          filter_collections,
          filter_type,
          filter_price,
          filter_vendor,
          filter_items
        );
      }
    });
    // filter the price range of product
    $(".price-choice a").click(function (e) {
      e.preventDefault();
      $(".price-choice a").not(this).removeClass("active");
      $(this).toggleClass("active");
      switch ($(this).data("pmax")) {
        case 100:
          filter_price = 1;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case 200:
          filter_price = 2;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case 300:
          filter_price = 3;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case 400:
          filter_price = 4;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case 500:
          filter_price = 5;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        default:
          break;
      }
      if ($(".price-choice").find("a.active").length === 0) {
        filter_price = 0;
        filterFlagRender(
          filter_grid,
          filter_select,
          filter_collections,
          filter_type,
          filter_price,
          filter_vendor,
          filter_items
        );
      }
    });

    // filter the brand of product
    $(".brand-choice a").click(function (e) {
      e.preventDefault();
      $(".brand-choice a").not(this).removeClass("active");
      $(this).toggleClass("active");
      switch ($(this).text()) {
        case "GAP":
          filter_vendor = 1;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "GUESS":
          filter_vendor = 2;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "LACOSTE":
          filter_vendor = 3;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "LEVI'S":
          filter_vendor = 4;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "POLO":
          filter_vendor = 5;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "ZARA":
          filter_vendor = 6;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        default:
          break;
      }
      if ($(".brand-choice").find("a.active").length === 0) {
        filter_vendor = 0;
        filterFlagRender(
          filter_grid,
          filter_select,
          filter_collections,
          filter_type,
          filter_price,
          filter_vendor,
          filter_items
        );
      }
    });
    // filter choice click action
    $(".choice-title .title").click(function (e) {
      e.preventDefault();
      $(this).find(".vertical").toggleClass("active");
      $(this).parent().find(".dropdown").toggleClass("active");
    });
    // gridview render filtered product view
    // grid-one render
    $(".grid-one").click(function (e) {
      e.preventDefault();
      $(".grid-choice").removeClass("active");
      $(this).addClass("active");
      filter_grid = 1;
      filterFlagRender(
        filter_grid,
        filter_select,
        filter_collections,
        filter_type,
        filter_price,
        filter_vendor,
        filter_items
      );
    });
    $(".grid-two").click(function (e) {
      e.preventDefault();
      $(".grid-choice").removeClass("active");
      $(this).addClass("active");
      filter_grid = 2;
      filterFlagRender(
        filter_grid,
        filter_select,
        filter_collections,
        filter_type,
        filter_price,
        filter_vendor,
        filter_items
      );
    });
    $(".grid-three").click(function (e) {
      e.preventDefault();
      $(".grid-choice").removeClass("active");
      $(this).addClass("active");
      filter_grid = 3;
      filterFlagRender(
        filter_grid,
        filter_select,
        filter_collections,
        filter_type,
        filter_price,
        filter_vendor,
        filter_items
      );
    });

    // add the click event when click the items in grid one view
    $("body").on("click", ".filtered-product-content .filtered-img", function (
      e
    ) {
      e.preventDefault();
      window.location.href = "./product-view.html";
      product_sku = $(this).parent().find(".sku").text();
      const click_product = products.find(
        (product) => product.sku === parseInt(product_sku)
      );
      localStorage.setItem("product", JSON.stringify(click_product));
    });
    // add the click event to the name too
    $("body").on(
      "click",
      ".filtered-product-content .filtered-info .name",
      function (e) {
        e.preventDefault();
        window.location.href = "./product-view.html";
        product_sku = $(this)
          .parents(".filtered-product-content")
          .find(".sku")
          .text();
        const click_product = products.find(
          (product) => product.sku === parseInt(product_sku)
        );
        localStorage.setItem("product", JSON.stringify(click_product));
      }
    );

    $(".product-select-filters").change(function (e) {
      e.preventDefault();
      switch ($(this).val()) {
        case "Name-Ascending":
          filter_select = 1;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Name-Descending":
          filter_select = 2;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Price-Ascending":
          filter_select = 3;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        case "Price-Descending":
          filter_select = 4;
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
        default:
          filterFlagRender(
            filter_grid,
            filter_select,
            filter_collections,
            filter_type,
            filter_price,
            filter_vendor,
            filter_items
          );
          break;
      }
    });
  }
  // render base on the flag that has enable
  function filterFlagRender(
    grid_flag,
    select_flag,
    collections_flag,
    type_flag,
    price_flag,
    brand_flag,
    list
  ) {
    // check the collections tag
    switch (collections_flag) {
      case 1:
        list = [...women_quickview];
        break;
      case 2:
        list = [...men_quickview];
        break;
      case 3:
        list = [
          ...products.filter((product) => product.collections === "Trending"),
        ];
        break;
      case 4:
        list = [
          ...products.filter(
            (product) => product.collections === "Best Seller"
          ),
        ];
        break;
      default:
        list = [...products];
        break;
    }
    // check the product type tag
    switch (type_flag) {
      case 1:
        list = list.filter((product) => product.type === "Shirt");
        break;
      case 2:
        list = list.filter((product) => product.type === "Hat");
        break;
      case 3:
        list = list.filter((product) => product.type === "Jeans");
        break;
      case 4:
        list = list.filter((product) => product.type === "Polo");
        break;
      case 5:
        list = list.filter((product) => product.type === "Belt");
        break;
      case 6:
        list = list.filter((product) => product.type === "Shoes");
        break;
      case 7:
        list = list.filter((product) => product.type === "Sunglasses");
        break;
      case 8:
        list = list.filter((product) => product.type === "Scarf");
        break;
      case 9:
        list = list.filter((product) => product.type === "Bag");
        break;
      default:
        break;
    }
    // check the price filter tag
    switch (price_flag) {
      case 1:
        list = list.filter(
          (product) => product.price >= 10 && product.price <= 100
        );
        break;
      case 2:
        list = list.filter(
          (product) => product.price >= 100 && product.price <= 200
        );
        break;
      case 3:
        list = list.filter(
          (product) => product.price >= 200 && product.price <= 300
        );
        break;
      case 4:
        list = list.filter(
          (product) => product.price >= 300 && product.price <= 400
        );
        break;
      case 5:
        list = list.filter(
          (product) => product.price >= 400 && product.price <= 500
        );
        break;
      default:
        break;
    }
    // check the vendor filter tag
    switch (brand_flag) {
      case 1:
        list = list.filter((product) => product.brand === "GAP");
        break;
      case 2:
        list = list.filter((product) => product.brand === "GUESS");
        break;
      case 3:
        list = list.filter((product) => product.brand === "LACOSTE");
        break;
      case 4:
        list = list.filter((product) => product.brand === "LEVI'S");
        break;
      case 5:
        list = list.filter((product) => product.brand === "POLO");
        break;
      case 6:
        list = list.filter((product) => product.brand === "ZARA");
        break;
      default:
        break;
    }
    console.log(list);
    // check the select filter options
    switch (select_flag) {
      case 1:
        list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        break;
      case 2:
        list.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
        break;
      case 3:
        list.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        break;
      case 4:
        list.sort((a, b) =>
          a.price > b.price ? -1 : b.price > a.price ? 1 : 0
        );
        break;
      default:
        break;
    }

    // check the current grid view to
    if (grid_flag === 1) {
      $(".filtered-product .filtered-product-group").empty();
      renderGridOne(list);
    } else if (grid_flag === 2) {
      $(".product-content.filter").css("width", "(100% / 2)");
      $(".filtered-product .filtered-product-group").empty();
      renderGridTwo(list);
    } else if (grid_flag === 3) {
      $(".product-content.filter").css("width", "(100% / 3)");
      $(".filtered-product .filtered-product-group").empty();
      renderGridThree(list);
    }
    $(".filter-view .title-options .title .quantity").empty();
    $(`<span> (${list.length})</span>`).appendTo(
      ".filter-view .title-options .title .quantity"
    );
  }
  // render the CART ==> BIG THING
  const products_incart_raw = localStorage.getItem("product_incart") || [];
  const products_incart_view = products_incart_raw.length
    ? JSON.parse(products_incart_raw)
    : [];
  var products_incart = [...products_incart_view];

  // contact information init
  const contact_info_raw = localStorage.getItem("contact_info") || {};
  const contact_info_get = contact_info_raw.length
    ? JSON.parse(contact_info_raw)
    : {};
  var contact_infomation = { ...contact_info_get };

  // shipping method init
  const shipping_method_raw = localStorage.getItem("shipping_method") || {};
  const shipping_method_get = shipping_method_raw.length
    ? JSON.parse(shipping_method_raw)
    : {};
  var shipping_method = "Normal Shipping";
  var shipping_price = 20;
  var shipping_method = shipping_method_get.length
    ? { ...shipping_method_get }
    : { method: shipping_method, price: shipping_price };

  renderBagQuantity(products_incart);
  // cart view in or off side bar mode
  $(".bag-items a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(window).width() < 992) {
      $(".items-cart").addClass("sided").toggleClass("active");
    } else $(".items-cart").removeClass("sided").toggleClass("active");
    renderCartView(products_incart);
    renderCartTotal(products_incart);
  });
  $(window).resize(function () {
    if ($(window).width() < 992) {
      $(".items-cart").addClass("sided");
    } else $(".items-cart").removeClass("sided");
  });
  // close the cart view
  $("body").click(function (e) {
    if ($(".items-cart").hasClass("active"))
      $(".items-cart").removeClass("active");
  });
  $(".cart-close .close-btn").click(function (e) {
    e.preventDefault();
    $(".items-cart").removeClass("active");
  });
  $("body").on("click", ".items-cart-body", function (e) {
    e.stopPropagation();
  });
  // add to cart the current clicked products
  const addToCart = (product_sku, product_quantity) => {
    let clicked_product = products.find(
      (product) => product.sku === parseInt(product_sku)
    );
    // some check if element in array past a condition given in the call back function ==> return bool
    if (
      !products_incart.some(
        (product) => product.product_data.sku === clicked_product.sku
      )
    ) {
      products_incart.unshift({
        product_data: clicked_product,
        product_quantity: product_quantity,
      });
    } else {
      products_incart.find(
        (product) => product.product_data.sku === clicked_product.sku
      ).product_quantity += product_quantity;
    }
    localStorage.setItem("product_incart", JSON.stringify(products_incart));
    // open the cart view for the user to know
    if (!$(".items-cart").hasClass("active")) {
      if ($(window).width() < 992) {
        $(".items-cart").addClass("sided").toggleClass("active");
      } else $(".items-cart").removeClass("sided").toggleClass("active");
    }
    renderBagQuantity(products_incart);
    renderCartView(products_incart);
    renderCartTotal(products_incart);
  };
  // add_to_cart btn in product content
  $("body").on("click", ".product-content .add_to_cart a", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let product_sku = $(this).parents(".product-content").find(".sku").text();
    addToCart(product_sku, 1);
  });
  // add_to_cart btn in filtered product content
  $("body").on("click", ".filtered-product-content .add-to-cart", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let product_sku = $(this)
      .parents(".filtered-product-content")
      .find(".sku")
      .text();
    addToCart(product_sku, 1);
  });
  // add_to_cart btn in product view
  $("body").on("click", ".item-description .add_to_cart", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let product_sku = $(this)
      .parents(".item-description")
      .find(".sku")
      .data("sku");
    let product_quantity = $(this)
      .parents(".item-description")
      .find(".item-number")
      .val();
    if (isNaN(product_quantity)) {
      alert("PLEASE TYPE IN THE VALID NUMBER OF ITEMS");
    } else addToCart(product_sku, parseInt(product_quantity));
  });
  // remove from the quantity of product or the product itself
  $("body").on("click", ".items-cart-view .trash-items", function (e) {
    e.stopPropagation();
    let product_sku = $(this).data("sku");
    let delete_product = products_incart.find(
      (product) => product.product_data.sku === product_sku
    );
    let cur_index = $(this).parents(".items-cart-view").index();
    if (delete_product.product_quantity > 1) {
      delete_product.product_quantity--;
    } else {
      products_incart.splice(cur_index, 1);
    }
    localStorage.setItem("product_incart", JSON.stringify(products_incart));
    renderBagQuantity(products_incart);
    renderCartView(products_incart);
    renderCartTotal(products_incart);
    renderCartInCheckOut(products_incart);
    // if the shipping option is enable
    if ($(".shipping-step .shipping").hasClass("active")) {
      renderTotalWithShipping(shipping_method, products_incart);
    }
    // go back to home page if there is no product in cart
    if (window.location.pathname == "/product-checkout.html") {
      if (products_incart.length === 0) {
        renderNoProductBanner();
      }
    }
  });
  // able the check button if agree with term
  $("#item-agree").change(function (e) {
    e.preventDefault();
    if ($("#item-agree").prop("checked") === true) {
      $(".check_out").prop("disabled", false);
      $(".check_out").addClass("active");
    } else {
      $(".check_out").prop("disabled", true);
      $(".check_out").removeClass("active");
    }
  });

  // order info dropdown toggle
  $(".order-info-dropdown").click(function (e) {
    e.preventDefault();
    $(".order-info-wrapper").toggleClass("active");
    $(".dropdown-toggle .fa")
      .toggleClass("fa-angle-down")
      .toggleClass("fa-angle-up");
  });

  // process to checkout page
  renderCartInCheckOut(products_incart);
  products_incart.length
    ? renderContactInfo(contact_infomation)
    : renderNoProductBanner();

  $(".check_out").click(function (e) {
    e.preventDefault();
    window.location.href = "./product-checkout.html";
  });

  // process to check_out with the buy_now in product view
  $("body").on("click", ".item-description .buy-it-now", function () {
    let product_sku = $(this).parent().find(".sku").data("sku");
    let product_quantity = parseInt(
      $(this).parent().find(".item-number").val()
    );
    if (isNaN(product_quantity)) {
      alert("PLEASE TYPE IN THE VALID NUMBER OF ITEMS");
    } else {
      let clicked_product = products.find(
        (product) => product.sku === parseInt(product_sku)
      );
      // some check if element in array past a condition given in the call back function ==> return bool
      if (
        !products_incart.some(
          (product) => product.product_data.sku === clicked_product.sku
        )
      ) {
        products_incart.unshift({
          product_data: clicked_product,
          product_quantity: product_quantity,
        });
      } else {
        products_incart.find(
          (product) => product.product_data.sku === clicked_product.sku
        ).product_quantity = product_quantity;
      }
      localStorage.setItem("product_incart", JSON.stringify(products_incart));
      renderBagQuantity(products_incart);
      renderCartView(products_incart);
      renderCartTotal(products_incart);
      window.location.href = "./product-checkout.html";
    }
  });

  // contact information authentication
  $("body").on("click", ".to_shipping .continue-btn", function (e) {
    e.preventDefault();

    // spinner Loading effect while check
    $(".to_shipping .continue-btn").empty();
    $(`<i class="fa fa-spinner"></i>`).appendTo(".to_shipping .continue-btn");

    //all_input to be convert to array without checking apartment and first-name input after the effect
    setTimeout(() => {
      $(window).scrollTop(0);
      $(".to_shipping .continue-btn").empty();
      $(`<span>Continue to shipping</span>`).appendTo(
        ".to_shipping .continue-btn"
      );
      let all_input = $(this)
          .parents(".input-zone")
          .find("input:text")
          .parent()
          .not(".apartment")
          .not(".last-name"),
        all_label = $(this).parents(".input-zone").find(".error-label"),
        email_phone_input = $(this)
          .parents(".input-zone")
          .find(".email-phone input");
      // check regular input with trimming the space "_"
      // reset the authentication
      all_label.removeClass("active");
      all_input.find("input").removeClass("wrong");
      // authenticate all the input if they are valid
      [...all_input.find("input")].forEach((input) => {
        if (input.value.trim().length === 0) {
          all_input.find(input).addClass("wrong");
          all_input
            .find(input)
            .parent()
            .find(".error-label")
            .addClass("active");
        }
      });

      // authenticate the email and phone input
      if (!isNaN(email_phone_input.val().trim())) {
        // if use phone number instead of email
        if (
          !email_phone_input
            .val()
            .trim()
            .match(/(09|01[2|6|8|9])+([0-9]{8})\b/)
        ) {
          email_phone_input.addClass("wrong");
          email_phone_input.parent().find(".error-label").addClass("active");
        }
      } else {
        // if using email instead
        if (
          !email_phone_input
            .val()
            .trim()
            .match(
              /^[a-z][a-z0-9_\.]{0,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
            )
        ) {
          email_phone_input.addClass("wrong");
          email_phone_input.parent().find(".error-label").addClass("active");
        }
      }

      // console.log(Object.keys(contact_infomation).length);

      // if all the infomation is authentication
      if (all_input.find("input.wrong").length === 0) {
        contact_infomation = {
          id: $(".email-phone input").val().trim(),
          lastname: $(".last-name input").val().trim(),
          firstname: $(".first-name input").val().trim(),
          address: $(".address input").val().trim(),
          apartment: $(".apartment input").val().trim(),
          city: $(".city input").val().trim(),
          postalcode: $(".postcode input").val().trim(),
        };

        // if save infomation is enable
        if ($("#save").prop("checked") === true) {
          localStorage.setItem(
            "contact_info",
            JSON.stringify(contact_infomation)
          );
        }
        // render ther shipping infomation and shipping method view
        localStorage.removeItem("shipping_method");
        $(".shipping-step a").removeClass("active");
        $(".shipping-step .shipping")
          .removeClass("disabled")
          .addClass("active");
        renderShippingInfo(contact_infomation);
        renderTotalWithShipping(shipping_method, products_incart);

        let curMethod = [
          ...$(".shipping-method .method").find(".method-price"),
        ].find(
          (div) =>
            parseInt(div.getAttribute("data-price")) === shipping_method.price
        );

        $(".shipping-method .method .select-check").removeClass("active");
        $(".shipping-method .method")
          .find(curMethod)
          .parent()
          .find(".select-check")
          .addClass("active");
      }
    }, 2000);
  });

  // remove authentication checking when the user is typing
  $(".input-zone input:text").keyup(function (e) {
    $(this).removeClass("wrong");
    $(this).parent().find(".error-label").removeClass("active");
  });

  // choose the shipping option
  $("body").on("click", ".shipping-method .method", function () {
    $(".shipping-method .method .select-check").removeClass("active");
    $(this).find(".select-check").addClass("active");
    shipping_price = $(this).find(".method-price").data("price");
    shipping_method = $(this).find(".method-name").text();
    shipping_method = { method: shipping_method.trim(), price: shipping_price };
    renderTotalWithShipping(shipping_method, products_incart);
  });

  // shipping option selected
  $("body").on("click", ".to_payment .continue-btn", function (e) {
    e.preventDefault();
    $(".to_payment .continue-btn").empty();
    $(`<i class="fa fa-spinner"></i>`).appendTo(".to_payment .continue-btn");
    localStorage.setItem("shipping_method", JSON.stringify(shipping_method));

    setTimeout(() => {
      $(".shipping-step a").removeClass("active");
      $(".shipping-step .payment").removeClass("disabled").addClass("active");

      renderPaymentInfo(contact_infomation, shipping_method);
    }, 2000);
  });

  // payment method selected and complete the order
  $("body").on("click", ".to_bill .continue-btn", function (e) {
    e.preventDefault();
    $(".to_bill .continue-btn").empty();
    $(`<i class="fa fa-spinner"></i>`).appendTo(".to_bill .continue-btn");

    setTimeout(() => {
      let total = calcTotalPrice(products_incart);
      renderBillInfo(contact_infomation, shipping_method, total);
      localStorage.removeItem("product_incart");
      products_incart = [];
      renderBagQuantity(products_incart);
      renderCartView(products_incart);
    }, 2000);
  });

  // breadcrums
  // information breadcrums
  const toInformation = () => {
    $(".shipping-step a").removeClass("active");
    $(".shipping-step .information").addClass("active");
    renderContactInfo(contact_infomation);
    $(".shipping-step .shipping").removeClass("active").addClass("disabled");
    $(".shipping-step .payment").removeClass("active").addClass("disabled");
  };

  $(".shipping-step .information").click(function (e) {
    e.preventDefault();
    toInformation();
  });

  $("body").on("click", ".to_payment .return-btn", function (e) {
    e.preventDefault();
    toInformation();
  });

  // change infomation btn
  $("body").on("click", ".contact-info .change-btn", function (e) {
    e.preventDefault();
    toInformation();
    $(".email-phone input").focus();
  });

  $("body").on("click", ".shipping-to .change-btn", function (e) {
    e.preventDefault();
    toInformation();
    $(".first-name input").focus();
  });

  $("body").on("click", ".method-info .change-btn", function (e) {
    e.preventDefault();
    toShipping();
  });

  // shipping breadcrums
  const toShipping = () => {
    $(".shipping-step a").removeClass("active");
    $(".shipping-step .shipping").addClass("active");
    renderShippingInfo(contact_infomation);
    renderTotalWithShipping(shipping_method, products_incart);

    let curMethod = [
      ...$(".shipping-method .method").find(".method-price"),
    ].find(
      (div) =>
        parseInt(div.getAttribute("data-price")) === shipping_method.price
    );

    $(".shipping-method .method .select-check").removeClass("active");
    $(".shipping-method .method")
      .find(curMethod)
      .parent()
      .find(".select-check")
      .addClass("active");
  };
  // click the shipping breadcrums
  $(".shipping-step .shipping").click(function (e) {
    e.preventDefault();
    toShipping();
  });
  // return when in payment
  $("body").on("click", ".to_bill .return-btn", function (e) {
    e.preventDefault();
    toShipping();
  });

  // payment breadcrums
  $(".shipping-step .payment").click(function (e) {
    e.preventDefault();
    $(".shipping-step a").removeClass("active");
    $(".shipping-step .payment").addClass("active");
    renderPaymentInfo(contact_infomation, shipping_method);
  });

  // continue to shopping after checkout
  $("body").on("click", ".no-product-banner .continue-shopping", function (e) {
    e.preventDefault();
    window.location.href = "./finale_proj.html";
  });

  $("body").on("click", ".to_shopping .continue-btn", function (e) {
    e.preventDefault();
    window.location.href = "./finale_proj.html";
  });
});

function renderNoProductBanner() {
  $(".checkout-area").empty();
  $(`<div class="no-product-banner flex a-center jc-center">
  <div class="banner-wrapper row a-center jc-center">
    <i class="col-xs-12 fa fa-shopping-bag"></i>
    <p class="col-xs-12">SHOPPING CART IS EMPTY</p>
    <a class="col-xs-5 continue-shopping" href="">CONTINUE SHOPPING</a>
  </div>
</div>`).appendTo(".checkout-area");
}

function renderTotalWithShipping(method, list) {
  $(".calc-shipping").empty();
  $(`<span>$${method.price}.00</span>`).appendTo(".calc-shipping");
  let total = calcTotalPrice(list);
  $(".order-info-total .total").empty();
  $(`<span>$${method.price + total}.00</span>`).appendTo(
    ".order-info-total .total"
  );
  $(".summary-total .total").empty();
  $(`<span>$${method.price + total}.00</span>`).appendTo(
    ".summary-total .total"
  );
}
function renderBillInfo(contact_info, shipping_method, total) {
  $(window).scrollTop(0);
  $(".checkout_step").empty();
  $(".shipping-step").empty();
  $(`<div class="bill-infomation">
  <div class="bill-number row a-center">
    <div class="col-xs-1 bill-check">
      <i class="fa fa-check-circle-o"></i>
    </div>
    <div class="col-xs-11 bill-thank">
      <div class="bill-id">
        <p>Order <span class="id">#${
          Math.floor(Math.random() * 1000) + 1
        }</span></p>
      </div>
      <div class="thank-you">
        <p>Thank you!</p>
      </div>
    </div>
  </div>
  <div class="bill-comfirmed box">
    <p class="title">Your order is confirmed</p>
    <p class="content">
      You’ll receive a confirmation text with your order number
      shortly.
    </p>
  </div>
  <div class="bill-customer box">
    <p class="title">Customer information</p>
    <div class="bill-description row">
      <div class="col-xs-12 col-lg-6 info-zone contact">
        <p class="subtitle">Contact information</p>
        <p class="subcontent contact_id">${contact_info.id}</p>
      </div>
      <div class="col-xs-12 col-lg-6 info-zone address">
        <p class="subtitle">Shipping address</p>
        <ul class="subcontent contact_id">
          <li><span>Name : </span> ${contact_info.lastname} ${
    contact_info.firstname
  }</li>
          <li><span>Address : </span> ${contact_info.address}</li>
          <li><span>Apartment : </span> ${contact_info.apartment}</li>
          <li><span>City : </span> ${contact_info.city}</li>
          <li><span>Postal : </span> ${contact_info.postalcode}</li>
        </ul>
      </div>
      <div class="col-xs-12 col-lg-6 info-zone ship">
        <p class="subtitle">Shipping method</p>
        <p class="subcontent ship_method">${shipping_method.method}</p>
      </div>
      <div class="col-xs-12 col-lg-6 info-zone pay">
        <p class="subtitle">Payment method</p>
        <p class="subcontent pay_method">
          Cash on Delivery (COD) -
          <span class="total">$${total + shipping_method.price}.00</span>
        </p>
      </div>
    </div>
  </div>
  <div class="continue-layout to_shopping row">
    <div class="col-xs-12 col-lg-5 continue">
      <a class="continue-btn" href="">Continue to shopping</a>
    </div>
    <div class="col-xs-12 col-lg-7"></div>
  </div>
</div>`).appendTo(".checkout_step");
}
function renderPaymentInfo(contact_info, shipping_method) {
  $(window).scrollTop(0);
  $(".checkout_step").empty();
  $(`<div class="payment-infomation">
  <div class="shipping-contact">
    <div class="contact-info row">
      <div class="col-xs-6 col-lg-2">
        <p class="title">Contact</p>
      </div>
      <div class="col-xs-6 col-lg-2 change flex">
        <a class="change-btn" href="">Change</a>
      </div>
      <div class="col-xs-12 col-lg-8 info">
        <p class="info-contact">${contact_info.id}</p>
      </div>
    </div>
    <div class="shipping-to method row">
      <div class="col-xs-6 col-lg-2">
        <p class="title">Ship to</p>
      </div>
      <div class="col-xs-6 col-lg-2 change flex">
        <a class="change-btn" href="">Change</a>
      </div>
      <div class="col-xs-12 col-lg-8 info">
        <ul class="info-shipping">
          <li><span>Name : </span> ${contact_info.lastname} ${contact_info.firstname}</li>
          <li><span>Address : </span> ${contact_info.address}</li>
          <li><span>Apartment : </span> ${contact_info.apartment}</li>
          <li><span>City : </span> ${contact_info.city}</li>
          <li><span>Postal : </span> ${contact_info.postalcode}</li>
        </ul>
      </div>
    </div>
    <div class="method-info row">
      <div class="col-xs-6 col-lg-2">
        <p class="title">Method</p>
      </div>
      <div class="col-xs-6 col-lg-2 change flex">
        <a class="change-btn" href="">Change</a>
      </div>
      <div class="col-xs-12 col-lg-8 info">
        <p class="info-method">
          <span class="name">${shipping_method.method}</span> -
          <span class="price">$${shipping_method.price}.00</span>
        </p>
      </div>
    </div>
  </div>
  <div class="payment-option">
    <h4 class="title">Payment</h4>
    <p class="info">All transactions are secure and encrypted.</p>
  </div>
  <div class="payment-warning">
    <p class="warning">
      <i class="fa fa-exclamation-triangle"></i>This store can't
      accept real orders or real payments.
    </p>
  </div>
  <div class="payment-method">
    <p class="method">Cash on Delivery (COD)</p>
  </div>
  <div class="continue-layout to_bill row a-center jc-spacebtw">
    <div class="col-xs-12 col-lg-5 continue">
      <a class="continue-btn" href="">Complete order</a>
    </div>
    <div class="col-xs-12 col-lg-7 return flex a-center">
      <a class="return-btn to_payment" href=""
        ><i class="fa fa-angle-left"></i>Return to shipping</a
      >
    </div>
  </div>
</div>`).appendTo(".checkout_step");
}
function renderShippingInfo(contact_info) {
  $(window).scrollTop(0);
  $(".checkout_step").empty();
  $(`<div class="shipping-infomation">
  <div class="shipping-contact">
    <div class="contact-info row">
      <div class="col-xs-6 col-lg-2">
        <p class="title">Contact</p>
      </div>
      <div class="col-xs-6 col-lg-2 change flex">
        <a class="change-btn" href="">Change</a>
      </div>
      <div class="col-xs-12 col-lg-8 info">
        <p class="info-contact">${contact_info.id}</p>
      </div>
    </div>
    <div class="shipping-to row">
      <div class="col-xs-6 col-lg-2">
        <p class="title">Ship to</p>
      </div>
      <div class="col-xs-6 col-lg-2 change flex">
        <a class="change-btn" href="">Change</a>
      </div>
      <div class="col-xs-12 col-lg-8 info">
        <ul class="info-shipping">
          <li><span>Name : </span> ${contact_info.lastname} ${contact_info.firstname}</li>
          <li><span>Address : </span> ${contact_info.address}</li>
          <li><span>Apartment : </span> ${contact_info.apartment}</li>
          <li><span>City : </span> ${contact_info.city}</li>
          <li><span>Postal : </span> ${contact_info.postalcode}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="shipping-option">
    <h4 class="title">Shipping method</h4>
    <div class="shipping-method">
      <div class="method row a-center jc-spacebtw">
        <div class="col-xs-1 select-check active"></div>
        <div class="col-xs-9 method-name">
          <p>Normal Shipping</p>
        </div>
        <div class="col-xs-2 method-price" data-price="20">
          $20.00
        </div>
      </div>
      <div class="method row a-center jc-spacebtw">
        <div class="col-xs-1 select-check"></div>
        <div class="col-xs-9 method-name">
          <p>Express Shipping</p>
        </div>
        <div class="col-xs-2 method-price" data-price="40">
          $40.00
        </div>
      </div>
      <div class="method row a-center jc-spacebtw">
        <div class="col-xs-1 select-check"></div>
        <div class="col-xs-9 method-name">
          <p>
            <span>Super Express </span>
          </p>
        </div>
        <div class="col-xs-2 method-price" data-price="80">
          $80.00
        </div>
      </div>
    </div>
  </div>
  <div
    class="continue-layout to_payment row a-center jc-spacebtw"
  >
    <div class="col-xs-12 col-lg-5 continue">
      <a class="continue-btn" href="">Continue to payment</a>
    </div>
    <div class="col-xs-12 col-lg-7 return flex a-center">
      <a class="return-btn to_infomation" href=""
        ><i class="fa fa-angle-left"></i>Return to information</a
      >
    </div>
  </div>
</div>`).appendTo(".checkout_step");
}
function renderContactInfo(contact_info) {
  $(window).scrollTop(0);
  $(".checkout_step").empty();
  $(`<div class="contact-information">
  <div class="title-login row">
    <div class="col-xs-12 col-sm-6">
      <h4 class="title">Contact information</h4>
    </div>
    <div class="col-xs-12 col-sm-6 login-wrapper flex">
      <p class="login">
        Already have an account? <a href="">Log in</a>
      </p>
    </div>
  </div>
  <div class="input-zone row">
    <div class="col-xs-12 email-mobile-info">
      <div class="email-phone">
        <label class="input-label" for="ip1"
          >Email or mobile phone number <span>*</span></label
        >
        <input
          id="ip1"
          class=""
          type="text"
          placeholder="e.g. : longnguyenhoang92@gmail.com or 0913190389"
        />
        <span class="error-label"
          >Enter an email or mobile phone number</span
        >
      </div>
      <div class="to-date flex a-center">
        <input id="keep-me" type="checkbox" />
        <label class="noselect" for="keep-me"
          >Keep me up to date on news and exclusive offers</label
        >
      </div>
    </div>
    <div class="col-xs-12">
      <h4 class="title">Shipping address</h4>
    </div>
    <div class="col-xs-12 col-lg-6 last-name">
      <label class="input-label" for="ip2"
        >Last Name (optional)</label
      >
      <input id="ip2" type="text" placeholder="e.g. : Nguyễn" />
    </div>
    <div class="col-xs-12 col-lg-6 first-name">
      <label class="input-label" for="ip3"
        >First Name <span>*</span></label
      >
      <input
        id="ip3"
        class=""
        type="text"
        placeholder="e.g. : Hoàng Long"
      />
      <span class="error-label">Enter a first name</span>
    </div>
    <div class="col-xs-12 address">
      <label class="input-label" for="ip4"
        >Address <span>*</span></label
      >
      <input
        id="ip4"
        class=""
        type="text"
        placeholder="e.g. : 27 Cầu Xéo , P.Tân Qúy, Q.Tân Phú, TP.HCM"
      />
      <span class="error-label">Enter an address</span>
    </div>
    <div class="col-xs-12 apartment">
      <label class="input-label" for="ip5"
        >Apartment, suite, etc. (optional)</label
      >
      <input id="ip5" type="text" placeholder="e.g. : 21" />
    </div>
    <div class="col-xs-12 col-lg-6 city">
      <label class="input-label" for="ip6"
        >City <span>*</span></label
      >
      <input
        id="ip6"
        class=""
        type="text"
        placeholder="e.g. : Hồ Chí Minh "
      />
      <span class="error-label">Enter a city</span>
    </div>
    <div class="col-xs-12 col-lg-6 postcode">
      <label class="input-label" for="ip7"
        >Postal Code <span>*</span></label
      >
      <input
        id="ip7"
        class=""
        type="text"
        placeholder="e.g. : 70000"
      />
      <span class="error-label">Enter a ZIP/ postal code</span>
    </div>
    <div class="col-xs-12 save-info flex a-center">
      <input id="save" type="checkbox" />
      <label class="noselect" for="save"
        >Save this information for next time</label
      >
    </div>
    <div class="col-xs-12 continue-layout to_shipping row">
      <div class="col-xs-12 col-lg-5 continue">
        <a class="continue-btn" href="">Continue to shipping</a>
      </div>
      <div class="col-xs-12 col-lg-7"></div>
    </div>
  </div>
</div>`).appendTo(".checkout_step");
  if (Object.keys(contact_info).length > 0) {
    $(".shipping-step .shipping").removeClass("disabled");
    $(".input-zone").empty();
    $(`<div class="col-xs-12 email-mobile-info">
    <div class="email-phone">
      <label class="input-label" for="ip1"
        >Email or mobile phone number <span>*</span></label
      >
      <input
        id="ip1"
        class=""
        type="text"
        placeholder="e.g. : longnguyenhoang92@gmail.com or 0913190389"
        value="${contact_info.id}"
      />
      <span class="error-label"
        >Enter an email or mobile phone number</span
      >
    </div>
    <div class="to-date flex a-center">
      <input id="keep-me" type="checkbox" />
      <label class="noselect" for="keep-me"
        >Keep me up to date on news and exclusive offers</label
      >
    </div>
  </div>
  <div class="col-xs-12">
    <h4 class="title">Shipping address</h4>
  </div>
  <div class="col-xs-12 col-lg-6 last-name">
    <label class="input-label" for="ip2"
      >Last Name (optional)</label
    >
    <input id="ip2" type="text" placeholder="e.g. : Nguyễn" value="${contact_info.lastname}" />
  </div>
  <div class="col-xs-12 col-lg-6 first-name">
    <label class="input-label" for="ip3"
      >First Name <span>*</span></label
    >
    <input
      id="ip3"
      class=""
      type="text"
      placeholder="e.g. : Hoàng Long"
      value="${contact_info.firstname}"
    />
    <span class="error-label">Enter a first name</span>
  </div>
  <div class="col-xs-12 address">
    <label class="input-label" for="ip4"
      >Address <span>*</span></label
    >
    <input
      id="ip4"
      class=""
      type="text"
      placeholder="e.g. : 27 Cầu Xéo , P.Tân Qúy, Q.Tân Phú, TP.HCM"
      value="${contact_info.address}"
    />
    <span class="error-label">Enter an address</span>
  </div>
  <div class="col-xs-12 apartment">
    <label class="input-label" for="ip5"
      >Apartment, suite, etc. (optional)</label
    >
    <input id="ip5" type="text" placeholder="e.g. : 21" value="${contact_info.apartment}" />
  </div>
  <div class="col-xs-12 col-lg-6 city">
    <label class="input-label" for="ip6"
      >City <span>*</span></label
    >
    <input
      id="ip6"
      class=""
      type="text"
      placeholder="e.g. : Hồ Chí Minh "
      value="${contact_info.city}"
    />
    <span class="error-label">Enter a city</span>
  </div>
  <div class="col-xs-12 col-lg-6 postcode">
    <label class="input-label" for="ip7"
      >Postal Code <span>*</span></label
    >
    <input
      id="ip7"
      class=""
      type="text"
      placeholder="e.g. : 70000"
      value="${contact_info.postalcode}"
    />
    <span class="error-label">Enter a ZIP/ postal code</span>
  </div>
  <div class="col-xs-12 save-info flex a-center">
    <input id="save" type="checkbox" />
    <label class="noselect" for="save"
      >Save this information for next time</label
    >
  </div>
  <div class="col-xs-12 continue-layout to_shipping row">
    <div class="col-xs-12 col-lg-5 continue">
      <a class="continue-btn" href="">Continue to shipping</a>
    </div>
    <div class="col-xs-12 col-lg-7"></div>
  </div>`).appendTo(".input-zone");
  }
}
function renderCartInCheckOut(list) {
  $(".order-info-wrapper .order-info-view").empty();
  list.forEach((product) => {
    $(`<li class="order-product-info row a-center jc-spacebtw">
    <div
      class="col-xs-2 order-product-thumbnail flex a-center jc-center"
    >
      <img
        src=${product.product_data.img}
        alt=""
      />
      <span class="order-quantity flex a-center jc-center"
        ><span>${product.product_quantity}</span></span
      >
    </div>
    <div class="col-xs-8 order-product-name">
      <p>${product.product_data.name}</p>
    </div>
    <div class="col-xs-2 order-product-price">
      <p>$${product.product_data.price * product.product_quantity}.00</p>
    </div>
  </li>`).appendTo(".order-info-wrapper .order-info-view");
  });
  let total = calcTotalPrice(list);

  $(".calc-subtotal").empty();
  $(".summary-total .total").empty();
  $(".order-info-total .total").empty();
  $(`<span>$${total}.00</span>`).appendTo(".calc-subtotal");
  $(`<span>$${total}.00</span>`).appendTo(".summary-total .total");
  $(`<span>$${total}.00</span>`).appendTo(".order-info-total .total");
}

function renderCartTotal(list) {
  let total = calcTotalPrice(list);
  $(".items-cart-body .items-total span").empty();
  $(`<span>$${total}.00</span>`).appendTo(".items-cart-body .items-total span");
}

function calcTotalPrice(list) {
  let total = list.reduce((acc, product) => {
    acc += product.product_data.price * product.product_quantity;
    return acc;
  }, 0);
  return total;
}
function renderCartView(list) {
  $(".items-cart-body ul").empty();
  list.forEach((product) => {
    $(`<li class="items-cart-view">
    <div class="row">
      <div class="col-xs-4">
        <img
          src=${product.product_data.img}
          alt=""
        />
      </div>
      <div class="col-xs-6 items-info">
        <h6><a href="">${product.product_data.name}</a></h6>
        <span class="items-info-quantity"><span>${product.product_quantity}</span>X</span>
        <span class="items-info-money">$${product.product_data.price}.00</span>
      </div>
      <div class="col-xs-2">
        <button class="trash-items" data-sku=${product.product_data.sku}
          ><i class="fa fa-trash-o" aria-hidden="true"></i
        ></button>
      </div>
    </div>
  </li>`).appendTo(".items-cart-body ul");
  });
}
function renderBagQuantity(list) {
  if (list.length > 0) {
    $(".bag-items .quantity").empty();
    $(".no-product-layer").removeClass("active");
    $(".bag-items .quantity").addClass("active");
    let quantity = list.reduce((acc, product) => {
      acc += product.product_quantity;
      return acc;
    }, 0);
    $(`<span>${quantity}</span>`).appendTo(".bag-items .quantity");
  } else {
    $(".no-product-layer").addClass("active");
    $(".bag-items .quantity").removeClass("active");
  }
}
function renderProductsQuickView(selector, list) {
  list.forEach((product, index) => {
    // add items to the end
    $(selector)
      .owlCarousel(
        "add",
        `<div class="product-content">
  <div class="hover-view-option">
    <ul>
      <li>
        <a href=""><i class="fa fa-eye"></i></a>
      </li>
      <li>
        <a href=""><i class="fa fa-heart-o"></i></a>
      </li>
      <li>
        <a href=""><i class="fa fa-balance-scale"></i></a>
      </li>
    </ul>
  </div>
  <span class="sku">${product.sku}</span>
  <a href="" class="view-img"
    ><img
      src=${product.img}
      alt=""
  /></a>
  <div class="product-description">
    <h4 class="product-content-brand"><a href="">${product.brand}</a></h4>
    <ul class="rating flex a-center jc-center">
      <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    </ul>
    <h5 class="product-content-name">
      <a href="">${product.name}</a>
    </h5>
    <span class="product-content-price flex a-center jc-center"
      >$${product.price}.00</span
    >
    <div class="add_to_cart flex a-center jc-center">
      <a href="">
        <i class="fa fa-cart-plus"></i>
        ADD TO CART
      </a>
    </div>
  </div>
  <ul class="view-option flex a-center jc-center">
    <li><i class="fa fa-eye"></i></li>
    <li><i class="fa fa-heart-o"></i></li>
    <li><i class="fa fa-balance-scale"></i></li>
  </ul>
</div>`
      )
      .owlCarousel("update")
      .trigger("refresh.owl.carousel");
  });
  // add item vao truoc phan tu có position (index) cua list
  // sử dụng trigger events add.owl.carousel để add thêm items (vào sau vị trí index) ==> trigger("add.owl.carousel" ,[data, position])
  // sau đó PHẢI trigger events refresh.owl.carousel để làm mới carousel với cấu hình owl carousel đã cài đặt ở trên

  // add item vao cuoi
  // sử dụng owlCarousel("add",`html element`).owlCarousel("update") ==> ta được các
  // tương tự sau đó PHẢI trigger eve refresh.owl.carousel để làm mới carousel
}

function renderSearchRes(product_name) {
  $(`<li><a href="">${product_name}</a></li>`).appendTo(".search-res");
}

function renderProductView(product) {
  renderProductViewCarousel(product);
  $(`<h5 class="sku" data-sku=${product.sku}>SKU : <span>${product.sku}</span></h5>
  <h5 class="available">Availability : <span>Many in stock</span></h5>
  <h4 class="item-name">${product.name}</h4>
  <h3 class="item-price">$${product.price}.00</h3>
  <ul class="item-rating flex a-center">
    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
    <span><a href="">No reviews</a></span>
  </ul>
  <div class="item-buy-guide flex a-center jc-spacebtw">
    <div class="size-shipping">
      <a class="size" href=""
        ><i class="fa fa-tshirt"></i>Size guide</a
      >
      <a class="shipping" href=""
        ><i class="fa fa-box-open"></i>Shipping</a
      >
    </div>
    <a class="ask" href=""
      ><i class="fa fa-envelope"></i>Ask about this product</a
    >
  </div>
  <div class="item-to-cart flex a-center">
    <div class="item-quantity flex a-center">
      <span class="minus flex a-center jc-center noselect">-</span>
      <input class="item-number" type="text" value="1" />
      <span class="plus flex a-center jc-center noselect">+</span>
    </div>
    <a class="add_to_cart flex a-center jc-center" href=""
      >ADD TO CART</a
    >
  </div>
  <div class="agree-term flex a-center">
    <input id="agree" type="checkbox" />
    <label for="agree" class="agree-label noselect"
      >I agree with the terms and conditions</label
    >
  </div>
  <input
    class="buy-it-now"
    type="submit"
    value="BUY IT NOW"
    disabled
  />
  <a class="wishlist" href=""
    ><i class="fa fa-heart-o"></i>ADD TO WISHLIST</a
  >
  <a class="compare" href=""
    ><i class="fa fa-balance-scale"></i>ADD TO COMPARE</a
  >
  <div class="checkout">
    <img
      class="desktop-show"
      src="https://cdn.shopify.com/s/files/1/0031/6604/4224/files/For_desktop_541x.png?v=1542727783"
      alt=""
    />
    <img
      class="mobile-show"
      src="https://cdn.shopify.com/s/files/1/0031/6604/4224/files/For_mobile_541x.png?v=1542727783"
      alt=""
    />
  </div>
  <div class="extra-info">
    <h3 class="item-brand">Brand : <a href="">${product.brand}</a></h3>
    <h3>Barcode: <span>123456789</span></h3>
    <h3>
      Tags: <a href="">Vintage</a> , <a href="">Awesome</a> ,
      <a href="">Summer</a> , <a href="">Beachwear</a>
    </h3>
  </div>
  <div class="page-description">
    <h5 class="title">DESCRIPTION</h5>
    <div class="info">
      <p>
        We are proud to present our best premium Shopify theme -
        Wokiee.
      </p>
      <p>
        This is multi-purpose software that can be used for any type
        of the store. Great variety of available options will make
        customization process very easy.
      </p>
      <p>
        Please, take a look at feature list and compare with our
        competitors.
      </p>
      <p>
        You can buy our theme and start your business online with
        minimal time investments.
      </p>
      <p>
        Wokiee support DropShipping app Oberlo. <br />
        Wokiee Shopify theme is powerfool tool to create personal
        webshop.
      </p>
    </div>
  </div>
  <div class="add-info">
    <h5 class="title">ADDITIONAL INFORMATION</h5>
    <div class="info">
      <p class="color">Color : <span>Blue, Purple, White</span></p>
      <p class="size">Size : <span>20, 24</span></p>
      <p class="material">Material : <span>100% Polyester</span></p>
    </div>
  </div>
  <div class="reviews">
    <h5 class="title">REVIEWS</h5>
  </div>`).appendTo(".item-description");
}

function renderProductViewCarousel(product) {
  if ("gallery" in product) {
    product.gallery.forEach((picture, position) => {
      $(".product-gallery")
        .slick(
          "slickAdd",
          ` <div class="img-wrapper" data-slide="${position}">
      <img
        src=${picture}
        alt=""
      />
    </div>`
        )
        .slick("resize");
      $(".item-view-gallery")
        .slick(
          "slickAdd",
          `<img
      src=${picture}
      alt=""
      data-picture="${position}"
    />`
        )
        .slick("resize");
    });
  } else {
    $(".item-view-gallery")
      .slick(
        "slickAdd",
        `<img
    src=${product.img}
    alt=""
  />`
      )
      .slick("resize");
  }
}

function showInfo(selector) {
  $(selector).click(function (e) {
    e.preventDefault();
    $(selector).toggleClass("show");
    $(selector).find(".title").toggleClass("active");
  });
}

// render the grid view option
function renderGridOne(list) {
  list.forEach((product) => {
    $(`<div class="filtered-product-content row">
    <span class="sku">${product.sku}</span>
    <a href="" class="col-xs-4 col-lg-2 filtered-img"
      ><img
        src=${product.gallery[0]}
        alt=""
    /></a>
    <div class="col-xs-8 col-lg-10 filtered-description">
      <div class="row">
        <div class="col-xs-12 col-lg-8">
          <div class="filtered-info">
            <a class="brand" href="">${product.brand}</a>
            <ul class="rating flex a-center">
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
            </ul>
            <a class="name" href="">${product.name}</a>
            <p class="info">
              We are proud to present our best premium Shopify
              theme - Wokiee. This is multi-purpose software that
              can be used for any type of the store. Great variety
              of available...
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-lg-4 filtered-buy row">
          <h4 class="col-xs-12 price">$${product.price}.00</h4>
          <a class="col-xs-8 col-lg-8 add-to-cart" href=""
            >ADD TO CART</a
          >
          <ul class="col-xs-12 option flex a-center">
            <li><i class="fa fa-eye"></i></li>
            <li><i class="fa fa-heart-o"></i></li>
            <li><i class="fa fa-balance-scale"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>`).appendTo(".filtered-product .filtered-product-group");
  });
}
// render a number of items only

function renderGridTwo(list) {
  list.forEach((product) => {
    $(`<div class="col-xs-6 product-content filter">
    <div class="hover-view-option">
      <ul>
        <li>
          <a href=""><i class="fa fa-eye"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-heart-o"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-balance-scale"></i></a>
        </li>
      </ul>
    </div>
    <span class="sku">${product.sku}</span>
    <a href="" class="view-img"
      ><img
        src=${product.gallery[0]}
        alt=""
    /></a>
    <div class="product-description">
      <h4 class="product-content-brand">
        <a href="">${product.brand}</a>
      </h4>
      <ul class="rating flex a-center jc-center">
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      </ul>
      <h5 class="product-content-name">
        <a href="">${product.name}</a>
      </h5>
      <span class="product-content-price flex a-center jc-center"
        >$${product.price}.00</span
      >
      <div class="add_to_cart flex a-center jc-center">
        <a href="">
          <i class="fa fa-cart-plus"></i>
          ADD TO CART
        </a>
      </div>
    </div>
    <ul class="view-option flex a-center jc-center">
      <li><i class="fa fa-eye"></i></li>
      <li><i class="fa fa-heart-o"></i></li>
      <li><i class="fa fa-balance-scale"></i></li>
    </ul>
  </div>`).appendTo(".filtered-product .filtered-product-group");
  });
}

function renderGridThree(list) {
  list.forEach((product) => {
    $(`<div class="col-xs-4 product-content filter">
    <div class="hover-view-option">
      <ul>
        <li>
          <a href=""><i class="fa fa-eye"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-heart-o"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-balance-scale"></i></a>
        </li>
      </ul>
    </div>
    <span class="sku">${product.sku}</span>
    <a href="" class="view-img"
      ><img
        src=${product.gallery[0]}
        alt=""
    /></a>
    <div class="product-description">
      <h4 class="product-content-brand">
        <a href="">${product.brand}</a>
      </h4>
      <ul class="rating flex a-center jc-center">
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
      </ul>
      <h5 class="product-content-name">
        <a href="">${product.name}</a>
      </h5>
      <span class="product-content-price flex a-center jc-center"
        >$${product.price}.00</span
      >
      <div class="add_to_cart flex a-center jc-center">
        <a href="">
          <i class="fa fa-cart-plus"></i>
          ADD TO CART
        </a>
      </div>
    </div>
    <ul class="view-option flex a-center jc-center">
      <li><i class="fa fa-eye"></i></li>
      <li><i class="fa fa-heart-o"></i></li>
      <li><i class="fa fa-balance-scale"></i></li>
    </ul>
  </div>`).appendTo(".filtered-product .filtered-product-group");
  });
}
