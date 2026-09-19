import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct,deletedProduct } from "../controllers/product.controller.js";
import { requireApiKey } from "../middleware/requireApiKey.js";

const router = Router()

router.get("/",getAllProducts)
router.get("/:id", getProductById)
router.post("/", requireApiKey,createProduct)
router.put("/:id", requireApiKey, updateProduct)
router.delete("/:id", requireApiKey, deletedProduct)

export default router;