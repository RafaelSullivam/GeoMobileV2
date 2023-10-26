import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function NovoBoletimCadastroPesquisaMineral({ route, navigation },props) {
    const [task1, setTask1] = useState([]);
    const [task2, setTask2] = useState([]);
    const [task3, setTask3] = useState([]);
    const [task4, setTask4] = useState([]);
    const [task, setTask] = useState([]);
    const [idfuro, setIdFuro] = useState('')
    const [az, setAZ] = useState('')
    const [dip, setDIP] = useState('')
    const [sonda, setSonda] = useState();
    const [turno, setTurno] = useState();
    const [statusfuro, setStatusFuro] = useState();
    const[tipo,setTipo] = useState()
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const [state, setState] = useState('')
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
      )
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdSonda}</Text>

            </View>
        );
    };
    const _renderItem1 = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdTurno}</Text>

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
        setStatusFuro('')
        setTurno('')
        setSonda('')
    }


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
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
                    "create table if not exists StatusBoletimSondagemPesquisaMineral (IdFuro text, Data text, Sonda text , Turno text, StatusBoletim text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into StatusBoletimSondagemPesquisaMineral (IdFuro, Data, Sonda, Turno, StatusBoletim) values ('${processo}','${moment(selectedDate).format("DD/MM/YYYY")}','${sonda}','${turno}', '${statusfuro}')`, (er) => { console.log(er) }, (error) => { console.log(error) });
            },
            console.log('ok2'),
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM StatusBoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log(temp,'ok')
            });

        });

    };
    
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp,'ok')
           setState(results.rows.item(0).StatusBoletim)
           setTipo(results.rows.item(0).Tipo)
               
            });

        });

    };
    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM TurnoPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask2(temp);
            });

        });

    };
    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM FuroPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask3(temp);
            });

        });

    };
    const BuscaBancoSQlite4 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM SondaPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask4(temp);
            });

        });

    };
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   StatusBoletimSondagemPesquisaMIneral where IdFuro =?',
                [idfuro],
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
        console.log(processo,state)
        gerarBancoSQlite()
        BuscaBancoSQlite()
        BuscaBancoSQlite1()
        BuscaBancoSQlite2()
        BuscaBancoSQlite3()
        BuscaBancoSQlite4()
        
    }, []);
    useEffect(() => {
       
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


                 <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('NewBoletimCadastroPesquisaMineral',{ nprocesso: processo })}>
                        <Text style={styles.text}>Novo Boletim</Text>
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

                                <Text style={styles.labelperfuracao}>Data:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                         navigation.navigate('AtividadesBoletimPesquisaMineral',{ nprocesso: processo })||
                                        setIdFuro(item.IdFuro) ||
                                        setAZ(item.AZ)

                                    }
                                >
                                    {item.Data}
                                </Text>
                                <Text style={styles.labelperfuracao}>Turno:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Turno}
                                </Text>
                                <Text style={styles.labelperfuracao}>Status Turno:</Text>
                                <Text
                                    style={styles.DescriptionTask}
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

