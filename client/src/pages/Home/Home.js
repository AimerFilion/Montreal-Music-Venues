import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdPlace } from "react-icons/md";
const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("/shows-casa")
      .then((res) => {
        return res.json();
      })
      .then((shows) => {
        console.log(shows.data);
        setShows(shows.data);
      });
  }, []);

  const casa = Object.values(shows);
  console.log(casa);

  return (
    <>
      <Global>
        <Header>EVENTS OF THE WEEK</Header>

        {casa.map((show) => {
          return (
            <>
              <div></div>
              <Wrapper>
                <Image src={show.img} />
                <InfoShow>
                  <Title>{show.title}</Title>
                  <Address>
                    <MdPlace color="#76ff03" size="23px" />
                    {show.address}
                  </Address>
                  {/* <li>{show.date}</li> */}
                </InfoShow>
              </Wrapper>
            </>
          );
        })}
      </Global>
    </>
  );
};

const Header = styled.h2`
  color: #76ff03;
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 80px 60px;
  color: white;
  column-gap: -100px;
  row-gap: 10px;
  border-bottom: solid 1px #484848;
  margin-top: 50px;
`;

const Title = styled.li`
  font-size: 25px;
  color: white;
  font-weight: bold;
  /* margin-top: 10px; */
`;
const Address = styled.li`
  font-size: 18px;
  font-weight: lighter;
  color: white;
  margin-top: 40px;
`;

const InfoShow = styled.ul`
  color: white;
  font-size: 15px;
  list-style: none;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

const Global = styled.body`
  max-width: 100vh;
  margin-left: 200px;
  margin-top: 100px;
`;

export default Home;
