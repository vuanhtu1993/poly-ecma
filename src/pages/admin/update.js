import {useState, useEffect} from '../../../lib'
import {getBookById, postBookById} from '../../api/book.api'
import axios from 'axios'

const BookUpdate = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        getBookById(id)
        .then(({data}) => setBook(data))
    }, [])

    const updateBook = function() {
        const name = document.querySelector('#name').value
        const originalPrice = document.querySelector('#original_price').value
        const description = document.querySelector('#description').value
        // postBookById(id, {
        //     ...book,
        //     name,
        //     original_price: originalPrice,
        //     description
        // }).then(() => console.log("Cap nhat thanh cong"))
        axios.put(`http://localhost:3000/books/${id}`, {
            ...book,
            name,
            original_price: originalPrice,
            description
        }).then(console.log)
    }

    useEffect(function() {
        document.querySelector('#update-form').onsubmit = function(e) {
            e.preventDefault()
            updateBook()
        }
    })

    return /*html*/`
    <h1>Book update</h1>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
                <p class="max-w-xl text-lg">
                    At the same time, the fact that we are wholly owned and totally
                    independent from manufacturer and other group control gives you
                    confidence that we will only recommend what is right for you.
                </p>

                <div class="mt-8">
                    <a href="" class="text-2xl font-bold text-pink-600">
                    0151 475 4450
                    </a>

                    <address class="mt-2 not-italic">
                    282 Kevin Brook, Imogeneborough, CA 58517
                    </address>
                </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form class="space-y-4" id="update-form">
                <div>
                <label for="name">Tên</label>
                <input value="${book.name}" class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Tên" type="text" id="name" />
                </div>

                <div>
                <div>
                    <label for="email">Giá thành</label>
                    <input value="${book.original_price}" class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Thành tiền" type="number"
                    id="original_price" />
                </div>
                </div>
                <div>
                <label for="message">Mô tả</label>
                <textarea class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Mô tả" rows="8"
                    id="description">${book.description}</textarea>
                </div>

                <div class="mt-4">
                <button type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                    <span class="font-medium">Cập nhật</span>
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    `
}

export default BookUpdate