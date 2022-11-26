import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const ProfileSection = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;

  useEffect(() => {
    if (isAuthenticated) {
      // do a fetch to check if this user exist in MongoDB, if yes, get their info, if not, create a new user
    }
  });

  return (
    <>
      <ButtonsPosition>
        <LoginButton />
        <LogoutButton />
      </ButtonsPosition>
      {isAuthenticated && (
        <Wrapper>
          <ImageProfil src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Wrapper>
      )}
    </>
  );
};

const ButtonsPosition = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  /* width: 100vw; */
  justify-content: center;
  align-items: center;
  border: solid 3px #76ff03;
  color: #dd2c00;
  margin: 50px 600px 0px 600px;
  padding-bottom: 200px;
`;

const ImageProfil = styled.img`
  width: 100px;
  margin-top: 20px;
`;

export default ProfileSection;
