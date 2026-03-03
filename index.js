const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { dbConnection } = require("./config/config");
const routes = require("./routes");

const swaggerUI = require("swagger-ui-express");
const docs = require("./docs/index");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

dbConnection();

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));

module.exports = app;
