import express from "express";
import requestHandler from "./helper/requestHandler";

const app = express();

app.use(express.static("public"));
app.get("*", requestHandler);

app.listen(3000, () => {
  console.log(`App is running on port ${3000}`);
});
