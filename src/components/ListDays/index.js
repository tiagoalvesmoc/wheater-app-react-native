import React from "react";

import { Container, Content, Text, Image, Spacer } from "./styles";

export default function ListDays({ response }) {
  return (
    <Container activeOpacity={0.8}>
      <Content flx={2}>
        <Content>
          <Text size="18px">
            {response.city} {response.forecast[0].date}{" "}
            {response.forecast[0].weekday}
          </Text>

          <Text size="18px" numberOfLines={1} weight="bold">
            {response.description}
          </Text>
        </Content>
        <Spacer size="10px" />
        <Content direction="row">
          <Image
            source={require(`../../assets/icons/wind.png`)}
            width="30px"
            height="30px"
          />

          <Text weight="bold" size="18px">
            {response.wind_speedy}{" "}
          </Text>
        </Content>
      </Content>

      <Content>
        <Text>
          {response.forecast[0].min}°C ~ {response.forecast[0].max}°C
        </Text>
      </Content>
    </Container>
  );
}
