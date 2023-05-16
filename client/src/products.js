import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/9.png";

const getProductList = () => {
  const productList = [
      {
          "id": "42",
          "name": "ASUS Z790-E ",
          "price": "499.99",
          "description": "ASUS Z790-E ROG Strix Gaming WiFi Intel LGA 1700 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0653703_443614.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": `product/id`,
          "match": [83, 84, 82, 81, 80, 79,50, 51, 56, 69, 70]
      },
      {
          "id": "43",
          "name": "MSI X570S MAG TOMAHAWK MAX",
          "price": "229.0",
          "description": "X570S MAG TOMAHAWK MAX WiFi AMD AM4 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0640444_310110.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/43",
          "match": [83, 84, 82, 81, 80, 79,50, 51, 56, 69, 70]
      },
      {
          "id": "44",
          "name": "Z790I MPG Edge",
          "price": "359.0",
          "description": "Z790I MPG Edge WiFi Intel LGA 1700 Mini-ITX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0664308_549741.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/44",
          "match": [83, 84, 82, 81, 80, 79,50, 51, 56, 69, 7]
      },
      {
          "id": "45",
          "name": "ASUS Z790 ROG",
          "price": "629.99",
          "description": "ASUS Z790 ROG Maximus Hero Intel LGA 1700 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0653702_443572.jpg ",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/45",
          "match": [83, 84, 82, 81, 80, 79,50, 51, 56, 69, 70   ]
      },
      {
          "id": "46",
          "name": "ASRock X670E Pro RS",
          "price": "249.99",
          "description": "X670E Pro RS AMD AM5 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652773_438705.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/46",
          "match": [52, 53,71, 72]
      },
      {
          "id": "47",
          "name": "Gigabyte B650I Aorus",
          "price": "269.99",
          "description": "Gigabyte B650I Aorus Ultra AMD AM5 Mini-ITX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0664322_549766.jpg ",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/47",
          "match": [52, 53,71, 72]
      },
      {
          "id": "48",
          "name": "ASRock B650M PG Riptide ",
          "price": "159.99",
          "description": "ASRock B650M PG Riptide AMD AM5 microATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0660141_513226.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/48",
          "match": [52, 53,71, 72]
      },
      {
          "id": "49",
          "name": "Gigabyte Z790 AORUS ELITE AX",
          "price": "259.99",
          "description": "Gigabyte Z790 AORUS ELITE AX Intel LGA 1700 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0659678_516385.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/49",
          "match": [73, 74, 75]
      },
      {
          "id": "43",
          "name": "MSI X570S MAG TOMAHAWK MAX",
          "price": "229.0",
          "description": "X570S MAG TOMAHAWK MAX WiFi AMD AM4 ATX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0640444_310110.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/43",
          "match": [73, 74, 75,  54, 55, 56, 71, 72]
      },
      {
          "id": "44",
          "name": "Z790I MPG Edge",
          "price": "359.0",
          "description": "Z790I MPG Edge WiFi Intel LGA 1700 Mini-ITX Motherboard",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0664308_549741.jpg",
          "category": "Motherboard",
          "reviews": "great product!",
          "product_link": "https://example.com/product/44",
          "match": [73, 74, 75,  54, 55, 56, 71, 72]
      },
      {
          "id": "50",
          "name": "Corsair Vengeance RGB",
          "price": "334.99",
          "description": "Vengeance RGB 96GB (2 x 48GB) DDR5-5600 PC5-44800 CL40 Dual Channel Desktop Memory Kit CMH96GX5M2B5600C40 - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0665485_566133.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/50",
          "match": [42, 43, 44, 45, 83, 84, 82, 81, 80, 79, 69, 70]
      },
      {
          "id": "51",
          "name": "Corsair Dominator Platinum RGB",
          "price": "169.99",
          "description": "Corsair Dominator Platinum RGB 32GB (2 x 16GB) DDR5-6000 PC5-48000 CL36 Dual Channel Desktop Memory Kit CMT32GX5M2D6000 - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0653876_443093.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/51",
          "match": [42, 43, 44, 45, 83, 84, 82, 81, 80, 79, 69, 70]
      },
      {
          "id": "52",
          "name": "TeamGroup T-Force Delta RGB ",
          "price": "259.99",
          "description": "TeamGroup T-Force Delta RGB 64GB (2 x 32GB) DDR5-6000 PC5-48000 CL38 Dual Channel Desktop Memory Kit FF4D564G6000HC3 - White",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0662950_538652.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/52",
          "match": [46, 47,71, 72]
      },
      {
          "id": "53",
          "name": "TeamGroup Vulcan 64GB",
          "price": "234.99",
          "description": "TeamGroup Vulcan 64GB (2 x 32GB) DDR5-6000 PC5-48000 CL38 Dual Channel Desktop Memory Kit FLBD564G6000HC3 - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0662952_538694.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/53",
          "match": [46, 47,71, 72]
      },
      {
          "id": "54",
          "name": "G.Skill Ripjaws S5",
          "price": "199.99",
          "description": "G.Skill Ripjaws S5 64GB (2 x 32GB) DDR5-5200 PC5-41600 CL36 Dual Channel Desktop Memory Kit F5-5200J3636D32GX2-RS5K - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0649240_400457.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/54",
          "match": [73, 74, 75, 48, 71, 72]
      },
      {
          "id": "55",
          "name": "TeamGroup T-FORCE Vulcan Alpha 32GB",
          "price": "92.99",
          "description": "TeamGroup T-FORCE Vulcan Alpha 32GB (2 x 16GB) DDR5-5600 PC5-44800 CL40 Dual Channel Desktop Memory Kit FLABD532G5600HC - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0653833_443259.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/55",
          "match": [73, 74, 75, 48, 71, 72]
      },
      {
          "id": "56",
          "name": "Crucial 32GB ",
          "price": "109.99",
          "description": "Crucial 32GB (2 x 16GB) DDR5-5600 PC5-44800 CL46 Dual Channel Desktop Memory Kit CT2K16G56C46U5 - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0661340_524926.jpg",
          "category": "RAM",
          "reviews": "great product!",
          "product_link": "https://example.com/product/56",
          "match": [42, 43, 44, 45, 83, 84, 82, 81, 80, 79, 69, 70]
      },
      {
          "id": "65",
          "name": "H5 Flow Tempered Glass ATX Mid",
          "price": "94.99",
          "description": "H5 Flow Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652315_433417.jpg ",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/65",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "66",
          "name": "X1 Tempered Glass ATX Mid-",
          "price": "44.99",
          "description": "X1 Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0643497_340034.jpg ",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/66",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "67",
          "name": "O11 Dynamic EVO Tempered Glass ATX Mid",
          "price": "169.99",
          "description": "O11 Dynamic EVO Tempered Glass ATX Mid-Tower Computer Case - White",
          "productImage": " https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0645430_360057.jpg ",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/67",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "68",
          "name": "Lancool 205 Mesh Type C Tempered Glass ATX Mid",
          "price": "89.99",
          "description": "Lancool 205 Mesh Type C Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": " https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0650078_409540.jpg ",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/68",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "69",
          "name": "O11 Dynamic EVO Tempered Glass ATX Mid",
          "price": "159099.0",
          "description": "O11 Dynamic EVO Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0645428_360032.jpg ",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/69",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "70",
          "name": "Lancool 216 RGB Tempered Glass ATX Mid",
          "price": "109.99",
          "description": "Lancool 216 RGB Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0660145_512251.jpg",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/70",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "71",
          "name": "LANCOOL III RGB Tempered Glass ATX Mid",
          "price": "169.99",
          "description": "LANCOOL III RGB Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0649250_399089.jpg",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/71",
          "match": [83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56]
      },
      {
          "id": "72",
          "name": "Lancool II MESH Type C RGB",
          "price": "109.99",
          "description": "Lancool II MESH Type C RGB Tempered Glass ATX Mid-Tower Computer Case - Black",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0642886_329698.jpg",
          "category": "Case",
          "reviews": "great product!",
          "product_link": "https://example.com/product/72",
          "match": [ 83, 84, 82, 81, 80, 79, 42, 43, 44, 45, 50, 51, 56 ]
      },
      {
          "id": "73",
          "name": "Ryzen 9 7900X Raphael AM5 ",
          "price": "549.99",
          "description": "Ryzen 9 7900X Raphael AM5 4.7GHz 12-Core Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652682_436535.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/73",
          "match": [48,54, 55, 56, 65 ]
      },
      {
          "id": "74",
          "name": "Ryzen 9 5900X Vermeer",
          "price": "549.99",
          "description": "Ryzen 9 5900X Vermeer 3.7GHz 12-Core AM4 Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0630283_195099.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/74",
          "match": [48,54, 55, 56, 65 ]
      },
      {
          "id": "75",
          "name": "Ryzen 5 3600 Matisse ",
          "price": "149.99",
          "description": "Ryzen 5 3600 Matisse 3.6GHz 6-Core AM4 Boxed Processor - Wraith Stealth Cooler Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0653895_442897.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/75",
          "match": [48,54, 55, 56, 65 ]
      },
      {
          "id": "76",
          "name": "Ryzen 7 7700X Raphael AM5",
          "price": "399.99",
          "description": "Ryzen 7 7700X Raphael AM5 4.5GHz 8-Core Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652683_436501.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/76",
          "match": [48,54, 55, 56, 65 ]
      },
      {
          "id": "77",
          "name": "Ryzen 5 5600G Cezanne",
          "price": "259.99",
          "description": "Ryzen 5 5600G Cezanne 3.9GHz 6-Core AM4 Boxed Processor - Wraith Stealth Cooler Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0639744_301259.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/77",
          "match": [48,54, 55, 56, 65 ]
      },
      {
          "id": "78",
          "name": "Ryzen 5 5600X Vermeer",
          "price": "299.99",
          "description": "Ryzen 5 5600X Vermeer 3.7GHz 6-Core AM4 Boxed Processor - Wraith Stealth Cooler Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0630285_195073.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/78",
          "match": [ 48,54, 55, 56, 65 ]
      },
      {
          "id": "79",
          "name": "Core i7-13700K Raptor Lake",
          "price": "519.99",
          "description": "Core i7-13700K Raptor Lake 3.4GHz Sixteen-Core LGA 1700 Boxed Processor - Heatsink Not Include",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652626_436196.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/79",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      },
      {
          "id": "80",
          "name": "Core i9-12900K Alder Lake",
          "price": "649.99",
          "description": "Core i9-12900K Alder Lake 3.2GHz Sixteen-Core LGA 1700 Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0641915_326694.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/80",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      },
      {
          "id": "81",
          "name": "Core i9-13900K Raptor Lake",
          "price": "729.99",
          "description": "Core i9-13900K Raptor Lake 3.0GHz Twenty Four-Core LGA 1700 Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652624_436188.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/81",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      },
      {
          "id": "82",
          "name": "Core i5-13600K Raptor Lake",
          "price": "379.99",
          "description": "Core i5-13600K Raptor Lake 3.5GHz Fourteen-Core LGA 1700 Boxed Processor - Heatsink Not Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0652628_436212.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/82",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      },
      {
          "id": "83",
          "name": "Core i3-13100 Raptor Lake",
          "price": "149.99",
          "description": "Core i3-13100 Raptor Lake 3.4GHz Quad-Core LGA 1700 Boxed Processor - Heat Sink Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0662150_533471.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/83",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      },
      {
          "id": "84",
          "name": "Core i5-12400 Alder Lake",
          "price": "219.99",
          "description": "Core i5-12400 Alder Lake 2.5GHz Six-Core LGA 1700 Boxed Processor - Intel Stock Cooler Included",
          "productImage": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0645582_362020.jpg",
          "category": "CPU",
          "reviews": "great product!",
          "product_link": "https://example.com/product/84",
          "match": [42, 43, 44, 45, 50, 51, 56, 69, 70]
      }
  ]

  return productList
}
const products = getProductList();
const randomReviews = [
  ["Excellent product!", "Very satisfied with my purchase."],          // Positive reviews about the product's quality
  ["Highly recommended!", "Couldn't be happier with this product."],   // Strong recommendations for the product
  ["Good value for money", "Impressed with the quality and price."],   // Reviews highlighting affordability and quality
  ["Fast shipping"],                                                   // Positive comment about the speed of shipping
  ["Quality product", "Definitely worth the investment."]              // General statement and recommendation
];
export const PRODUCTS = products.map((product, index) => ({
  ...product,
  reviews: randomReviews[Math.floor(Math.random() * randomReviews.length)],
  product_link: `product/product${product.id}`
}));
console.log(PRODUCTS);





