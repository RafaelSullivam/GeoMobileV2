import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from "@expo/vector-icons";


export default function InsumoBoletimCadastorPesquisaMineral({ route, navigation }, props) {


    const [task1, setTask1] = useState([]);
    const [task, setTask] = useState([]);
    const [quantidade, setQuantidade] = useState('')
    const [ate, setAte] = useState('')
    const [av, setAv] = useState('')
    const [rec, setRec] = useState('')
    const [litologia, setLitologia] = useState('')
    const [diametro, setDiametro] = useState('')
    const [tempocorte, setTempoCorte] = useState('')
    const [luvanserie, setLuvaNSerie] = useState('')
    const [coroanserie, setCoroaNSerie] = useState('')
    const [insumo, setInsumo] = useState();
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
                <Text style={styles.textItem}>{item.IdMaterial}</Text>

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
            "                          Deseja Apagar Sonda! " + quantidade,
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
        setQuantidade('')
        setAv('')
        setAte('')
        setInsumo('')
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
                    "create table if not exists InsumosSondagemPesquisaMineral (id INTEGER PRIMARY KEY AUTOINCREMENT, idFuro text, Insumo text, Quant text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into InsumosSondagemPesquisaMineral ( Insumo, Quant, idFuro) values ('${insumo}','${quantidade}','${processo}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            console.log('ok2'),
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
                console.log(temp)
            });

        });

    };
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM InsumosSondagemPesquisaMineral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp, 'ok')
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
                'DELETE FROM   InsumosSondagemPesquisaMineral where id =?',
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
                'DROP TABLE IF EXISTS InsumosSondagemPesquisaMineral'
               
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
                 <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${statusfuro}`}</Text>
                 <Text style={styles.text}></Text>
                <Text style={styles.text}>Insumo</Text>
                <Dropdown
                    style={styles.dropdown4}
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
                    placeholder={insumo}

                    onChange={item => {
                        setInsumo(item.IdMaterial);
                        //
                        console.log(insumo);

                    }}
                    value={insumo}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
                <Text style={styles.text}>Quantidade</Text>
                <TextInput style={styles.input}
                    onChangeText={setQuantidade}
                    value={quantidade}
                    placeholder="Quantidade"
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
                                        setQuantidade(item.IdFuro) ||
                                        setAte(item.AZ)

                                    }
                                >
                                    {item.Insumo}
                                </Text>
                                <Text style={styles.labelperfuracao}>Atividade:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Quant}
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

