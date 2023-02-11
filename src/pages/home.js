import { useEffect, useState } from "../../lib"

var HomePage = function() {
    const [data, setData] = useState([])
    useEffect(function() {
        fetch('http://localhost:3000/books').then(function(res) {
            return res.json()
        }).then(function(data) {
            console.log(data);
            // setData(data)
        })
    })
    return /*html*/`<div>
        <h1 class="bg-red-100 text-lg">Home page</h1>
        <p>Website ban sach truc tuyen</p>
        <div class="grid grid-cols-4 gap-2">
        ${data.map(function(item) {
            return /*html*/`
            <a href="/products/${item.id}">
                <img src="${item.images[0].base_url}"/>
                <h3>${item.name}</h3>
            </a>
            `
        }).join('')}
        </div>
        
    </div>`
}

export default HomePage