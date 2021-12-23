import *as types from '../constants'
export default function deleteApi(data) {
    console.log(data,'data gui di+++++++====')
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/?id=${data.id}&textSearch=${data.textSearch}&limit=${types.limit}&activePage=${data.activePage}`
        fetch(url, {
            method:'DELETE'
        })
        .then((response) => response.json())
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            })
    })
} 