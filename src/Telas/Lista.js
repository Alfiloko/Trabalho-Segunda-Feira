import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

function Lista({ route }) {
  const { itensAdicionados } = route.params;
  const [listaAtualizada, setListaAtualizada] = useState(itensAdicionados);

  useEffect(() => {
    setListaAtualizada(itensAdicionados);
  }, [itensAdicionados]);

  const handleDelete = (index) => {
    const updatedItens = [...listaAtualizada];
    updatedItens.splice(index, 1);
    setListaAtualizada(updatedItens);
  };

  return (
      <View style={estilos.cabeca}>
        <Text style={estilos.titulo}>Itens Adicionados:</Text>
        <FlatList
          data={listaAtualizada}
          renderItem={({ item, index }) => (
            <View style={estilos.itemContainer}>
              <Text style={estilos.item}>{item}</Text>
              <TouchableOpacity
                style={estilos.button}
                onPress={() => handleDelete(index)}
              >
                <Text style={estilos.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );
}

const estilos = StyleSheet.create({

  cabeca: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: 'grey',
    flex:1,
  },
  titulo: {
    fontSize: 24,
    marginTop: 50,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#191970',
  },
  itemContainer: {
    width: '90%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#FF8C00',
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    color: '#191970',
    flex: 1,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Lista;
