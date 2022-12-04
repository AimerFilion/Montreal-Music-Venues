import styled from "styled-components";
import { MdPlace } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
const InfoShowNotAuth = ({ img, title, address, date, event_id }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Date>{date}</Date>
      <Wrapper>
        <Image src={img} />
        <Infoshow>
          <NavLink to={`./event/${event_id}`}>
            <Title>{title}</Title>
          </NavLink>
          <Address>
            <MdPlace color="#76ff03" size="23px" />
            {address}
          </Address>
        </Infoshow>
      </Wrapper>
    </>
  );
};

const Infoshow = styled.ul`
  color: white;
  font-size: 15px;
  list-style: none;
`;
const Title = styled.li`
  font-size: 18px;
  color: white;
  font-weight: bold;
  /* margin-top: 10px; */
  text-decoration: none;
`;
const Address = styled.li`
  font-size: 12px;
  font-weight: lighter;
  color: white;
  margin-top: 30px;
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 23px;
  color: #76ff03;
  /* padding-bottom: 20px; */
  border-bottom: #484848 1px solid;
`;
const Image = styled.img`
  width: 300px;
  height: 200px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 80px 60px;
  color: white;
  column-gap: -100px;
  row-gap: 10px;
  /* border-bottom: solid 1px #484848; */
  margin-top: 50px;
`;

const Button = styled.div`
  color: #76ff03;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  left: 200px;
  margin: 0px 0px 0px 20px;
  text-decoration: none;
  :hover {
    color: white;
  }
`;

export default InfoShowNotAuth;
