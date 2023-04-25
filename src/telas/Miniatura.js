import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cabecalho from './Cabecalho/Cabecalho';
import DescricaoLoja from './DescricaoLoja/DescricaoLoja';
import NomeLoja from './NomeLoja/NomeLoja';

export default function Miniatura({ topo, nomeLoja, desc }) {
    return <>
            <Cabecalho { ...topo } />
            <View style={ estilos.expositor } >
                <NomeLoja { ...nomeLoja } />
                <DescricaoLoja { ...desc }/>
            </View>
    </>;
}

const estilos = StyleSheet.create({
    expositor: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    }
})