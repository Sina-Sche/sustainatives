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
  return result;
}

async function getProductsByCategory(categoryName) {
  const result = await collection("products")
    .find({
      categories: categoryName,
    })
    .toArray();
  return result;
}

async function getProductsByCompanyName(companyName) {
  const result = await collection("products")
    .find({
      company_name: companyName,
    })
    .toArray();
  return result;
}

async function postProductSuggestion(product) {
  return await collection("suggestions").insertOne(product);
}
exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.getProductsByTitle = getProductsByTitle;
exports.getRandomProduct = getRandomProduct;
exports.getProductsByCategory = getProductsByCategory;
exports.getProductsByCompanyName = getProductsByCompanyName;
exports.postProductSuggestion = postProductSuggestion;
