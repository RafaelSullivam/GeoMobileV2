import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from "@expo/vector-icons";


export default function BoletimCadastroPesquisaMineral({ route, navigation },props) {
    const [task1, setTask1] = useState([]);
    const [task, setTask] = useState([]);
    const [idfuro, setIdFuro] = useState('')
    const [az, setAZ] = useState('')
    const [dip, setDIP] = useState('')
    const [tipo, setTipo] = useState();
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const dat = [
        { label: '1° Turno', value: '1° Turno' },
        { label: '2° Turno', value: '2° Turno' },
        { label: '3° Turno', value: '3° Turno' },

    ];
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
      )
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdAtividade}</Text>

            </View>
        );
    };
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
            "                          Deseja Apagar Sonda! " + idfuro,
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
        setIdFuro('')
        setDIP('')
        setAZ('')
        setTipo('')
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
                    "create table if not exists BoletimSondagemPesquisaMineral (IdFuro text, DIP text, AZ text, Tipo text, Data text, Sonda text , Turno text, StatusBoletim text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into BoletimSondagemPesquisaMineral ( IdFuro, AZ, DIP, Tipo , StatusBoletim) values ('${idfuro}','${az}','${dip}','${tipo}', '${'Aberto'}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            console.log('ok2'),
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AtividadePesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
            });

        });

    };
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp, task1)
            });

        });

    };
    let DeleteBancoSQlite = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   BoletimSondagemPesquisaMIneral where IdFuro =?',
                [furo],
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
        BuscaBancoSQlite1()
    }, []);
    useEffect(() => {
        console.log(apagar)
        if (reload) {
            BuscaBancoSQlite1()
            setReload(false)
        }
        if (apagar) {
            BuscaBancoSQlite1()
            ApagarText()
            setApagar(false)
        }
    })
    return (


        <ScrollView style={styles.scrollView} >
            <View style={styles.container}>
                {/* <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.navigation.navigate('BoletimCadastroPesquisaMineral')}>
                        <Text style={styles.text}>Novo Furo</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View> */}
          
                <Text style={styles.text}>ID Furo</Text>
                <TextInput style={styles.input}
                    onChangeText={setIdFuro}
                    value={idfuro}
                    placeholder="ID Furo"
                >
                </TextInput>
                <Text style={styles.text}>DIP</Text>
                <TextInput style={styles.input}
                    onChangeText={setDIP}
                    value={dip}
                    placeholder="DIP"
                >
                </TextInput>
                <Text style={styles.text}>AZ</Text>
                <TextInput style={styles.input}
                    onChangeText={setAZ}
                    value={az}
                    placeholder="AZ"
                >
                </TextInput>
                <Text style={styles.text}></Text>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={tipo}

                    onChange={item => {
                        setTipo(item.IdAtividade);
                        //
                        console.log(tipo);

                    }}
                    value={tipo}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />

                <View style={styles.containerrow}>
               
                    <TouchableOpacity style={styles.button}
                        onPress={() => SalvarBancoSQLite()}
                    >
                        <Text style={styles.text}>Salvar</Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Image style={styles.buttonImageIconStyle}
                            source={require('../../../assets/SaveIcon.png')} 
                            
                            
                            
                            />
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView horizontal={true} style={styles.scrollView} >
                <FlatList
                  
                    showsVerticalScrollIndicator={true}
                    data={task1}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Tasks}>

                                <Text style={styles.labelperfuracao}>Id Furo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setIdFuro(item.IdFuro) ||
                                        setAZ(item.AZ)

                                    }
                                >
                                    {item.IdFuro}
                                </Text>
                                <Text style={styles.labelperfuracao}>Atividade:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Tipo}
                                </Text>
                                <Text style={styles.labelperfuracao}>Status Furo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.StatusBoletim}
                                </Text>

                                <TouchableOpacity
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        DeleteBancoSQlite(item.IdFuro)
                                    }}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={23}
                                        color="#F02726"
                                    >
                                    </FontAwesome>

                                </TouchableOpacity>



                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

