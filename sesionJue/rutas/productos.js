const express = require('express')
const rutas= express.Router()
const Producto = require(`../modelos/productos`)

const app=express()

rutas.get('/',async (req, res) => {
  try
    {
        const productos = await Producto.find()
        res.status(200).json(productos)
    }
    catch(err)
    {
        res.status(500).json({error:err.message})
    }
})



rutas.post('/',async function (req, res) {
    const {producto, categoria, existencia, precio} = req.body
    try{
        const nuevoProducto = new Producto({producto,categoria,existencia,precio})
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
    }),

    rutas.put('/:id',async function (req, res) {
        const {producto, categoria, existencia, precio} = req.body
        try{
            const productos =  await Producto.findById(req.params.id)
            if(!productos)
                return res.status(400).json({error:`Poucto no encontrado`})
            productos.producto = producto || productos.producto
            productos.categoria = categoria || productos.categoria
            productos.producto = existencia || productos.existencia
            productos.precio = precio || productos.precio

            await productos.save()
            res.status(200).json(productos)
            
        }
        catch(err){
            res.status(500).json({error:err.message})
        }
    }),


    rutas.delete('/:id',async function (req, res) {
        try{
            const productos =  await Producto.findByIdAndDelete(req.params.id)
            if(!productos)
                return res.status(400).json({error:`Poucto no encontrado`})
                res.status(200).json({message:`Producto eliminado`})

            }catch(err){
                res.status(500).json({error:err.message})
            }
    
    }),

    rutas.get('/:id',async (req, res) => {
        try{
            const productos =  await Producto.findById(req.params.id)
            if(!productos)
                return res.status(404).json({error:`Poucto no encontrado`})
            res.status(200).json(productos)

            }catch(err){
                res.status(500).json({error:err.message})
            }
      })

module.exports=rutas