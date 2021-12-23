import {limit} from '../constants'
export default function postApi(data) {

    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/?limit=${limit}&textSearch=${data.textSearch}`

        fetch(url, {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
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