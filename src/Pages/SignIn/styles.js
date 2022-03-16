import React from "react";
import styled from "styled-components";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #4a489a;
`;

export const Box = styled.View`
  align-items: center;

  background-color: #fff;
  width: ${(props) => props.width || 450};
  height: ${(props) => props.height || 355};
  border-radius: 30;
  margin-bottom: 10;
`;
export const BoxContent = styled.View`
  flex: 1;
  margin: 10px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: ${(props) => props.color || "#000"};
  text-align: center;
  font-family: "Rajdhani_700Bold";
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || "#000"};
  text-align: center;
  font-family: "Rajdhani_300Light";
`;

export const Button = styled.TouchableOpacity.attrs((props) => {
  props;
})`
  background-color: #6151c3;
  align-items: center;
  justify-content: center;
  border-radius: 30;
  width: 264;
  height: 60;
`;
