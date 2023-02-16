import { render } from "../lib"
import HomePage from "@/pages/home"
import ProductPage from "./pages/products"
import './style/main.css'
import { router } from "../lib"
import Dashboard from "./pages/admin/dashboard"
import BookUpdate from "./pages/admin/book-update"

// DOM declaration
var app = document.querySelector('#app')

// Router
// Defined router
router.on('/', function() {
    console.log("render HomePage");
    render(HomePage, app)
})

router.on('/products/:id', function({data}) {
    // console.log(data);
    render(() => ProductPage(data.id), app)
})

router.on("/admin", function() {
    render(Dashboard, app)
})

router.on("/admin/book/:id", function({data}) {
    render(() => BookUpdate(data.id), app)
})

router.resolve();

