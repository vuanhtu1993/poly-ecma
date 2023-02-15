import { render, router } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './styles/main.css'
import NotFoundPage from "./pages/notFound"
import Dashboard from "./pages/admin/dashboard"
import BookUpdate from "./pages/admin/update"

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

router.on("/admin/book/:id", function({data}) {
    render(() => BookUpdate(data.id), app)
})

router.notFound(function() {
    render(NotFoundPage, app)
})
router.resolve()


