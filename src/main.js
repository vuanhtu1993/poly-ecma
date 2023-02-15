import { render, router } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(HomePage, app)
})

// truyền callback

router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})

router.resolve()



