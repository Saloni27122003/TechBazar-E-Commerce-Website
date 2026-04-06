import "./style.css";
// import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Fetch products from the backend API instead of importing from local JSON
async function fetchProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    showProductContainer(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to local data if API fails
    import("./api/products.json").then(module => {
      showProductContainer(module.default);
    });
  }
}

// Call the fetchProducts function to load products
fetchProducts();