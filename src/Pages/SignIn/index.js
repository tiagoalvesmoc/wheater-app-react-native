import React from "react";
import color from "../../config/Colors";

import { Container, Box, BoxContent, Title, SubTitle, Button } from "./styles";

export default function SignIn() {
  return (
    <Container source={require("../../img/bg.png")} resizeMode="cover">
      <Box>
        <BoxContent>
          <Title>
            Explore o mapa global das condições do vento, clima e oceano
          </Title>
          <SubTitle color="#000">
            Planejar sua viagem fica mais fácil com o aplicativo Weather. voçe
            pode ver instantaneamente tudo sobre o clima em poucos segundos
          </SubTitle>
          <Button activeOpacity={0.8}>
            <Title color="#fff">Começar</Title>
          </Button>

          <SubTitle color="#000">
            Já tem uma conta ?
            <SubTitle color={color.primary} size="17px">
              {" "}
              Log in
            </SubTitle>{" "}
          </SubTitle>
        </BoxContent>
      </Box>
    </Container>
  );
}
