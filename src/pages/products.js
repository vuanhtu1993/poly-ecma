import Navagation from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}

var ProductPage = function(id) {
    const book = data.find(function(item) {
        return item.id == id
    })
    return /*html*/`
    ${Navagation()}
    <h1>Product page ${id}</h1>
    <div>
        <img class="w-1/2" src="${book.images[0].base_url}"/>
        <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

