
import {  StatusBar, SafeAreaView, View } from 'react-native';
import Miniatura from './src/telas/Miniatura';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Conteudo from './src/mocks/Conteudo';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontSerratRegular" : Montserrat_400Regular,
    "MontSerratBold" : Montserrat_700Bold
  });

  if(!fontCarregada){
    return <View/>
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Miniatura { ...Conteudo } />
    </SafeAreaView>
  );
}


