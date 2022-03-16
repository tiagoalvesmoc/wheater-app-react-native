import React from "react";
import color from "../../config/Colors";

import { Container, Text, Box } from "./styles";

export default function ListDays({ response }) {
  return (
    <Container>
      <Box direction="row">
        <Box>
          <Box direction="row">
            <Text color={color.white}>
              {response?.date + " || " + response.city}
            </Text>
          </Box>
          <Box>
            <Text color={color.white} weight="bold">
              {response.description}
            </Text>
          </Box>
        </Box>
        <Box align="center" justify="center">
          <Text color={color.white} weight="bold">
            {response.min}°C ~ {response.max}°C
          </Text>
          <Text>{response.max}</Text>
        </Box>
      </Box>
    </Container>
  );
}
