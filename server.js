import { app } from "./src/app.js";
import connectDB from "./src/db/connectDB.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyBkpSlZowhMk0Zbf4jA1yB2akzOpVNOtbE" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "i love u ",
//   });
//   console.log(response.text);
// }

// await main();

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
