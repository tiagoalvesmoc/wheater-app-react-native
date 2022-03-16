import styled from "styled-components";
import color from "../../config/Colors";

export const Spacer = styled.View`
  height: ${(props) => props.size || "10px"};
`;

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  background-color: ${color.primary};
  width: 90%;
  height: 200px;
  border-radius: 60px;
  z-index: 4;
  justify-content: space-between;
  margin: 2px;
`;

export const Content = styled.View`
  flex: ${(props) => props.flx || 1};
  flex-direction: ${(props) => props.direction || "column"};

  margin-top: 10px;
  align-items: ${(props) => props.align || "center"};

  padding-left: ${(props) => props.pad || "1px"};
`;

export const Text = styled.Text`
  font-family: "Rajdhani_400Regular";
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.weight || "normal"};
  color: ${color.white};
  margin: 2px;
  padding-left: 5px;
`;

export const Image = styled.Image`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
