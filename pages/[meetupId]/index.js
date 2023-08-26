import React from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="My meetup"
      address="Some street"
      description="The meetup description"
    />
  );
};

export default MeetupDetailsPage;
