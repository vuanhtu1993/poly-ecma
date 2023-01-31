import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()
render(ProductPage(), app)

