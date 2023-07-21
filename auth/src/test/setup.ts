import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";

declare global {
  var signup: () => Promise<string[]>;
}

let mongo: any;
beforeAll(async () => {  
  process.env.JWT_KEY = "assdasdf";
  const mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
  console.log('made it through mongoose connect');
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
  console.log("made it through beforeEach");
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signup = async () => {
  const email = "test@test.com";
  const password = "password";

  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password
    })
    .expect(201);
 console.log('******** made it through global signup');
  const cookie = response.get("Set-Cookie");
  return cookie;
};
