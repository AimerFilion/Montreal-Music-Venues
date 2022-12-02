import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Map from "./Map";
import Locations from "./Locations";
import { isValidElement } from "react";
const Explore = () => {
  const venuesList = Locations.map((venue, index) => {
    // const index = index;
    return <li>{venue.venue}</li>;
  });
  console.log(venuesList);
  return (
    <>
      <Wrapper>
        <Title>MONTREAL MUSIC VENUES</Title>
      </Wrapper>

      <VenuesList>
        <p>{venuesList}</p>
      </VenuesList>
      <Map />
    </>
  );
};

const Wrapper = styled.div`
  align-items: flex-start;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 170px;
`;
const Title = styled.h2`
  margin-left: 100px;
  color: black;
  font-size: 70px;
`;

const VenuesList = styled.div`
  position: absolute;
  left: 600px;
  color: white;
  list-style: none;
  top: 260px;
`;

// const Genre = styled.div`
//   a {
//     /* border: solid 2px #76ff03; */
//     padding: 15px 20px 15px 20px;
//     border-radius: 20px;
//     margin-right: 20px;
//     text-decoration: none;
//     color: #76ff03;
//   }
// `;

// const Venues = styled.div`
//   a {
//     /* border: solid 2px #76ff03; */
//     padding: 15px 20px 15px 20px;
//     border-radius: 20px;
//     margin-right: 10px;
//     margin-top: 10px;
//     text-decoration: none;
//     color: #76ff03;
//   }
// `;
export default Explore;
