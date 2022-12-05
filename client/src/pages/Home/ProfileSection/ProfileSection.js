import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SmallShow from "../../../composant/SmallShow";
import { BsEmojiSmile } from "react-icons/bs";

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
              <p>
                HELLO <BsEmojiSmile /> {user.name} <LogoutButton />
              </p>
            </Block>

            <Menu>
              <p>YOUR FAVE EVENTS</p>
            </Menu>
            {/* <Wrapper>
              <ImageProfil src={user.picture} alt={user.name} />
              <p>{user.email}</p>
            </Wrapper> */}
            {isFavorite &&
              isFavorite.map((favorite) => {
                return <SmallShow show={favorite} />;
              })}
          </>
        )}
        {!isAuthenticated && (
          <div>
            <Block>
              <p>LOGIN</p>
            </Block>
            <LoginButton />
          </div>
        )}
      </>
    );
  }
};

const Wrapper = styled.div`
  max-width: 500px;
  text-align: center;
  color: #dd2c00;
  /* padding-bottom: 200px; */
  button {
    margin: 20px 5px 0 0;
  }
`;

const ImageProfil = styled.img`
  width: 100px;
  margin-top: 20px;
  border-radius: 50%;
`;

const Block = styled.div`
  padding: 10px;
  background-color: white;
  height: 170px;
  p {
    color: black;
    font-size: 50px;
    margin-left: 100px;
    margin-top: 80px;
    font-weight: bold;
  }
`;

const Menu = styled.div`
  padding: 30px;
  background-color: #dd2c00;
  height: 40px;
  p {
    color: white;
    font-size: 25px;
    margin: 0 0 0px 100px;
    font-weight: bold;
  }
`;

export default ProfileSection;
