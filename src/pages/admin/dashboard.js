import {useEffect, useState} from '../../../lib'

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(dataFetch) {
            // console.log(data);
            setData(dataFetch)
        });
    }, [])

    useEffect(() => {
        const deleteBtns = document.querySelectorAll('.delete-btn')
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', function() {
                // console.log(btn.dataset.id);
                const id = btn.dataset.id
                deleteBook(id)
            })
        })
    })

    const deleteBook = function(id) {
        fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
        })
        .then(() => console.log("Delete successfully"))
    }
    return /*html*/`
    <h1>Dashboard</h1>

    <table class="border-separate border border-slate-400 ...">
        <thead>
            <tr>
                <th class="border border-slate-300 w-[10%]">STT</th>
                <th class="border border-slate-300 w-[70%]">Tên</th>
                <th class="border border-slate-300 w-[10%]">Hình ảnh</th>
                <th class="border border-slate-300 w-[10%]">Thao tác</th>
            </tr>
        </thead>
        <tbody>
        ${data.map((book, index) => /*html*/`
        <tr>
            <td class="border border-slate-300">${index + 1}</td>
            <td class="border border-slate-300">
                <a class="underline text-blue-300" href="/admin/book/${book.id}">${book.name}</a>
            </td>
            <td class="border border-slate-300">
                <img src="${book.images?.[0].base_url}"/>
            </td>
            <td class="border border-slate-300">
                <button data-id="${book.id}" class="bg-red-500 rounded-md p-2 delete-btn">Xoá</button>
            </td>
        </tr>
        `).join('')}
            
        </tbody>
        </table>
    `
}

export default Dashboard