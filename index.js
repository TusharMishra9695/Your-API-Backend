const express = require("express");
const app = express();
const port = 5000;

const productRouter = require("./routes/product");

app.use("/", productRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Your API listening on port ${port}`);
});
