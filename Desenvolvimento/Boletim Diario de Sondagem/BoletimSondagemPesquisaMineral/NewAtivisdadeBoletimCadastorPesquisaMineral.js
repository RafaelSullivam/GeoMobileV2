import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text'
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function NewAtivisdadeBoletimCadastorPesquisaMineral({ route, navigation }, props) {
    const [task1, setTask1] = useState([]);
    const [task, setTask] = useState([]);
    const [de, setDe] = useState('')
    const [ate, setAte] = useState('')
    const [av, setAv] = useState('')
    const [rec, setRec] = useState('')
    const [litologia, setLitologia] = useState('')
    const [diametro, setDiametro] = useState('')
    const [tempocorte, setTempoCorte] = useState('')
    const [luvanserie, setLuvaNSerie] = useState('')
    const [tipo, setTipo] = useState();
    const [statusfuro, setStatusFuro] = useState();
    const [coroanserie, setCoroaNSerie] = useState('')
    const [atividade, setAtividade] = useState();
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const [timePicker, setTimePicker] = useState(false);
    const [timePicker2, setTimePicker2] = useState(false);
    const [horaSolicitacao1, setHoraSolicitacao1] = useState(new Date(Date.now()));
    const [horaSolicitacao2, setHoraSolicitacao2] = useState(new Date(Date.now()));
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
            "                          Deseja Apagar Sonda! " + de,
            ""
            [
            { text: "OK", onPress: (Apagar()) }
            ]
        );
    function onTimeSelected(event, value) {
        setHoraSolicitacao1(value);

        setTimePicker(false);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onTimeSelected1(event, value) {
        setHoraSolicitacao2(value);

        setTimePicker2(false);
    };

    function showTimePicker1() {
        setTimePicker2(true);
    };

    function listarDados() {
        setReload(true)
    }
    function Apagar() {
        setApagar(true)
    }
    function ApagarText() {
        setDe('')
        setAv('')
        setAte('')
        setAtividade('')
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
                    "create table if not exists AtividadesBoletim (id INTEGER PRIMARY KEY AUTOINCREMENT, idFuro text, Atividade text, De text, Ate text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into AtividadesBoletim (idFuro, Atividade, De, Ate) values ('${processo}','${atividade}','${de}','${ate}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

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

            tx.executeSql('SELECT * FROM AtividadesBoletim WHERE IdFuro =?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp,'ok')
            });

        });

    };
    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));

                setStatusFuro(results.rows.item(0).StatusBoletim)
                setTipo(results.rows.item(0).Tipo)
            });

        });

    };
    let DeleteBancoSQlite = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   AtividadesBoletim where id =?',
                [id],
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
                'DROP TABLE IF EXISTS AtividadesBoletim'

            );
        });
    };
    useEffect(() => {
        //getItem()

        gerarBancoSQlite()
        BuscaBancoSQlite()
        BuscaBancoSQlite1()
        BuscaBancoSQlite2()
    }, []);
    useEffect(() => {
        setDe(moment(horaSolicitacao1).format("HH:mm"))
        setAte(moment(horaSolicitacao2).format("HH:mm"))
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
                {timePicker && (
                    <DateTimePicker
                        value={horaSolicitacao1}
                        mode={'time'}
                        display={'default'}
                        is24Hour={true}
                        onChange={onTimeSelected}
                        style={styles.datePicker}
                    />
                )}
                  {timePicker2 && (
                    <DateTimePicker
                        value={horaSolicitacao2}
                        mode={'time'}
                        display={'default'}
                        is24Hour={true}
                        onChange={onTimeSelected1}
                        style={styles.datePicker}
                    />
                )}
             
                <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${statusfuro}`}</Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>Atividade</Text>
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
                    placeholder={atividade}

                    onChange={item => {
                        setAtividade(item.IdAtividade);
                        //
                        console.log(atividade);

                    }}
                    value={atividade}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
                <Text style={styles.text}>De (hora inicial)</Text>
              
                <TouchableOpacity
                    style={styles.inputleft}
                    onPress={showTimePicker} >
                    <Text
                  
                    >  {`${horaSolicitacao1? moment(horaSolicitacao1).format("HH:mm"):"Please select date"}`}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Até (hora final)</Text>
                <TouchableOpacity
                    style={styles.inputleft}
                    onPress={showTimePicker1} >
                    <Text
                 
                    >  {`${horaSolicitacao2? moment(horaSolicitacao2).format("HH:mm"):"Please select date"}`}</Text>
                </TouchableOpacity>
                <View style={styles.containerrow}>
              
                    <TouchableOpacity style={styles.button}
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
                    data={task1}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Tasks}>

                                <Text style={styles.labelperfuracao}>Atividade:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setDe(item.IdFuro) ||
                                        setAte(item.AZ)

                                    }
                                >
                                    {item.Atividade}
                                </Text>
                                <Text style={styles.labelperfuracao}>De:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.De}
                                </Text>
                                <Text style={styles.labelperfuracao}>Ate:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Ate}
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

