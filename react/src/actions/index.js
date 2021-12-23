import * as type from '../constants'


export function postRequest (payload ){
    return({
        type:type.POST_REQUEST,
        payload
    })
}
export function postSuccess (payload ){
    return({
        type:type.POST_SUCCESS,
        payload
    })
}
export function postFailure (payload ){
    return({
        type:type.POST_FAILURE,
        payload
    })
}
export function putRequest (payload ){
    return({
        type:type.PUT_REQUEST,
        payload
    })
}
export function putSuccess (payload ){
    return({
        type:type.PUT_SUCCESS,
        payload
    })
}
export function putFailure (payload ){
    return({
        type:type.PUT_FAILURE,
        payload
    })
}
export function deleteRequest (payload ){
    return({
        type:type.DELETE_REQUEST,
        payload
    })
}
export function deleteSuccess (payload ){
    return({
        type:type.DELETE_SUCCESS,
        payload
    })
}
export function deleteFailure (payload ){
    return({
        type:type.DELETE_FAILURE,
        payload
    })
}
export function deleteOneRequest (payload ){
    return({
        type:type.DELETE_ONE_REQUEST,
        payload
    })
}
export function deleteOneSuccess (payload ){
    return({
        type:type.DELETE_ONE_SUCCESS,
        payload
    })
}
export function deleteOneFailure (payload ){
    return({
        type:type.DELETE_ONE_FAILURE,
        payload
    })
}
export function searchRequest (payload ){
    return({
        type:type.SEARCH_REQUEST,
        payload
    })
}
export function searchSuccess (payload ){
    return({
        type:type.SEARCH_SUCCESS,
        payload
    })
}
export function searchFailure (payload ){
    return({
        type:type.SEARCH_FAILURE,
        payload
    })
}
export function uploadRequest (payload ){
    return({
        type:type.UPLOAD_REQUEST,
        payload
    })
}
export function uploadSuccess (payload ){
    return({
        type:type.UPLOAD_SUCCESS,
        payload
    })
}
export function uploadFailure (payload ){
    return({
        type:type.UPLOAD_FAILURE,
        payload
    })
}
export function unlinkRequest (payload){
    return({
        type: type.UNLINK_REQUEST,
        payload
    })
}

export function unlinkSuccess (payload){
    return({
        type: type.UNLINK_SUCCESS,
        payload
    })
}

export function unlinkFailure (payload){
    return({
        type: type.UNLINK_FAILURE,
        payload
    })
}
