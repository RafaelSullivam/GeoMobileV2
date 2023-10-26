import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import Conexao from "../../Conexao/conexao";


export default function AtividadesBoletimPesquisaMineral({ route, navigation }, props) {

    
    api = Conexao.api
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
    const [task1, setTask1] = useState([]);
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
                <Text style={styles.textItem}>{item.IdTurno}</Text>

            </View>
        );
    };
    function rota() {
        navigation.navigate('NewBoletimCadastroPesquisaMineral', { nprocesso: processo });
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
                tx.executeSql(`update StatusBoletimSondagemPesquisaMineral set  StatusBoletim = ? where IdFuro =? `, [statusfuro, processo])

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };
    ////////////////////////////////////////////////////////////////Logica para recuperar valor dos bancos e enviar para cloud //////////////////////////////////////////////
    const BuscaBancoSQlite = () => {
        console.log(processo)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM StatusBoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                
                setTask(temp);
                setStatusFuro(results.rows.item(0).StatusBoletim)
                setTipo(results.rows.item(0).Turno)
                console.log(temp, 'ok')
            });

        });

    };
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ManobraSondagemPesquisaMineral WHERE IdFuro =?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));

               add(temp, results.rows.length)
            });

        });
       
    };
    
    async function add(lista, cont) {
        const results = []
        const results1 = []
        lista.forEach((list, index) => {
            results.push(
                SalvarManobraSondagemPesquisaMineral(list.idFuro, list.Ate, list.Av, list.De, list.Diametro, list.Litologia, list.LuvaSerie, list.Rec, list.RecPorCento, list.TempoCorte, list.CoroaSerie)
            )
        })
        task.forEach((list, index) => {
            results1.push(
                console.log(list.IdFuro),
                SalvarStatusBoletimSondagemPesquisaMineral(list.IdFuro, list.Data, list.Sonda, list.StatusBoletim, list.Turno)
            )
        })
        BuscaBancoSQlite2()
    }
    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AtividadesBoletim WHERE IdFuro =?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                    add2(temp);
                    console.log(temp,results.rows.length)
               
            });

        });


    };
    async function add2(lista,cont) {
        const results = []
        console.log('ok')
        lista.forEach((list, index) => {
            results.push(
                console.log(list.idFuro+'atividade3333'),
                 SalvarAtividadesBoletimSondagemPesquisaMineral(list.idFuro, list.Ate, list.De, list.Atividade)

            )
        })

    }

    async function SalvarManobraSondagemPesquisaMineral(furo, ate, av, de, diametro, litologia, luvaserie, rec, recporcento, tempocorte, coroanserie) {

        const obj = { idfuro: furo, ate: ate, av: av, de: de, diametro: diametro, litologia: litologia, luvanserie: luvaserie, rec: rec, recporcento: recporcento, tempocorte: tempocorte, coroanserie: coroanserie };
        const res = await axios.post(this.api + 'SalvarManobraSondagemPesquisaMineral.php', obj);
        if (res.data.success === true) {
            console.log("salvo")
        }
    }

    async function SalvarStatusBoletimSondagemPesquisaMineral(furo, data, sonda, status, turno) {

        const obj = { IdFuro: furo, SelectedDate: data, Turno: turno, StatusFuro: status, sonda: sonda };
        const res = await axios.post(this.api + 'SalvarStatusBoletimSondagemPesquisaMineral.php', obj);
        if (res.data.success === true) {
            console.log("salvo")
        }
    }
    async function SalvarAtividadesBoletimSondagemPesquisaMineral(furo, ate, de, atividade) {
console.log(furo,ate,de,atividade +'save cloud')
        const obj = { idfuro: furo, ate: ate, de: de, atividade: atividade };
        const res1 = await axios.post(this.api + 'SalvarAtividadesBoletimSondagemPesquisaMineral.php', obj);
        if (res1.data.success === true) {
            console.log("salvoAtividade" +  this.api+ 'SalvarAtividadesBoletimSondagemPesquisaMineral.php', obj)
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM StatusTurnoPesquisaMIneral ', null, (tx, results) => {
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
                <Text style={styles.text}>Status do Boletim</Text>
                <Dropdown
                    style={styles.dropdown3}
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
                        setStatusFuro(item.IdTurno);
                        //
                        console.log(statusfuro);

                    }}
                    value={statusfuro}
                    renderItem={item => _renderItem2(item)}
                    textError="Error"
                />

                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => BuscaBancoSQlite1()}>
                        <Text style={styles.text}>Ok</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>
                <Text style={styles.text}></Text>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('ManobraBoletimCadastorPesquisaMineral', { nprocesso: processo })}>
                        <Text style={styles.text}>Manobra</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('NewAtivisdadeBoletimCadastorPesquisaMineral', { nprocesso: processo })}>
                        <Text style={styles.text}>Atividade</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('InsumoBoletimCadastorPesquisaMineral', { nprocesso: processo })}>
                        <Text style={styles.text}>Insumos</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('EquipeBoletimCadastorPesquisaMineral', { nprocesso: processo })}>
                        <Text style={styles.text}>Equipes</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                    
                </View>
            </View>

        </ScrollView>

    );
};

