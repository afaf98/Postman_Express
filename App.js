const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.get("/", (req, res) =>
  res.status(200).send({ message: "Hello from the server !" })
);

app.post("/", (req, res) =>
  res
    .status(200)
    .json({ message: "Hello from the server !", app: "Express-Routes" })
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "Success !", data: { body: req.body } });
});
