import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from 'cookie-session'
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "@enterprisesoftware/common";


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test' //needed so unit test works 
  // with http and not https.
}));

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// app.all("*", async(req, res) => {
//   console.log('Path Not Found')
//   throw new NotFoundError();
// });

app.use(errorHandler);

export { app };
