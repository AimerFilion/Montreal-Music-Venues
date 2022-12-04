import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Map from "./Map";
import Locations from "./Locations";
import { isValidElement } from "react";
const Explore = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  const venuesList = Locations.map((venue, index) => {
    // const index = index;
    return <li>{venue.venue}</li>;
  });

  return (
    <>
      <Wrapper>
        <Title>LOCATION MONTREAL</Title>
      </Wrapper>

      <ModalWindow>
        <Paragraphe>{venuesList}</Paragraphe>
      </ModalWindow>

      <Close onClick={toggleModal}></Close>
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
const Paragraphe = styled.p`
  font-size: 40px;
  margin: 20px 0;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    background: #76ff03;
    content: "";
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`;

const ModalWindow = styled.div`
  left: 70%;
  top: 25%;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  list-style: none;
  background: none;
  color: white;
  box-sizing: border-box;
  padding: 60px;
  max-width: 900px;
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`;
export default Explore;
