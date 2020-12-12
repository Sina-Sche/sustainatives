const { ObjectId } = require("mongodb");
const { collection } = require("./database");

async function getProducts() {
  const result = await collection("products").find({}).toArray();
  return result;
}

// not working yet: Why????
async function getProductById(id) {
  const data = await collection("products").findOne({ _id: ObjectId(id) });
  return data;
}

async function getProductsByTitle(title) {
  const result = await collection("products").findOne({
    title: title,
  });
  return result;
}

exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.getProductsByTitle = getProductsByTitle;
