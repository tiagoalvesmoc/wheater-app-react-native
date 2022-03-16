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
  justify-content: flex-end;

  width: ${(props) => props.width || 350};
  height: ${(props) => props.height || 355};
  border-radius: 30;
  margin-bottom: 10;
`;

export const Loader = styled.ActivityIndicator``;
