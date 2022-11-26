import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Explore = () => {
  return (
    <>
      <Wrapper>
        <TitleM>Montreal</TitleM> <TitleT>Tiohtià:ke</TitleT>
      </Wrapper>
      <Genre>
        <NavLink to="/genre">Genre</NavLink>
      </Genre>
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
  color: #fafafa;
  font-size: 100px;
`;

const TitleM = styled.h2`
  margin-top: 120px;
  margin-left: 100px;
  color: #76ff03;
  font-size: 100px;
`;

const Genre = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    background-color: #76ff03;
    padding: 15px 20px 15px 20px;
    border-radius: 20px;
    margin-right: 100px;
    margin-top: 10px;
    text-decoration: none;
    color: black;
  }
`;
export default Explore;
