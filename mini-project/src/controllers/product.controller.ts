import { Request, Response } from "express";
import { findAllProducts, findProductById, createProduct as createService, updateProduct as updateService, deleteProduct as deleteService } from "../services/product.service.js";

export function getAllProducts(req: Request, res: Response): void {
    const { category } = req.query;

    let products = findAllProducts()

    if (typeof category === 'string') {
        products = products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    res.status(200).json(products)
}

export function getProductById(req: Request, res: Response): void {
    const id = Number(req.params.id);

    const product = findProductById(id);

    if (!product) {
        res.status(404).json({
            error: "Product not found",
        });
        return
    }

    res.status(200).json(product)
}

export function createProduct(req: Request, res: Response): void {
    const { name, price, category, stock } = req.body;

    if (!name || price === undefined || typeof price !== "number") {
        res.status(400).json({
            error: "name and price are required"
        });
        return
    }

    const product = createService({
        name, category, price, stock
    });

    res.status(201).json(product)
}

export function updateProduct(req: Request, res: Response): void{
    const id = Number(req.params.id);

    const product = updateService(id, req.body);

    if(!product){
        res.status(404).json({
            error: "Product not found"
        });
        return
    }

    res.status(200).json(product);
}

export function deletedProduct(req:Request,res:Response): void{
    const id = Number(req.params.id);

    const product = deleteService(id)

    if(!product){
        res.status(404).json({
            error:"Product not found"
        })
        return
    }

    res.status(200).json({
        deleted:true,
        id,
    });
}