import {writeFileSync }from "node:fs";
import 'dotenv/config'

const ROWS = Number(process.env.ROWS ?? 11_000);
const cols = ['id,name,category,price,stock'];

const categories = ['electronics','clothing','books','home','toys','food']

for(let i=1; i< ROWS  ; i++){
    const id = i
    const category = categories[i % categories.length]
    const name = `${category}-${i}`
    const price = (Math.random()*100).toFixed(2)
    const stock = Math.floor(Math.random() * 500)

    cols.push(`${id},${name},${category},${price},${stock}`)
}



writeFileSync('data/products.csv', cols.join('\n'))

console.log(`Generated ${ROWS} rows of products`)