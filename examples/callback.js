// callback javascript.info

function loadScript(src, callback){
    // tạo thẻ <script>
    const script = document.createElement('script');
    // <script src="http://javascript.info"></script>
    script.src = src;
    script.onload = function(){
        callback(script);
    }
    script.onerror = function(){
        callback(new Error('Loi roi anh oi'))
    }
    // nhúng vào thẻ <head></head>
    document.head.append(script)
}
// setTimeout
loadScript('http://javascript.info', function(error, script){
    console.log('loaded script', script);
    loadScript('http://javascript-vn.info', function(script){
        console.log('loaded script', script);
        loadScript('http://javascript-tl.info', function(script){
            console.log('loaded script', script);
            // ...
            // callback hell - callback in callback
        })
    })
});