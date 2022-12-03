import styled from "styled-components";
import { MdPlace } from "react-icons/md";
import { GiLockedHeart } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const InfoShow = ({
  img,
  title,
  address,
  date,
  event_id,
  favoriteEventData,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [favoriteEvent, setFavoriteEvent] = useState(false);

  const addFavoriteEvent = (e) => {
    console.log(event_id);
    e.preventDefault();
    fetch("/update-favorites", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, event_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoriteEvent(true);
      });
  };

  const findEvent = favoriteEventData.favorites.find((event) => {
    return event._id === event_id;
  });

  return (
    <>
      <Date>{date}</Date>
      <div></div>
      <Wrapper>
        <Image src={img} />
        <Infoshow>
          <Title>{title}</Title>
          <Address>
            <MdPlace color="#76ff03" size="23px" />
            {address}
          </Address>
        </Infoshow>
      </Wrapper>
      {isAuthenticated && !favoriteEvent && findEvent.isFavorite === false && (
        <Button onClick={addFavoriteEvent}>
          <GiLockedHeart size="20px" />
        </Button>
      )}
      {!isAuthenticated && null}
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
export default InfoShow;
