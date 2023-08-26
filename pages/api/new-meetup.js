import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        process.env.REACT_APP_MONGODB_URL
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup added successfully." });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "An error occurred." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};

export default handler;
