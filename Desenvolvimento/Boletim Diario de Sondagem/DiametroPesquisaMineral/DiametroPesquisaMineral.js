import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";  




export default function DiametroPesquisaMineral(props) {
    const [task, setTask] = useState([]);
    const [iddiametro, setIdDiametro] = useState('')
    const [serie, setSerie] = useState('')
    const [mm, setMM] = useState('')
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
            "                          Deseja Apagar Sonda! " + iddiametro,
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
    setIdDiametro('')
    setSerie('')
    setMM('')
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
                    "create table if not exists DiametroPesquisaMineral (IdDiamentro text, Serie text, mm text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into DiametroPesquisaMineral ( IdDiamentro , Serie , mm) values ('${iddiametro}','${serie}','${mm}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM DiametroPesquisaMIneral', null, (tx, results) => {
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
                'DELETE FROM  DiametroPesquisaMIneral where IdSonda =?',
                [iddiametro],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Diametro Deletada com Sucesso',
                            [

                                {
                                    text: 'Ok', onPress: (Apagar())
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Por Favor Inserir um Id Diametro Valido');
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
                <Text style={styles.text}>ID Diâmetro</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdDiametro}
                    value={iddiametro}
                    placeholder="ID Diâmetro"
                >
                </TextInput>
                <Text style={styles.text}>Série</Text>
                <TextInput style={styles.input}
                    onChangeText={setSerie}
                    value={serie}
                    placeholder="Série"
                >
                </TextInput>
                <Text style={styles.text}>mm</Text>
                <TextInput style={styles.input}
                    onChangeText={setMM}
                    value={mm}
                    placeholder="mm"
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


                                <Text style={styles.labelperfuracao}>Id Diâmetro:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdDiametro(item.IdDiametro) ||
                                        setSerie(item.Serie) ||
                                        setMM(item.mm)
                                    }
                                >
                                    {item.IdDiamentro }
                                </Text>

                                <Text style={styles.labelperfuracao}>Série:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Serie}
                                </Text>
                                <Text style={styles.labelperfuracao}>mm:</Text>
                                <Text

                                    style={styles.DescriptionTask}
                                >
                                    {item.mm}
                                </Text>




                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

