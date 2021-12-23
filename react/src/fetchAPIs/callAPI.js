import * as constants from "../constants"
// export default function addDataApi(method, path, data) {
//     let objFetch = {}
//     if(method === constants.HTTP_READ || method === constants.HTTP_DELETE){
//         objFetch = {
//             method
//           }
//     }else{
//         objFetch = {
//             method,
//             headers: constants.HTTP_HEADER_JSON,
//             body: JSON.stringify(data)
//           }
//     }
//     return new Promise((resolve, reject) => {
//         const url = constants.DOMAIN + path
//         fetch(url, objFetch)
//             .then((response) => resolve(response.json()))
//             .catch((error) => reject(error));
//     });
// }

export default function getApi(data) {
    console.log(data,'sssssssssssssssss');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3008?activePage=${data}&limit=${constants.limit}`
        console.log(url,'url+++++++++++++++++++++');
        fetch(url, {
            method:'GET'
        })
        .then((response) => response.json())
            .then((res) => {
                resolve(res)
                console.log(res,'res+++++++++++')
            })
            .catch((error) => {
                reject(error);
            })
    })
} 