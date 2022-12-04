import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const VenuesInfo = () => {
  const [infoVenue, setInfoVenue] = useState([]);
  const { venue_id } = useParams();

  useEffect(() => {
    fetch(`/venue/${venue_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <p>hello world</p>;
};

export default VenuesInfo;
