import React from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';

import Texto from '../../componentes/Texto';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cabecalho({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>       
    </>;
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 876 / 2000 * width,
        marginTop:40      
    },
    titulo: {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        backgroundColor:'#000000',
        paddingTop:16,
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
        fontWeight:'bold'
    }
})