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
import { compareDesc } from "date-fns";


const Deformada = (props) => {



    api2 = Conexao.api



    const [test, setTest] = useState(false)
    const [aux, setAux] = useState();




    const [datePicker, setDatePicker] = useState(false);
    const [dataa, setDataa] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [test1, setTest1] = useState(false)
    const [aux1, setAux1] = useState();
    const [loading, setLoading] = useState(false)




    const [numeroAmostra, setNumeroAmostra] = useState("")

    const [origem, setOrigem] = useState()
    const [destino, setDestino] = useState()
    const [idAmostra, setIdAmostra] = useState()





    const [observacao, setObservacao] = useState()
    const [cliente, setCliente] = useState()
    const [local, setLocal] = useState()
    const [estrutura, setEstrutura] = useState()
    const [identificacao, setIdentificacao] = useState()
    const [coordenadax, setCoordenadax] = useState()
    const [coordenaday, setCoordenaday] = useState()
    const [profundidadeInicial, setProfundidadeInicial] = useState()
    const [profundidadeFinal, setProfundidadeFinal] = useState()
    const [profundidade, setProfundidade] = useState()
    const [descricao,setDescricao ] = useState()
    const [profundidadeTopo, setProfundidadeTopo] = useState()
    const [profundidadeBase, setProfundidadeBase] = useState()
    const [identificacaoAmostra, setidentificacaoAmostra] = useState()








    const [reload, setReload] = useState(false)
    const [reload1, setReload1] = useState(false)
    const [reload2, setReload2] = useState(false)




    const [habilita, setHabilita] = useState(true)
    const [abrir, setAbrir] = useState(false);

    const [bloquear, setBloquear] = useState(false);
    const [bloquear1, setBloquear1] = useState(false);

    const [connState, setConnState] = useState(0);



    const [task, setTask] = useState([]);





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
        setDataa(value)


        setDatePicker(false);
    };







    function showTimePicker() {
        setTest1(true)
        setTimePicker(true);
    };
















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

















    function Limpar() {

        setObservacao('')


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
            tx.executeSql('SELECT * FROM AmostraDeformada WHERE numeroAmostra = ?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }

                if (temp.length > 0) {
                    setHabilita(true)


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
        const res = await axios.get(this.api2 + 'BuscarAmostraDeformada.php?numeroAmostra=' + numeroAmostra);

        if (res.data.success === true) {


            setCliente(res.data.result[0].cliente)
            setLocal(res.data.result[0].local)
            setEstrutura(res.data.result[0].estrutura)
            setIdentificacao(res.data.result[0].identificacao)
            setCoordenadax(res.data.result[0].coordenadax)
            setCoordenaday(res.data.result[0].coordenaday)
            setProfundidadeInicial(res.data.result[0].profundidadeInicial)
            setProfundidadeFinal(res.data.result[0].profundidadeFinal)
            setProfundidade(res.data.result[0].profundidade)
            setDescricao(res.data.result[0].descricao)
            setObservacao(res.data.result[0].observacao)
            


   
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
                    "create table if not exists AmostraDeformada ( cliente text , numeroAmostra text ,  local text ,   estrutura text,   dataa text,   identificacao text,   coordenadax text,   coordenaday text,   profundidadeInicial text,   profundidadeFinal text,   observacao text);"
                );
                console.log(" Nova tabela gerada")
            });
    };






    const gerarBancoSQlite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists AmostraDeformadaModal  ( id INTEGER PRIMARY KEY AUTOINCREMENT, cliente text , numeroAmostra text, profundidadeTopo text , profundidadeBase text , identificacaoAmostra text   );"
                );
                console.log(" Nova tabela gerada")
            });
    };






    const SalvarBancoSQLite = () => {


        db.transaction(
            (tx) => {
                tx.executeSql(`insert into AmostraDeformada (cliente , numeroAmostra , local , estrutura , dataa , identificacao , coordenadax , coordenaday , profundidadeInicial ,profundidadeFinal, observacao ) values ('${cliente}','${numeroAmostra}','${local}','${estrutura}','${dataa}','${identificacao}','${coordenadax}','${coordenaday}','${profundidadeInicial}','${profundidadeFinal}','${observacao}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),

        );
    };




    const SalvarBancoSQLite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into AmostraDeformadaModal ( cliente , numeroAmostra ,  profundidadeTopo , profundidadeBase , identificacaoAmostra ) values ('${cliente}','${numeroAmostra}','${profundidadeTopo}','${profundidadeBase}','${identificacaoAmostra}'   )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir(false),

            MensagemSalvarOffline1(),
            listarDados1(),

        );
    };










    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AmostraDeformada WHERE numeroAmostra =?',  [numeroAmostra], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {




                    setCliente(results.rows.item(0).cliente)
                    setLocal(results.rows.item(0).local)
                    setEstrutura(results.rows.item(0).estrutura)
                    setDataa(results.rows.item(0).dataa)
                    setIdentificacao(results.rows.item(0).identificacao)
                    setCoordenadax(results.rows.item(0).coordenadax)
                    setCoordenaday(results.rows.item(0).coordenaday)
                    setProfundidadeInicial(results.rows.item(0).profundidadeInicial)
                    setProfundidadeFinal(results.rows.item(0).profundidadeFinal)
                    setObservacao(results.rows.item(0).observacao)


                }

                BuscaBancoSQl1()

            });


        });
    };




    ///////////////////////////////////Finalizar, envia de dados off para o banco online  ///////////////////////////


    const Finalizar = () => {
        console.log(numeroAmostra)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM AmostraDeformada where numeroAmostra = ?', [numeroAmostra], (tx, results) => {
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
                SalvarAmostragem(lista[i].numeroAmostra, lista[i].cliente, lista[i].local, lista[i].estrutura, lista[i].identificacao, lista[i].coordenadax, lista[i].coordenaday, lista[i].profundidadeInicial, lista[i].profundidadeFinal, lista[i].profundidade, lista[i].descricao, lista[i].observacao)
            )
        })

    }
    async function SalvarAmostragem() {
        try {
            const obj = { numeroAmostra: numeroAmostra,cliente: cliente,local: local,estrutura: estrutura,identificacao: identificacao,coordenadax: coordenadax,coordenaday: coordenaday,profundidadeInicial: profundidadeInicial,profundidadeFinal: profundidadeFinal,profundidade: profundidade,descricao: descricao, observacao: observacao };
            const res = await axios.post(this.api2 + 'SalvarAmostraDeformada.php', obj);
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
            tx.executeSql('SELECT * FROM AmostraDeformada where numeroAmostra = ?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
           
                add1(temp); // Chame a função add1 passando a lista temp
                console.log(temp, 'ok')
            });
        });
    };

    async function add1(lista) {
        const results = []

        for (let i = 0; i < lista.length; ++i) {
            results.push(
                SalvarAmostraDeformada(lista[i].numeroAmostra, lista[i].cliente, lista[i].local, lista[i].estrutura, lista[i].identificacao, lista[i].coordenadax, lista[i].coordenaday, lista[i].profundidadeInicial, lista[i].profundidadeFinal, lista[i].profundidade, lista[i].descricao, lista[i].observacao)
            );
        }

        // Aguardar todas as chamadas de API terminarem, se necessário
        await Promise.all(results);
    }

    async function SalvarAmostraDeformada(numeroAmostra, cliente, local, estrutura, identificacao, coordenadax, coordenaday ,profundidadeInicial,profundidadeFinal, profundidade , descricao , observacao ) {
        const obj = { numeroAmostra, cliente, local, estrutura, identificacao, coordenadax, coordenaday, profundidadeInicial,profundidadeFinal, profundidade, descricao, observacao };

        try {
            const res = await axios.post(api2 + 'SalvarAmostraDeformada.php', obj);
            if (res.data.success === true) {
                console.log("Amostra deformada Salva");
            }
        } catch (error) {
            console.error("Erro ao salvarAmostra:", error);
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

            tx.executeSql('SELECT * FROM AmostraDeformadaModal WHERE numeroAmostra =?', [numeroAmostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log('Tabela OFF AmostraDeformadaModal:', temp)
            });


        });
    };






    let DeleteBancoSQlite1 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  AmostraDeformadaModal where id =?',
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
                'DROP TABLE IF EXISTS  AmostraDeformadaModal ',
                console.log('Banco Deletado')

            );

        });
    };
    useEffect(() => {


        // DeleteBancoSQlite()



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
        // BuscaBancoSQl()
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





                    <Text style={styles.text}> Profundidade (m): </Text>
                    <TextInput

                        onChangeText={setProfundidadeTopo}
                        value={profundidadeTopo}

                        style={styles.inputleft}
                    ></TextInput>


                    {/* <Text style={styles.text}> Profundidade Base: </Text>
                    <TextInput

                        onChangeText={setProfundidadeBase}
                        value={profundidadeBase}

                        style={styles.inputleft}
                    ></TextInput>

                    <Text style={styles.text}> Identificação da Amostra: </Text>
                    <TextInput

                        onChangeText={setidentificacaoAmostra}
                        value={identificacaoAmostra}

                        style={styles.inputleft}
                    ></TextInput> */}


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



                        value={dataa}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected}


                    />
                )}











                <Text></Text>

                <View style={styles.container}>


                    <Text style={styles.text}> Amostra: </Text>
                    <TextInput
                        onChangeText={setNumeroAmostra}
                        value={numeroAmostra}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.button}


                        onPress={() => verificar1()}

                    >
                        <Text style={styles.text}>Buscar  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>


                    <Text style={styles.text}> Cliente: </Text>
                    <TextInput
                        onChangeText={setCliente}
                        value={cliente}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>





                <View style={styles.container}>


                    <Text style={styles.text}> Local: </Text>
                    <TextInput
                        onChangeText={setLocal}
                        value={local}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>





                <View style={styles.container}>


                    <Text style={styles.text}> Estrutura: </Text>
                    <TextInput
                        onChangeText={setEstrutura}
                        value={estrutura}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>





                <Text style={styles.text}>Data:</Text>
                <TouchableOpacity

                    disabled={bloquear1}
                    style={styles.inputlef2t} onPress={showDatePicker} >
                    <Text
                    >  {test == true ? `${dataa ? moment(dataa).format("DD/MM/YYYY") : "Por Favor Selecione a Data"}` : aux}</Text>
                </TouchableOpacity>
                <View style={styles.container}>

                    <Text style={styles.text}> Identificação Do Furo/Amostra: </Text>
                    <TextInput
                        onChangeText={setIdentificacao}
                        value={identificacao}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>



                <Text style={styles.text}> Coordenada X: </Text>
                <TextInput

                    onChangeText={setCoordenadax}
                    value={coordenadax}

                    style={styles.inputlef2t}
                ></TextInput>
                <View style={styles.container}>


                    <Text style={styles.text}> Coordenada Y: </Text>
                    <TextInput
                        onChangeText={setCoordenaday}
                        value={coordenaday}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>
                <View style={styles.container}>


                    <Text style={styles.text}> Profundidade Inicial: </Text>
                    <TextInput
                        onChangeText={setProfundidadeInicial}
                        value={profundidadeInicial}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>


                <View style={styles.container}>


                    <Text style={styles.text}> Profundidade Final: </Text>
                    <TextInput
                        onChangeText={setProfundidadeFinal}
                        value={profundidadeFinal}
                        editable={true}
                        style={styles.inputlef2t}
                    ></TextInput>
                </View>


                <View style={styles.container}>


<Text style={styles.text}> Profundidade: </Text>
<TextInput
    onChangeText={setProfundidade}
    value={profundidade}
    editable={true}
    style={styles.inputlef2t}
></TextInput>
</View>


{habilita == true ? <Text style={styles.text}>Descrição do material Amostrado :</Text> : null}
                {habilita == true ? <TextInput
                    onChangeText={setDescricao}
                    value={descricao}
                    multiline={true}
                    style={styles.input3}
                    editable={true}

                ></TextInput> : null}



                <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>




                                    <Text style={styles.labelperfuracao}>Profundidade:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.profundidadeTopo}
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
                </ScrollView  >
                <Text></Text>

                {/* <TouchableOpacity

                    style={styles.button1}
                    disabled={bloquear}

                    onPress={() => setAbrir(true)}
                >
                    <Text style={styles.text}>Trado  </Text>

                </TouchableOpacity>


 */}






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


                <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={SalvarBancoSQLite}

                >
                    <Text style={styles.text}>Salvar  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={Finalizar1}

                >
                    <Text style={styles.text}>Finalizar  </Text>
                </TouchableOpacity>



                <Text></Text>



                <Text></Text>
                <Text></Text>




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

export default Deformada;