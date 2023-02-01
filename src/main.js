import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"

// DOM declaration
var app = document.querySelector('#app')

render(HomePage(), app)