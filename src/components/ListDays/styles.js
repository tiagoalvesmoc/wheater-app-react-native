import styled from "styled-components";
import color from "../../config/Colors";

export const Container = styled.SafeAreaView`
  margin: 3px;
  width: 90%;
  height: 80px;
  padding: 10px;

  background-color: ${color.primary};
  border-radius: 10px;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"}; ;
`;

export const Text = styled.Text`
  font-family: "Rajdhani_400Regular";
  font-size: ${(props) => props.size || "18px"};
  margin: 2px;
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: center;
`;
