import* as type from '../constants'

const DEFAULT_STATE = {
    listData:[],
    dataFetched:false,
    isFetching:false,
    error:false,
    errorMessage:null,
    activePage:1,
    totalPage:1
}

const itemReducer = (state = DEFAULT_STATE, action ) =>{
    switch(action.type) {
        
        case type.SEARCH_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case type.SEARCH_SUCCESS:
            return{
                ...state,
                dataFetched:true,
                listData: action.payload.listData,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage
            }
        case type.SEARCH_FAILURE:
            return{
                ...state,
                error:true,
                errorMessage:action.payload.errorMessage
            }
        case type.POST_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case type.POST_SUCCESS:
            return{
                ...state,
                dataFetched:true
            }
        case type.POST_FAILURE:
            return{
                ...state,
                error:true,
                errorMessage:action.payload.errorMessage
            }
        case type.PUT_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case type.PUT_SUCCESS:
            return{
                ...state,
                dataFetched:true
            }
        case type.PUT_FAILURE:
            return{
                ...state,
                error:true,
                errorMessage:action.payload.errorMessage
            }
        case type.DELETE_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case type.DELETE_SUCCESS:
            return{
                ...state,
                dataFetched:true
            }
        case type.DELETE_FAILURE:
            return{
                ...state,
                error:true,
                errorMessage:action.payload.errorMessage
            }
            default: return state;
    }
}

export default itemReducer