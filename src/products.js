import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
    category: "Phone",
    reviews: ["Great product ID 1"],
    productlink: "/product/product1",
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
    category: "laptop",
    reviews: ["Great product id 2","cool","nice"],
    productlink: "/product/product2",
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
    category: "camera",
    reviews: "Good Product ID 3",
    productlink: "/product/product3",
  },
];
