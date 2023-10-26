import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";  




export default function MaterialPesquisaMineral(props) {
    const [task, setTask] = useState([]);
    const [idmaterial, setIdMaterial] = useState('')
    const [unidademedida, setUnidadeMedida] = useState('')
    
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
            "                          Deseja Apagar Sonda! " + idmaterial,
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
    setIdMaterial('')
    setUnidadeMedida('')
  
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
                    "create table if not exists MaterialPesquisaMineral (IdMaterial text, UnidadeMedida text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into MaterialPesquisaMineral ( IdMaterial , UnidadeMedida) values ('${idmaterial}','${unidademedida}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM MaterialPesquisaMIneral', null, (tx, results) => {
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
                'DELETE FROM  MaterialPesquisaMIneral where IdMaterial =?',
                [idmaterial],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Material Deletada com Sucesso',
                            [

                                {
                                    text: 'Ok', onPress: (Apagar())
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Por Favor Inserir um Id Litologia Valida');
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
                <Text style={styles.text}>ID Material</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdMaterial}
                    value={idmaterial}
                    placeholder="ID Material"
                >
                </TextInput>
                <Text style={styles.text}>Unidade de Medida</Text>
                <TextInput style={styles.input}
                    onChangeText={setUnidadeMedida}
                    value={unidademedida}
                    placeholder="Unidade de Medida"
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


                                <Text style={styles.labelperfuracao}>ID Material:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdMaterial(item.IdMaterial) ||
                                        setUnidadeMedida(item.UnidadeMedida) 
                                      
                                    }
                                >
                                    {item.IdMaterial}
                                </Text>

                                <Text style={styles.labelperfuracao}>Unidade de Medida:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.UnidadeMedida}
                                </Text>
                                




                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

