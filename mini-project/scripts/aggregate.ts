import { createReadStream, createWriteStream } from "node:fs";
import { createInterface } from "node:readline";

const start = performance.now()

const totals = {
    clothing: 0,
    home:0,
    toys:0,
    books:0,
    food:0,
    electronics:0
}
let first = true

let grandtotal = 0;
let count= 0

const rl = createInterface({input:createReadStream("data/products.csv"), crlfDelay: Infinity})

for await (const line of rl){
 if(first){first = false ; continue}

 const [,name,category,price,stock] = line.split(',')


 grandtotal += Number(price) * Number(stock) 

//  if(totals[category] !== undefined){
//     totals[category] += revenue
//  }
} 

console.log(grandtotal)

const out = createWriteStream('data/category-summary.csv')
out.write('category, total \n');
for await (const [category, total] of Object.entries(totals)){
    out.write(`${category},${total} \n`)
}

out.end()