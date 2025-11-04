import { app } from "./src/app.js";
import connectDB from "./src/db/connectDB.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
