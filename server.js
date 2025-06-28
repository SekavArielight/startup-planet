import express from "express";
const port = process.env.PORT;
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/api", apiRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({
      message: "Endpoint not found. Please check the API documentation.",
    });
});

app.listen(port, () => console.log(`server connected on port: ${port}`));
