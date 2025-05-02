import { asyncWrapper } from "../utils/asyncWrapper.js";
import storeSchema from "../models/store.model.js";

const getAllProducts = asyncWrapper(async(req,res) => {
    const products = await storeSchema.find();

    if(products.length<=0){
        return res.status(404).json({message:"No Products Found Please Add one"})
    }

    return res.status(200).json({products:products});
})

const getOneProduct = asyncWrapper(async(req,res) => {
    const {product} = req.query;
    
    const productExists = await storeSchema.find({name:
                                                        {$regex:product, $options:'i'}
                                                    });

    if(!productExists){
        return res.status(404).json({message:"Product not Found or Out of Stock"})
    }

    return res.status(200).json({products:productExists});
})

const addProduct = asyncWrapper(async(req,res) => {
    const data = req.body;

    console.log(data);
    if (data.featured === undefined || data.name === undefined || data.price === undefined || data.category == undefined) {
        return res.status(400).json({ message: "Please Provide Complete Data of Product" });
    }

    
    const saveData = new storeSchema({
        featured:data.featured,
        name:data.name,
        price:data.price,
        category:data.category,
    });
    
    const savedData = await saveData.save();

    return res.status(200).json({ success: true, msg: "Saved Data Successfully", product: savedData });


})

const updateProduct = asyncWrapper(async(req,res)=>{
    const {id} = req.params;
    const data = req.body;
    if (data.featured === undefined || data.name === undefined || data.price === undefined || data.category == undefined) {
        return res.status(400).json({ message: "Please Provide Complete Data of Product" });
    }

    const productExists = await storeSchema.findById(id);

    if(!productExists){
        return res.status(404).json({message:"Product Does not exists"});
    }

/*
    // const newData = new storeSchema({
    //     featured:data.featured,
    //     name:data.name,
    //     price:data.price,
    //     category:data.category,
    // });
*/



    const updateData = await storeSchema.findByIdAndUpdate(
        id,
        {
          featured: data.featured,
          name: data.name,
          price: data.price,
          category: data.category
        },
        { new: true, runValidators: true }
      );

    if(!updateData){
        return res.status(400).json({message:"Failed to Update Task"})
    }

    return res.status(200).json({message:"Product Updated Successfully!",product:updateData});
})

const deleteProduct = asyncWrapper(async(req,res)=>{
    const {id} = req.params;

    const productExists = await storeSchema.findById(id);

    if(!productExists){
        return res.status(404).json({message:"Product Does not exists"});
    }

    const deleteProduct = await storeSchema.findByIdAndDelete(id);

    if(!deleteProduct){
        return res.status(400).json({message:"Error Deleting Product"})
    }

    return res.status(200).json({message:"Product Deleted Successfully",product: deleteProduct})

})

export {getAllProducts, getOneProduct, addProduct, updateProduct, deleteProduct}