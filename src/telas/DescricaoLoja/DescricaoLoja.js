import React from "react";
import { StyleSheet } from "react-native";

import Texto from "../../componentes/Texto";

export default function DescricaoLoja({descricaoLoja, preco}) {
  return (
    <>
      <Texto style={estilos.descricaoLoja}>{ descricaoLoja }</Texto>
      <Texto style={estilos.preco}>{ preco }</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  nomeLoja: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 0,
    fontWeight: "bold",
  },
  descricaoLoja: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    marginTop:20
  },
  preco: {
    color: "#FF4500",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "Bold",
  },
});
