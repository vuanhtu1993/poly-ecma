import { useEffect, useState } from "../../lib";
import Navagation from "../components/navigation";

var ProductPage = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        fetch(`http://localhost:3000/books/${id}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setBook(data)
        });
    }, [])

    return /*html*/`
    ${Navagation()}
    <h1>Product page ${id}</h1>
    <div>
        <img class="w-1/2" src="${book.images?.[0].base_url}"/>
        <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

