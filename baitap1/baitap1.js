// =====================
// CÂU 1: Constructor Product
// =====================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// =====================
// CÂU 2: Khởi tạo mảng products
// =====================
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 10, "Phones", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 5, "Phones", true),
  new Product(3, "MacBook Pro M3", 52000000, 3, "Laptops", true),
  new Product(4, "Dell XPS 13", 42000000, 0, "Laptops", false),
  new Product(5, "AirPods Pro", 6000000, 20, "Accessories", true),
  new Product(6, "Magic Mouse", 2500000, 0, "Accessories", false)
];

// =====================
// CÂU 3: Mảng mới chỉ chứa name và price
// =====================
const productNamesPrices = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", productNamesPrices);

// =====================
// CÂU 4: Sản phẩm còn hàng (quantity > 0)
// =====================
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// =====================
// CÂU 5: Có sản phẩm giá > 30.000.000?
// =====================
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// =====================
// CÂU 6: Tất cả Accessories có đang bán không?
// =====================
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);

console.log("Câu 6:", accessoriesAvailable);

// =====================
// CÂU 7: Tổng giá trị kho hàng
// =====================
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7:", totalInventoryValue);

// =====================
// CÂU 8: for...of in tên – danh mục – trạng thái
// =====================
console.log("Câu 8:");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// =====================
// CÂU 9: for...in in tên thuộc tính và giá trị
// =====================
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key + ":", products[0][key]);
}

// =====================
// CÂU 10: Tên sản phẩm đang bán và còn hàng
// =====================
const availableProductNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", availableProductNames);
