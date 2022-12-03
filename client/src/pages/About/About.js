import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  return (
    <>
      {showModal && <Modal toggleModal={toggleModal}></Modal>}

      <Button onClick={toggleModal}>Contact us</Button>
    </>
  );
};
const Button = styled.button`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: none;
  /* border: 2px solid #fbfbfb; */
  /* border-radius: 50%; */
  color: #fbfbfb;
  cursor: pointer;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 300px;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 220px;
  }
`;
export default About;
