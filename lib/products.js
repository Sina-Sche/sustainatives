const { collection } = require("./database");

async function getProducts() {
  const result = await collection("products").find({}).toArray();
  return result;
}

async function getProductById(id) {
  const data = await collection("products").findOne({ id: id });

  return data;
}

async function getProductsByTitle(title) {
  const result = await collection("products")
    .find({
      title: { $regex: title, $options: "i" },
    })
    .toArray();
  return result;
}
async function getRandomProduct(id) {
  const result = await collection("products").findOne({ id: id });
  console.log(result);
  return result;
}
exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.getProductsByTitle = getProductsByTitle;
exports.getRandomProduct = getRandomProduct;
