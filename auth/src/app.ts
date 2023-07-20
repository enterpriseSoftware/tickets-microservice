import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from 'cookie-session'


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test' //needed so unit test works 
  // with http and not https.
}));


// app.all("*", async(req, res) => {
//   console.log('Path Not Found')
//   throw new NotFoundError();
// });

app.use(errorHandler);

export { app };
