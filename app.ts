import express, { Express, Request, Response } from "npm:express";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Denon server sending response");
});

app.listen(config().PORT);
console.log(`Deno server working on port ${config().PORT}`);

//denon --init --> crea el archivo de scripts
//denon start
