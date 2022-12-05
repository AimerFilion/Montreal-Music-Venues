import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdAccountCircle } from "react-icons/md";
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
              <NavLink to="/account">
                {/* <MdAccountCircle size="20px" className="IconAccount" /> */}
                My account
              </NavLink>
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
  justify-content: flex-start;
  background-color: white;
  z-index: 1;
  @media screen and (max-width: 450px) {
    margin-top: 0px;
  }
`;

const SecondWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  position: relative;
  margin: 30px 120px 0 0;
  a {
    font-size: 20px;
    font-weight: 500;
    color: #76ff03;
    text-decoration: none;
    margin-left: 100px;
  }

  @media screen and (max-width: 450px) {
    width: 0;
  }
`;

const HomeStyle = styled.p`
  margin: 30px;
  margin-left: 100px;

  a {
    font-size: 20px;
    font-weight: 500;
    color: #76ff03;
    text-decoration: none;
  }
  @media screen and (max-width: 450px) {
    margin-left: 10px;
  }
`;

const ExploreStyle = styled.div`
  margin: 30px;

  a {
    font-size: 20px;
    font-weight: 500;
    color: #76ff03;
    text-decoration: none;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
  }
`;
const AboutStyle = styled.div`
  margin: 30px;

  a {
    font-size: 20px;
    font-weight: 500;
    color: #76ff03;
    text-decoration: none;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
  }
`;
