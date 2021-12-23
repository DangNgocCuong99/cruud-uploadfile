
export default function deleteApi(data) {
    console.log(data,'data gui di+++++++====')
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008/delete/?id=${data.id}&linkImg=${data.linkImg}&linkAll=${data.linkAll}`
        console.log(url,'url++++++++===')
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