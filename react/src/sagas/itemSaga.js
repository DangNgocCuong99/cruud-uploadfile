import { put, takeEvery } from 'redux-saga/effects';

import deleteOneApi from '../fetchAPIs/deleteOneApi'
import * as type from '../constants'
import searchApi from '../fetchAPIs/searchApi'
import postApi from '../fetchAPIs/postApi'
import * as actions from '../actions/index'
import deleteApi from '../fetchAPIs/deleteApi'
import putApi from '../fetchAPIs/putApi'
import uploadApi from '../fetchAPIs/uploadApi'
import unlinkApi from '../fetchAPIs/unlinkApi'

function* postItem(action) {
    try {
        const res = yield postApi(action.payload)
        const textSearch = action.payload.textSearch
        const name = action.payload.name
        yield put(actions.postSuccess())

        if (name.toLowerCase().includes(textSearch.toLowerCase()) === true) {
            yield put(actions.searchRequest({
                activePage: res.totalPage,
                textSearch: textSearch
            }))
        } else {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1,
                listData: [{ name }]
            }))
        }


    } catch (error) {
        yield put(actions.postFailure({ errorMessage: error.message }))
    }
}
function* uploadImg(action) {
    try {
        yield uploadApi(action.payload)
        yield put(actions.uploadSuccess())
        yield put(actions.searchRequest(action.payload))
    } catch (error) {
        yield put(actions.uploadFailure({ errorMessage: error.message }))
    }
}
function* unlinkImg(action) {
    try {
        yield unlinkApi(action.payload)
        yield put(actions.unlinkSuccess())
        yield put(actions.searchRequest(action.payload))
    } catch (error) {
        yield put(actions.unlinkFailure({ errorMessage: error.message }))
    }
}
function* putItem(action) {
    try {
        yield putApi(action.payload)
        const activePage = action.payload.activePage
        const textSearch = action.payload.textSearch
        const name = action.payload.name
        yield put(actions.putSuccess())

        if (name.toLowerCase().includes(textSearch.toLowerCase()) === true) {
            yield put(actions.searchRequest({
                activePage: activePage,
                textSearch: textSearch
            }))
        } else {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1,
                listData: [{ name }]
            }))
        }
    } catch (error) {
        yield put(actions.putFailure({ errorMessage: error.message }))
    }
}
function* deleteItem(action) {
    try {
        const res = yield deleteApi(action.payload)
        console.log(action.payload.nameAdd,'naem+++++++++++++++++++=');
        const textSearch = action.payload.textSearch
        yield put(actions.deleteSuccess())
        const nameAdd = action.payload.nameAdd
        if (res.totalData > 0) {
            if (res.totalItem > 0 ) {
               if (textSearch!=='' && nameAdd !=='' && (nameAdd.toLowerCase()).includes(textSearch.toLowerCase())=== false) {
                   yield put(actions.searchSuccess({
                       activePage:1,
                       totalPage:1
                   }))
               }else {
                    yield put(actions.searchRequest(action.payload))
               }
            } else {
                yield put(actions.searchRequest({
                    activePage: action.payload.activePage - 1,
                    textSearch: textSearch
                }))
            }
        } else {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1
            }))
        }
    } catch (error) {
        yield put(actions.deleteFailure({ errorMessage: error.message }))
    }
}
function* searchItem(action) {
    try {
        const res = yield searchApi(action.payload)
        console.log(res,'aaaaaaaaa')

        if (res.totalrecord === 0) {
            yield put(actions.searchSuccess({
                activePage: 1,
                totalPage: 1,
                listData: res.listData
            }))
        } else {
            yield put(actions.searchSuccess({
                listData: res.listData,
                totalPage: res.totalPage,
                activePage: res.activePage
            }))
        }
    } catch (error) {
        yield put(actions.searchFailure({ errorMessage: error.message }))
    }
}
function* deleteOne(action) {
try {
    yield deleteOneApi(action.payload)
    yield put(actions.deleteOneSuccess())
    yield put(actions.searchRequest({activePage:1, textSearch:''}))
} catch (error) {
    yield put(actions.deleteOneFailure({ errorMessage: error.message}))
}
}

export const itemSaga = [
    takeEvery(type.SEARCH_REQUEST, searchItem),
    takeEvery(type.POST_REQUEST, postItem),
    takeEvery(type.DELETE_REQUEST, deleteItem),
    takeEvery(type.DELETE_ONE_REQUEST, deleteOne),
    takeEvery(type.UPLOAD_REQUEST, uploadImg),
    takeEvery(type.PUT_REQUEST, putItem),
    takeEvery(type.UNLINK_REQUEST, unlinkImg)
]