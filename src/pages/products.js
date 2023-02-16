import axios from "axios";
import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation";

const ProductPage = function(id) {
    const param = new URLSearchParams(location.search)
    const id_cate = param.get('id_categories')
    const [book, setBook] = useState({})
    const [relatedBook, setRelatedBook] = useState([])

    useEffect(function() {
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios) {
            setBook(dataAxios.data)
        })
    }, [])

    useEffect(function() {
        axios.get(`http://localhost:3000/books?categories.id=${id_cate}`)
        .then(function(data) {
            setRelatedBook(data.data)
        })
    }, [])

    console.log(relatedBook);

    // Optional chain
    return /*html*/`
    ${Navigation()}
    <h1>Product page</h1>
    <div>
      <img src="${book.images?.[0].base_url}"/>
      <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;