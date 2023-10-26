import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./styleTurno";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

import { id } from "date-fns/locale";



export default function TurnoSondagem (props) {



    const [task, setTask] = useState([]);
    const [idturno, setIdTurno] = useState('')
    const [turno, setTurno] = useState('');
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const dat = [
        { label: '', value: '' },
        { label: '1° Turno', value: '1° Turno' },
        { label: '2° Turno', value: '2° Turno' },
        { label: '3° Turno', value: '3° Turno' },

    ];


    



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
    function ApagarText(){
    setIdTurno('')
   
 
    }
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };
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
                    "create table if not exists TurnoSondagem (IdTurno text, Turno text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into TurnoSondagem ( IdTurno , Turno) values ('${idturno}','${turno}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM TurnoSondagem', null, (tx, results) => {
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
                'DELETE FROM  TurnoSondagem where IdTurno =?',
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
                <Text style={styles.text}>ID Turno</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdTurno}
                    value={idturno}
                    placeholder="ID Turno"
                >
                </TextInput>
                <Text style={styles.text}>Turno</Text>
         
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    dropdownPosition="bottom"

                    data={dat}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Selecione o Turno"
                    value={turno}
                    onChange={item => {
                        setTurno(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
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


                                <Text style={styles.labelperfuracao}>Id Turno:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdTurno(item.Idturno) ||
                                        setTurno(item.Turno) 
                                    }
                                >
                                    {item.Idturno}
                                </Text>

                                <Text style={styles.labelperfuracao}>Turno:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                     
                                    {item.Turno}
                                </Text>
                          
                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

