import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controllers/store.controller.js";

const productRouter = Router();

productRouter.route("/getProducts").get(getAllProducts);
productRouter.route("/getSingleProduct").get(getOneProduct);
productRouter.route("/addProduct").post(addProduct);
productRouter.route("/updateProduct/:id").put(updateProduct);
productRouter.route("/deleteProduct/:id").delete(deleteProduct);

export default productRouter;