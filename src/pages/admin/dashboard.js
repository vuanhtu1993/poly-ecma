import {useState, useEffect} from '../../../lib'
import { deleteBook } from '../../api/book.api'

const Dashboard = function() {
    const [data, setData] = useState([])
    useEffect(function() {
        fetch('http://localhost:3000/books').then(function(res) {
            return res.json()
        }).then(function(data) {
            // console.log(data);
            setData(data)
        })
    }, [])

    useEffect(function() {
        const deleteBtns = document.querySelectorAll('.delete-btn')
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                const id = btn.dataset.id
                deleteBook(id)
                .then(() => console.log("Delete successfully"))
            })
        })
    })
    return /*html*/`
    <h1>Dashboard</h1>
    <table class="border-separate border border-slate-400">
        <thead>
            <tr>
                <th class="border border-slate-300 w-[10%]">STT</th>
                <th class="border border-slate-300 w-[70%]">Tên</th>
                <th class="border border-slate-300 w-[10%]">Ảnh</th>
                <th class="border border-slate-300 w-[10%]">Thao tác</th>
            </tr>
        </thead>
        <tbody>
        ${data.map((book, index) => /*html*/`
        <tr>
            <td class="border border-slate-300">${index + 1}</td>
            <td class="border border-slate-300">${book.name}</td>
            <td class="border border-slate-300">
                <img src="${book.images[0].base_url}"/>
            </td>
            <td class="border border-slate-300 flex gap-3">
                <button class="bg-yellow-400 p-2 rounded-lg">Sửa</button>
                <button type="button" class="bg-red-400 p-2 rounded-lg delete-btn" data-id="${book.id}">Xoá</button>
            </td>
        </tr>
        `).join('')}
            
        </tbody>
        </table>
    `
}

export default Dashboard