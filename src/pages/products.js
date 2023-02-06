import Navigation from "../components/navigation";
import data from '../../db.json' assert {type: "json"}

const urlParam = new URLSearchParams()
console.log(urlParam.get('id'));

var ProductPage = function(id) {
    console.log(id);
    const book = data.find(function(item) {
        return item.id == id
    })
    return /*html*/`
    ${Navigation()}
    <h1>Product page ${id}</h1>
    <div>
        <img class="w-1/2" src="${book.images[0].base_url}"/>
        <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

