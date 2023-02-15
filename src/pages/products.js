import { useEffect, useState } from '../../lib';
import { getBookById } from '../api/book.api';
import Header from '../components/header';

const ProductPage = (id) => {
    const [book, setBook] = useState({})
    useEffect(function() {
        getBookById(id)
        .then(({data}) => setBook(data))
    }, [])
    return /*html*/`
        <div>
            ${Header()}
            <h1>Trang sản phẩm</h1>
            <div>
                <h2>${book.name}<h2>
                <img style="width: 100%" src="${book.images?.[0].base_url}"/>
            </div>
            </div>
        </div>
    `
}

export default ProductPage;