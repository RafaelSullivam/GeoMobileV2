import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';



export default function AlmoxarifadoBoletimCadastorPesquisaMineral({ route, navigation }, props) {
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
                    "create table if not exists BoletimSondagemPesquisaMineral (IdFuro text, DIP text, AZ text, Tipo text, Data text, Sonda text , Turno text, StatusBoletim text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into BoletimSondagemPesquisaMineral ( IdFuro, AZ, DIP, Tipo , StatusBoletim) values ('${quantidade}','${ate}','${av}','${insumo}', '${'Aberto'}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

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
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   BoletimSondagemPesquisaMIneral where IdFuro =?',
                [quantidade],
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
  <Text style={styles.text}>Insumo</Text>
                <Dropdown
                    style={styles.dropdown1}
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
                        setInsumo(item.IdAtividade);
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




                            </View>
                        )
                    }}
                />
            </ScrollView  >
        </ScrollView>

    );
};

