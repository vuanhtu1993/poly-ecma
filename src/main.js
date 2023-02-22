import { render, router } from "../lib"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(() => `<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Base EMCA project</h1>`, app)
})

router.resolve()



