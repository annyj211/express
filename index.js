const express= require("express");
const app = express();

const orders = [
    {
      id: "1",
      value: 100,
    },
    {
      id: 2,
      value: 200,
    },
  ];
  
  const userName = "johan";
  
  app.get("/", (req, res, next) => {
    res.send("Hola desde express editado");
  });
  
  app.get("/orders", (req, res, next) => {
    if (userName !== "johinsdev") {
      res.status(401).json({
        message: "Usuario no valido",
      });
    }
  
    res.status(200).json({
      data: orders,
      message: "Todo salio bien!",
    });
  });
  
  // PARAMS, QUERY PARAMS
  app.get("/orders/:id/products", (req, res, next) => {
    console.log(req.query);
    res.status(200).json({
      data: orders.find((order) => order.id === req.params.id),
    });
  });
  
  app.listen(3000, () => {
    console.log("Escuchando en http://localhost:3000/");
  });