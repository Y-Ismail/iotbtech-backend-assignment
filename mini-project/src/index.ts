import express from "express";
import { loadProducts } from "./services/product.service.js";
import Productrouter from "./routes/product.route.js";
import { requestLogger } from "./middleware/requestLogger.js";
import "dotenv/config"
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";

const app = express()
const port = process.env.PORT 

loadProducts()

app.use(requestLogger)
app.use(express.json())
app.use("/api/products", Productrouter)
app.use(errorHandler)
app.use(notFoundHandler)


app.listen(port, ()=> {
    console.log("Running on "+ port)
})