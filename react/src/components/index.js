import React, { Component } from "react";
import { limit } from '../constants'
class Items extends Component {
  state = {
    id: "",
    name: "",
    activePage: 1,
    nameadd: "",
    text: "",
    arrFile: [],
    textSearch: '',
    arrImage: [],
  }
  handleOnChange(file) {
    this.setState({ arrFile: file })
    var test = []
    for (var i = 0; i < file.length; i++) {
      test.push(URL.createObjectURL(file[i]))
    }
    this.setState({ arrImage: test })
  }

  handleUploadFile() {
    var form = new FormData()
    for (var i = 0; i < this.state.arrFile.length; i++) {
      form.append("img", this.state.arrFile[i])
    }
    this.props.uploadItem({ img: form, id: this.state.id, textSearch: this.state.text, activePage: this.state.activePage })
  }

  render() {


    let listData = [];
    if (this.props.items) {
      listData = this.props.items.map((item, index) => {
        console.log(item,"item++++++==")
        return (
          <tr key={index}>
            <th>{(this.props.activePage - 1) * limit + 1 + index}</th>
            <th>{item.name}</th>
            <th>{
              
            (item.img) ? // check co anh hay k
              item.img.map((img, key) => {
                console.log(item,"item++++++==")
                return (
                <span key={key}>
                <img  alt="img" src={img} height="120" width="120" />
                <button  onClick={() =>this.props.deleteOne({linkAll: item.img,id:item._id,linkImg:item.img[key]})}>X </button>
                  </span>
                )
              }) : null
             
            }</th>
            <th>
              <button onClick={() => this.props.deleteItem({ id: item._id, textSearch: this.state.text, activePage: this.props.activePage, nameAdd: this.state.nameadd })}>
                Delete
              </button>
              <button
                onClick={() => this.setState({ id: item._id, name: item.name })}
              >
                Pick me
              </button>
              
            </th>
          </tr>
        );
      });
    }


    let Btn = []
    if (this.props.totalPage) {
      let Num = []
      for (let i = 1; i <= this.props.totalPage; i++) {
        Num.push(i)
      }
      Btn = Num.map((page, key) => {
        return (
          <button key={key}
            style={this.props.activePage === page ?
              { backgroundColor: "black", color: "white" } :
              { backgroundColor: "white", color: "black" }
            }
            onClick={() => {
              return (
                this.setState({ activePage: page }),
                this.props.searchItem({ activePage: page, textSearch: this.state.text })
              )
            }}>{page}</button>
        )
      })
    }
    return (
      <div>

        <div>
          <input
            placeholder="them dl"
            onChange={(event) => this.setState({ nameadd: event.target.value })}
          />
          <button onClick={() => this.props.postItem({ name: this.state.nameadd, textSearch: this.state.text })}>
            ADD
          </button>
          <br />
          <input
            placeholder="sua dl" value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button onClick={() => this.props.putItem({ name: this.state.name, id: this.state.id, textSearch: this.state.text, activePage: this.state.activePage })}>
            UPDATE
          </button>
          <br />
          <input
            placeholder="tim dl"
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button onClick={() => this.props.searchItem({ textSearch: this.state.text, activePage: this.state.activePage })}>
            SEARCH
          </button>
          
          <button 
          style = {(this.state.text!== '')?{
            display: "inline-block"
          }:{
            display: "none"
          }}
          onClick={() => this.props.searchItem({ activePage:1,textSearch:""})}>Back</button>
        </div>

        <table className="List-Data">
          <tbody>
            <tr>
              <th className="id">STT_____</th>
              <th className="name">NAME________________________</th>
              <th className="img">IMG________________________+++++++++++++++++++++++++++++++</th>
            </tr>
            {listData}
          </tbody>
        </table>
        <div>{Btn}</div>
        <input type="file" multiple onChange={(e) => this.handleOnChange(e.target.files)} />
        <button onClick={() => this.handleUploadFile()}>Upload</button><br />
        {
          this.state.arrImage.map((img,key) => {
            return (
              <img alt="img" key = {key} src={img} width="150px" height="150px" />
            )

          })
        }
      </div>
    );
  }
}
export default Items;

