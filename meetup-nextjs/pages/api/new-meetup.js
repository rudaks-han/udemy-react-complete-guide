// /api/new-meetup
// POST /api/new-meetup
// https://www.mongodb.com/products/platform/cloud

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://rudaks94:8vR7BgV6rpmj7bGR@cluster0.6mea0b6.mongodb.net/meetups?retryWrites=true&w=majority",
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({
      ...data,
      _id: Math.random() * 10000000000,
    });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
