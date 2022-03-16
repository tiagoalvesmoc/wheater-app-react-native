import styled from "styled-components";
import color from "../../config/Colors";

export const Container = styled.View`
  flex: 1;
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) => props.justify || "center"};
`;

export const Spacer = styled.View`
  height: ${(props) => props.size || "10px"};
`;

export const Text = styled.Text`
  font-family: "Rajdhani_400Regular";
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.weight || "normal"};
  color: ${(props) => props.color || "#000"};
`;
export const Loader = styled.ActivityIndicator``;

export const ContainerRender = styled.SafeAreaView`
  margin: 3px;
  width: 100%;
  height: 110px;
  padding: 10px;

  background-color: ${color.primary};
  border-radius: 10px;
`;

export const BoxRender = styled.View`
  flex: 1;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"}; ;
`;

export const TextRender = styled.Text`
  font-family: "Rajdhani_400Regular";
  font-size: ${(props) => props.size || "18px"};
  margin: 2px;
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: center;
`;
