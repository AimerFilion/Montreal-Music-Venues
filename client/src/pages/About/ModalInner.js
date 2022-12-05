import { useState } from "react";
import styled from "styled-components";
import { TfiFaceSmile } from "react-icons/tfi";
import { ImSmile2 } from "react-icons/im";
import Form from "./Form";

const ModalInner = () => {
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [subscribe, setSubscribe] = useState(true);

  const handleSuccess = () => {
    setMsgSuccess(true);
  };

  const handleSubscribe = () => {
    setSubscribe(false);
  };
  return (
    <Container>
      {msgSuccess ? (
        <>
          <Title>We received your message!</Title>
          <Paragraphe>We will answer your message soon! </Paragraphe>
          <ImSmile2 size="50px" color="#76ff03" />
        </>
      ) : (
        <>
          <Title>ANY QUESTIONS?</Title>

          <Form
            handleSuccess={handleSuccess}
            handleSubscribe={handleSubscribe}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  color: #000;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  /* line-height: 0, 4; */
  margin-bottom: 10;
  color: black;
`;
const Paragraphe = styled.p`
  font-size: 16px;
  margin: 20px 0;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export default ModalInner;
