export async function getProducts() {
  const result = await fetch("/api/products?_limit=8");
  const products = result.json();
  return products;
}

export async function getRandomProduct() {
  const id = Math.floor(Math.random() * 8 + 1);
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

export async function postProductSuggestion(product) {
  try {
    const response = await fetch(`/api/suggestions`, {
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
