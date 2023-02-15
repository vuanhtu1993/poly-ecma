import { render, router } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './styles/main.css'
import NotFoundPage from "./pages/notFound"
import Dashboard from "./pages/admin/dashboard"

// DOM declaration
var app = document.querySelector('#app')

router.on("/", function() {
    render(HomePage, app)
})
router.on("/products/:id", function({data}) {
    render(() => ProductPage(data.id), app)
})

router.on("/admin", function() {
    render(Dashboard, app)
})

router.notFound(function() {
    render(NotFoundPage, app)
})
router.resolve()


