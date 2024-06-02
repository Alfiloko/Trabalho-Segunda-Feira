import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, Pressable, ScrollView, Alert } from "react-native";
import logo from '../../assets/logo.png';

const Login = ({ navigation }) => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (cpf === 'Lucas' && senha === '123') {
            navigation.navigate('MenuLista');
        } else {
            Alert.alert('Erro de Login', 'Usuário ou senha incorretos');
        }
    };

    return ( 
        <ScrollView contentContainerStyle={estilos.container}>
            <Image source={logo} style={estilos.imagem} resizeMode="contain"/>
            <View style={estilos.corpo}>
                <Text style={estilos.login}>Login:</Text>
                <TextInput 
                    style={estilos.input} 
                    placeholder="Digite aqui seu CPF" 
                    onChangeText={setCpf} 
                    value={cpf} 
                />
                <Text style={estilos.login}>Senha:</Text>
                <TextInput 
                    style={estilos.input} 
                    placeholder="Digite aqui sua senha" 
                    secureTextEntry={true} 
                    onChangeText={setSenha} 
                    value={senha} 
                />
                <Pressable style={estilos.botao} onPress={handleLogin}>
                    <Text style={estilos.textobotao}>Logar</Text>
                </Pressable>
                <Pressable style={estilos.cadastro}>
                    <Text style={estilos.textocadastro}>Cadastrar-se</Text>
                </Pressable>
                <Pressable style={estilos.troca}>
                    <Text style={estilos.textotroca}>Esqueci a senha</Text>
                </Pressable>
            </View>
        </ScrollView> 
    );
}

const estilos = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    imagem: {
        width: "100%",
        height: 200,
        marginBottom: 20,
    },
    corpo: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    login: {
        fontSize: 18,
        paddingLeft: 5,
        color: '#191970',
        marginBottom: 5,
    },
    input: {
        borderColor: '#FF8C00',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#191970',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textobotao: {
        color: 'white',
        fontSize: 16,
    },
    cadastro: {
        alignItems: 'center',
        marginTop: 15,
    },
    textocadastro: {
        color: '#191970',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    troca: {
        alignItems: 'center',
        marginTop: 10,
    },
    textotroca: {
        color: '#191970',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default Login;
