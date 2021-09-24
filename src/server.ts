import express from "express";

import { companiesRoutes } from "./routes/companies.routes";

const app = express();

app.use(express.json());

app.use("/companies", companiesRoutes);

app.listen(3333, () => console.log("Server is running!!!"));
