import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import one from "./Images/one.jpg";
import two from "./Images/two.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  return (
    <Wrapper>
      <Title>
        A platform to discover music venues in Montreal known as Tiohtia:ke
      </Title>
      <ImageOne src={one} alt="one" />
      <P>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </P>
      <ImageTwo src={two} alt="two" />
      <P2>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </P2>

      {showModal && <Modal toggleModal={toggleModal}></Modal>}
      <Follow></Follow>
      <SocialMedia>
        <AiFillInstagram size="30px" color="#76ff03" cursor="pointer" />
        <AiFillFacebook size="30px" color="#76ff03" cursor="pointer" />
        <AiOutlineTwitter size="30px" color="#76ff03" cursor="pointer" />
        <Button onClick={toggleModal}>Contact us</Button>
      </SocialMedia>
    </Wrapper>
  );
};

const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const P = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 100px 60px 0 60px;
`;

const P2 = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 70px 60px 0 60px;
`;

const ImageOne = styled.img`
  filter: grayscale(100%);
  width: 100%;
`;

const ImageTwo = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  width: 50%;
`;
const Follow = styled.p`
  left: 45%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  margin: 100px 60px 0 60px;
  font-size: 23px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 200px;
  color: #fbfbfb;
  @media screen and (max-width: 450px) {
    height: 40px;
    margin: 60px 0 0 0;
    text-align: center;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin: 200px 0 0 0;
  @media screen and (max-width: 450px) {
    height: 40px;
    margin: 30px 0 0 0;
  }
`;

const Button = styled.button`
  position: fixed; /* or absolute */
  top: 75%;
  left: 50%;
  /* left: 50%;
  top: 20%; */
  /* position: absolute; */
  transform: translate(-50%, -50%);
  background: none;
  border: 2px solid #76ff03;
  border-radius: 50%;
  color: #fbfbfb;
  cursor: pointer;
  font-size: 23px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 200px;
  z-index: 1;
  /* margin: 420px 0 0 0; */

  @media screen and (max-width: 450px) {
    max-width: 100%;
    top: 60%;
    left: 50%;
  }
`;

const Wrapper = styled.div``;
export default About;
