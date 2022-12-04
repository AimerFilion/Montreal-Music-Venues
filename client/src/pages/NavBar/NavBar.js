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
                <MdAccountCircle size="20px" className="IconAccount" />
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
  max-width: 100vw;
  max-height: 100vh;
  justify-content: flex-start;
  background-color: white;
  z-index: 1;
`;

const SecondWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  position: relative;
  margin: 20px;
  a {
    font-size: 15px;
    color: #76ff03;
    text-decoration: none;
    margin-left: 100px;
  }
  .IconAccount {
    margin-right: 20px;
    position: relative;
    top: 6px;
  }
`;

const HomeStyle = styled.p`
  margin: 30px;
  margin-left: 100px;

  a {
    font-size: 15px;
    color: #76ff03;
    text-decoration: none;
  }
`;

const ExploreStyle = styled.div`
  margin: 30px;

  a {
    font-size: 15px;
    color: #76ff03;
    text-decoration: none;
  }
`;
const AboutStyle = styled.div`
  margin: 30px;

  a {
    font-size: 15px;
    color: #76ff03;
    text-decoration: none;
  }
`;
