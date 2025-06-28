import express from "express";
const port = process.env.PORT;
import { apiRouter } from "./routes/apiRoutes.js";

const app = express();

app.use("/api", apiRouter);

// app.use((req, res) => {
//   res.status(404).json({message: "Endpoint not found"});
// });

app.listen(port, () => console.log(`server connected on port: ${port}`));
