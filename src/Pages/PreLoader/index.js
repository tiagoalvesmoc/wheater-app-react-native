import React from "react";
import { View } from "react-native";

import { Container, Loader, Box } from "./styles";

export default function PreLoader() {
  return (
    <Container source={require("../../img/splash.png")} resizeMode="cover">
      <Box>
        <Loader size="large" color="#E6E8E8" />
      </Box>
    </Container>
  );
}
