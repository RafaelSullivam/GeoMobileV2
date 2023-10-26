import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./styleSonda";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";  




export default function SondaSondagem(props) {
    const [task, setTask] = useState([]);
    const [idsonda, setIdSonda] = useState('')
    const [modelo, setModelo] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const MensagemSalvarOffline = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            ""
            [
            { text: "OK", onPress: (listarDados()) }
            ]
        );
    const MensagemDeleteBancoSQLite = () =>
        Alert.alert(
            "                          Deseja Apagar Sonda! " + idsonda,
            ""
            [
            { text: "OK", onPress: (Apagar()) }
            ]
        );

    function listarDados() {
        setReload(true)
    }
    function Apagar() {
        setApagar(true)
    }
    function ApagarText(){
    setIdSonda('')
    setModelo('')
    setFabricante('')
    }

    function openDatabase() {
        transaction: () => {
            return {
                executeSql: () => { },
            };
        }
        const db = SQLite.openDatabase("db.db");
        return db;
    }
    const db = openDatabase();
    const gerarBancoSQlite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists SondaSondagem (IdSonda text, Modelo text, Fabricante text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into SondaSondagem  ( IdSonda , Modelo , Fabricante) values ('${idsonda}','${modelo}','${fabricante}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM SondaSondagem ', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log(temp, task,tx)
            });

        });

    };
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  SondaSondagem  where IdSonda =?',
                [idsonda],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Sonda Deletada com Sucesso',
                            [

                                {
                                    text: 'Ok', onPress: (Apagar())
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Por Favor Inserir um Id Sonda Valido');
                    }
                }
            );
        });
    };




    let DeleteBancoSQlite9 = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS  SondaSondagem '


            );

        });
    };



    useEffect(() => {
        //getItem()
        gerarBancoSQlite()
        BuscaBancoSQlite()
    }, []);
    useEffect(() => {
        console.log(apagar)
        if (reload) {
            BuscaBancoSQlite()
            setReload(false)
        }
        if (apagar) {
            BuscaBancoSQlite()
            ApagarText()
            setApagar(false)
        }
    })
    return (


        <ScrollView style={styles.scrollView} >
            <View style={styles.container}>
                <Text style={styles.text}>ID Sonda</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdSonda}
                    value={idsonda}
                    placeholder="ID Son"
                >
                </TextInput>
                <Text style={styles.text}>Modelo</Text>
                <TextInput style={styles.input}
                    onChangeText={setModelo}
                    value={modelo}
                    placeholder="Modelo"
                >
                </TextInput>
                <Text style={styles.text}>Fabricante</Text>
                <TextInput style={styles.input}
                    onChangeText={setFabricante}
                    value={fabricante}
                    placeholder="Fabricante"
                >

                </TextInput>
                <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.buttonRow}
                        onPress={() => DeleteBancoSQlite()}
                    >
                        <Text style={styles.text}>Excluir</Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Image style={styles.buttonImageIconStyle}
                            source={require('../../../assets/TrashIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRow}
                        onPress={() => SalvarBancoSQLite()}
                    >
                        <Text style={styles.text}>Salvar</Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Image style={styles.buttonImageIconStyle}
                            source={require('../../../assets/SaveIcon.png')} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView horizontal={true} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={task}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Tasks}>


                                <Text style={styles.labelperfuracao}>Id Sonda:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdSonda(item.IdSonda) ||
                                        setModelo(item.Modelo) ||
                                        setFabricante(item.Fabricante)
                                    }
                                >
                                    {item.IdSonda}
                                </Text>

                                <Text style={styles.labelperfuracao}>Modelo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Modelo}
                                </Text>
                                <Text style={styles.labelperfuracao}>Fabricante:</Text>
                                <Text

                                    style={styles.DescriptionTask}
                                >
                                    {item.Fabricante}
                                </Text>




                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

