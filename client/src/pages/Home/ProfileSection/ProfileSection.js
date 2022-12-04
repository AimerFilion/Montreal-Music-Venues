import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SmallShow from "../../../composant/SmallShow";

const ProfileSection = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isLogin, setIsLogin] = useState(false);
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`/user/${user.email}/favorites`)
        .then((res) => res.json())
        .then((data) => {
          setIsFavorite(data.data);
        });
    }
  }, []);

  // do a fetch to check if this user exist in MongoDB, if yes, get their info, if not, create a new user

  if (isLogin) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  } else {
    //
    return (
      <>
        {isAuthenticated && (
          <>
            <Block>
              <p>ACCOUNT</p>
            </Block>
            <Wrapper>
              <ImageProfil src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <LogoutButton />
              <h3>Your favorite show</h3>
              {isFavorite &&
                isFavorite.map((favorite) => {
                  return <SmallShow show={favorite} />;
                })}
            </Wrapper>
          </>
        )}
        {!isAuthenticated && (
          <div>
            <LoginButton />
          </div>
        )}
      </>
    );
  }
};

const Wrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: white; */
  color: #dd2c00;
  /* padding-bottom: 200px; */
  border: green 2px solid;
`;

const ImageProfil = styled.img`
  width: 100px;
  margin-top: 20px;
  border-radius: 50%;
`;

const Block = styled.div`
  padding: 10px;
  /* background-color: #76ff03; */
  height: 170px;
  p {
    color: white;
    font-size: 70px;
    margin-left: 100px;
    margin-top: 80px;
    font-weight: bold;
  }
`;

export default ProfileSection;
