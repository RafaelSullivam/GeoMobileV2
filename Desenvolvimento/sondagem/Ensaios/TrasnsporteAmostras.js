import React, { useEffect, useState, Component } from "react";
import { Button, SafeAreaView, Image, Text, Modal, FlatList, StyleSheet, View, Alert, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import styles from "./styleTA";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import Conexao from "../../Conexao/conexao";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from "@expo/vector-icons";
import { id } from "date-fns/locale";
import { useTheme } from "@react-navigation/native";
import nivel from "../../Variaveis Globais/variaveisGlobais"


const TrasnsporteAmostra = (props) => {



    api2 = Conexao.api


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [test, setTest] = useState(false)
    const [aux, setAux] = useState();



    // variaveis  data e hora  
    const [datePicker, setDatePicker] = useState(false);
    const [dataEntrada, setDataEntrada] = useState(new Date());
    const [dataEntrada1, setDataEntrada1] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [horarioEntrada, setHorarioEntrada] = useState(new Date(Date.now()));
    const [horarioEntrada1, setHorarioEntrada1] = useState(new Date(Date.now()));
    const [test1, setTest1] = useState(false)
    const [aux1, setAux1] = useState();

    const [test2, setTest2] = useState(false)
    const [aux2, setAux2] = useState();




    const [test3, setTest3] = useState(false)
    const [aux3, setAux3] = useState();
    const [loading, setLoading] = useState(false)




    const [numeroAmostra, setNumeroAmostra] = useState("")

    const [origem, setOrigem] = useState()
    const [destino, setDestino] = useState()
    const [idAmostra, setIdAmostra] = useState()
    const [profundidadeInicial, setProfundidadeInicial] = useState()
    const [profundidadeFinal, setProfundidadeFinal] = useState()
    const [observacao, setObservacao] = useState()













    const [reload, setReload] = useState(false)
    const [reload1, setReload1] = useState(false)
    const [reload2, setReload2] = useState(false)

    const [reload5, setReload5] = useState(false)
    const [reload6, setReload6] = useState(false)
    const [reload7, setReload7] = useState(false)
    const [reload8, setReload8] = useState(false)

    const [statu, setStatu] = useState('')
    const [habilita, setHabilita] = useState(true)
    const [habilita1, setHabilita1] = useState(true)
    const [habilita2, setHabilita2] = useState(false)
    const [abrir, setAbrir] = useState(false);

    const [bloquear, setBloquear] = useState(false);
    const [bloquear1, setBloquear1] = useState(false);
    const [opc, setOpc] = useState(true);
    const [opc1, setOpc1] = useState(true);
    const [opc2, setOpc2] = useState(true)

    const [connState, setConnState] = useState(0);



    const [task, setTask] = useState([]);
    const [task1, setTask1] = useState([]);
    const [task2, setTask2] = useState([]);





    const [signature, setSign] = useState(null);

    const handleOK = (signature) => {
        console.log(signature);
        setSign(signature);
        SalvarBancoSQLite()
    };

    const handleEmpty = () => {
        console.log("Empty");
    };

    const style = `.m-signature-pad--footer
      .button {
        background-color: red;
        color: #FFF;
      }`;








    const [tipoAmostra, setTipoAmostra] = useState();
    const dt = [


        { label: 'Amostra Deformada ', value: 'Amostra Deformada' },
        { label: 'Bloco indeformado ', value: 'Bloco indeformado' },
        { label: 'Denilson', value: 'Denilson' },
        { label: 'Shelby', value: 'Shelby' },
        { label: 'Proctor', value: 'Proctor' },

    ];

    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };























    const MensagemSalvarOffline = () =>
        Alert.alert(
            "                          Salvo ! ",
            ""
            [
            { text: "OK", onPress: (listarDados()) }
            ]
        );




    const MensagemSalvarOffline1 = () =>
        Alert.alert(
            "                          Salvo com sucesso ! ",
            ""
            [
            { text: "OK", onPress: (listarDados1()) }
            ]
        );





















    const msgErro = () =>
        Alert.alert(setHabilita(false),
            "                          Amostra não existe! ",
            ""
            [
            { text: "OK", onPress: (setLoading(false)) }
            ]
        );



    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso!",
            "",
            [
                {

                },
            ]

        );

    const mensagemdeletar = () =>
        Alert.alert(
            "                          Excluido com sucesso!",

        );

    const mensagemfinalizar = () =>
        Alert.alert(
            "                        Finalizada!",
            "",
            [
                {

                },
            ]
        );




    function showDatePicker() {
        setTest(true)
        setDatePicker(true);
    }

    function onDateSelected(event, value) {
        setDataEntrada1(value)


        setDatePicker(false);
    };







    function showTimePicker() {
        setTest1(true)
        setTimePicker(true);
    };




    function onTimeSelected(event, value) {
        setHorarioEntrada1(value);

        setTimePicker(false);
    };














    function showDatePicker2() {
        setTest3(true)
        setDatePicker2(true);
    }


    function onDateSelected2(event, value) {
        setDataModal1(value)


        setDatePicker2(false);
    };



    function showDatePicker3() {
        setDatePicker3(true);
    }


    function onDateSelected3(event, value) {
        setDataModal3(value)


        setDatePicker3(false);
    };






    function rota() {
        navigation.navigate('AssinaturaAmostragem');
    }



    function listarDados() {
        setReload(true)
    }




    function listarDados1() {
        setReload1(true)
    }



    function listarDados2() {
        setReload2(true)
    }






    function listarDados5() {
        setReload5(true)
    }



    function listarDados6() {
        setReload6(true)
    }


    function listarDados7() {
        setReload7(true)
    }


    function listarDados8() {
        setReload8(true)
    }


    function data() {
        if (aux != "") {
            setTest(false)
        } else {
            setTest(true)
        }
    }

    function data1() {
        if (aux1 != "") {
            setTest1(false)
        } else {
            setTest1(true)
        }
    }



    function data2() {
        if (aux2 != "") {
            setTest2(false)
        } else {
            setTest2(true)
        }
    }



    function data3() {
        if (aux3 != "") {
            setTest3(false)
        } else {
            setTest3(true)
        }
    }



    function Limpar1() {

        setTask([])

    }



    function Limpar() {

        setObservacao('')
        setAux('')
        setAux1('')
        setAux2('')
        setAux3('')

        setTask('')

    }



    function FinalizarTD() {
        {

            Finalizar(),
                Finalizar1(),



                mensagemfinalizar()
        }

    };







    function Delete(id) {
        if (connState.isConnected === true) {
            deleteItem(id), DeleteBancoSQlite1(id)
        } else {
            deleteItem(id)
            DeleteBancoSQlite1(id)
        }

    }













    const verificar1 = () => {
        setLoading(true)
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Amostragem WHERE numeroAmostra = ?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }

                if (temp.length > 0) {
                    setHabilita(true)
                    setHabilita1(true)

                    BuscaBancoSQl()
                    BuscaBancoSQl1()


                    setLoading(false)
                    console.log('Tabela off Controle de amostras  :', temp);

                } else {
                    if (connState.isConnected === true) {
                        Buscar()

                    }
                    else {
                        (temp.length <= 0)

                        msgErro()


                        console.log('Amostra não existe.');

                    }
                }
            });
        });
    };










    async function Buscar() {
        setLoading(true)
        setBloquear(false)
        Limpar()
        const res = await axios.get(this.api2 + 'ListaAmostragem.php?numeroAmostra=' + numeroAmostra);

        if (res.data.success === true) {


            setObservacao(res.data.result[0].observacao)



            Buscar1()

            setLoading(false)
        }
        else {

            msgErro()

        }
    };







    // async function login() {
    //     if (nivel.nivel == "Gerente") {
    //         setOpc(true)
    //         setOpc1(true)
    //         setOpc2(true)
    //     } else {
    //         setOpc(false)
    //         setOpc1(false)
    //         setOpc2(false)
    //     }

    // }


    async function Buscar1() {

        const res = await axios.get(this.api2 + 'ListarModalAmostragem.php?numeroAmostra=' + numeroAmostra);
        console.log(res.data.result)


        if (res.data.success === true) {




            setTask(res.data.result)





        }
    };





















    async function deleteItem(id) {

        const res = await axios.get(this.api2 + 'ExcluirAmostragem.php?id=' + id);

        if (res.data.success === true) {

            mensagemdeletar()
            listarDados1()



        }

    };


    async function deleteItem1(id) {

        const res = await axios.get(this.api2 + 'ExcluirListaDinamica1.php?id=' + id);

        if (res.data.success === true) {

            mensagemdeletar()
            listarDados5()
        }

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
                    "create table if not exists Amostragem (numeroAmostra text ,   observacao text );"
                );
                console.log(" Nova tabela gerada")
            });
    };






    const gerarBancoSQlite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists ControledeAmostrasModal  ( id INTEGER PRIMARY KEY AUTOINCREMENT, numeroAmostra text , tipoAmostra text , origem text , destino text , idAmostra text , profundidadeInicial text , profundidadeFinal text  );"
                );
                console.log(" Nova tabela gerada")
            });
    };






    const SalvarBancoSQLite = () => {


        db.transaction(
            (tx) => {
                tx.executeSql(`insert into Amostragem (numeroAmostra , observacao) values ('${numeroAmostra}','${observacao}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),

        );
    };




    const SalvarBancoSQLite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ControledeAmostrasModal ( numeroAmostra , tipoAmostra , origem , destino, idAmostra, profundidadeInicial, profundidadeFinal ) values ('${numeroAmostra}','${tipoAmostra}','${origem}','${destino}' ,'${idAmostra}' ,'${profundidadeInicial}' ,'${profundidadeFinal}'  )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir(false),

            MensagemSalvarOffline1(),
            listarDados1(),

        );
    };










    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Amostragem WHERE numeroAmostra =?', [numeroAmostra], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {





                    setObservacao(results.rows.item(0).observacao)




                }



            });


        });
    };




    ///////////////////////////////////Finalizar, envia de dados off para o banco online  ///////////////////////////


    const Finalizar = () => {
        console.log(numeroAmostra)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Amostragem where numeroAmostra = ?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));

                add1(temp)

                console.log('Tabela off Manutenção Amostragem:', temp)
            });

        });

    };


    async function add1(lista, cont) {
        const results = []

        lista.forEach((list, index) => {
            results.push(
                SalvarAmostragem(list.numeroAmostra, list.observacao)
            )
        })

    }
    async function SalvarAmostragem() {
        try {
            const obj = { numeroAmostra: numeroAmostra, observacao: observacao };
            const res = await axios.post(this.api2 + 'SalvarAmostragem.php', obj);
            if (res.data.success === true) {
                console.log(" Finalizada");
            }
        } catch (error) {
            console.error("Erro :", error);
        }
    }







    //ManutecaoPreventivaCorretivaModal


    const Finalizar1 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM ControledeAmostrasModal where numeroAmostra = ?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                add1(temp); // Chame a função add1 passando a lista temp
                console.log(temp, 'ok')
            });
        });
    };

    async function add1(lista) {
        const results = []

        for (let i = 0; i < lista.length; ++i) {
            results.push(
                SalvarListaDinamica(lista[i].numeroAmostra, lista[i].origem, lista[i].destino, lista[i].idAmostra, lista[i].profundidadeInicial, lista[i].profundidadeFinal, lista[i].tipoAmostra)
            );
        }

        // Aguardar todas as chamadas de API terminarem, se necessário
        await Promise.all(results);
    }

    async function SalvarListaDinamica(numeroAmostra, origem, destino, idAmostra, profundidadeInicial, profundidadeFinal, tipoAmostra) {
        const obj = { numeroAmostra, origem, destino, idAmostra, profundidadeInicial, profundidadeFinal, tipoAmostra };

        try {
            const res = await axios.post(api2 + 'insertAmostragem.php', obj);
            if (res.data.success === true) {
                console.log("Lista Dinamica Salva");
            }
        } catch (error) {
            console.error("Erro ao salvar lista dinâmica:", error);
        }
    }






    async function add4() {
        const obj = { numeroAmostra, origem, destino, idAmostra, profundidadeInicial, profundidadeFinal, tipoAmostra };


        const res = await axios.post(this.api2 + 'insertAmostragem.php', obj);


        if (res.data.success === true) {
            mensagemsalvar();

        }

    };




    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AssinaturaAmostragem WHERE numeroAmostra =?', [numeroAmostra], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {





                    setObservacao(results.rows.item(0).id)




                }



            });


        });
    };





    const BuscaBancoSQl1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ControledeAmostrasModal WHERE numeroAmostra =?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log('Tabela OFF ControledeAmostrasModal:', temp)
            });


        });
    };


    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AssinaturaAmostragem', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));

                console.log('Recuperada---->', temp)
            });

        });

    };



    let DeleteBancoSQlite1 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  ControledeAmostrasModal where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {


                        Alert.alert(
                            'Successo',
                            'item deletado',
                            [

                                { text: "OK", onPress: (listarDados1()) }
                            ],
                            { cancelable: false }
                        );
                    } else {

                    }
                }
            );
        });
    };








    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS  ControledeAmostrasModal ',
                console.log('Banco Deletado')

            );

        });
    };
    useEffect(() => {


        //  DeleteBancoSQlite()



        //Reload Banco OF adicionar e deletar 
        if (reload) {
            BuscaBancoSQl()
            setReload(false)
        }


        if (reload1) {

            BuscaBancoSQl1()
            setReload1(false)
        }








    });




    useEffect(() => {
        // gerarBancoSQlite(),
        // gerarBancoSQlite1(),
        // DeleteBancoSQlite()
        // Limpar1(),

        console.log("Numero da Amostra:", numeroAmostra)
    }, []);



    useEffect(() => {
        // login()


        NetInfo.fetch().then(state => {
            setConnState(state);

        });

        const unsubscribe = NetInfo.addEventListener(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });



    }, []);


    return (




        <ScrollView>


            <View style={styles.container}>

                {loading == true ? <Modal onRequestClose={() => null} visible={true}>
                    <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                            <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                            <ActivityIndicator size="large" />
                        </View>
                    </View>
                </Modal>
                    : <Text />}

            </View>



            {/* Modal de Amostragem  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir}
                style={styles.modal1}
            >

                <View style={estilo.modal1} >


                    <Text style={styles.text}> Tipo de Amostra</Text>

                    <Dropdown
                        style={styles.inputleft}
                        containerStyle={styles.shadow}
                        textItem={styles.textItem}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.textItem}
                        dropdownPosition="bottom"
                        data={dt}

                        maxHeight={3000}
                        labelField="label"
                        valueField="value"
                        placeholder=""

                        value={tipoAmostra}
                        onChange={item => {
                            setTipoAmostra(item.value);
                        }}
                        renderItem={item => _renderItem(item)}
                        textError="Error"

                    />


                    <Text style={styles.text}> Obra - Origem : </Text>
                    <TextInput

                        onChangeText={setOrigem}
                        value={origem}

                        style={styles.inputleft}
                    ></TextInput>


                    <Text style={styles.text}> DESTINO: </Text>
                    <TextInput

                        onChangeText={setDestino}
                        value={destino}

                        style={styles.inputleft}
                    ></TextInput>
                    <Text style={styles.text}>  ID Amostra: </Text>
                    <TextInput

                        onChangeText={setIdAmostra}
                        value={idAmostra}

                        style={styles.inputleft}
                    ></TextInput>
                    <Text style={styles.text}> Profundidade inicial: </Text>
                    <TextInput

                        onChangeText={setProfundidadeInicial}
                        value={profundidadeInicial}

                        style={styles.inputleft}
                    ></TextInput>

                    <Text style={styles.text}> Profundidade Final: </Text>
                    <TextInput

                        onChangeText={setProfundidadeFinal}
                        value={profundidadeFinal}

                        style={styles.inputleft}
                    ></TextInput>



                    <TouchableOpacity style={styles.button1}


                        onPress={SalvarBancoSQLite1}
                    >
                        <Text style={styles}> Adicionar </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.button1}
                        onPress={() => setAbrir(false)}


                    >
                        <Text style={styles}> Fechar </Text>
                    </TouchableOpacity>

                </View>

            </Modal>

























            <View style={styles.container}>
                {datePicker && (
                    <DateTimePicker



                        value={dataEntrada1}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected}


                    />
                )}

                {timePicker && (
                    <DateTimePicker
                        value={horarioEntrada1}
                        mode={'time'}
                        display={'default'}
                        is24Hour={true}
                        onChange={onTimeSelected}
                        style={styles.datePicker}
                    />
                )}










                <Text></Text>
                <Text style={styles.text}> Número da Amostra </Text>
                <TextInput
                    onChangeText={setNumeroAmostra}
                    value={numeroAmostra}
                    editable={true}
                    style={styles.inputleft}
                ></TextInput>





                <Text style={styles.text}></Text>
                <TouchableOpacity style={styles.button1}
                    onPress={() => verificar1()}


                >
                    <Text style={styles.text}> Buscar  </Text>
                </TouchableOpacity>
                <Text></Text><Text></Text>


                {habilita == true ? <Text style={styles.text}>Adicionar amostras  </Text> : null}
                {habilita == true ? <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Tipos de amostra:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.tipoAmostra}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Obra-Origem:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.origem}
                                    </Text>


                                    <Text style={styles.labelperfuracao}>Destino:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.destino}
                                    </Text>


                                    <Text style={styles.labelperfuracao}>ID Amostra:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.idAmostra}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Prof inicial:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.profundidadeInicial}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Prof Final:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.profundidadeFinal}
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.deleteTask}


                                        onPress={() => {
                                            Delete(item.id)
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
                </ScrollView  > : null}
                <Text></Text>

                {habilita == true ? <TouchableOpacity

                    style={styles.button1}
                    disabled={bloquear}

                    onPress={() => setAbrir(true)}
                >
                    <Text style={styles.text}>Amostras  </Text>

                </TouchableOpacity> : null}









                <Text></Text>
















                {habilita == true ? <Text style={styles.text}>Observação:</Text> : null}
                {habilita == true ? <TextInput
                    onChangeText={setObservacao}
                    value={observacao}
                    multiline={true}
                    style={styles.input3}
                    editable={true}

                ></TextInput> : null}
                <Text></Text>






                <View style={styles.containerrow1}>
                    {habilita == true ? <TouchableOpacity style={styles.button111}
                        onPress={() => props.navigation.navigate('AssinaturaAmostragem')}>
                        <Text style={styles.text}>Assinatura</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity> : null}

                </View>
                <Text></Text>

                {habilita == true ? <Text style={styles.text}> Coleta de Amostras </Text> : null}
                <Text></Text>




                <View style={styles.containerrow1}>

                {habilita == true ?   <TouchableOpacity style={styles.button111}
                        onPress={() => props.navigation.navigate('Deformada')}


                    >
                        <Text style={styles.text}> Deformada </Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                    </TouchableOpacity>: null}
                </View>
                <View style={styles.containerrow1}>
                {habilita == true ?   <TouchableOpacity style={styles.button111}
                        onPress={() => props.navigation.navigate('Indeformada')}


                    >
                        <Text style={styles.text}> Indeformada  </Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                    </TouchableOpacity>: null}
                </View>

                <View style={styles.containerrow1}>

                {habilita == true ?    <TouchableOpacity style={styles.button111}

                        onPress={() => props.navigation.navigate('IndeformadaTubo')}

                    >
                        <Text style={styles.text}> Indeformada(Tubo)  </Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                    </TouchableOpacity>: null}
                </View>






                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={SalvarBancoSQLite}

                >
                    <Text style={styles.text}>Salvar  </Text>
                </TouchableOpacity> : null}


                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={Finalizar}

                >
                    <Text style={styles.text}>Finalizar  </Text>
                </TouchableOpacity> : null}






                <Text style={styles.text}> </Text>























            </View>

        </ScrollView>




    );
};
const estilo = StyleSheet.create({

    modal1: {

        backgroundColor: '#000',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10


    },
})

export default TrasnsporteAmostra;