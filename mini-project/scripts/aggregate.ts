import { createReadStream, createWriteStream } from "node:fs";
import { createInterface } from "node:readline";

const start = performance.now()

let total = 0;
let first = true

let grandtotal = 0;
let rowcount= 0

const rl = createInterface({input:createReadStream('data/products.csv'), crlfDelay: Infinity})

for await (const line of rl){
 if(first){first = true ; continue}

 const [,name] = line.split(',')

 grandtotal += 
} 