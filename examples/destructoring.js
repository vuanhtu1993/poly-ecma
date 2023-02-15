function useState([a]) {
    const setData = function() {
        // do sth
    }
    return [a, setData]

}
// destructoring ES6
const [a, b] = useState([10, 20])