import {useEffect, useState} from '../../../lib'
import axios from 'axios'

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(function() {
        // fetch('http://localhost:3000/books')
        // .then(function(res) {
        //     return res.json()
        // })
        // .then(function(data) {
        //     setData(data)
        // })
        axios.get('http://localhost:3000/books')
        .then(({data}) => {
            setData(data)
        })
    }, [])

    const deleteBook = function(id) {
        const status = confirm("Bạn chắc chứ")
        if(status) {
            // fetch(`http://localhost:3000/books/${id}`, {
            //     method: "DELETE"
            // })
            // .then(() => location.reload())
            axios.delete(`http://localhost:3000/books/${id}`)
            .then(() => location.reload())
        }
        
    }

    useEffect(function() {
        const deteleBtns = document.querySelectorAll('.delete-btn')
        deteleBtns.forEach((btn) => {
            btn.onclick = function() {
                const id = btn.dataset.id
                deleteBook(id)
            }
        })
    })

    return /*html*/`
    <h1>Dashboard</h1>
    <div class="rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
            <tr>
            <th class="w-[10%] px-4 py-2 text-left font-medium text-gray-900">
                STT
            </th>
            <th class="w-[70%] px-4 py-2 text-left font-medium text-gray-900">
                Tên
            </th>
            <th class="w-[10%] px-4 py-2 text-left font-medium text-gray-900">
                Ảnh
            </th>
            <th class="w-[10%] px-4 py-2 text-left font-medium text-gray-900">
                Thao tác
            </th>
            </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
        ${data.map((book, index) => /*html*/`
            <tr>
                <td class="px-4 py-2 font-medium text-gray-900">
                    ${index + 1}
                </td>
                <td class="px-4 py-2 text-gray-700">${book.name}</td>
                <td class="px-4 py-2 text-gray-700">
                    <img src="${book.images?.[0].base_url}"/>
                </td>
                <td class="px-4 py-2 text-white">
                    <button class="delete-btn p-2 bg-red-600" data-id="${book.id}">Xoá</button>
                </td>
            </tr>
        `).join('')}
            
        </tbody>
        </table>
    </div>

    `
}

export default Dashboard