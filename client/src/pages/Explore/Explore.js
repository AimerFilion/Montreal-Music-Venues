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

  return (
    <>
      <Header>
        <Title>LOCAL MUSIC VENUES</Title>
      </Header>

      <Wrapper>
        <Paragraphe>{venuesList}</Paragraphe>
      </Wrapper>

      <Map />
    </>
  );
};

const Header = styled.div`
  align-items: flex-start;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Title = styled.h2`
  margin-left: 100px;
  color: black;
  font-size: 70px;
`;
const Paragraphe = styled.p`
  font-size: 35px;
  margin: 0px 0;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: ; */
  column-count: 2;
  list-style: none;
  background: none;
  color: white;
  padding: 60px;
  /* max-width: 900px; */
  /* width: 100vw; */
  z-index: 2;

  /* @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  } */
`;
export default Explore;
