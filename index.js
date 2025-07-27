import express from "express";
const app = express();

app.get("/callback", (req, res) => {
  const data = req.query;
  res.send({
    data: data,
  });
  console.log(data);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
