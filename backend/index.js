const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./model/OrdersModel");
const { Holding } = require("./model/HoldingsModel");
const { Position } = require("./model/PositionsModel");

const app = express();

app.use(cors({
  origin: [
    "https://zerodha-clone-jsxw.vercel.app",
    "https://zerodha-clone-kn3z.vercel.app"
  ],
  credentials: true
}));
app.use(bodyParser.json());
// ==================== ADD HOLDINGS ====================

app.get("/addHoldings", async (req, res) => {
  try {
    let tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
    ];

    for (const item of tempHoldings) {
      const newHolding = new Holding(item);
      await newHolding.save();
    }

    res.send("Holdings Added Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// ==================== ADD POSITIONS ====================

app.get("/addPositions", async (req, res) => {
  try {
    let tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "TCS",
        qty: 1,
        avg: 4150,
        price: 4195.8,
        net: "+1.10%",
        day: "+0.52%",
        isLoss: false,
      },
      {
        product: "CNC",
        name: "INFY",
        qty: 3,
        avg: 1580.4,
        price: 1608.9,
        net: "+1.80%",
        day: "+0.95%",
        isLoss: false,
      },
    ];

    for (const item of tempPositions) {
      const newPosition = new Position(item);
      await newPosition.save();
    }

    res.send("Positions Added Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});
// ==================== DATABASE CONNECTION ====================

console.log("MONGO_URL:", process.env.MONGO_URL);
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("order Saved !");
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ DB Connected");

    app.listen(3002, () => {
      console.log("Server running on port 3002");
    });
  })
  .catch((err) => {
    console.error("ERROR NAME:", err.name);
    console.error("ERROR MESSAGE:", err.message);
    console.error(err);
  });
