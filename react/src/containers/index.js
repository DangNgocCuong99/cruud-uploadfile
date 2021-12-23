import React from "react";
import Items from '../components/index'
import* as action from "../actions/index"
import { connect } from "react-redux";


class ItemContainer extends React.Component {
    componentDidMount(){
        this.props.searchItem({activePage:1, textSearch : ''})
    }

    render() {
        return (
            <Items{...this.props}/>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        items:state.items.listData,
        totalPage:state.items.totalPage,
        activePage:state.items.activePage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
        postItem:(data) => {
            dispatch(action.postRequest(data))
        },
        putItem:(data) => {
            dispatch(action.putRequest(data))
        },
        deleteItem:(data) => {
            dispatch(action.deleteRequest(data))
        },
        deleteOne:(data) =>{
            dispatch(action.deleteOneRequest(data))
        },
        unlinkImg:(data) => {
            dispatch(action.unlinkRequest(data))
        },
        searchItem:(data) => {
            dispatch(action.searchRequest(data))
        },
        uploadItem:(data) => {
            dispatch(action.uploadRequest(data))
        } 
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
