import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./StyleGeralSondagem";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import Conexao from "../../Desenvolvimento/Conexao/conexao";
import { useEffect, useState } from 'react';


export default function AtividadesBoletimSondagem({ route, navigation }, props) {



    api2 = Conexao.api

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

    const mensagemsalvar = () =>
    Alert.alert(
        "Salvo com sucesso!",
    
    );

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
        navigation.navigate('NewBoletimCadastroSondagem', { nprocesso: processo });
    }
    function rota2() {
        navigation.navigate('BoletimCadastroSondagem', { nprocesso: processo });
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
                    "create table if not exists TurnoSondagem (IdTurno text, Turno text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`update StatusBoletimSondagem set  StatusBoletim = ? where IdFuro =? `,[statusfuro,processo])

            },
            MensagemSalvarOffline(),
            ApagarText()
        );
    };







 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////





    const BuscaBancoSQlite = () => {
        console.log(processo)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM StatusBoletimSondagem where IdFuro = ?', [processo], (tx, results) => {
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

            tx.executeSql('SELECT * FROM ManobraSondagem WHERE IdFuro =?', [processo], (tx, results) => {
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
                SalvarManobraSondagem (list.idFuro, list.Ate, list.Av, list.De, list.Diametro, list.Litologia, list.LuvaSerie, list.Rec, list.RecPorCento, list.TempoCorte, list.CoroaSerie)
            )
        })
        task.forEach((list, index) => {
            results1.push(
                console.log(list.IdFuro),
                SalvarStatusBoletimSondagem (list.IdFuro, list.Data, list.Sonda, list.StatusBoletim, list.Turno)
            )
        })
        BuscaBancoSQlite2()
    }
    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AtividadesBoletimSondagem WHERE IdFuro =?', [processo], (tx, results) => {
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
                 SalvarAtividadesBoletimSondagem (list.idFuro, list.Ate, list.De, list.Atividade)

            )
        })

    }

    async function SalvarManobraSondagem (furo, ate, av, de, diametro, litologia, luvaserie, rec, recporcento, tempocorte, coroanserie) {

        const obj = { idfuro: furo, ate: ate, av: av, de: de, diametro: diametro, litologia: litologia, luvanserie: luvaserie, rec: rec, recporcento: recporcento, tempocorte: tempocorte, coroanserie: coroanserie };
        const res = await axios.post(this.api + 'SalvarManobraSondagem.php', obj);
        if (res.data.success === true) {
            console.log("salvo")
        }
    }

    async function SalvarStatusBoletimSondagem(furo, data, sonda, status, turno) {

        const obj = { idFuro: furo, selectedDate: data, turno: turno, statusfuro: status, sonda: sonda };
        const res = await axios.post(this.api + 'SalvarStatusBoletimSondagem.php', obj);
        if (res.data.success === true) {
            console.log("salvo Status" )
        }
    }
    async function SalvarAtividadesBoletimSondagem(furo, ate, de, atividade) {
console.log(furo,ate,de,atividade +'save cloud')
        const obj = { idfuro: furo, ate: ate, de: de, atividade: atividade };
        const res1 = await axios.post(this.api + 'SalvarAtividadesBoletimSondagem.php', obj);
        if (res1.data.success === true) {
            console.log("salvoAtividade" +  this.api+ 'SalvarAtividadesBoletimSondagem.php', obj)
        }
    }




    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM StatusTurnoSondagem ', null, (tx, results) => {
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
                'DELETE FROM  TurnoSondagem  where IdTurno =?',
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
                        onPress={() => navigation.navigate('ManobraBoletimCadastroSondagem', { nprocesso: processo })}>
                        <Text style={styles.text}>Manobra</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('NewAtivisdadeBoletimCadastroSondagem', { nprocesso: processo })}>
                        <Text style={styles.text}>Atividade</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('InsumoBoletimCadastroSondagem', { nprocesso: processo })}>
                        <Text style={styles.text}>Insumos</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('EquipeBoletimCadastroSondagem', { nprocesso: processo })}>
                        <Text style={styles.text}>Equipes</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
               
                <View style={styles.containerrow1}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('TelaEnsaios', { nprocesso: processo })}>
                        <Text style={styles.text}> Ensaios  </Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    );
};

