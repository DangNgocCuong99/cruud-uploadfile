
export default function unlinkApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/delete/${data.id}`
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