import Navigation from "../components/navigation";
import {useEffect, useState} from '../../lib'

var ProductPage = function(id) {
    const param = new URLSearchParams(location.search)
    const id_cate = param.get('id_cate')
    const [book, setBook] = useState({})
    const [relatedBook, setRelatedBook] = useState([])

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

    useEffect(function() {
        fetch(`http://localhost:3000/books?categories.id=${id_cate}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data);
            setRelatedBook(data)
        })
    }, [])
    console.log(relatedBook, "relatedBook");
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

