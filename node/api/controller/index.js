const itemModel = require('../model/index')
const path = require('path')
const fs = require('fs')
exports.getItem = async (req, res) => {
    try {
        const textSearch = req.query.textSearch,
            activePage = + req.query.activePage,
            limit = + req.query.limit,
            skip = (activePage - 1) * limit,
            totalrecord = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } }),
            totalPage = Math.ceil(totalrecord / limit),
            listData = await itemModel.find({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.send({
            listData, totalPage, activePage, totalrecord
        })

    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.postItem = async (req, res) => {
    try {
        const textSearch = req.query.textSearch
        const limit = +req.query.limit
        const data = req.body
        await itemModel.create(data)
        const lengthData = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        const totalPage = Math.ceil(lengthData / limit)
        res.send({ data, totalPage })

    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.putItem = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        await itemModel.findByIdAndUpdate(id, data)
        res.send({ data })
    } catch (error) {
        res.send({ message: error.message })
    }
}
exports.deleteItem = async (req, res) => {
    try {
        const id = req.query.id
        const limit = +req.query.limit
        const activePage = + req.query.activePage
        const textSearch = req.query.textSearch
        const skip = (activePage - 1) * limit

        const deleteItem = await itemModel.findByIdAndDelete(id)
        let arrImg = deleteItem.img
        const totalData = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        const totalItem = await itemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)

        for (let i = 0; i < arrImg.length; i++) {
            fs.unlink(path.join(`media/${arrImg[i].slice(22)}`), () => {
                console.log('ksksk')
            })
        }

        res.send({ id, totalData, totalItem })
    } catch (error) {
        res.send({ message: error.message })
    }
}

exports.uploadImg = async (req, res) => {
    try {
        const id = req.params.id
        const file = req.files
        var arr = []

        for (var i = 0; i < file.length; i++) {
            arr.push(`http://localhost:3008/${file[i].originalname}`)

        }
        const arrImg = await itemModel.findByIdAndUpdate(id, { img: arr })
        res.send({ img: arrImg })
    } catch (error) {
        res.send({ message: error.message })
    }
}


exports.deleteImg = async (req, res) => {
    try {
        const id = req.query.id
        const linkImg = req.query.linkImg
        const linkAll = req.query.linkAll
        array = []
        array = linkAll.split(',')
        let filtered = array.filter(function (value, index, array) {
            return value !== linkImg;
        });
        let arr = []
        const item = await itemModel.find()

        for (let i = 0; i < item.length; i++) {

            for (let j = 0; j < item[i].img.length; j++) {
                arr.push(item[i].img[j])
            }
        }
        let sosanh = arr.filter(function (value) {
            return value !== linkImg;
        })
        if ((arr.length - 1) === sosanh.length) {
            console.log('xoa anh');
            fs.unlink(path.join(`media/${linkImg.slice(22)}`), () => {
                console.log('ksksk')
            })
        }
        else {
            console.log('de yen anh')
        }
        const arrImg = await itemModel.findByIdAndUpdate(id, { img: filtered })
        res.send({ img: arrImg })
    } catch (error) {
        res.send({ message: error.message })
    }
}
exports.createImg = async (req, res) => {
    try {
        const file = req.files
        var arr = []
        const data = req.query.title
        for (var i = 0; i < file.length; i++) {
            arr.push(`http://localhost:3008/${file[i].originalname}`)
        }
        const arrImg = await itemModel.create({ img: arr, name: data })
        res.send({ arrImg })
    } catch (error) {
        res.send({ message: error.message })
    }
}
