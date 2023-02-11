const result = fetch('http://localhost:3000/books')

result.then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data);
})