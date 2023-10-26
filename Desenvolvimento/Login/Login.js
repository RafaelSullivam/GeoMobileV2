import React, { useRef, useState, Component, useEffect, Linking } from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    ImageBackground,
    TextInput,
    Alert
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'; // npm i axios
import Conexao from "../Conexao/conexao";
import log from "../Variaveis Globais/variaveisGlobais"
import nivel from "../Variaveis Globais/variaveisGlobais"
import NetInfo from "@react-native-community/netinfo"
import { openBrowserAsync } from 'expo-web-browser';
const LOGIN = (props) => {

    const mensagemDadosIncorretos = () =>
        Alert.alert(
            "Erro ao Logar",
            "Dados Incorretos",
            [

                { text: "OK", onPress: () => setAbrirLogin(true) }
            ],
            { cancelable: true }
        );
    const mensagemAtualizar = () =>
        Alert.alert(
            "",
            "A uma nova Atualização",
            [
                { text: "OK", onPress: () => openBrowserAsync("http://34.138.14.62/app/GeoMobileV2.apk") }

            ],
            { cancelable: true }
        );

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [abrir, setAbrir] = useState(false);
    const [abrirLogin, setAbrirLogin] = useState(false);
    const [connState, setConnState] = useState(0);
    const [loading, setLoading] = useState(false)
    const [atualiza, setAtualiza] = useState(false)

    const Stack = createStackNavigator();


    const Abritela = (onPress = () => props.navigation.navigate('Home'))
    api = Conexao.api
  
    async function login() {
        console.warn(api)


        const obj = { usuario, senha };
        const res = await axios.post(this.api + 'Login.php ', obj);

        if (res.data.success === 'Dados Incorretos!') {
            mensagemDadosIncorretos();

        } else {
            nivel.nivel = res.data.nivel
            log.login = res.data.login
            Abritela();
            setAbrirLogin(false);
            limparCampos()
            console.log(nivel.nivel,log.login)
        }
    }
    function limparCampos() {
        setSenha('')
    }
    async function getItem() {

        const res = await axios.get(this.api + 'ListaLogin.php?');

        console.log(res.data.result)

        if (res.data.success === false) {
            falha();

        }

    };
    async function Atuali() {

        const res = await axios.get(this.api + 'buscarAtualizacao.php?');

        console.log(res.data)
        if (res.data.success === true) {

            if (res.data.result[0].rev === "9") {
                getItem()
            } else {
                //mensagemAtualizar()
                setAtualiza(true)
                setAbrirLogin(false)
            }

        } else {
            getItem()
        }
    };
    function Buscardados() {
        if (connState.isConnected === true) {
            getItem()
            Atuali()
        } else {


        }

    };

    useEffect(() => {
        // DeleteBancoSQlite()

        NetInfo.fetch().then(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });

        const unsubscribe = NetInfo.addEventListener(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });
        //Buscardados()
        Atuali()
        return () => {
            unsubscribe();
        };

    }, []);
    return (
        <SafeAreaView>
            <View >
                {loading == true ? <Modal onRequestClose={() => null} visible={true}>
                    <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                            <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                            <ActivityIndicator size="large" />
                        </View>
                    </View>
                </Modal>
                    : <Text />}
                {atualiza == true ? <Modal
                    animationType="slide"
                    transparent={false}
                    visible={true}
                >
                    <SafeAreaView style={styles.modal}>



                        <View style={styles.modalHeader}>

                            <Text style={styles.textoModal1}>A uma nova Atualização do GeoMobile !</Text>

                        </View>


                        <View style={styles.modalHeader12}>

                            <Text style={styles.textoModal2}>Versão 1.0.9</Text>

                        </View>
                        <Animatable.View
                            animation="bounceInUp"
                            useNativeDriver  >






                            <TouchableOpacity
                                style={styles.botaoModal1}
                                onPress={() => openBrowserAsync("http://34.138.14.62/app/GeoMobileV2.apk")}
                            >
                                <Text style={styles.textoBotaoModal}>Atualizar</Text>
                            </TouchableOpacity>

                        </Animatable.View>
                    </SafeAreaView>
                </Modal> : null}
                <View style={styles.modalHeader}>

                    <Text style={styles.textoModal}>Faça seu Login</Text>
                    <Text style={styles.textoModal2}>Versão 1.0.9</Text>
                </View>

                <ImageBackground source={require('../../assets/tela.png')} resizeMode="cover" style={styles.image}>

                    <Text style={styles.text}
                        onPress={() => setAbrirLogin(true)}
                    >

                    </Text>
                </ImageBackground>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={abrirLogin}
                >
                    <SafeAreaView style={styles.modal}>



                        <View style={styles.modalHeader}>

                            <Text style={styles.textoModal}>Faça seu Login</Text>
                        </View>
                        <ImageBackground source={require('../../assets/tela.png')} resizeMode="cover" style={styles.image2}>
                            <Text style={styles.text}
                                onPress={() => setAbrirLogin(false) || limparCampos()}
                            >

                            </Text>
                        </ImageBackground>

                        <Animatable.View
                            animation="bounceInUp"
                            useNativeDriver  >


                            <TextInput
                                type="email"
                                style={styles.input}
                                placeholder="Insira seu usuário"
                                value={usuario}
                                onChangeText={(usuario) => setUsuario(usuario)}
                            />

                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder="Insira sua Senha"
                                value={senha}
                                onChangeText={(senha) => setSenha(senha)}
                            />

                            <TouchableOpacity
                                style={styles.botaoModal}
                                onPress={login}
                            >
                                <Text style={styles.textoBotaoModal}>Login</Text>
                            </TouchableOpacity>

                        </Animatable.View>
                    </SafeAreaView>
                </Modal>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: '#2F4F4F',
    },
    modal: {
        flex: 1,
        backgroundColor: '#b2b2b2'

    },
    navigationContainer: {
        backgroundColor: "#ecf0f1",
        height: 500,
    },
    paragraph: {
        textAlign: "center",
        padding: 1,
        fontSize: 15,
        textAlign: "center"
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: "#DDDDDD",
        padding: 10
    },

    text: {
        color: "white",
        fontSize: 42,
        width: 980,
        height: 500,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#00000000"
    },
    textoModal: {

        color: '#000',
        marginTop: '5%',
        marginLeft: 15,
        fontSize: 20,


    },
    textoModal1: {

        color: '#000',
        marginTop: '5%',
        marginLeft: "23%",
        fontSize: 30,
        textAlign: "center",


    },
    textoModal2: {

        color: '#000',
        marginTop: '5%',
        marginRight: "0%",
        fontSize: 10,
        textAlign: "center",


    },
    modalHeader: {

        marginRight: "30%",
        marginTop: '3%',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 0,

    },


    input: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 8,
        padding: 8,
        color: '#000',
        fontSize: 13
    },
    botaoModal: {
        backgroundColor: '#006400',
        borderRadius: 5,
        margin: 5,
        padding: 12,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textoBotaoModal: {
        fontSize: 16,
        color: '#FFF',

    },

    navbar: {
        backgroundColor: '#00335c',
        padding: 12,
        color: '#FFF',
        flexDirection: 'row',
        marginTop: 35,

    },

    textonavbar: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 4,
        marginBottom: 2,
    },

    botao: {
        position: 'absolute',
        right: 13,
        marginTop: 11,
    },


    grid: {
        marginTop: 8,

    },

    griditem: {
        padding: 11,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    gridbotaoEditar: {
        position: 'absolute',
        right: 40,
        color: '#5c7ef6',
    },

    gridbotaoExcluir: {
        position: 'absolute',
        right: 15,
        color: '#cc1414',
    },
    botaoModal1: {
        backgroundColor: '#006400',
        borderRadius: 5,
        margin: 5,
        padding: 12,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '99%',
    },
    inputBuscar: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 8,
        padding: 8,
        color: '#000',
        fontSize: 15,
        borderBottomColor: "#767676",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
        position: 'relative',

    },
    image: {
        flex: 1,
        width: '100%',
        height: 250,
        marginTop: '5%',
        marginLeft: 'auto',
        margin: 'auto',
        padding: 'auto',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'auto',
    },
    image2: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginLeft: 10,
        marginTop: "-1%",
        margin: 0,
        padding: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center',
    },

    ViewinputBuscar: {
        flexDirection: 'row',
    },

    iconeBuscar: {
        position: 'absolute',
        right: 20,
        top: 15,
    }
});

export default LOGIN;