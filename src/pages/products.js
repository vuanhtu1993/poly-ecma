import Navigation from "../components/navigation";
import {useEffect, useState} from '../../lib'

var ProductPage = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        fetch(`http://localhost:3000/books/${id}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data);
            setBook(data)
        })
    }, [])

    // optional chaining
    return /*html*/`
    ${Navigation()}
    <h1>Product page ${id}</h1>
    <div>
        <img class="w-1/2" src="${book.images?.[0].base_url}"/>
        <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

