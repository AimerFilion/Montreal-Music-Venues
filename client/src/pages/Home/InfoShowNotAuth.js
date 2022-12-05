import styled from "styled-components";
import { MdPlace } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
const InfoShowNotAuth = ({ img, title, address, date, event_id, ticket }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Date>{date}</Date>
      <Wrapper>
        <Image src={img} />
        <Infoshow>
          {/* <NavLink to={`./event/${event_id}`}> */}
          <Title>{title}</Title>
          {/* </NavLink> */}
          <Address>
            <MdPlace color="#76ff03" size="23px" />
            {address}
          </Address>
          <Ticket href={ticket} target="_blank">
            <span>
              <FaTicketAlt color="#76ff03" size="30px" />
            </span>
          </Ticket>
        </Infoshow>
      </Wrapper>
    </>
  );
};

const Infoshow = styled.ul`
  color: white;
  font-size: 15px;
  list-style: none;

  @media screen and(max-width: 450px) {
    font-size: 8px;
  }
`;
const Title = styled.li`
  font-size: 20px;
  color: white;
  font-weight: 600;
  /* margin-top: 10px; */
  text-decoration: none;

  @media screen and(max-width: 450px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
const Address = styled.div`
  font-size: 12px;
  font-weight: lighter;
  color: white;
  margin: 30px 0 12px 0;
  text-decoration: none;
  a:-webkit-any-link {
    font-size: 17px;
    text-decoration: none;
    font-weight: 600;
    position: absolute;
    padding: 7px 0 0px 0;
    text-transform: uppercase;
  }
  a:hover {
    text-decoration: underline #76ff03;
  }
  a:visited {
    color: #76ff03;
  }
  @media screen and(max-width: 450px) {
    font-size: 8px;
  }
`;

const Ticket = styled.a`
  :hover {
    color: #ff7043;
  }
  @media screen and(max-width: 450px) {
    size: 8px;
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 23px;
  color: #76ff03;
  margin-left: 80px;
  span {
    padding-right: 10px;
  }
  @media screen and(max-width: 450px) {
    font-size: 15px;
    margin-left: 10px;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 200px;

  @media screen and(max-width: 450px) {
    width: 150px;
    height: 100px;
    font-size: 15px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 80px 80px 50px;
  color: white;
  padding: 30px 20px 0 30px;
  /* column-gap: -100px; */
  row-gap: 10px;
  border: solid 1px #76ff03;
  /* margin-top: 50px; */
  margin: 30px 80px 30px 80px;

  @media screen and (max-width: 450px) {
    margin: 30px 0px 30px 0;
  }
`;

export default InfoShowNotAuth;
