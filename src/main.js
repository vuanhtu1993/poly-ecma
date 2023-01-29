import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './styles/main.css'

// DOM declaration
var app = document.querySelector('#app')

render(ProductPage, app)

