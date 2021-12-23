
export default function uploadApi(data) {
    console.log(data.img,"data+++++++")
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/upload/${data.id}`;
        fetch(url, {
            method:'PUT',
            body: data.img
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