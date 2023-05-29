import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [value, setValue] = useState("");
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      <MainContainer>
        <TopContainer>
          <Sign
            onClick={() => {
              handleclick();
            }}
          >
            Sign up
          </Sign>
          <Login>Login</Login>
        </TopContainer>
        <BottomContainer>
          <Home>Airbnb your home</Home>
          <Help>help</Help>
        </BottomContainer>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  position: absolute;
  top: 74px;
  right: 52px;
  border: 1px solid #dddd;
  z-index: 1;
  border-radius: 10px;
  width: 180px;
  display: flex;
  borede-radius: 6px;
  height: 140px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  flex-direction: column;
  justify-content: space-around;
  padding: 6px 0px;
`;
const TopContainer = styled.div`
  border-bottom: 1px solid #dddd;
  padding-left: 15px;
`;
const Sign = styled.p``;
const Login = styled.p`
  margin: 10px 0px;
`;
const BottomContainer = styled.div`
  padding-left: 15px;
`;
const Home = styled.p``;
const Help = styled.p`
  margin-top: 10px;
`;
