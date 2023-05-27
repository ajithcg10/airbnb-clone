import React, { useState } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import LoginPAGE from "./LoginPage";

export default function Header() {
  const [isopen, setIsOPen] = useState(false);
  let serach = [" Anywhere", "Any week", "Add guests"];
  const style = { color: "#ffff" };

  return (
    <div>
      <MainContainer>
        <Wrapper className="wrapper">
          <H1>
            <Logo src={require("../src/assets/image/Airbnb-logo.png")} />
          </H1>
          <SerachContainer>
            <Box>
              {serach.map((item) => {
                return <Item>{item}</Item>;
              })}
            </Box>

            <SerachIcon>
              <FaSearch style={style} />
            </SerachIcon>
          </SerachContainer>
          <LeftMenu>
            <Host>Airbnb your home</Host>
            <LanguageContainer>
              <MdLanguage />
            </LanguageContainer>
            <LoginSection
              onClick={() => {
                setIsOPen(!isopen);
              }}
            >
              <MenuContianer>
                <RiMenuLine />
              </MenuContianer>
              <ProfileContainer>
                <CgProfile />
              </ProfileContainer>
            </LoginSection>
          </LeftMenu>
        </Wrapper>
        {isopen && <LoginPAGE />}
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  border-bottom: 1px solid #dddddd;
  width: 100%;
  // position: relative;
  z-index: -1;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  width: 10%;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const SerachContainer = styled.div`
  border: 1px solid #dddddd;
  border-radius: 26px;
  width: 30%;
  padding: 4px 7px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: none;
    transition: box-shadow 0.2s ease;
  }
`;
const Box = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;
const Item = styled.li`
  border-right: 1px solid #ddd;
  list-style: none;
  padding-right: 10px;
  &:last-child {
    border-right: none;
  }
`;

const SerachIcon = styled.div`
  padding: 10px;
  background-color: #ff385c;
  border-radius: 50%;
`;
const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;
const Host = styled.p`
  margin-right: 10px;
  color: #222222;
  font-size: 16px;
  padding: 10px;
  transition: box-shadow 0.2s ease;
  &:hover {
    background-color: #f7f7f7;
    border-radius: 21px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
}
  }
`;
const LanguageContainer = styled.div`
  margin-right: 10px;
  padding: 8px 10px;

  transition: box-shadow 0.2s ease;
  &:hover {
    background: #f7f7f7;
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
  }
`;

const LoginSection = styled.div`
     display: flex;
    padding: 9px 16px 9px 16px;
    border: 1px solid #dddddd;
    border-radius: 20px;
}
`;
const MenuContianer = styled.div`
  margin-right: 7px;
`;
const Menu = styled.div``;
const ProfileContainer = styled.div``;
const Profile = styled.div``;
