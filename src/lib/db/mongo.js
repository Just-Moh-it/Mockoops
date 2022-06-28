import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URL;

let client = new MongoClient(uri);
let clientPromise = client.connect();

export const mongoClient = clientPromise;
