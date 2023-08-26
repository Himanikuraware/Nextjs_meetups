import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetuphandler = async (newMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>New Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </>
  );
};

export default NewMeetupPage;
