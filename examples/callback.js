const loadScript = function(src, callback) {
    const script = document.createElement('script')
    script.src = src
    script.onload = function() {
        callback()
    }
    script.onerror = function() {
        const error = new Error("Something went wrong!")
        callback(error)
    }
    document.head.append(script)
}

loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js", function() {
    
})