const ProductDetail = function(id) {
    return `<div>ProductDetail ${id}</div>`
}

(function(id) {
    ProductDetail(id)
})

const render = function(component, dom) {
    dom.innerHTML = component()
}

router("/", function({data}) {
    // render(function(){
    //     ProductDetail(data.id)
    // }, app)
    render(() => ProductDetail(data.id), app)
})