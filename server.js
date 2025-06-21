import express from "express";
const port = process.env.PORT;
import { startups } from "./data/data.js";

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredData = filteredData.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
    );
  }

  if (country) {
    filteredData = filteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (continent) {
    filteredData = filteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
    );
  }

  if (has_mvp) {
    filteredData = filteredData.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.json(filteredData);
  console.log(req.query);
});

// app.get('/api/:field/:term', (req, res) => {
//   const { country, continent, industry } = req.params;
//   console.log(req.params);
// });

app.listen(port, () => console.log(`server connected on port: ${port}`));
