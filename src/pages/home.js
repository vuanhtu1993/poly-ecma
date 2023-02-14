import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation"
// import data from '../../db.json' assert {type: 'json'}

var HomePage = function() {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(dataFetch) {
            setData(dataFetch)
        });
    }, [])
    
        
    return /*html*/`
    ${Navigation()}
    <h1>Trang chủ</h1>
    <p>Website bán sách trực tuyến</p>
    <div class="grid grid-cols-4 gap-2">
        ${data.map(function(book, index) {
            return /*html*/`
                <div>
                <img src="${book.images[0].base_url}"/>
                <h3>${book.name}</h3>
                </div>
            `
        }).join('')}
    </div>
    `
}

export default HomePage