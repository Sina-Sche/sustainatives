export async function getProducts() {
  const result = await fetch("/api/products?_limit=8");
  const products = result.json();
  return products;
}

export async function getProductsByTitle(title) {
  const result = await fetch(`/api/products?title_like=${title}`);
  const products = result.json();
  return products;
}

export async function getProductById(id) {
  const result = await fetch(`/api/products/${id}`);
  const product = result.json();
  return product;
}

export async function getProductsByCategory(categoryName) {
  const result = await fetch(`/api/products?categories_like=${categoryName}`);
  const products = result.json();
  return products;
}
