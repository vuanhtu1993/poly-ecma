// callback javascript.info

function loadScript(src, callback){
    // tạo thẻ <script>
    const script = document.createElement('script');
    script.src = src
    script.onload = function() {
        callback()
    }
    script.onerror = function() {
        const err = new Error("Lỗi rồi em mie")
        callback(err)
    }
    document.head.append(script)
}

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.211/lodash.min.js', function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log(_.uniq([2, 1, 2]));;
    }
})
// _.uniq([2, 1, 2]);

// forEach map

// sync and async
// Xử lý async
// 1. Callback

// 2. Promise
// 3. AW