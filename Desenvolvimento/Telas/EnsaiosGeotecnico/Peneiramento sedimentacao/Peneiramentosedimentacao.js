import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./stylesedimentacao.js";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import NetInfo from "@react-native-community/netinfo"
import log from "../../../Variaveis Globais/variaveisGlobais"

export default function Peneiramentosedimentacao() {
    api = Conexao.api
    const [amostra, setAmostra] = useState('') //Retidos1 MassaProvote
    const [codigo, setCodigo] = useState('') //Retidos1 MassaProvote
    const [massaprovote, setMassaProvote] = useState('')
    const [massaelementofino, setMassaElementoFino] = useState('')
    const [desimetro, setDesimetro] = useState('')
    const [retidos1, setRetidos1] = useState('')
    const [retidos2, setRetidos2] = useState('')
    const [retidos3, setRetidos3] = useState('')
    const [retidos4, setRetidos4] = useState('')
    const [retidos5, setRetidos5] = useState('')
    const [retidos6, setRetidos6] = useState('')
    const [retidos7, setRetidos7] = useState('')
    const [retidosg1, setRetidosG1] = useState('')
    const [retidosg2, setRetidosG2] = useState('')
    const [retidosg3, setRetidosG3] = useState('')
    const [retidosg4, setRetidosG4] = useState('')
    const [retidosg5, setRetidosG5] = useState('')
    const [retidosg6, setRetidosG6] = useState('')
    const [retidosg7, setRetidosG7] = useState('')
    const [habilita, setHabilita] = useState(false)
    const [seriepeneira, setSeriepeneira] = useState('')
    const [status, setStatus] = useState('')
    const [connState, setConnState] = useState(0);
    const [designacao1, setDesignacao1] = useState('')
    const [designacao2, setDesignacao2] = useState('')
    const [designacao3, setDesignacao3] = useState('')
    const [designacao4, setDesignacao4] = useState('')
    const [designacao5, setDesignacao5] = useState('')
    const [designacao6, setDesignacao6] = useState('')
    const [designacao7, setDesignacao7] = useState('')
    const [designacao8, setDesignacao8] = useState('')
    const [designacao9, setDesignacao9] = useState('')
    const [designacao10, setDesignacao10] = useState('')
    const [designacao11, setDesignacao11] = useState('')
    const [designacao12, setDesignacao12] = useState('')
    const [designacao13, setDesignacao13] = useState('')
    const [designacao14, setDesignacao14] = useState('')
    const [temperatura1, setTemperatura1] = useState('')
    const [temperatura2, setTemperatura2] = useState('')
    const [temperatura3, setTemperatura3] = useState('')
    const [temperatura4, setTemperatura4] = useState('')
    const [temperatura5, setTemperatura5] = useState('')
    const [temperatura6, setTemperatura6] = useState('')
    const [temperatura7, setTemperatura7] = useState('')
    const [temperatura8, setTemperatura8] = useState('')
    const [temperatura9, setTemperatura9] = useState('')
    const [temperatura10, setTemperatura10] = useState('')
    const [temperatura11, setTemperatura11] = useState('')
    const [temperatura12, setTemperatura12] = useState('')
    const [ldesimetro1, setLDesimetro1] = useState('')
    const [ldesimetro2, setLDesimetro2] = useState('')
    const [ldesimetro3, setLDesimetro3] = useState('')
    const [ldesimetro4, setLDesimetro4] = useState('')
    const [ldesimetro5, setLDesimetro5] = useState('')
    const [ldesimetro6, setLDesimetro6] = useState('')
    const [ldesimetro7, setLDesimetro7] = useState('')
    const [ldesimetro8, setLDesimetro8] = useState('')
    const [ldesimetro9, setLDesimetro9] = useState('')
    const [ldesimetro10, setLDesimetro10] = useState('')
    const [ldesimetro11, setLDesimetro11] = useState('')
    const [ldesimetro12, setLDesimetro12] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')
    const Separator1 = () => (
        <View style={styles.separator1} />
    );
    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            "                                     Amostra =" + amostra,
            [
                {
                    // text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    // style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const falha = () =>
        Alert.alert(
            "                          Amostra não cadastrada!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

        const mensagemsalvaroffline = () =>
        Alert.alert(
            "                 Salvo no armazenamento interno !",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const Alerta = () =>
        Alert.alert(
            " Favor digitar amostra mais o codigo!   ",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );


    async function add() {

        const obj = { amostra, codigo, data, massaelementofino, massaprovote, desimetro, retidos1, retidos2, retidos3, retidos4, retidos5, retidos6, retidos7, retidosg1, retidosg2, retidosg3, retidosg4, retidosg5, retidosg6, retidosg7, temperatura1, temperatura2, temperatura3, temperatura4, temperatura5, temperatura6, temperatura7, temperatura8, temperatura9, temperatura10, temperatura11, temperatura12, ldesimetro1, ldesimetro2, ldesimetro3, ldesimetro4, ldesimetro5, ldesimetro6, ldesimetro7, ldesimetro8, ldesimetro9, ldesimetro10, ldesimetro11, ldesimetro12, seriepeneira,login:log.login };
        // if (amostra > 0) {
        const res = await axios.post(this.api + 'SalvarPeneiramentoSedimentacao.php', obj);
        console.warn(this.api + 'SalvarPeneiramentoSedimentacao.php', obj)
        if (res.data.success === true) {
            mensagemsalvar();
            //}
        }
    }
    function openDatabase() {
        // if (Platform.OS === "web") {
        //     return {
        //         transaction: () => {
        //             return {
        //                 executeSql: () => { },
        //             };
        //         },
        //     };
        // }

        const db = SQLite.openDatabase("db.db");
        return db;
    }
    function Buscardados() {
        if (amostra != "" && codigo != "") {

            BuscarProgramacao()

        } else {

            Alerta()
        }
    }
    function Finalizar() {
        add()
    }
    const SaveBanco = () => {
        console.log('ok')
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Peneiramentosedimenta WHERE Amostra=? and codigo = ?', [amostra, codigo], (tx, results) => {
                var temp = [];
                console.log(results)
                if (results.rows.length > 0) {
                    for (let i = 0; i < results.rows.length; ++i)
                        SalvarBanco()

                    console.log('ok')
                    console.log(temp)
                } else {
                    console.log('vai fazer um inserte')
                    Save()
                }
            });

        });

    };
    const Save = () => {

        db.transaction((tx) => {
            tx.executeSql(`insert into Peneiramentosedimenta ( Amostra,codigo ) values (?,?)`, [amostra, codigo], (tx, results) => {
                console.log('Results', results);
                if (results.rowsAffected > 0) {
                    SalvarBanco()
                } else alert('Registration Failed');
            }, (error) => { console.log(error) });
        },


        );
    };
    async function BuscarProgramacao() {
        // console.log(processo)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Programacao where Amostra = ?', [amostra], (tx, results) => {
                var temp = [];
                console.log("update", results.rows)
                if (results.rows.length > 0) {
                    if (results.rows.item(0).peneiracaosedimentacao > 0) {

                        BuscaBanco1()
                        console.log("buscar")
                    } else {
                        setHabilita(false)
                        falha()
                    }
                } else {
                    setHabilita(false)
                    falha()
                }



                //console.log(results.rows, 'ok')
            });

        });

    }
    const db = openDatabase();
    const [flatListItems, setFlatListItems] = useState([]);
    const BuscaBanco = () => {

        db.transaction((tx) => {
            // tx.executeSql('select * from se ', [], (_, { rows }) =>
            //     console.log(JSON.stringify(rows)));
            tx.executeSql('SELECT * FROM se WHERE seriepeneira = ?', [seriepeneira], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setFlatListItems(temp);
                console.log(temp)
            }, (error) => { console.log(error) }
            );

        });

    };
    const listItemView = (item) => {
        setDesignacao1(item.designacao1)
        setDesignacao2(item.designacao2)
        setDesignacao3(item.designacao3)
        setDesignacao4(item.designacao4)
        setDesignacao5(item.designacao5)
        setDesignacao6(item.designacao6)
        setDesignacao7(item.designacao7)
        setDesignacao8(item.designacao8)
        setDesignacao9(item.designacao9)
        setDesignacao10(item.designacao10)
        setDesignacao11(item.designacao11)
        setDesignacao12(item.designacao12)
        setDesignacao13(item.designacao13)
        setDesignacao14(item.designacao14)



    };



    const gerarBanco = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists Peneiramentosedimenta ( Amostra text,codigo text, massaprovote text, Retidos1 text, Retidos2 text, Retidos3 text, Retidos4 text, Retidos5 text, Retidos6 text, Retidos7 text, RetidosG1 text, RetidosG2 text, RetidosG3 text, RetidosG4 text, RetidosG5 text, RetidosG6 text, Temperatura1 text, Temperatura2 text, Temperatura3 text, Temperatura4 text, Temperatura5 text, Temperatura6 text, Temperatura7 text, Temperatura8 text, Temperatura9 text, Temperatura10 text, Temperatura11 text, Temperatura12 text, Desimetro1 text, Desimetro2 text, Desimetro3 text, Desimetro4 text, Desimetro5 text, Desimetro6 text, Desimetro7 text, Desimetro8 text, Desimetro9 text, Desimetro10 text, Desimetro11 text, Desimetro12 text, Desimetro text, Massaelementofino text, Serie text);"
                );

                console.log("Banco de dados iniciado")
            });
    }
    const SalvarBanco = () => {

        db.transaction(
            (tx) => {
                try {
                    tx.executeSql("UPDATE Peneiramentosedimenta SET massaprovote = ?, Serie = ?, Retidos1 = ?, Retidos2 = ?, Retidos3 = ?, Retidos4 = ?, Retidos5 = ?, Retidos6 = ?, Retidos7 = ?, RetidosG1 = ?, RetidosG2 = ?, RetidosG3 = ?, RetidosG4 = ?, RetidosG5 = ?, RetidosG6 = ?, Temperatura1 = ?, Temperatura2 = ?, Temperatura3 = ?, Temperatura4 = ?, Temperatura5 = ?, Temperatura6 = ?, Temperatura7 = ?, Temperatura8 = ?, Temperatura9 = ?, Temperatura10 = ?, Temperatura11 = ?, Temperatura12 = ?, Desimetro1 = ?, Desimetro2 = ?, Desimetro3 = ?, Desimetro4 = ?, Desimetro5 = ?, Desimetro6 = ?, Desimetro7 = ?, Desimetro8 = ?, Desimetro9 = ?, Desimetro10 = ?, Desimetro11 = ?, Desimetro12 = ?, Desimetro = ?, Massaelementofino = ? WHERE Amostra = ? and codigo = ? ", [massaprovote, seriepeneira, retidos1, retidos2, retidos3, retidos4, retidos5, retidos6, retidos7, retidosg1, retidosg2, retidosg3, retidosg4, retidosg5, retidosg6, temperatura1, temperatura2, temperatura3, temperatura4, temperatura5, temperatura6, temperatura7, temperatura8, temperatura9, temperatura10, temperatura11, temperatura12, ldesimetro1, ldesimetro2, ldesimetro3, ldesimetro4, ldesimetro5, ldesimetro6, ldesimetro7, ldesimetro8, ldesimetro9, ldesimetro10, ldesimetro11, ldesimetro12, desimetro, massaelementofino, amostra, codigo]);
                    console.log(tx)
                } catch (error) {
                    console.log(error)
                }
            },

            mensagemsalvaroffline()
        );
    };

    const [flatListItems1, setFlatListItems1] = useState([]);
    const BuscaBanco1 = () => {
        setHabilita(true)
        setLoading(true)
        db.transaction((tx) => {
            try {
                tx.executeSql('SELECT * FROM Peneiramentosedimenta WHERE Amostra = ? and codigo = ?', [amostra, codigo],

                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var usermassaprovote = results.rows.item(0).massaprovote;
                            var userserie = results.rows.item(0).Serie;
                            var userMassaelementofino = results.rows.item(0).Massaelementofino
                            var userRetidos1 = results.rows.item(0).Retidos1
                            var userRetidos2 = results.rows.item(0).Retidos2
                            var userRetidos3 = results.rows.item(0).Retidos3
                            var userRetidos4 = results.rows.item(0).Retidos4
                            var userRetidos5 = results.rows.item(0).Retidos5
                            var userRetidos6 = results.rows.item(0).Retidos6
                            var userRetidos7 = results.rows.item(0).Retidos7
                            var userRetidosG1 = results.rows.item(0).RetidosG1
                            var userRetidosG2 = results.rows.item(0).RetidosG2
                            var userRetidosG3 = results.rows.item(0).RetidosG3
                            var userRetidosG4 = results.rows.item(0).RetidosG4
                            var userRetidosG5 = results.rows.item(0).RetidosG5
                            var userRetidosG6 = results.rows.item(0).RetidosG6
                            var userTemperatura1 = results.rows.item(0).Temperatura1
                            var userTemperatura2 = results.rows.item(0).Temperatura2
                            var userTemperatura3 = results.rows.item(0).Temperatura3
                            var userTemperatura4 = results.rows.item(0).Temperatura4
                            var userTemperatura5 = results.rows.item(0).Temperatura5
                            var userTemperatura6 = results.rows.item(0).Temperatura6
                            var userTemperatura7 = results.rows.item(0).Temperatura7
                            var userTemperatura8 = results.rows.item(0).Temperatura8
                            var userTemperatura9 = results.rows.item(0).Temperatura9
                            var userTemperatura10 = results.rows.item(0).Temperatura10
                            var userTemperatura11 = results.rows.item(0).Temperatura11
                            var userTemperatura12 = results.rows.item(0).Temperatura12
                            var userDesimetro1 = results.rows.item(0).Desimetro1
                            var userDesimetro2 = results.rows.item(0).Desimetro2
                            var userDesimetro3 = results.rows.item(0).Desimetro3
                            var userDesimetro4 = results.rows.item(0).Desimetro4
                            var userDesimetro5 = results.rows.item(0).Desimetro5
                            var userDesimetro6 = results.rows.item(0).Desimetro6
                            var userDesimetro7 = results.rows.item(0).Desimetro7
                            var userDesimetro8 = results.rows.item(0).Desimetro8
                            var userDesimetro9 = results.rows.item(0).Desimetro9
                            var userDesimetro10 = results.rows.item(0).Desimetro10
                            var userDesimetro11 = results.rows.item(0).Desimetro11
                            var userDesimetro12 = results.rows.item(0).Desimetro12
                            setMassaProvote(usermassaprovote)
                            setSeriepeneira(userserie)
                            setMassaElementoFino(userMassaelementofino)
                            setRetidos1(userRetidos1)
                            setRetidos2(userRetidos2)
                            setRetidos3(userRetidos3)
                            setRetidos4(userRetidos4)
                            setRetidos5(userRetidos5)
                            setRetidos6(userRetidos6)
                            setRetidos7(userRetidos7)
                            setRetidosG1(userRetidosG1)
                            setRetidosG2(userRetidosG2)
                            setRetidosG3(userRetidosG3)
                            setRetidosG4(userRetidosG4)
                            setRetidosG5(userRetidosG5)
                            setRetidosG6(userRetidosG6)
                            setTemperatura1(userTemperatura1)
                            setTemperatura2(userTemperatura2)
                            setTemperatura3(userTemperatura3)
                            setTemperatura4(userTemperatura4)
                            setTemperatura5(userTemperatura5)
                            setTemperatura6(userTemperatura6)
                            setTemperatura7(userTemperatura7)
                            setTemperatura8(userTemperatura8)
                            setTemperatura9(userTemperatura9)
                            setTemperatura10(userTemperatura10)
                            setTemperatura11(userTemperatura11)
                            setTemperatura12(userTemperatura12)
                            setLDesimetro1(userDesimetro1)
                            setLDesimetro2(userDesimetro2)
                            setLDesimetro3(userDesimetro3)
                            setLDesimetro4(userDesimetro4)
                            setLDesimetro5(userDesimetro5)
                            setLDesimetro6(userDesimetro6)
                            setLDesimetro7(userDesimetro7)
                            setLDesimetro8(userDesimetro8)
                            setLDesimetro9(userDesimetro9)
                            setLDesimetro10(userDesimetro10)
                            setLDesimetro11(userDesimetro11)
                            setLDesimetro12(userDesimetro12)
                            console.log(results.rows.item(0))
                            setLoading(false)
                        } else {
                            setLoading(false)
                        }
                    }
                )
            } catch (error) {
                console.war(error)
            }


        });

    };
    let DeleteBancoSQlite = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    'DROP TABLE IF EXISTS Peneiramentosedimenta',
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                    }
                );
                console.log(tx)
            });
        } catch (error) {
            console.error(error);
        }

    };


    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        //DeleteBancoSQlite()
        setData(
            date + '/' + month + '/' + year
        );



        gerarBanco()
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

        return () => {
            unsubscribe();
        };
    }, []);
    return (

        <View>
            <ScrollView >


                <View style={styles.container}>

                    {loading == true ? <Modal onRequestClose={() => null} visible={true}>
                        <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                                <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                                <ActivityIndicator size="large" />
                            </View>
                        </View>
                    </Modal>
                        : <Text />}

                </View>



                <View style={styles.container1}>
                    {connState.isConnected == true ? <Image
                        source={require('../../../componentes/imagem/applications_internet.png')}
                        style={styles.ImageIconStyle}
                    /> : <Image
                        source={require('../../../componentes/imagem/Networkoff.png')}
                        style={styles.ImageIconStyle}
                    />}


                </View>

                <View style={styles.container}>

                    <Text style={styles.textStyle}>

                    </Text>
                    <View style={styles.container1}>
                        <Text style={styles.buttonNewTask}>
                            Amostra:
                        </Text>
                        <Text style={styles.buttonNewTaskesquerda}>
                            Codigo:
                        </Text>

                    </View>
                    <View style={styles.container1}>
                        <TextInput
                            style={styles.inputlef2t}
                            onChangeText={setAmostra}
                            value={amostra}
                            keyboardType='numeric'
                            placeholder="Amostra"
                        />
                        <TextInput
                            style={styles.inputlef2t}
                            onChangeText={setCodigo}
                            value={codigo}
                            keyboardType='numeric'
                            placeholder="Código"
                        />


                    </View>


                    <View style={styles.containerrow}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => Buscardados()}>
                            <Text style={styles.text}>Buscar</Text>
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Image style={styles.buttonImageIconStyle}
                                source={require('../../../../assets/search.png')} />
                        </TouchableOpacity>

                    </View>
                    {habilita == true ? <Text style={styles.label}>
                        ANÁLISE GRANULOMÉTRICA POR PENEIRAMENTO
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <Text style={styles.labelleft}>
                            Séries de peneiras:
                        </Text>
                        <Text style={styles.labelspace}>

                        </Text>
                        <Text style={styles.labelright}>
                            Massa total da amostra seca:
                        </Text>
                    </View> : null}

                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleftop}
                            onChangeText={setSeriepeneira}
                            value={seriepeneira}

                            placeholder="Serie de peneiras"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftespace2}

                        />
                        <View >
                            <TouchableOpacity
                                style={styles.buttonpeneira}
                                onPress={BuscaBanco}
                            >
                                <Image
                                    source={require('../../../componentes/imagem/sieve.png')}
                                    style={styles.buttonImageIconStyleSerie}
                                />
                                <Text style={{ fontSize: 16 }}>Buscar</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            //1
                            style={styles.inputleftespace}

                        />
                        <TextInput
                            //1
                            style={styles.inputleftop}
                            onChangeText={setMassaProvote}
                            value={massaprovote.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Massa total da amostra seca"
                        />
                    </View> : null}

                    {habilita == true ? <View style={styles.container1}>

                        <Text style={styles.labelcontanierleft}>
                            Densímetro nº:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            Massa seca dos elementos finos:
                        </Text>
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleftop}
                            onChangeText={setDesimetro}
                            value={desimetro}

                            placeholder="Densímetro nº:"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            //1
                            style={styles.inputleftop}
                            onChangeText={setMassaElementoFino}
                            value={massaelementofino.toString().replace(".", ",")}
                            keyboardType='numeric'

                            placeholder=" Massa seca dos elementos finos"
                        />
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelelementogrosseiro}>
                        ELEMENTOS GROSSEIROS
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 1:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 1:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao1}
                            value={designacao1}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos1}
                            value={retidos1.toString().replace(".", ",")}
                            keyboardType='numeric'

                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 2:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 2:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao2}
                            value={designacao2}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos2}
                            value={retidos2.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}

                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 3:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 3:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao3}
                            value={designacao3}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos3}
                            value={retidos3.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 4:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 4:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao4}
                            value={designacao4}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos4}
                            value={retidos4.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 5:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 5:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao5}
                            value={designacao5}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos5}
                            value={retidos5.toString().replace(".", ",")}
                            keyboardType='numeric'

                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 6:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 6:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao6}
                            value={designacao6}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos6}
                            value={retidos6.toString().replace(".", ",")}
                            keyboardType='numeric'

                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 7:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 7:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao7}
                            value={designacao7}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidos7}
                            value={retidos7.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.containerbtnbuscar}></View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelelementofinos}>
                        ELEMENTOS FINOS
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 1:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 1:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao8}
                            value={designacao8}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG1}
                            value={retidosg1.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 2:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 2:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao9}
                            value={designacao9}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"

                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG2}
                            value={retidosg2.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 3:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 3:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao10}
                            value={designacao10}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG3}
                            value={retidosg3.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 4:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 4:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao11}
                            value={designacao1}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG4}
                            value={retidosg4.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}



                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 5:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 5:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao12}
                            value={designacao12}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG5}
                            value={retidosg5.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}



                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 6:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 6:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao13}
                            value={designacao13}
                            editable={false}
                            selectTextOnFocus={false}
                            placeholder="Série de peneira"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftProg}

                        />
                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setRetidosG6}
                            value={retidosg6.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}



                    {habilita == true ? <View style={styles.containerbtnbuscar}></View> : null}


                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.label}>
                        ANÁLISE GRANULOMÉTRICA POR SEDIMENTAÇÃO
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft2}>
                            Tempo t(min):
                        </Text>
                        <Text style={styles.labelcontaniercenter}>
                            Temperatura T(ºc):
                        </Text>

                        <Text style={styles.labelcontanierright2}>
                            Leitura no densímetro L:
                        </Text>

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="0,5"
                            TextColor='#000000'
                        />

                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura1}
                            value={temperatura1.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />

                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro1}
                            value={ldesimetro1.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />


                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="1"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura2}
                            value={temperatura2.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro2}
                            value={ldesimetro2.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="2"
                          TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura3}
                            value={temperatura3.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro3}
                            value={ldesimetro3.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="4"
                          TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura4}
                            value={temperatura4.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro4}
                            value={ldesimetro4.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="8"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura5}
                            value={temperatura5.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro5}
                            value={ldesimetro5.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="15"
                         TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura6}
                            value={temperatura6.toString().replace(".", ",")}
                            keyboardType='numeric'

                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro6}
                            value={ldesimetro6.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="30"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura7}
                            value={temperatura7.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro7}
                            value={ldesimetro7.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="60"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura8}
                            value={temperatura8.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro8}
                            value={ldesimetro8.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="120"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura9}
                            value={temperatura9.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro9}
                            value={ldesimetro9.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="240"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura10}
                            value={temperatura10.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro10}
                            value={ldesimetro10.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="480"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura11}
                            value={temperatura11.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro11}
                            value={ldesimetro11.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <TextInput
                            style={styles.inputleftop2}

                            editable={false}
                            selectTextOnFocus={false}
                            value="1440"
                            TextColor='#000000'
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setTemperatura12}
                            value={temperatura12.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Temperatura T(ºc)"
                        />
                        <TextInput
                            style={styles.inputleftop2}
                            onChangeText={setLDesimetro12}
                            value={ldesimetro12.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder=" Leitura no densímetro L"
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.containerrow}>
                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={Finalizar}
                        >
                            <Image
                                source={require('../../../../assets/cloud_computer.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Finalizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={SaveBanco}
                        >
                            <Image
                                source={require('../../../../assets/SaveIcon.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Salvar</Text>
                        </TouchableOpacity>




                    </View> : null}
                    <Separator1></Separator1>

                </View>

            </ScrollView>
            <FlatList
                data={flatListItems}
                renderItem={({ item }) => listItemView(item)}
            />

        </View>

    );
};

