import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'
import {router} from '../lib'
import DashBoard from "./pages/admin/dashboard"
import BookUpdate from "./pages/admin/book-update"

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()

router.on('/', function() {
    render(HomePage, app)
})

router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})

router.on('/admin', function() {
    render(DashBoard, app)
})

router.on('/admin/books/:id', function({data}) {
    render(() => BookUpdate(data.id), app)
})

router.resolve()

