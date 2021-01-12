const { Router } = require("express");
const {
  getProducts,
  getAllProducts,
  getProductById,
  getProductsByCompanyName,
  getProductsByTitle,
  getProductsByCategory,
  postProductSuggestion,
} = require("../products");

const router = Router();

router.get("/details/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const product = await getProductById(id);
    response.send(product);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

router.get("/browse/:title", async (request, response) => {
  const { title } = request.params;
  try {
    const products = await getProductsByTitle(title);
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

router.get("/filter/:categoryName", async (request, response) => {
  const { categoryName } = request.params;
  try {
    const products = await getProductsByCategory(categoryName);
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occured");
  }
});

router.get("/more/:companyName", async (request, response) => {
  const { companyName } = request.params;
  try {
    const products = await getProductsByCompanyName(companyName);
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal error occured");
  }
});

router.get("/", async (request, response) => {
  try {
    const products = await getProducts();
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected server error");
  }
});

router.get("/all", async (request, response) => {
  try {
    const allProducts = await getAllProducts();
    response.json(allProducts);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected server error");
  }
});

router.post("/suggestions", async (request, response) => {
  const product = request.body;
  try {
    await postProductSuggestion(product);
    response
      .status(200)
      .json("You successfully added a product suggestion! Thanks!");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error occured");
  }
});

module.exports = router;
