import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './styles/main.css'
import Navigo from "navigo"
import NotFoundPage from "./pages/notFound"

const router = new Navigo("/", {linksSelector: "a"})

// DOM declaration
var app = document.querySelector('#app')

router.on("/", function() {
    render(HomePage(), app)
})
router.on("/products", function() {
    render(ProductPage(), app)
})

router.notFound(function() {
    render(NotFoundPage(), app)
})
router.resolve()


