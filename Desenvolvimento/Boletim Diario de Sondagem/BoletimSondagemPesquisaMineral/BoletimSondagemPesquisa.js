import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from "@expo/vector-icons";


export default function BoletimPesquisaMineral({ route, navigation },props) {
    const [task, setTask] = useState([]);
    const [idturno, setIdTurno] = useState('')
    const [turno, setTurno] = useState('');
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const [processo, setProcesso] = useState(route.params?.nprocesso);

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
            "                          Deseja Apagar Sonda! " + idturno,
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
    function rota(furo) {
     
        navigation.navigate('NovoBoletimCadastroPesquisaMineral',{ nprocesso: furo });
      }
      function rota2(furo) { 
        navigation.navigate('StatusFuro',{ nprocesso: furo });
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
                tx.executeSql(`insert into TurnoPesquisaMineral ( IdTurno , Turno) values ('${idturno}','${turno}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
               
                console.log(temp,'ok')
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
        gerarBancoSQlite()
        BuscaBancoSQlite()
    }, []);
    useEffect(() => {
        console.log(apagar,processo)
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
    //BoletimCadastroPesquisaMineral
    return (


        <ScrollView style={styles.scrollView} >
            <View style={styles.container}>

                <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('BoletimCadastroPesquisaMineral')}>
                        <Text style={styles.text}>Novo Furo</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView horizontal={true} style={styles.scrollView} >
                <FlatList
                  
                    showsVerticalScrollIndicator={true}
                    data={task}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Tasks}>

                                <Text style={styles.labelperfuracao}>Id Furo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                
                                    onPress={() => rota(item.IdFuro) 
                                        
                                    }
                                >
                                    {item.IdFuro}
                                </Text>
                                <Text style={styles.labelperfuracao}>Atividade:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={rota}
                                >
                                    {item.Tipo}
                                </Text>
                                <Text style={styles.labelperfuracao}>Status Furo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() => rota2(item.IdFuro)}
                                >
                                    {item.StatusBoletim}
                                </Text>
  



                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

