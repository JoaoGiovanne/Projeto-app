import React from "react";
import { StyleSheet, Image, View } from "react-native";

import Texto from "../../componentes/Texto";

export default function NomeLoja({ logoLoja, tituloLoja }) {
  return (
    <>
      <View style={ estilos.logoNome }>
        <Image source={ logoLoja } style={ estilos.logo } />
        <Texto style={estilos.nomeLoja}>{ tituloLoja }</Texto>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  expositor: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  logoNome: {
    flexDirection: "row",
  },
  nomeLoja: {
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 12,
    paddingStart: 12,
    marginTop: 15,
    fontWeight: "bold",
  },
});
