import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from 'cookie-session'
import { NotFoundError, errorHandler } from "@enterprisesoftware/common";
import { createTicketRouter } from "./routes/new";
import { currentUser } from "@enterprisesoftware/common";




const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test' //needed so unit test works 
  // with http and not https.
}));
app.use(currentUser);
app.use(createTicketRouter);

app.all("*", async(req, res) => {
  console.log('Path Not Found')
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
