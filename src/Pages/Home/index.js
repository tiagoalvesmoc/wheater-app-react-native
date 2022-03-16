import React, { useEffect, useState } from "react";

import * as Animatable from "react-native-animatable";
import { FlatList, View } from "react-native";

import { Platform, ScrollView } from "react-native";
import * as Location from "expo-location";

import Header from "../../components/Header";
import Box from "../../components/Box";
import color from "../../config/Colors";
import ListDays from "../../components/ListDays";

import api from "../../config/api";
import axios from "axios";

import {
  Container,
  ContainerRender,
  BoxRender,
  TextRender,
  Spacer,
  Text,
  Loader,
} from "./styles";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [transition, setTransition] = useState("bounceInUp");

  const [response, setResponse] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Weather necessita obter sua localização,para obter uma melhor experiencia."
        );
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      await setLocation(loc.coords);

      await axios
        .get(
          `https://api.hgbrasil.com/weather?key=509b5f3c&lat=${location?.latitude}&lon=${location?.longitude}&user_ip=""`
        )
        .then(async (res) => {
          await setResponse(res.data.results);
          await setForecast(response.forecast);
          setLoader(false);
          console.log(res.data.results);
        })
        .catch((err) => {});
    })();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.hgbrasil.com/weather?key=509b5f3c&lat=${location?.latitude}&lon=${location?.longitude}&user_ip=""`
  //     )
  //     .then((res) => {
  //       setResponse(res.data.results);
  //       setForecast(response.forecast);
  //       setLoader(false);
  //       console.log(res.data.results);
  //     })
  //     .catch((err) => {});
  // }, []);

  return (
    <>
      {loader ? (
        <Container justify="flex-start">
          <Spacer size="30px" />
          <Header />
          <Container justify="flex-end" align="center">
            <Loader color={color.primary} size="large" />
            <Text color={"#000"} size="18px">
              Carregando Informações
            </Text>
          </Container>
          <Spacer size="30px" />
        </Container>
      ) : (
        <Container justify="flex-start">
          <Spacer size="30px" />
          <Header />
          <Spacer size="20px" />

          <Animatable.View animation="fadeInDownBig">
            <Box response={response} />
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig">
            <Box response={response} />
          </Animatable.View>
        </Container>
      )}
    </>
  );
}
