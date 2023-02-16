import Navigation from "../components/navigation"
// import data from '../../db.json' assert {type: "json"}
import {useState, useEffect} from '../../lib'

var HomePage = function() {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(dataFetch) {
            // console.log(data);
            setData(dataFetch)
        });
    }, []) // watch tham số cần thay đổi (shouldUpdate)


    
    return /*html*/`
    ${Navigation()}
    <div>
        <h1>Home page</h1>
        <a class="bg-red-400" href="/admin">Admin</a>
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
        <div>
    </div>`
}

export default HomePage