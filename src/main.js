import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import Navigo from "navigo"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')

const router = new Navigo('/', {linksSelector: 'a'})

router.on('/', function() {
    render(HomePage(), app)
})

router.on('/products', function() {
    render(ProductPage(), app)
})

router.resolve()



