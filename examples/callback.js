const loadScript = function(src, callback) {
    // <script src></script>
    const script = document.createElement('script')
    script.src = src
    script.onload = function() {
        callback()
    }
    script.onerror = function() {
        const error = new Error("Lỗi rồi em mie")
        callback(error)
    }
    document.head.append(script)
}
// setTimeout
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', function(err1) {
    if (err1) {
        console.error(err1)
    } else {
        // Sync
        console.log(_.uniq([3,4,5,6,6,8,9,8]));
    }
})

// [1,2,4].map(function(item) {

// })
