import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import routes from "./routes";

export const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("json spaces", 2);
app.enable("trust proxy");

app.get("/", (req, res) => {
  const message = "Hello World!";
  res.json({message});
});

Object.values(routes).forEach((route) => {
  app.use(`/${route.name}`, route.router);
});

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
