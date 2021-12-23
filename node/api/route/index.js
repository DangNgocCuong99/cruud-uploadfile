const{ getItem,postItem,createImg,putItem,deleteItem ,uploadImg, deleteImg }=require('../controller/index')
const routes = (app)=>{
    app.get('/',getItem),
    app.post('/',postItem),
    app.post('/create', createImg),
    app.put('/:id',putItem),
    app.put('/upload/:id',uploadImg),
    app.delete('/',deleteItem),
    app.delete('/delete',deleteImg)

}   
module.exports = routes