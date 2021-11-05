import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';

export default function App() {
  const moedas = [
    require('./imagem/moeda_p1.jpg'), // cara
    require('./imagem/moeda_p7.jpg'), // coroa
    require('./imagem/moeda_p1.jpg'),
    require('./imagem/moeda_p2.jpg'),
    require('./imagem/moeda_p3.jpg'),
    require('./imagem/moeda_p4.jpg'),
    require('./imagem/moeda_p5.jpg'),
    require('./imagem/moeda_p6.jpg'),
    require('./imagem/moeda_p7.jpg'),
    require('./imagem/moeda_p8.jpg'),
    require('./imagem/moeda_p9.jpg'),
    require('./imagem/moeda_p10.jpg'),
    require('./imagem/moeda_p11.jpg'),
    require('./imagem/moeda_p12.jpg')
  ]
  let iMoeda = 0;
  const maxGiros = 20;

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp){
    function tempo(ms){
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    await tempo(tmp)
  }

  async function girarMoeda(){
    iMoeda = 2
    for(let i=0; i<(maxGiros*13); i++){
      iMoeda++
      if(iMoeda>13){
        iMoeda = 2
      }
      setMoedaAtual(moedas[iMoeda])
      await espera(10)
    }
    let res = Math.floor(Math.random()*10)+1;
    if(res <= 5){
      res = 0
    } else {
      res = 1
    }
    setMoedaAtual(moedas[res])
  }

  return (
    <SafeAreaView style={estilos.container} >
      <View>
        <Text>Cara ou Coroa</Text>
        <Image source={moedaAtual}/>
        <Button
          title="Girar"
          onPress={()=>{girarMoeda()}}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    backgroundColor: "#fff",
    color: 'black'
  }
  
});  
