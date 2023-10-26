import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from "@expo/vector-icons";


export default function EquipeBoletimCadastorPesquisaMineral({ route, navigation }, props) {

    
    const [task1, setTask1] = useState([]);
    const [task, setTask] = useState([]);
    const [matricula, setMatricula] = useState('')
    const [nome, setNome] = useState('')
    const [av, setAv] = useState('')
    const [rec, setRec] = useState('')
    const [litologia, setLitologia] = useState('')
    const [diametro, setDiametro] = useState('')
    const [tempocorte, setTempoCorte] = useState('')
    const [luvanserie, setLuvaNSerie] = useState('')
    const [coroanserie, setCoroaNSerie] = useState('')
    const [funcao, setFuncao] = useState();
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const [tipo, setTipo] = useState()
    const [statusfuro, setStatusFuro] = useState();
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
    )
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdFuncao}</Text>

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
            "                          Deseja Apagar Sonda! " + matricula,
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
        setMatricula('')
        setAv('')
        setNome('')
        setFuncao('')
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
                    "create table if not exists EquipeSondagemPesquisaMineral (id INTEGER PRIMARY KEY AUTOINCREMENT, idFuro text, Matricula text, Nome text, Funcao text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into EquipeSondagemPesquisaMineral ( Matricula, Nome, Funcao,idFuro) values ('${matricula}','${nome}','${funcao}','${processo}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            console.log('ok2'),
            MensagemSalvarOffline(),
            ApagarText()
        );
    };

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM FuncaoPesquisaMineral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
            });

        });

    };
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM EquipeSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp, task1)
            });

        });

    };
    let DeleteBancoSQlite = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   EquipeSondagemPesquisaMineral where id =?',
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
                'DROP TABLE IF EXISTS EquipeSondagemPesquisaMineral'
               
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
            <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${statusfuro}`}</Text>
                <Text style={styles.text}>Matrícula</Text>
                <TextInput style={styles.input}
                    onChangeText={setMatricula}
                    value={matricula}
                    placeholder="Matrícula"
                >
                </TextInput>
                <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome"
                >
                </TextInput>
                <Text style={styles.text}>Função</Text>
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
                    placeholder={funcao}

                    onChange={item => {
                        setFuncao(item.IdFuncao);
                        //
                        console.log(funcao);

                    }}
                    value={funcao}
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

                                <Text style={styles.labelperfuracao}>Nome:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setMatricula(item.IdFuro) ||
                                        setNome(item.AZ)

                                    }
                                >
                                    {item.Nome}
                                </Text>
                                <Text style={styles.labelperfuracao}>Função:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Funcao}
                                </Text>
                               
                                <TouchableOpacity
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        DeleteBancoSQlite(item.id)
                                    }}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={23}
                                        color="#F92e6A"
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

