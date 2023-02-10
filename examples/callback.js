const loadScript = function(src, callback) {
    // <script src=""></script>
    const script = document.createElement('script')
    // script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
    script.src = src
    script.onload = function() {
        callback()
    }
    document.head.append(script)
}

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', function() {
    // callback
    console.log(_.uniq([3,4,5,5,6,8,8,9]));
})
// console.log(_.uniq([3,4,5,5,6,8,8,9]));

[3,4,5,5,6,8,8,9].forEach(function(item) {
    console.log(item);
})