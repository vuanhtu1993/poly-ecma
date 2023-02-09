import { render } from "../lib"
import HomePage from "@/pages/home"
import ProductPage from "./pages/products"
import Navigo from "navigo"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')

// Router
const router = new Navigo('/');
// Defined router
router.on('/', function() {
    console.log("render HomePage");
    render(() => HomePage(), app)
})

router.on('/products/:id', function({data}) {
    // console.log(data);
    render(() => ProductPage(data.id), app)
})

router.resolve();

