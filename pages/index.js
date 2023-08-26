import React from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// Fetching data for static pages. It will be called before our component this function will run during the build process.
export async function getStaticProps() {
  // We can use MongoClient here as Nextjs will not expose this code to the client.
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_URL);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    // to use latest data without building it again we can use revalidate prop(Incremental Static Generation).
    revalidate: 1, //number od seconds.
  };
}

export default HomePage;
