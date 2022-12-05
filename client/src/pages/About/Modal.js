import { useState } from "react";
import styled from "styled-components";
import ModalInner from "./ModalInner";
const Modal = ({ toggleModal, children }) => {
  return (
    <>
      <ModalWindow>
        <Close onClick={toggleModal}></Close>
        <ModalInner />
        {children}

        <BG onClick={toggleModal}></BG>
      </ModalWindow>
    </>
  );
};
const ModalWindow = styled.div`
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  background: #fbfbfb;
  box-sizing: border-box;
  padding: 60px;
  max-width: 600px;
  width: calc(100vw - 50px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`;
const BG = styled.div`
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  /* height: 100vh; */
  position: fixed;
  /* width: 100vw; */
  z-index: 2;
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

export default Modal;
