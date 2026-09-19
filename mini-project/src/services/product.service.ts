import fs from "node:fs";

export interface Product {
    id:number;
    name: string;
    category: string;
    price:number;
    stock:number
}

export interface CreateProductData{
    name: string;
    category: string;
    price:number;
    stock:number
}

export interface updateProductData{
    name?: string;
    category?: string;
    price?: number;
    stock?: number;
}

let products: Product[] = []
let nextId = 1

export function loadProducts() :void{
    const text = fs.readFileSync("data/products.csv", "utf-8");

    const lines = text.trim().split("\n");

    products = lines.slice(1).map((line): Product => {
        const [id,name,category,price,stock] = line.split(",");

        return {
            id: Number(id),
            name,
            category,
            price: Number(price),
            stock:Number(stock)
        }
    })
    nextId = products.length + 1
}




export function findAllProducts(): Product[]{
    return products
}

export function findProductById(id:number) : Product | undefined {
    return products.find((p) => p.id === id)
}

export function createProduct(data: CreateProductData): Product{
    const product: Product ={
        id: nextId++,
        name: data.name,
        category: data.category,
        price: data.price,
        stock: data.stock
    }

    products.push(product)
    return product
}

export function updateProduct(id:number, data: Partial<Product>): Product | null{
    const product= products.find((p) => p.id === id);
    if(!product) return null;
    Object.assign(product,data);
    return product
}

export function deleteProduct(id:number): Product | null{
    const index = products.findIndex((product) => product.id === id)
    
    if(index === -1){
        return null
    }

    const [deletedProduct] = products.splice(index,1);

    return deletedProduct
}

