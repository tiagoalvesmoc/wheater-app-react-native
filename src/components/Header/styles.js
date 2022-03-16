import styled from "styled-components";
import color from "../../config/Colors";

export const Container = styled.SafeAreaView`
  margin-top: 10%;
  width: 100%;
  height: 80px;
  flex-direction: row;
`;

export const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const IconBox = styled.View`
  flex-direction: row;
`;
export const IconBoxButton = styled.TouchableOpacity``;

export const Icons = styled.Image`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
export const Text = styled.Text`
  font-family: "Rajdhani_400Regular";
  font-size: ${(props) => props.size || "18px"};
  margin: 2px;
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || "normal"};
`;
