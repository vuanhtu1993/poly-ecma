import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'
import {router} from '../lib'

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()

router.on('/', function() {
    render(HomePage, app)
})

router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})

router.resolve()

