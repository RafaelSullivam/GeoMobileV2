import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { FontAwesome } from "@expo/vector-icons";

export default function NewBoletimCadastroPesquisaMineral({ route, navigation },props) {
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
                    "create table if not exists StatusBoletimSondagemPesquisaMineral (id INTEGER PRIMARY KEY AUTOINCREMENT ,IdFuro text, Data text, Sonda text , Turno text, StatusBoletim text);"
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
                console.log(temp)
            });

        });

    };
    
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMineral ',null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp)
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
    let DeleteBancoSQlite = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   StatusBoletimSondagemPesquisaMineral where id =?',
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

    let DeleteBancoSQlite1 = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS StatusBoletimSondagemPesquisaMineral'
               
            );
        });
    };
    useEffect(() => {
        //getItem()
        // DeleteBancoSQlite1 ()
        gerarBancoSQlite()
        BuscaBancoSQlite()
        BuscaBancoSQlite1()
        BuscaBancoSQlite2()
        BuscaBancoSQlite3()
        BuscaBancoSQlite4()
        
    }, []);
    useEffect(() => {
        console.log(processo,state)
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


                {/* <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.navigation.navigate('BoletimCadastroPesquisaMineral')}>
                        <Text style={styles.text}>Novo Boletim</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View> */}
                      <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${state}`}</Text>
                      <Text style={styles.text}></Text>
                <Text style={styles.text}>Data da solicitção</Text>
                <TouchableOpacity
                    style={styles.dropdown}
                    onPress={showDatePicker} >
                    <Text style={styles.textdate}
                    > {`${selectedDate? moment(selectedDate).format("DD/MM/YYYY"):"Por Favor Selecione a Data"}`} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Text style={styles.text}>Sonda</Text>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task4}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={sonda}

                    onChange={item => {
                        setSonda(item.IdSonda);
                        //
                        console.log(sonda);

                    }}
                    value={sonda}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />

                <Text style={styles.text}>Turno</Text>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task2}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={turno}

                    onChange={item => {
                        setTurno(item.IdTurno);
                        //
                        console.log(turno);

                    }}
                    value={turno}
                    renderItem={item => _renderItem1(item)}
                    textError="Error"
                />

                <Text style={styles.text}>Status do Boletim</Text>
                <Dropdown
                    style={styles.dropdown}
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
                                <Text style={styles.labelperfuracao}>Status Furo:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.StatusBoletim}
                                </Text>

                                <TouchableOpacity
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        DeleteBancoSQlite(item.id)
                                    }}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={24}
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

