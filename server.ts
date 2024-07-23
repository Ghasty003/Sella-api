import express from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1", routes);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "App is working but route not found.",
  });
});

app.listen(8080, () => console.log("Server running on port 8080"));
