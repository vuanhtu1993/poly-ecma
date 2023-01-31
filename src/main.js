import { render } from "../lib"
import HomePage from "./pages/home"

// DOM declaration
var app = document.querySelector('#app')

render(HomePage(), app)

