import { useState } from "react";

const SelectedEvent = ({ events, pickEvent }) => {
  return (
    <>
      <button onClick={() => pickEvent(events)}></button>
    </>
  );
};

export default SelectedEvent;
