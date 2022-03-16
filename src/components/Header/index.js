import React from "react";
import color from "../../config/Colors";

import { Platform, ScrollView } from "react-native";

import { Container, Box, Text, IconBox, Icons, IconBoxButton } from "./styles";

export default function Header() {
  return (
    <Container>
      <Box>
        <Text color={color.primary} weight="bold" size="20px">
          Hello Tiago
        </Text>
        <Text>Descubra o clima!</Text>
      </Box>

      <Box>
        <IconBox>
          <IconBoxButton>
            <Icons source={require("../../assets/icons/lupa.png")} />
          </IconBoxButton>
          <IconBoxButton>
            <Icons source={require("../../assets/icons/globe.png")} />
          </IconBoxButton>
        </IconBox>
      </Box>
    </Container>
  );
}
