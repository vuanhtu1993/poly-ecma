import data from '../../db.json' assert {type: 'json'}
import Header from '../components/header';

const ProductPage = () => {
    return /*html*/`
        <div>
            ${Header()}
            <h1>Trang sản phẩm</h1>
            <div class="flex">
            ${data.map(book => {
                return /*html*/`
                <div>
                    <h2>${book.name}<h2>
                    <img style="width: 100%" src="${book.images[0].base_url}"/>
                </div>
                `
            })}
            </div>
        </div>
    `
}

export default ProductPage;