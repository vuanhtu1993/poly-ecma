// destructoring
function useState(a) {
    function setData(b) {
        a = b
    }
    return [a, setData]
}

// const [a, b] = useState([])
const [a, b] = [a, setData]
console.log(a);