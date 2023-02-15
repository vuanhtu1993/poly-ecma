import { useEffect, useState } from "../../lib"
import Navagation from "../components/navigation"

var HomePage = function() {
    // Array destructoring - Object destructoring
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setData(data)
        });
    }, [])

    

    return /*html*/`
    ${Navagation()}
    <div>
        <h1>Home page</h1>
        <p>Website ban sach truc tuyen</p>
        <img class="w-full" src="/banner1.png"/>
        <div class="grid grid-cols-4 gap-2">
        ${data.map(function(book, index) {
            return /*html*/`
            <a href="/products/${book.id}">
                <img src="${book.images[0].base_url}"/>
                <h3>${book.name}</h3>
            </a>
            `
        }).join('')}
        </div>
    </div>`
}

export default HomePage