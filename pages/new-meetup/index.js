import React from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetuphandler = (newMeetup) => {
    console.log(newMeetup);
  };
  return <NewMeetupForm onAddMeetup={addMeetuphandler} />;
};

export default NewMeetupPage;
