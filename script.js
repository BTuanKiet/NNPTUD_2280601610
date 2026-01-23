// ===== Câu 1: Constructor function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== Câu 2: Khởi tạo mảng products =====
const products = [
  new Product(1, "iPhone 15", 35000000, 10, "Phones", true),
  new Product(2, "Samsung S24", 28000000, 5, "Phones", true),
  new Product(3, "MacBook Air M2", 32000000, 0, "Laptops", true),
  new Product(4, "AirPods Pro", 6000000, 20, "Accessories", true),
  new Product(5, "Magic Mouse", 2500000, 0, "Accessories", false),
  new Product(6, "iPad Pro", 30000000, 8, "Tablets", true),
];

let output = "";

// ===== Câu 3: Mảng mới chỉ chứa name, price =====
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));
output += "Câu 3:\n" + JSON.stringify(namePriceList, null, 2) + "\n\n";

// ===== Câu 4: Sản phẩm còn hàng =====
const inStockProducts = products.filter(p => p.quantity > 0);
output += "Câu 4:\n" + inStockProducts.map(p => p.name).join(", ") + "\n\n";

// ===== Câu 5: Có sản phẩm giá > 30.000.000 =====
const hasExpensiveProduct = products.some(p => p.price > 30000000);
output += "Câu 5:\n" + hasExpensiveProduct + "\n\n";

// ===== Câu 6: Tất cả Accessories có đang bán =====
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);

output += "Câu 6:\n" + allAccessoriesAvailable + "\n\n";

// ===== Câu 7: Tổng giá trị kho =====
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
output += "Câu 7:\n" + totalInventoryValue.toLocaleString("vi-VN") + " VND\n\n";

// ===== Câu 8: for...of =====
output += "Câu 8:\n";
for (const p of products) {
  output += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
}
output += "\n";

// ===== Câu 9: for...in =====
output += "Câu 9:\n";
for (const key in products[0]) {
  output += `${key}: ${products[0][key]}\n`;
}
output += "\n";

// ===== Câu 10: Tên sản phẩm đang bán và còn hàng =====
const availableInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

output += "Câu 10:\n" + availableInStockNames.join(", ");

// Hiển thị ra HTML
document.getElementById("output").textContent = output;
