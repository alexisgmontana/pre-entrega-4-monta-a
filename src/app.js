//@ts-check
import express from "express";
import routerCarts from "./routes/carts.router.js";
import routerProducts from "./routes/products.router.js";

const app = express();
const port = 8080;

app.use(express.json());

//ROUTES
app.use("/products", routerProducts);
app.use("/carts", routerCarts);

app.listen(port, () => console.log(`Server listening on port ${port}`));
