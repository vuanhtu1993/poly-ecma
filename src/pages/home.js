import Navagation from "../components/navigation"
import data from '../../db.json' assert {type: 'json'}

var HomePage = function() {
    console.log(data);
    return /*html*/`
    ${Navagation()}
    <div>
        <h1>Home page</h1>
        <p>Website ban sach truc tuyen</p>
        <div>
        ${data.map(function(book, index) {
            return /*html*/`
            <div>
                <img src="${book.images[0].base_url}"/>
                <h3>${book.name}</h3>
            </div>
            `
        }).join('')}
        </div>
    </div>`
}

export default HomePage