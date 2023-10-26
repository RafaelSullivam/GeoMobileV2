import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';



export default function StatusFuro({ route, navigation }, props) {
    const [task, setTask] = useState([]);
    const [task3, setTask3] = useState([]);
    const [idturno, setIdTurno] = useState('')
    const [turno, setTurno] = useState('');
    const [reload, setReload] = useState(false)
    const [reload1, setReload1] = useState(true)
    const [apagar, setApagar] = useState(false)
    const [processo, setProcesso] = useState(route.params?.nprocesso);
    const [state, setState] = useState('')
    const [tipo, setTipo] = useState()
    const [statusfuro, setStatusFuro] = useState();
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
            "                          Deseja Apagar! " + idturno,
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
        setIdTurno('')


    }
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };
    const _renderItem2 = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdFuro}</Text>

            </View>
        );
    };
    function rota() {
        navigation.navigate('Assinatura');
    }
    function rota2() {
        navigation.navigate('BoletimCadastroPesquisaMineral', { nprocesso: processo });
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
                    "create table if not exists TurnoPesquisaMineral (IdTurno text, Turno text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`update BoletimSondagemPesquisaMineral set  StatusBoletim = ? where IdFuro =? `,[statusfuro,processo])

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                setStatusFuro(results.rows.item(0).StatusBoletim)
                setTipo(results.rows.item(0).Tipo)
                console.log(temp)
            });

        });

    };
    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM FuroPesquisaMineral ', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask3(temp);
                console.log(temp)
            });

        });

    };
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  TurnoPesquisaMIneral where IdTurno =?',
                [idturno],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Turno Deletada com Sucesso',
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

    useEffect(() => {
        //getItem()
        // gerarBancoSQlite()
        if (reload1) {
        BuscaBancoSQlite()
        BuscaBancoSQlite3()
        setReload1(false)
        }
    }, []);
    useEffect(() => {
        console.log(statusfuro)
        // if (reload) {
        //     BuscaBancoSQlite()
        //     setReload(false)
        // }
        if (apagar) {
            BuscaBancoSQlite()
            ApagarText()
            setApagar(false)
        }
    })
    //BoletimCadastroPesquisaMineral
    return (


        <ScrollView style={styles.scrollView} >
            <View style={styles.container}>
                <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${statusfuro}`}</Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>Status do Furo</Text>
                <Dropdown
                    style={styles.dropdown1}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task3}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={statusfuro}

                    onChange={item => {
                        setStatusFuro(item.IdFuro);
                        //
                        console.log(statusfuro);

                    }}
                    value={statusfuro}
                    renderItem={item => _renderItem2(item)}
                    textError="Error"
                />
              
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => SalvarBancoSQLite()}>
                        <Text style={styles.text}>Ok</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => rota()}>
                        <Text style={styles.text}>Assinatura</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>
                   
            </View>

        </ScrollView>

    );
};

