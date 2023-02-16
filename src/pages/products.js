import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation";

const ProductPage = function (id) {
  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => setBook(data))
  }, [])

  return /*html*/`
    ${Navigation()}
    <h1>Product page</h1>
    <div>
      <img src="${book.images?.[0].base_url}"/>
      <h3>${book.name}</h3>
    </div>
    `
}

export default ProductPage;

