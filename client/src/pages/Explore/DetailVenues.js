import { useEffect, useRef } from "react";

const DetailVenues = ({ venues }) => {
  const venue = useRef(null);
  const prevVenues = useRef(null);

  useEffect(() => {
    if (prevVenues.current !== venues) {
      venue.current.scrollTop = 0;
    }

    prevVenues.current = venues;
  }, [venues, prevVenues]);

  return <></>;
};

export default DetailVenues;
