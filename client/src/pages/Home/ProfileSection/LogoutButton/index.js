import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Button>
  );
};

const Button = styled.button`
  background-color: #76ff03;
  padding: 15px 18px 15px 18px;
  border-radius: 20px;
  margin-right: 70px;
  text-decoration: none;
  color: white;

  :hover {
    background-color: white;
    color: #76ff03;
  }
`;

export default LogoutButton;
