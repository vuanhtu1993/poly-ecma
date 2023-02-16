import {useState, useEffect} from '../../../lib'
import axios from 'axios'

const DashBoard = function() {
    const [data, setData] = useState([])

    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataAxios) {
            setData(dataAxios.data)
        })
    }, [])
    console.log(data);
    return /*html*/`
    <h1>DashBoard</h1>
    <table class="border-separate border border-slate-400 ...">
        <thead>
            <tr>
                <th class="border border-slate-300 w-[10%]">STT</th>
                <th class="border border-slate-300 w-[70%]">Tên</th>
                <th class="border border-slate-300 w-[10%]">Ảnh</th>
                <th class="border border-slate-300 w-[10%]">Thao tác</th>
            </tr>
        </thead>
        <tbody>
        ${data.map(function(book, index) {
            return /*html*/`
            <tr>
                <td class="border border-slate-300">${index + 1}</td>
                <td class="border border-slate-300">
                    <a class="underline bg-blue-300" href="/admin/books/${book.id}">${book.name}</a>
                </td>
                <td class="border border-slate-300">
                    <img src="${book.images?.[0].base_url}"/>
                </td>
                <td class="border border-slate-300">
                    <button class="p-2 bg-red-400 rounded-sm">Xoá</button>
                </td>
            </tr>`
        }).join('')}
            
        </tbody>
        </table>
    `
}

export default DashBoard