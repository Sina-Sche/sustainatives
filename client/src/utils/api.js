export async function getProducts() {
  const result = await fetch("/api/products");
  const products = result.json();
  return products;
}

export async function getAllProducts() {
  const result = await fetch("/api/products/all");
  const products = result.json();
  return products;
}

export async function getRandomProduct() {
  const numberOfProducts = await getAllProducts();
  const id = Math.floor(Math.random() * numberOfProducts + 1);
  const result = await fetch(`/api/products/details/${id}`);
  const randomProduct = result.json();
  return randomProduct;
}

export async function getProductsByTitle(title) {
  const result = await fetch(`/api/products/browse/${title}`);
  const products = result.json();
  return products;
}

export async function getProductById(id) {
  const result = await fetch(`/api/products/details/${id}`);
  const product = result.json();
  return product;
}
export async function getFavorites(favorites) {
  const promiseData = favorites.map(async (id) => getProductById(id));
  const newData = await Promise.all(promiseData);
  return newData;
}

export async function getProductsByCategory(categoryName) {
  const result = await fetch(`/api/products/filter/${categoryName}`);
  const products = result.json();
  return products;
}

export async function getProductsByCompanyName(companyName) {
  const result = await fetch(`/api/products/more/${companyName}`);
  const products = result.json();
  return products;
}

export async function postProductSuggestion(product) {
  try {
    const response = await fetch(`/api/products/suggestions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return await response.text();
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getAllProjects() {
  const result = await fetch(`api/projects`);
  const products = result.json();
  return products;
}
