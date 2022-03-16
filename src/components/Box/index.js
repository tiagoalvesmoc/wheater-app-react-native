import React from "react";

import { Container, Content, Text, Image, Spacer } from "./styles";

export default function Box({ response }) {
  return (
    <Container activeOpacity={0.8}>
      <Content flx={2}>
        <Content>
          <Text>{response.city}</Text>
          <Text size="18px" adjustsFontSizeToFit={true} numberOfLines={1}>
            {response.forecast[0].date} {response.forecast[0].weekday}
          </Text>
          <Text
            size="28px"
            weight="bold"
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {response.description}
          </Text>
        </Content>
        <Spacer size="40px" />
        <Content direction="row">
          <Image
            source={require(`../../assets/icons/wind.png`)}
            width="30px"
            height="30px"
          />
          <Text> </Text>
          <Text>{response.wind_speedy} </Text>
        </Content>
      </Content>

      <Content>
        <Image
          source={require(`../../assets/icons/chuva.png`)}
          width="150px"
          height="150px"
        />
        <Text>
          {response.forecast[0].min}°C ~ {response.forecast[0].max}°C
        </Text>
        <Spacer size="30px" />
      </Content>
    </Container>
  );
}
