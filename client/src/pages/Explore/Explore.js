import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Explore = ({ venues, genre }) => {
  return (
    <>
      <Wrapper>
        <TitleM>
          Montreal <TitleT>Tiohtià:ke</TitleT>
        </TitleM>
      </Wrapper>
      <Menu>
        <Genre>
          <NavLink to="/genre">Genre</NavLink>
        </Genre>
        <Venues>
          <NavLink to="/venues">Venues</NavLink>
        </Venues>
      </Menu>
    </>
  );
};

const Wrapper = styled.div`
  align-items: flex-start;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 400px;
`;
const TitleT = styled.h2`
  margin-left: 100px;
  color: black;
  font-size: 100px;
`;

const TitleM = styled.h2`
  /* margin-top: 120px; */
  margin-left: 100px;
  color: #76ff03;
  font-size: 100px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: -20px;
`;

const Genre = styled.div`
  a {
    border: solid 2px #76ff03;
    padding: 15px 20px 15px 20px;
    border-radius: 20px;
    margin-right: 100px;
    margin-top: 10px;
    text-decoration: none;
    color: white;
  }
`;

const Venues = styled.div`
  a {
    border: solid 2px #76ff03;
    padding: 15px 20px 15px 20px;
    border-radius: 20px;
    margin-right: 100px;
    margin-top: 10px;
    text-decoration: none;
    color: white;
  }
`;
export default Explore;
