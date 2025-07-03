import { v2 as cloudinary } from 'cloudinary'
import { json } from 'express'
import productModel from '../models/productModel.js'

// function for adding a product 
const addProduct = async (req, res) => {
    try {

        const { name, description, address, price, category, location, rent, rooms, area, bathrooms } = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item => item !== undefined))
        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )


        const productData = {
            name,
            description,
            address,
            location,
            price: Number(price),
            category,
            rent: rent === 'true' ? true : false,
            rooms,
            area,
            bathrooms,
            image: imagesUrl,
            date: Date.now()
        }

        const product = new productModel(productData)
        product.save()

        res.json({ success: true, message: "Product added successfully" })


    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }

}

// function for removing a product 
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true, message: 'Product deleted successfully'
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }

}

// function for listing all products 
const listProducts = async (req, res) => {
    try {

        const products = await productModel.find({});
        res.json({ success: true, products })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }

}


const updateProduct = async (req, res) => {
    try {

        const { id, newStatus } = req.body
        await productModel.findByIdAndUpdate(id, {
            status: newStatus
        })
        res.json({
            success: true, message: 'Product Updated successfully'
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}



// function for displaying a product's detail
const productDetail = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({
            success: true, product
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }

}


export { listProducts, addProduct, productDetail, removeProduct , updateProduct }