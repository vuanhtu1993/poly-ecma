import Navigation from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}

const ProductPage = function(id) {
    const book = data.find(function(item) {
        return item.id == id
    })
    return /*html*/`
    ${Navigation()}
    <h1>Product page</h1>
    <div>
      <img src="${book.images[0].base_url}"/>
      <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

