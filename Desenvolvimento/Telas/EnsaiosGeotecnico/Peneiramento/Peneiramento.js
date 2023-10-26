import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList } from 'react-native';
import styles from "./style.js";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";

import NetInfo from "@react-native-community/netinfo"
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"
export default function Peneiramento() {
    api = Conexao.api
    const [amostra, setAmostra] = useState('')
    const [codigo, setCodigo] = useState('') //Retidos1 MassaProvote
    const [massaprovote, setMassaProvote] = useState('')
    const [retidos1, setRetidos1] = useState('')
    const [retidos2, setRetidos2] = useState('')
    const [retidos3, setRetidos3] = useState('')
    const [retidos4, setRetidos4] = useState('')
    const [retidos5, setRetidos5] = useState('')
    const [retidos6, setRetidos6] = useState('')
    const [retidos7, setRetidos7] = useState('')
    const [retidos8, setRetidos8] = useState('')
    const [retidos9, setRetidos9] = useState('')
    const [retidos10, setRetidos10] = useState('')
    const [retidos11, setRetidos11] = useState('')
    const [retidos12, setRetidos12] = useState('')
    const [retidos13, setRetidos13] = useState('')
    const [retidos14, setRetidos14] = useState('')
    const [retidos15, setRetidos15] = useState('')
    const [retidos16, setRetidos16] = useState('')
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
    const [designacao15, setDesignacao15] = useState('')
    const [designacao16, setDesignacao16] = useState('')
    const [loading, setLoading] = useState(false)
    const [habilita, setHabilita] = useState(false)
    const Separator1 = () => (
        <View style={styles.separator1} />
    );
    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            "                                     Processo =" + amostra,
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

    async function getItem() {
        const res = await axios.get(this.api + 'BuscarPeneiramento.php?amostra=' + amostra);
        setStatus(res.data.success);
        setMassaProvote(res.data.massaprovote);
        setRetidos1(res.data.Retidos1);
        setRetidos2(res.data.Retidos2);
        setRetidos3(res.data.Retidos3);
        setRetidos4(res.data.Retidos4);
        setRetidos5(res.data.Retidos5);
        setRetidos6(res.data.Retidos6);
        setRetidos7(res.data.Retidos7);
        setRetidos8(res.data.Retidos8);
        setRetidos9(res.data.Retidos9);
        setRetidos10(res.data.Retidos10);
        setRetidos11(res.data.Retidos11);
        setRetidos12(res.data.Retidos12);
        setRetidos13(res.data.Retidos13);
        setRetidos14(res.data.Retidos14);
        setRetidos15(res.data.Retidos15);
        setRetidos16(res.data.Retidos16);
        console.warn(this.api + 'buscarAmostra.php?amostra=' + amostra, status)
        if (res.data.success === false) {
            falha();
        }
    };

    async function add(massaprovote, retidos1, retidos2, retidos3, retidos4, retidos5, retidos6, retidos7, retidos8, retidos9, retidos10, retidos11, retidos12, retidos13, retidos14, retidos15, retidos16) {

        const obj = { amostra, codigo, massaprovote:massaprovote, retidos1:retidos1, retidos2:retidos2, retidos3:retidos3, retidos4:retidos4, retidos5:retidos5, retidos6:retidos6, retidos7:retidos7, retidos8:retidos8, retidos9:retidos9, retidos10:retidos10, retidos11:retidos11, retidos12:retidos12, retidos13:retidos13, retidos14:retidos14, retidos15:retidos15, retidos16:retidos16,login:log.login };
        if (amostra > 0) {
            const res = await axios.post(this.api + 'SalvarPeneiramento.php', obj);
            if (res.data.success === true) {
                mensagemsalvar();
            }
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


        BuscaBanco1()

    };

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
        setDesignacao15(item.designacao15)
        setDesignacao16(item.designacao16)
    };



    const gerarBanco = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists Peneiramento ( amostra text,namostra text, massaprovote text, retidos1 text, retidos2 text, retidos3 text, retidos4 text, retidos5 text, retidos6 text, retidos7 text, retidos8 text, retidos9 text, retidos10 text, retidos11 text, retidos12 text, retidos13 text, retidos14 text, retidos15 text, retidos16 text);"
                );

                console.log("Banco de dados iniciado")
            });
    }
    const SaveBanco = () => {
        DeleteAmostra()
       
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into Peneiramento (amostra,namostra, massaprovote, retidos1, retidos2, retidos3, retidos4, retidos5, retidos6, retidos7, retidos8, retidos9, retidos10, retidos11, retidos12, retidos13, retidos14, retidos15, retidos16) values ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [amostra, codigo, massaprovote, retidos1, retidos2, retidos3, retidos4, retidos5, retidos6, retidos7, retidos8, retidos9, retidos10, retidos11, retidos12, retidos13, retidos14, retidos15, retidos16], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');

                }, (error) => { console.log(error) });

            },

        );
    };
    const DeleteAmostra = () => {
        db.transaction(
            (tx) => {
                tx.executeSql('DELETE FROM Peneiramento WHERE amostra = ? and namostra =? ', [amostra, codigo]);
            })
    }
    const [flatListItems1, setFlatListItems1] = useState([]);
    const BuscaBanco1 = () => {

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Peneiramento WHERE amostra = ? and namostra =?', [amostra, codigo], (tx, results) => {
                var temp = [];
                if (results.rows.length > 0) {
                for (let i = 0; i < results.rows.length; ++i)
                console.log(results.rows)
                
                 setMassaProvote(results.rows.item(0).massaprovote)
                setRetidos1(results.rows.item(0).retidos1)
                setRetidos2(results.rows.item(0).retidos2)
                setRetidos3(results.rows.item(0).retidos3)
                setRetidos4(results.rows.item(0).retidos4);
                setRetidos5(results.rows.item(0).retidos5);
                setRetidos6(results.rows.item(0).retidos6);
                setRetidos7(results.rows.item(0).retidos7);
                setRetidos8(results.rows.item(0).retidos8);
                setRetidos9(results.rows.item(0).retidos9);
                setRetidos10(results.rows.item(0).retidos10);
                setRetidos11(results.rows.item(0).retidos11);
                setRetidos12(results.rows.item(0).retidos12);
                setRetidos13(results.rows.item(0).retidos13);
                setRetidos14(results.rows.item(0).retidos14);
                setRetidos15(results.rows.item(0).retidos15);
                setRetidos16(results.rows.item(0).retidos16);
                }else{

                }
                console.log(temp)
            });

        });

    };
    function Finalizar() {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Peneiramento WHERE amostra = ? and namostra =?', [amostra, codigo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                console.log(results.rows)
                
                add( massaprovote.toString().replace(".", ","), retidos1.toString().replace(".", ","), retidos2.toString().replace(".", ","), retidos3.toString().replace(".", ","), retidos4.toString().replace(".", ","), retidos5.toString().replace(".", ","), retidos6.toString().replace(".", ","), retidos7.toString().replace(".", ","), retidos8.toString().replace(".", ","), retidos9.toString().replace(".", ","), retidos10.toString().replace(".", ","), retidos11.toString().replace(".", ","), retidos12.toString().replace(".", ","), retidos13.toString().replace(".", ","), retidos14.toString().replace(".", ","), retidos15.toString().replace(".", ","), retidos16.toString().replace(".", ",")
                )

                console.log(temp)
            });

        });
       
    }


    let DeleteBancoSQlite = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    'DROP TABLE IF EXISTS Peneiramento',
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
    const listItemView1 = (item) => {
        setMassaProvote(item.massaprovote);
        setRetidos1(item.Retidos1);
        setRetidos2(item.Retidos2);
        setRetidos3(item.Retidos3);
        setRetidos4(item.Retidos4);
        setRetidos5(item.Retidos5);
        setRetidos6(item.Retidos6);
        setRetidos7(item.Retidos7);
        setRetidos8(item.Retidos8);
        setRetidos9(item.Retidos9);
        setRetidos10(item.Retidos10);
        setRetidos11(item.Retidos11);
        setRetidos12(item.Retidos12);
        setRetidos13(item.Retidos13);
        setRetidos14(item.Retidos14);
        setRetidos15(item.Retidos15);
        setRetidos16(item.Retidos16);
    };
    useEffect(() => {
        // DeleteBancoSQlite()
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
            <ScrollView  >
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
                    {habilita == true ?<View style={styles.container1}>

                        <Text style={styles.labelleft}>
                            Séries de peneiras:
                        </Text>
                        <Text style={styles.labelspace}>

                        </Text>
                        <Text style={styles.labelright}>
                            Massa total da amostra seca:
                        </Text>
                    </View>: null}

                    {habilita == true ?<View style={styles.container1}>

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

                            placeholder="Massa total da amostra seca"
                        />
                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 1:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 1:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 2:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 2:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 3:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 3:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 4:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 4:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 5:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 5:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 6:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 6:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao6}
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
                            onChangeText={setRetidos6}
                            value={retidos6.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 7:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 7:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 8:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 8:
                        </Text>

                    </View>: null}
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
                            onChangeText={setRetidos8}
                            value={retidos8.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 9:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 9:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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
                            onChangeText={setRetidos9}
                            value={retidos9.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 10:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 10:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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
                            onChangeText={setRetidos10}
                            value={retidos10.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}
                    <Separator1></Separator1>

                   {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 11:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 11:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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
                            onChangeText={setRetidos11}
                            value={retidos11.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 12:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 12:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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
                            onChangeText={setRetidos12}
                            value={retidos12.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 13:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 13:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


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
                            onChangeText={setRetidos13}
                            value={retidos13.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}

                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 14:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 14:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao14}
                            value={designacao14}
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
                            onChangeText={setRetidos14}
                            value={retidos14.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 15:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 15:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao15}
                            value={designacao15}
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
                            onChangeText={setRetidos15}
                            value={retidos15.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}
                    <Separator1></Separator1>

                    {habilita == true ?<View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>
                            Séries de peneiras 16:
                        </Text>

                        <Text style={styles.labelcontanierright}>
                            MASSA RETIDA ACUMULADA (g) 16:
                        </Text>

                    </View>: null}
                    {habilita == true ?<View style={styles.container1}>


                        <TextInput
                            style={styles.inputleftop}
                            onChangeText={setDesignacao16}
                            value={designacao16}
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
                            onChangeText={setRetidos16}
                            value={retidos16.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View>: null}

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

        </View>

    );
};

