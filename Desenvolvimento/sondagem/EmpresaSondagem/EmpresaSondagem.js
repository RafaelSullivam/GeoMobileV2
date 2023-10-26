import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";




export default function EmpresaSondagem(props) {
    const [task, setTask] = useState([]);
    const [idempresa, setIdEmpresa] = useState('')
    const [categoria, setCategoria] = useState('')

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
            "                          Deseja Apagar Sonda! " + idempresa,
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
    function ApagarText() {
        setIdEmpresa('')
        setCategoria('')

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
                    "create table if not exists EmpresaSondagem (IdEmpresa text, Categoria text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into EmpresaSondagem ( IdEmpresa , Categoria) values ('${idempresa}','${categoria}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM EmpresaSondagem', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log(temp, task)
            });

        });

    };
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  EmpresaSondagem where IdEmpresa =?',
                [idempresa],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Empresa Deletada com Sucesso',
                            [

                                {
                                    text: 'Ok', onPress: (Apagar())
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Por Favor Inserir um Id Empresa Valida');
                    }
                }
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
                <Text style={styles.text}>ID Empresa</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdEmpresa}
                    value={idempresa}
                    placeholder="ID Empresa"
                >
                </TextInput>
                <Text style={styles.text}>Categoria</Text>
                <TextInput style={styles.input}
                    onChangeText={setCategoria}
                    value={categoria}
                    placeholder="Categoria"
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


                                <Text style={styles.labelperfuracao}>ID Empresa:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdEmpresa(item.IdEmpresa) ||
                                        setCategoria(item.Categoria)

                                    }
                                >
                                    {item.IdEmpresa}
                                </Text>

                                <Text style={styles.labelperfuracao}>Categoria:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Categoria}
                                </Text>





                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

