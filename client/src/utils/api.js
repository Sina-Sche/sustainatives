export async function getProducts() {
  const result = await fetch("http://localhost:7001/products/?_limit=8");
  const products = result.json();
  return products;
}

export async function getProductsByTitle(title) {
  const result = await fetch(`http://localhost:7001/products/?title=${title}`);
  const products = result.json();
  return products;
}
