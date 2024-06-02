import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

function MenuLista({ navigation }) {
  const [item, setItem] = useState('');
  const [itensAdicionados, setItensAdicionados] = useState([]);

  const adicionarItem = () => {
    setItensAdicionados([...itensAdicionados, item]);
    setItem('');
  };

  const enviarParaLista = () => {
    navigation.navigate('Lista', { itensAdicionados });
  };

  return (
    <View style={estilos.cabeca} >
        <View style={estilos.input}> 
          <TextInput style={estilos.textoInput} value={item} onChangeText={setItem} placeholder="Digite um item" />
        </View>
        <View style={estilos.botao}>
          <Button title="Adicionar" style={estilos.textoAdicionar} color="#191970" onPress={adicionarItem} />
          <View style={estilos.espaco}/>
          <Button title="Ir para Lista" style={estilos.textoEnviar} color="#191970" onPress={enviarParaLista} />
        </View>
</View>
  );
}

const estilos = StyleSheet.create({
  cabeca: {
    backgroundColor:'grey',
    flex:1,
  },
  input: {
    paddingTop: 90,
    paddingBottom: 30,
  } , 
  textoInput: {
    borderColor: '#FF8C00',
    borderWidth: 2,
    fontSize: 20,
    margin: 30,
    padding: 10,
  },
  botao: {
    margin: 70,
  },
  espaco: {
    margin: 10,
  }
});

export default MenuLista;
