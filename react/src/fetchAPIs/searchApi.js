import * as constants from "../constants"
export default function searchApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/?textSearch=${data.textSearch}&activePage=${data.activePage}&limit=${constants.limit}`
        fetch(url, {
            method:'GET'
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