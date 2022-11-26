import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <div>
        <Wrapper>
          <HomeStyle>
            <NavLink to="/">Home</NavLink>
          </HomeStyle>
          <ExploreStyle>
            <NavLink to="/explore">Explore</NavLink>
          </ExploreStyle>
          <AboutStyle>
            <NavLink to="/about">About</NavLink>
          </AboutStyle>

          <SecondWrapper>
            <div>
              <NavLink to="/account">My account</NavLink>
            </div>
          </SecondWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  background-color: #000000;
  z-index: 1;
`;

const SecondWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  position: relative;
  margin: 30px;
  a {
    font-size: 20px;
    color: #76ff03;
    text-decoration: none;
  }
`;

const HomeStyle = styled.p`
  margin: 30px;

  a {
    font-size: 20px;
    color: #76ff03;
    text-decoration: none;
  }
`;

const ExploreStyle = styled.div`
  margin: 30px;

  a {
    font-size: 20px;
    color: #76ff03;
    text-decoration: none;
  }
`;
const AboutStyle = styled.div`
  margin: 30px;

  a {
    font-size: 20px;
    color: #76ff03;
    text-decoration: none;
  }
`;
