export async function getProducts() {
  const result = await fetch("/api/products?_limit=8");
  const products = result.json();
  return products;
}

export async function getRandomProduct() {
  const id = Math.floor(Math.random() * 8 + 1);
  const result = await fetch(`/api/products/${id}`);
  const randomProduct = result.json();
  return randomProduct;
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
