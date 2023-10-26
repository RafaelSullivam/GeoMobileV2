import React, { useEffect, useState, Component } from "react";
import { Button, SafeAreaView, Image, Text, Modal, FlatList, StyleSheet, View, Alert, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import styles from "./styleManutencao";
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


const Manutencao = (props) => {



    api2 = Conexao.api

    // teste novo datepicker

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [test, setTest] = useState(false)
    const [aux, setAux] = useState();



    // variaveis  data e hora  de entrada 
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

    // variaveis  data e hora  de saida 
    const [datePicker1, setDatePicker1] = useState(false);
    const [dataSaida, setDataSaida] = useState(new Date());
    const [dataSaida1, setDataSaida1] = useState(new Date());
    const [timePicker1, setTimePicker1] = useState(false);
    const [horarioSaida, setHorarioSaida] = useState(new Date(Date.now()));
    const [horarioSaida1, setHorarioSaida1] = useState(new Date(Date.now()));


    const [test3, setTest3] = useState(false)
    const [aux3, setAux3] = useState();
    const [loading, setLoading] = useState(false)



    // variaveis   de data do Modal de Realização do Serviço
    const [datePicker2, setDatePicker2] = useState(false);
    const [dataModal, setDataModal] = useState(new Date());
    const [datamodal1, setDataModal1] = useState(new Date());

    // variaveis   de data do Modal de Diário de bordo
    const [datePicker3, setDatePicker3] = useState(false);
    const [dataModal2, setDataModal2] = useState(new Date());
    const [datamodal3, setDataModal3] = useState(new Date());



    const [equipamentos, setEquipamento] = useState("")
    const [solicitante, setSolicitante] = useState("")
    const [numeroOs, setNumeroOs] = useState("")
    const [codigoTag, setCodigoTag] = useState("")
    const [modelo, setModelo] = useState("")
    const [dataPrevisaoSaida, setDataPrevisaoSaida] = useState()
    const [tipoManutencao, setTipoManutencao] = useState("")
    const [interna_externa, setInterna_externa] = useState()
    const [descricao, setDescricao] = useState()
    const [descricaoModal, setDescricaoModal] = useState()
    const [item, setItem] = useState()
    const [descricaoPeca, setDescricaoPeca] = useState()
    const [quantidade, setQuantidade] = useState()
    const [responsavel, setResponsavel] = useState()
    const [atividade, setAtividade] = useState()
    const [obs, setObs] = useState()
    const [reload, setReload] = useState(false)
    const [reload1, setReload1] = useState(false)
    const [reload2, setReload2] = useState(false)
    const [reload3, setReload3] = useState(false)
    const [reload4, setReload4] = useState(false)
    const [reload5, setReload5] = useState(false)
    const [reload6, setReload6] = useState(false)
    const [reload7, setReload7] = useState(false)
    const [reload8, setReload8] = useState(false)
    const [descricaocausa, setDescricaocausa] = useState()
    const [statu, setStatu] = useState('')
    const [habilita, setHabilita] = useState(false)
    const [habilita1, setHabilita1] = useState(false)
    const [habilita2, setHabilita2] = useState(false)
    const [abrir, setAbrir] = useState(false);
    const [abrir1, setAbrir1] = useState(false);
    const [abrir2, setAbrir2] = useState(false);
    const [abrir3, setAbrir3] = useState(false);
    const [abrir4, setAbrir4] = useState(false);
    const [bloquear, setBloquear] = useState(false);
    const [bloquear1, setBloquear1] = useState(false);
    const [opc, setOpc] = useState(true);
    const [opc1, setOpc1] = useState(true);
    const [opc2, setOpc2] = useState(true)

    const [connState, setConnState] = useState(0);



    const [task, setTask] = useState([]);
    const [task1, setTask1] = useState([]);
    const [task2, setTask2] = useState([]);
    const [task3, setTask3] = useState([]);
    const [task4, setTask4] = useState([])


    const [manutencaoPC, setManutencaoPC] = useState();
    const dt = [


        { label: 'Preventiva', value: 'Preventiva' },
        { label: 'Corretiva', value: 'Corretiva' },


    ];

    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };





    const [tipo, setTipo] = useState();
    const dt1 = [


        { label: 'Caldeira', value: 'Caldeira' },
        { label: 'Mecânica', value: 'Mecânica' },
        { label: 'Elétrica', value: 'Elétrica' },
        { label: 'Geral', value: 'Geral' },



    ];






    const [causa, setCausa] = useState();
    const dt2 = [



        { label: 'Avaria Normal(por desgaste,etc)', value: 'Avaria Normal(por desgaste,etc)' },
        { label: 'Manutenção deficiente', value: 'Manutenção deficiente' },
        { label: 'Falta de inspeção on-line', value: 'Falta de inspeção on-line' },
        { label: 'Operação inadequada', value: 'Operação inadequada' },
        { label: 'Defeito do equipamento ou instalção', value: 'Defeito do equipamento ou instalção' },
        { label: 'Limpeza inadequada', value: 'Limpeza inadequada' },
        { label: 'Manutenção Preventiva', value: 'Manutenção Preventiva' },
        { label: 'Melhoria', value: 'Melhoria' },
        { label: 'Outros', value: 'Outros' },


    ];














    const MensagemSalvarOffline = () =>
        Alert.alert(
            "                          Salvo off! ",
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


    const MensagemSalvarOffline2 = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            ""
            [
            { text: "OK", onPress: (listarDados2()) }
            ]
        );



    const MensagemSalvarOffline3 = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            ""
            [
            { text: "OK", onPress: (listarDados3()) }
            ]
        );


    const MensagemSalvarOffline4 = () =>
        Alert.alert(
            "                          Causa Salva com sucesso! ",
            ""
            [
            { text: "OK", onPress: (listarDados8()) }
            ]
        );
















    const msgErro = () =>
        Alert.alert(setHabilita(false),
            "                          Ordem  não existe! ",
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
            "                           Ordem Finalizada!",
            "",
            [
                {

                },
            ]
        );
    const mensagemencerrar = () =>
        Alert.alert(
            "                           Ordem Encerrada!",
            "",
            [
                {

                },
            ]
        );



    const mensagemErro = () =>
        Alert.alert(
            "                          Ordem de Serviço não existe!",

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





    function showDatePicker1() {
        setTest2(true)
        setDatePicker1(true);
    }

    function showTimePicker1() {
        setTest3(true)
        setTimePicker1(true);
    };

    function onDateSelected1(event, value) {
        setDataSaida1(value)


        setDatePicker1(false);
    };

    function onTimeSelected1(event, value) {
        setHorarioSaida1(value);

        setTimePicker1(false);
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










    function listarDados() {
        setReload(true)
    }




    function listarDados1() {
        setReload1(true)
    }



    function listarDados2() {
        setReload2(true)
    }


    function listarDados3() {
        setReload3(true)
    }



    function listarDados4() {
        setReload4(true)
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
        setTask1([])
        setTask2([])
        setTask3([])
        setTask4([])
    }



    function Limpar() {
        setEquipamento('')
        setSolicitante('')
        setCodigoTag('')
        setModelo('')
        setDataPrevisaoSaida('')
        setTipoManutencao('')
        setInterna_externa('')
        setAux('')
        setAux1('')
        setAux2('')
        setAux3('')
        setDescricao('')
        setTask('')
        setTask1('')
        setTask2('')
        setTask3('')
        setTask4('')
    }



    function FinalizarTD() {
        {

            Finalizar(),
                Finalizar1(),
                Finalizar2(),
                Finalizar3(),
                Finalizar4(),
                setBloquear(false),
                mensagemfinalizar()
        }

    };


    function HabilitarTD(Status) {
        if (Status === "Em manutencao") {

            setHabilita(true)
            setHabilita2(false)
            setBloquear1(true)
            setHabilita1(true)
        } else {
            setHabilita2(true)
            setHabilita1(true)


        }

    };







    // function BuscarON() {

    //     // Buscar()
    //     // verificar1()

    //     // HabilitarTD()
    //     // BuscaBancoSQl()
    //     // BuscaBancoSQl1()
    //     // BuscaBancoSQl2()
    //     // BuscaBancoSQl3()
    //     // BuscaBancoSQl5()
    //     if (connState.isConnected === true) {
    //         Buscar()

    //     } else {
    //         verificar1()


    //     }

    // };




    // function Salvar1() {
    //     if (connState.isConnected === true) {
    //         add1(), SalvarBancoSQLite1()
    //     } else {

    //         SalvarBancoSQLite1()
    //     }

    // };

    // function Salvar2() {
    //     if (connState.isConnected === true) {
    //         add2(), SalvarBancoSQLite2()
    //     } else {

    //         SalvarBancoSQLite2()
    //     }

    // };


    // function Salvar3() {
    //     if (connState.isConnected === true) {
    //         add3(), SalvarBancoSQLite3()
    //     } else {

    //         SalvarBancoSQLite3()
    //     }

    // };


    // function Salvar4() {
    //     if (connState.isConnected === true) {
    //         add4()
    //     } else {


    //     }

    // };




    // function Salvar5() {
    //     if (connState.isConnected === true) {
    //         add5(), SalvarBancoSQLite5()
    //     } else {

    //     }

    // };







    function Delete(id) {
        if (connState.isConnected === true) {
            deleteItem(id), DeleteBancoSQlite1(id)
        } else {
            deleteItem(id)
            DeleteBancoSQlite1(id)
        }

    }


    function Delete1(id) {
        if (connState.isConnected === true) {
            deleteItem1(id), DeleteBancoSQlite2(id)
        } else {

            DeleteBancoSQlite2(id)
        }

    }

    function Delete2(id) {
        if (connState.isConnected === true) {
            deleteItem2(id), DeleteBancoSQlite3(id)
        } else {

            DeleteBancoSQlite3(id)
        }

    }

    function Delete3(id) {
        if (connState.isConnected === true) {
            deleteItem3(id), DeleteBancoSQlite4(id)
        } else {

            DeleteBancoSQlite4(id)
        }

    }


    function Delete4(id) {
        if (connState.isConnected === true) {
            deleteItem4(id), DeleteBancoSQlite5(id)
        } else {

            DeleteBancoSQlite5(id)
        }

    }



    function FecharOrdem() {
        if ("") {
            setBloquear(true)
        } else {
            setBloquear(false)

        }
    }




    async function Finalizar0(Status) {
        if (Status !== "Finalizada") {

            setOpc1(true)
            setOpc2(true)
        } else {
            setOpc1(false)
            setOpc2(false)
            setBloquear(true)
        }

    }




    const verificar1 = () => {
        setLoading(true)
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretiva WHERE numeroOs = ?', [numeroOs], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }

                if (temp.length > 0) {
                    setHabilita(true)
                    setHabilita1(true)
                    setBloquear1(true)
                    BuscaBancoSQl()
                    BuscaBancoSQl1()
                    BuscaBancoSQl2()
                    BuscaBancoSQl3()
                    BuscaBancoSQl5()
                    setLoading(false)
                    console.log('Tabela off Manutenção preventiva e corretiva :', temp);

                } else {
                    if (connState.isConnected === true) {
                        Buscar()
                        HabilitarTD()
                    }
                    else { (temp.length <= 0)

                        msgErro()


                        console.log(statu, 'Ordem não existe.');

                    }
                }
            });
        });
    };










    async function Buscar() {
        setLoading(true)
        setBloquear(false)
        Limpar()
        const res = await axios.get(this.api2 + 'ListaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

        if (res.data.success === true) {


            HabilitarTD(res.data.result[0].statu)

            // Finalizar(res.data.result[0].statu)
            setEquipamento(res.data.result[0].equipamentos)
            setCodigoTag(res.data.result[0].codigoTag)
            setSolicitante(res.data.result[0].solicitante)
            setModelo(res.data.result[0].modelo)
            setDataPrevisaoSaida(res.data.result[0].dataPrevisaoSaida)
            setTipoManutencao(res.data.result[0].corretiva_preventiva)
            setInterna_externa(res.data.result[0].interna_externa)
            setObs(res.data.result[0].obs)
            setAux(res.data.result[0].dataEntrada)
            setAux1(res.data.result[0].horarioEntrada)
            setAux2(res.data.result[0].dataSaida)
            setAux3(res.data.result[0].horarioSaida)
            setDescricao(res.data.result[0].descricao)
            data()
            data1()
            data2()
            data3()

            Buscar1()
            Buscar2()
            Buscar3()
            Buscar4()
            Buscar5()
            setLoading(false)
        }
        else {
            setHabilita(false)
            setHabilita1(false)
            setHabilita2(false)
            msgErro()
            
        }
    };




    // const Finaliza = () => {

    //     db.transaction((tx) => {
    //       tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretiva WHERE numerOs = ? ', [numeroOs], (tx, results) => {
    //         var temp = [];
    //         if (results.rows.length > 0) {

    //             console.log('--------->',temp)
    //           add(results.rows.item(0).codigoTag,results.rows.item(0).equipamentos, results.rows.item(0).solicitante, results.rows.item(0).modelo, results.rows.item(0).dataEntrada, results.rows.item(0).horarioEntrada1, results.rows.item(0).dataPrevisaoSaida, results.rows.item(0).dataSaida1, results.rows.item(0).horarioSaida1, results.rows.item(0).tipoManutencao, results.rows.item(0).interna_externa, results.rows.item(0).descricao , results.rows.item(0).statu )

    //         }
    //       });
    //     });
    //   }
    //   async function add(codigoTag, equipamentos, solicitante, modelo, dataEntrada, horarioEntrada1, dataPrevisaoSaida, dataSaida1, horarioSaida1, tipoManutencao, interna_externa, descricao, statu) {


    //     const obj = { numeroOs ,codigoTag:codigoTag, equipamentos:equipamentos, solicitante:solicitante, modelo:modelo, dataEntrada:dataEntrada, horarioEntrada:horarioEntrada1, dataPrevisaoSaida:dataPrevisaoSaida, dataSaida:dataSaida1, horarioSaida:horarioSaida1, tipoManutencao:tipoManutencao, interna_externa:interna_externa, descricao:descricao, statu:statu };

    //     if (numeroOs > 0) {
    //       const res = await axios.post(this.api + 'SalvarStatusManutencao.php', obj);
    //       if (res.data.success === true) {
    //         console.log(res)
    //         console.log('Ordem Finalizada')
    //         mensagemsalvar()
    //       }
    //     }
    //   }


























    async function login() {
        if (nivel.nivel == "Gerente") {
            setOpc(true)
            setOpc1(true)
            setOpc2(true)
        } else {
            setOpc(false)
            setOpc1(false)
            setOpc2(false)
        }

    }


    async function Buscar1() {

        const res = await axios.get(this.api2 + 'ListaDinamicaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
        console.log(res.data.result)


        if (res.data.success === true) {




            setTask(res.data.result)





        }
    };



    async function Buscar2() {


        const res = await axios.get(this.api2 + 'ListaDinamica_1ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
        console.log(res.data.result)


        if (res.data.success === true) {

            setTask1(res.data.result)






        }
    };




    async function Buscar3() {


        const res = await axios.get(this.api2 + 'ListaDinamica_2ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);



        if (res.data.success === true) {

            setTask2(res.data.result)





        }
    };




    async function Buscar4() {


        const res = await axios.get(this.api2 + 'ListaDinamica_3ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);



        if (res.data.success === true) {


            setTask3(res.data.result)






        }
    };

    async function Buscar5() {


        const res = await axios.get(this.api2 + 'ListaDinamica_4ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);



        if (res.data.success === true) {


            setTask4(res.data.result)






        }
    };





    // async function FinalizarOrdem(finalizada) {
    //     const obj = { numeroOs, statu: finalizada, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, codigoTag, obs };


    //     const res = await axios.post(this.api2 + 'SalvarManutencaoPreventivaCorretiva.php', obj);


    //     console.log(statu)
    //     if (res.data.success === true) {

    //         mensagemfinalizar();
    //     }

    // };



    // async function EncerrarOrdem(encerrado) {
    //     const obj = { numeroOs, statu: encerrado, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, codigoTag, obs };


    //     const res = await axios.post(this.api2 + 'SalvarManutencaoPreventivaCorretiva.php', obj);


    //     console.log(statu)
    //     if (res.data.success === true) {

    //         mensagemencerrar();
    //     }

    // };

    async function

        StatusOrdem(status) {
        console.log('status-->', status)
        const obj = { statu: status, numeroOs, dataEntrada, horarioEntrada };


        const res = await axios.post(this.api2 + 'SalvarStatusManutencao.php', obj);



        if (res.data.success === true) {


            setHabilita(true)
        }

    };


    async function add4() {
        const obj = { numeroOs, dataModal2, atividade };


        const res = await axios.post(this.api2 + 'InsertListaDinamica3.php', obj);


        if (res.data.success === true) {
            mensagemsalvar();

        }

    };


    async function deleteItem(id) {

        const res = await axios.get(this.api2 + 'ExcluirListaDinamica.php?id=' + id);

        if (res.data.success === true) {

            mensagemdeletar()
            listarDados4()



        }

    };


    async function deleteItem1(id) {

        const res = await axios.get(this.api2 + 'ExcluirListaDinamica1.php?id=' + id);

        if (res.data.success === true) {

            mensagemdeletar()
            listarDados5()
        }

    };




    async function deleteItem2(id) {

        const res = await axios.get(this.api2 + 'ExcluirListaDinamica2.php?id=' + id);

        if (res.data.success === true) {


            listarDados6()
            mensagemdeletar()
        }

    };




    async function deleteItem4(id) {

        const res = await axios.get(this.api2 + 'ExcluirListaDinamica4.php?id=' + id);

        if (res.data.success === true) {


            listarDados7()
            mensagemdeletar()
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
                    "create table if not exists ManutecaoPreventivaCorretiva (numeroOs text , codigoTag text , equipamentos text , solicitante text , modelo text ,dataEntrada text , horarioEntrada1 text , dataPrevisaoSaida text , dataSaida1 text, horarioSaida1 text,  tipoManutencao text , interna_externa text , descricao text , statu text );"
                );
                console.log(" Novo Banco de dados Gerado")
            });
    };




    const gerarBancoSQlite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists ReposicaodePecasComponentes (id INTEGER PRIMARY KEY AUTOINCREMENT, numeroOs text , item text , descricaoPeca text , quantidade text );"
                );
                console.log("Banco de dados iniciado")
            });
    };


    const gerarBancoSQlite2 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists ManutecaoPreventivaCorretivaModal  ( id INTEGER PRIMARY KEY AUTOINCREMENT, numeroOs text , descricaoModal text , manutencaoPC text  );"
                );
                console.log("Banco de dados iniciado")
            });
    };




    const gerarBancoSQlite3 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists RealizacaoServico  ( id INTEGER PRIMARY KEY AUTOINCREMENT, numeroOs text , responsavel text , tipo text , dataModal text  );"
                );
                console.log("Banco de dados iniciado")
            });
    };


    const gerarBancoSQlite4 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists DiariodeBordo (id INTEGER PRIMARY KEY AUTOINCREMENT,numeroOs text , dataModal2 text ,  atividade text );"
                );
                console.log("Banco de dados iniciado")
            });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const gerarBancoSQlite5 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists PossivesCausas (id INTEGER PRIMARY KEY AUTOINCREMENT,numeroOs text , causa text ,  descricaocausa text );"
                );
                console.log("Tabela Possives Causas Gerada ")
            });
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const SalvarBancoSQLite = () => {


        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ManutecaoPreventivaCorretiva (numeroOs , codigoTag , equipamentos, solicitante , modelo , dataEntrada , horarioEntrada1 , dataPrevisaoSaida , dataSaida1 , horarioSaida1 , tipoManutencao , interna_externa , descricao , statu) values ('${numeroOs}','${codigoTag}','${equipamentos}','${solicitante}' ,'${modelo}','${dataEntrada}' ,'${horarioEntrada}' ,'${dataPrevisaoSaida}' ,'${dataSaida}' ,'${horarioSaida}' ,'${tipoManutencao}' ,'${interna_externa}','${descricao}','${statu}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            MensagemSalvarOffline(),

        );
    };




    const SalvarBancoSQLite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ManutecaoPreventivaCorretivaModal ( numeroOs , descricaoModal , manutencaoPC  ) values ('${numeroOs}','${descricaoModal}','${manutencaoPC}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir(false),

            MensagemSalvarOffline(),
            listarDados(),

        );
    };




    const SalvarBancoSQLite2 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ReposicaodePecasComponentes (numeroOs , item , descricaoPeca , quantidade ) values 
                ( '${numeroOs}','${item}','${descricaoPeca}','${quantidade}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir1(false),

            MensagemSalvarOffline1(),


        );
    };



    const SalvarBancoSQLite3 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into RealizacaoServico (numeroOs, responsavel , tipo , dataModal  ) values ('${numeroOs}','${responsavel}','${tipo}','${dataModal}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir2(false),

            MensagemSalvarOffline2(),

        );
    };


    // const SalvarBancoSQLite4 = () => {
    //     db.transaction(
    //         (tx) => {
    //             tx.executeSql(`insert into DiariodeBordo (  dataModal2 , atividade ) values ('${dataModal2}','${atividade}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

    //         },

    //         setAbrir3(false),

    //         MensagemSalvarOffline3(),

    //     );
    // };


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const SalvarBancoSQLite5 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into PossivesCausas ( numeroOs, causa , descricaocausa ) values ('${numeroOs}','${causa}','${descricaocausa}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            setAbrir4(false),

            MensagemSalvarOffline4(),

        );
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretiva WHERE numeroOs =?', [numeroOs], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {



                    var userSolicitante = results.rows.item(0).solicitante
                    var userEquipamentos = results.rows.item(0).equipamentos
                    var userModelo = results.rows.item(0).modelo
                    var userDataPrevisaoSaida = results.rows.item(0).dataPrevisaoSaida
                    var userDataEntrada = results.rows.item(0).dataEntrada
                    var userDataSaida = results.rows.item(0).dataSaida1
                    var userHorarioEntrada = results.rows.item(0).horarioEntrada1
                    var userHorarioSaida = results.rows.item(0).horarioSaida1
                    var userCodigoTag = results.rows.item(0).codigoTag
                    var userDescricao = results.rows.item(0).descricao
                    var userTipoManutencao = results.rows.item(0).tipoManutencao
                    var userInterna_externa = results.rows.item(0).interna_externa



                    setSolicitante(userSolicitante)
                    setEquipamento(userEquipamentos)
                    setModelo(userModelo)
                    setDataPrevisaoSaida(userDataPrevisaoSaida)
                    setAux(userDataEntrada)
                    setAux2(userDataSaida)
                    setAux1(userHorarioEntrada)
                    setAux3(userHorarioSaida)
                    setCodigoTag(userCodigoTag)
                    setDescricao(userDescricao)
                    setTipoManutencao(userTipoManutencao)
                    setInterna_externa(userInterna_externa)

                }



            });


        });
    };




    ///////////////////////////////////Finalizar, envia de dados off para o banco online  ///////////////////////////


    const Finalizar = () => {
        console.log(numeroOs)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretiva where numeroOs = ?', [numeroOs], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));

                add11(temp)
                StatusOrdem('Em manutencao')
                console.log('Tabela off Manutenção preventiva e corretiva :', temp)
            });

        });

    };


    async function add11(lista, cont) {
        const results = []

        lista.forEach((list, index) => {
            results.push(
                SalvarManutencao(list.numeroOs, list.equipamentos, list.solicitante, list.dataPrevisaoSaida, list.modelo, list.dataEntrada, list.dataSaida, list.horarioEntrada, list.horarioSaida, list.codigoTag, list.obs)
            )
        })

    }
    async function SalvarManutencao() {
        try {
            const obj = { numeroOs: numeroOs, equipamentos: equipamentos, solicitante: solicitante, dataPrevisaoSaida: dataPrevisaoSaida, modelo: modelo, dataEntrada: dataEntrada, dataSaida: dataSaida, horarioEntrada: horarioEntrada, horarioSaida: horarioSaida, codigoTag: codigoTag, obs: obs };
            const res = await axios.post(this.api2 + 'SalvarManutencaoPreventivaCorretiva.php', obj);
            if (res.data.success === true) {
                console.log("Ordem Finalizada");
            }
        } catch (error) {
            console.error("Erro :", error);
        }
    }







    //ManutecaoPreventivaCorretivaModal


    const Finalizar1 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretivaModal where numeroOs = ?', [numeroOs], (tx, results) => {
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
                SalvarListaDinamica(lista[i].numeroOs, lista[i].descricaoModal, lista[i].manutencaoPC)
            );
        }

        // Aguardar todas as chamadas de API terminarem, se necessário
        await Promise.all(results);
    }

    async function SalvarListaDinamica(numeroOs, descricaoModal, manutencaoPC) {
        const obj = { numeroOs, descricaoModal, manutencaoPC };

        try {
            const res = await axios.post(api2 + 'InsertListaDinamica.php', obj);
            if (res.data.success === true) {
                console.log("Lista Dinamica Salva");
            }
        } catch (error) {
            console.error("Erro ao salvar lista dinâmica:", error);
        }
    }






    /////////////////////////////////////////////////////////////////////////////////



    const Finalizar2 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM ReposicaodePecasComponentes WHERE numeroOs = ?', [numeroOs], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                add2(temp);
                console.log(task1);
            });
        });
    };

    async function add2(lista) {
        const results = [];

        for (let i = 0; i < lista.length; ++i) {
            results.push(
                SalvarListaDinamica1(lista[i].numeroOs, lista[i].item, lista[i].descricaoPeca, lista[i].quantidade)
            );
        }

        await Promise.all(results);
    }

    async function SalvarListaDinamica1(numeroOs, item, descricaoPeca, quantidade) {
        const obj = { numeroOs, item, descricaoPeca, quantidade };

        try {
            const res = await axios.post(api2 + 'InsertListaDinamica1.php', obj);
            if (res.data.success === true) {
                console.log("Reposição de peças salva");
            }
        } catch (error) {
            console.error("Erro ao salvar lista dinâmica:", error);
        }
    }

    /////////////////////////////////////////////////////////////////////////





    const Finalizar3 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM RealizacaoServico WHERE  numeroOs = ?', [numeroOs], (tx, results) => {
                const temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                setTask2(temp);
                add3(temp);
                console.log('Tabela OFF RealizacaoServico:', temp);
            });
        });
    };

    async function add3(lista) {
        const results = await Promise.all(
            lista.map((list) => {
                return SalvarListaDinamica2(list.numeroOs, list.responsavel, list.tipo, list.dataModal);
            })
        );

        console.log('Lista Dinamica Salva:');
    }

    async function SalvarListaDinamica2(numeroOs, responsavel, tipo, dataModal) {
        const obj = { numeroOs, responsavel, tipo, dataModal };

        try {
            const res = await axios.post(api2 + 'InsertListaDinamica2.php', obj);
            if (res.data.success === true) {

                console.log('Serviço salvo:');
            }
        } catch (error) {
            console.error('Erro ao salvar serviço:', error);
        }
    }






    //PossivesCausas

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    const Finalizar4 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM PossivesCausas WHERE  numeroOs = ?', [numeroOs], (tx, results) => {
                const temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                setTask4(temp);
                add5(temp);
                console.log(temp);
            });
        });
    };

    async function add5(lista) {
        const results = await Promise.all(
            lista.map((list) => {
                return SalvarListaDinamica4(list.numeroOs, list.causa, list.descricaocausa);
            })
        );

    }

    async function SalvarListaDinamica4(numeroOs, causa, descricaocausa) {
        const obj = { numeroOs, causa, descricaocausa };

        try {
            const res = await axios.post(api2 + 'InsertListaDinamica4.php', obj);
            if (res.data.success === true) {

                console.log('Causa salva');
            }
        } catch (error) {
            console.error('Erro ao salvar causa:', error);
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


















    const BuscaBancoSQl1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretivaModal', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
                console.log('Tabela OFF ManutecaoPreventivaCorretivaModal:', temp)
            });


        });
    };

    const BuscaBancoSQl2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ReposicaodePecasComponentes', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log('Tabela OFF ReposicaodePecasComponentes:', temp)
            });


        });
    };




    const BuscaBancoSQl3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM RealizacaoServico', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask2(temp);
                console.log('Tabela OFF RealizacaoServico:', temp)
            });


        });
    };




    const BuscaBancoSQl5 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM PossivesCausas', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask4(temp);
                console.log('Tabela OFF PossivesCausas:', temp)
            });


        });
    };




    let DeleteBancoSQlite1 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  ManutecaoPreventivaCorretivaModal where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {


                        Alert.alert(
                            'Successo',
                            'item deletado',
                            [

                                { text: "OK", onPress: (listarDados()) }
                            ],
                            { cancelable: false }
                        );
                    } else {

                    }
                }
            );
        });
    };


    let DeleteBancoSQlite2 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  ReposicaodePecasComponentes where id =?',
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



    let DeleteBancoSQlite3 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  RealizacaoServico where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'item deletado',
                            [

                                { text: "OK", onPress: (listarDados2()) }
                            ],
                            { cancelable: false }
                        );
                    } else {

                    }
                }
            );
        });
    };





    let DeleteBancoSQlite4 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  DiariodeBordo where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'item deletado',
                            [

                                { text: "OK", onPress: (listarDados3()) }
                            ],
                            { cancelable: false }
                        );
                    } else {

                    }
                }
            );
        });
    };



    let DeleteBancoSQlite5 = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  PossivesCausas where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'item deletado',
                            [

                                { text: "OK", onPress: (listarDados8()) }
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
                'DROP TABLE IF EXISTS  ManutecaoPreventivaCorretiva ',
                console.log('Banco Deletado')

            );

        });
    };
    useEffect(() => {

        // gerarBancoSQlite()
        //  DeleteBancoSQlite()



        //Reload Banco OF adicionar e deletar 
        if (reload) {
            BuscaBancoSQl1()
            setReload(false)
        }


        if (reload1) {

            BuscaBancoSQl2()
            setReload1(false)
        }



        if (reload2) {


            BuscaBancoSQl3()
            setReload2(false)
        }


        if (reload8) {

            BuscaBancoSQl5()
            setReload8(false)
        }
















        if (reload3) {

            Buscar4()
            setReload3(false)
        }

        if (reload4) {

            setReload4(false)
        }
        if (reload5) {

            Buscar2()
            setReload5(false)
        }

        if (reload6) {

            Buscar3()
            setReload6(false)
        }

        if (reload7) {

            Buscar4()
            setReload7(false)
        }







        setHorarioEntrada(moment(horarioEntrada1).format("HH:mm"));
        setDataEntrada(moment(dataEntrada1).format("DD/MM/YYYY"));


        setHorarioSaida(moment(horarioSaida1).format("HH:mm"));
        setDataSaida(moment(dataSaida1).format("DD/MM/YYYY"));

        setDataModal(moment(datamodal1).format("DD/MM/YYYY"));
        setDataModal2(moment(datamodal3).format("DD/MM/YYYY"));

        // console.log(reload, reload1, reload2, reload3)


    });


    useEffect(() => {


        // Limpar1(),


        console.log("Numero da Ordem de Serviço:", numeroOs, 'Status da Ordem:', statu)
    }, []);


    useEffect(() => {
        login()


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



            {/* Modal de Serviço executar ou executado  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir}
                style={styles.modal1}
            >

                <View style={estilo.modal1} >


                    <Text style={styles.text}>Manutenção</Text>

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

                        value={manutencaoPC}
                        onChange={item => {
                            setManutencaoPC(item.value);
                        }}
                        renderItem={item => _renderItem(item)}
                        textError="Error"

                    />



                    <Text style={styles.text}> Descrição: </Text>
                    <TextInput

                        onChangeText={setDescricaoModal}
                        value={descricaoModal}

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




            {/* Modal de Reposição de peças  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir1}
                style={styles.modal1}
            >

                <View style={estilo.modal1} >


                    <Text style={styles.text}> Item:</Text>
                    <TextInput

                        onChangeText={setItem}

                        value={item}
                        style={styles.inputleft}
                    ></TextInput>


                    <Text style={styles.text}> Descrição: </Text>
                    <TextInput

                        onChangeText={setDescricaoPeca}

                        value={descricaoPeca}
                        style={styles.inputleft}
                    ></TextInput>



                    <Text style={styles.text}> Quantidade de Itens: </Text>
                    <TextInput

                        onChangeText={setQuantidade}
                        value={quantidade}
                        style={styles.inputleft}
                    ></TextInput>

                    <TouchableOpacity style={styles.button1}
                        onPress={SalvarBancoSQLite2}


                    >
                        <Text style={styles}> Adicionar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}
                        onPress={() => setAbrir1(false)}


                    >
                        <Text style={styles}> Fechar </Text>
                    </TouchableOpacity>
                </View>

            </Modal>






            {/* Modal de Realização de serviço  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir2}
                style={styles.modal1}
            >

                <View style={estilo.modal1} >


                    <Text style={styles.text}> Responsavel :</Text>
                    <TextInput
                        onChangeText={setResponsavel}
                        value={responsavel}
                        style={styles.inputleft}
                    ></TextInput>




                    <Text style={styles.text}> Tipo : </Text>
                    <Dropdown
                        style={styles.inputleft}
                        containerStyle={styles.shadow}
                        textItem={styles.textItem}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.textItem}
                        dropdownPosition="bottom"
                        data={dt1}

                        maxHeight={3000}
                        labelField="label"
                        valueField="value"
                        placeholder=""

                        value={tipo}
                        onChange={item => {
                            setTipo(item.value);
                        }}
                        renderItem={item => _renderItem(item)}
                        textError="Error"

                    />





                    <Text style={styles.text}> Data: </Text>

                    <TouchableOpacity style={styles.inputleft} onPress={showDatePicker2} >
                        <Text
                        >  {`${datamodal1 ? moment(datamodal1).format("DD/MM/YYYY") : "Please select date"}`}</Text>
                    </TouchableOpacity>






                    <TouchableOpacity style={styles.button1}
                        onPress={SalvarBancoSQLite3}


                    >
                        <Text style={styles}> Adicionar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}
                        onPress={() => setAbrir2(false)}


                    >
                        <Text style={styles}> Fechar </Text>
                    </TouchableOpacity>

                </View>

            </Modal>







            {/* Modal de possívels causas  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir4}
                style={styles.modal1}
            >


                <View style={estilo.modal1} >


                    <Text style={styles.text}> Possíveis Causas : </Text>
                    <Dropdown
                        style={styles.inputleft}
                        containerStyle={styles.shadow}
                        textItem={styles.textItem}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.textItem}
                        dropdownPosition="bottom"
                        data={dt2}

                        maxHeight={3000}
                        labelField="label"
                        valueField="value"
                        placeholder=""

                        value={causa}
                        onChange={item => {
                            setCausa(item.value);
                        }}
                        renderItem={item => _renderItem(item)}
                        textError="Error"

                    />



                    <Text style={styles.text}> Observação: </Text>
                    <TextInput

                        onChangeText={setDescricaocausa}

                        value={descricaocausa}
                        style={styles.inputleft}
                    ></TextInput>




                    <TouchableOpacity style={styles.button1}
                        onPress={SalvarBancoSQLite5}


                    >
                        <Text style={styles}> Adicionar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}
                        onPress={() => setAbrir4(false)}


                    >
                        <Text style={styles}> Fechar </Text>
                    </TouchableOpacity>
                </View>


            </Modal>













            {/* Modal Diário de Bordo  */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={abrir3}
                style={styles.modal1}
            >

                <View style={estilo.modal1} >


                    <Text style={styles.text}> Data: </Text>

                    <TouchableOpacity style={styles.inputleft} onPress={showDatePicker3} >
                        <Text
                        >  {`${datamodal3 ? moment(datamodal3).format("DD/MM/YYYY") : "Please select date"}`}</Text>
                    </TouchableOpacity>


                    <Text style={styles.text}> Atividade:</Text>
                    <TextInput
                        onChangeText={setAtividade}
                        value={atividade}
                        style={styles.inputleft}
                    ></TextInput>



                    <TouchableOpacity style={styles.button1}



                    >
                        <Text style={styles}> Adicionar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}
                        onPress={() => setAbrir3(false)}


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





                {datePicker1 && (
                    <DateTimePicker



                        value={dataSaida1}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected1}


                    />
                )}

                {timePicker1 && (
                    <DateTimePicker
                        value={horarioSaida1}
                        mode={'time'}
                        display={'default'}
                        is24Hour={true}
                        onChange={onTimeSelected1}
                        style={styles.datePicker}
                    />
                )}



                {datePicker2 && (
                    <DateTimePicker



                        value={datamodal1}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected2}


                    />
                )}

                {datePicker3 && (
                    <DateTimePicker



                        value={datamodal3}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected3}


                    />
                )}







                <Text></Text>
                <Text style={styles.text}> Número da Ordem de Serviço</Text>
                <TextInput
                    onChangeText={setNumeroOs}
                    value={numeroOs}
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



                {habilita1 == true ? <Text style={styles.text}>Código/TAG:</Text> : null}
                {habilita1 == true ? <TextInput


                    onChangeText={setCodigoTag}
                    value={codigoTag}
                    editable={false}
                    style={styles.inputleftDesable}
                ></TextInput> : null}



                {habilita1 == true ? <Text style={styles.text}>Solicitante:</Text> : null}
                {habilita1 == true ? <TextInput
                    onChangeText={setSolicitante}
                    value={solicitante}

                    editable={false}
                    style={styles.inputleftDesable}

                ></TextInput> : null}





                {habilita1 == true ? <Text style={styles.text}>Equipamento:</Text> : null}
                {habilita1 == true ? <TextInput

                    onChangeText={setEquipamento}
                    value={equipamentos}

                    editable={false}
                    style={styles.inputleftDesable}


                ></TextInput> : null}



                {habilita1 == true ? <Text style={styles.text}>Modelo:</Text> : null}
                {habilita1 == true ? <TextInput
                    onChangeText={setModelo}
                    value={modelo}
                    editable={false}
                    style={styles.inputleftDesable}


                ></TextInput> : null}


                {habilita1 == true ? <Text style={styles.text}>Data da Entrada:</Text> : null}
                {habilita1 == true ? <TouchableOpacity

                    disabled={bloquear1}
                    style={styles.inputleft} onPress={showDatePicker} >
                    <Text
                    >  {test == true ? `${dataEntrada1 ? moment(dataEntrada1).format("DD/MM/YYYY") : "Por Favor Selecione a Data"}` : aux}</Text>
                </TouchableOpacity> : null}

                {/* <TouchableOpacity
                    style={styles.inputleft}
                    onPress={showDatePicker} >
                    <Text style={styles.textdate}
                    > {test == true ? `${selectedDate ? moment(selectedDate).format("DD/MM/YYYY") : "Por Favor Selecione a Data"}` : aux} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}


                {habilita1 == true ? <Text style={styles.text}> Horario da Entrada: </Text> : null}
                {habilita1 == true ? <TouchableOpacity
                    disabled={bloquear1}
                    style={styles.inputleft}
                    onPress={showTimePicker} >
                    <Text

                    >{test1 == true ? `${horarioEntrada1 ? moment(horarioEntrada1).format("HH:mm") : "Por favor escolha um Horario"}` : aux1} </Text>
                </TouchableOpacity> : null}

                {habilita2 == true ? <TouchableOpacity

                    style={styles.button1}

                    disabled={bloquear}
                    onPress={() => StatusOrdem("Em manutencao")}
                >
                    <Text style={styles.text}>Iniciar Manutenção  </Text>

                </TouchableOpacity> : null}
                <Text></Text>
                {habilita == true ? <Text style={styles.text}>Data Prevista de Saida:</Text> : null}
                {habilita == true ? <TextInput


                    onChangeText={setDataPrevisaoSaida}
                    value={dataPrevisaoSaida}
                    editable={false}
                    style={styles.inputleftDesable}


                ></TextInput> : null}




                {habilita == true ? <Text style={styles.text}>Data da Saida </Text> : null}
                {habilita == true ? <TouchableOpacity
                    disabled={bloquear}
                    style={styles.inputleft} onPress={showDatePicker1} >
                    <Text
                    >  {test2 == true ? `${dataSaida1 ? moment(dataSaida1).format("DD/MM/YYYY") : "Por Favor selecione uma Data"}` : aux2}</Text>
                </TouchableOpacity> : null}



                {habilita == true ? <Text style={styles.text}> Horario da Saida: </Text> : null}
                {habilita == true ? <TouchableOpacity
                    disabled={bloquear}
                    style={styles.inputleft}
                    onPress={showTimePicker1} >
                    <Text

                    > {test3 == true ? `${horarioSaida1 ? moment(horarioSaida1).format("HH:mm") : "Por favor escolha um Horario"}` : aux3} </Text>
                </TouchableOpacity> : null}








                {habilita == true ? <Text style={styles.text}>Tipo de Manutencao:</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setTipoManutencao}
                    value={tipoManutencao}

                    editable={false}
                    style={styles.inputleftDesable}

                //false
                ></TextInput> : null}


                {habilita == true ? <TextInput

                    onChangeText={setInterna_externa}
                    value={interna_externa}

                    editable={false}
                    style={styles.inputleftDesable}


                ></TextInput> : null}







                {habilita == true ? <Text style={styles.text}>Descrição:</Text> : null}
                {habilita == true ? <TextInput
                    onChangeText={setDescricao}
                    value={descricao}
                    multiline={true}
                    style={styles.input2}
                    editable={false}

                ></TextInput> : null}
                <Text></Text>

                {habilita == true ? <Text style={styles.text}>Serviço a Executar ou Executado  </Text> : null}
                {habilita == true ? <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Manutenção:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.manutencaoPC}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Descrição:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.descricaoModal}
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
                    <Text style={styles.text}>Adicionar Serviço  </Text>

                </TouchableOpacity> : null}
                <Text></Text><Text></Text>
                {habilita == true ? <Text style={styles.text}>Reposição de Peças/Componentes  </Text> : null}
                {habilita == true ? <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task1}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Item:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.item}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Descrição:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.descricaoPeca}
                                    </Text>


                                    <Text style={styles.labelperfuracao}>Quantidade de Itens:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.quantidade}
                                    </Text>


                                    <TouchableOpacity
                                        style={styles.deleteTask}
                                        onPress={() => {
                                            Delete1(item.id)
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
                    onPress={() => setAbrir1(true)}
                >
                    <Text style={styles.text}>Adicionar Peças  </Text>

                </TouchableOpacity> : null}





                <Text></Text><Text></Text>
                {habilita == true ? <Text style={styles.text}>Realização do Serviço </Text> : null}
                {habilita == true ? <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task2}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Responsavel:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.responsavel}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Tipo:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.tipo}
                                    </Text>


                                    <Text style={styles.labelperfuracao}>Data:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.dataModal}
                                    </Text>


                                    <TouchableOpacity
                                        style={styles.deleteTask}
                                        onPress={() => {
                                            Delete2(item.id)
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

                    onPress={() => setAbrir2(true)}
                >
                    <Text style={styles.text}>Adicionar Responsaveis </Text>

                </TouchableOpacity> : null}
                <Text></Text><Text></Text>



                {habilita == true ? <Text style={styles.text}> Possíveis Causas  </Text> : null}
                {habilita == true ? <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task4}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Causa:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.causa}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Observação:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.descricaocausa}
                                    </Text>

                                    <TouchableOpacity
                                        style={styles.deleteTask}

                                        onPress={() => {
                                            Delete4(item.id)
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

                {habilita == true ? <TouchableOpacity

                    style={styles.button1}
                    disabled={bloquear}

                    onPress={() => setAbrir4(true)}
                >
                    <Text style={styles.text}> Adicionar Causas  </Text>

                </TouchableOpacity> : null}








                {/* 
                <Text style={styles.text}>Observações:</Text>
                <TextInput

                    onChangeText={setObs}
                    value={obs}
                    multiline={true}
                    style={styles.input3}
                    editable={true}

                ></TextInput> */}


                {/* 
                <Text></Text><Text></Text>
                <Text style={styles.text}>Diário de Bordo </Text>
                <ScrollView horizontal={true} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={task3}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.Tasks}>


                                    <Text style={styles.labelperfuracao}>Data:</Text>
                                    <Text
                                        style={styles.DescriptionTask}

                                    >
                                        {item.dataModal2}
                                    </Text>

                                    <Text style={styles.labelperfuracao}>Atividade:</Text>
                                    <Text
                                        style={styles.DescriptionTask}
                                    >
                                        {item.atividade}
                                    </Text>




                                    <TouchableOpacity
                                        style={styles.deleteTask}
                                        onPress={() => {
                                            Delete3(item.id)
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
                <TouchableOpacity

                    style={styles.button1}


                    onPress={() => setAbrir3(true)}
                >
                    <Text style={styles.text}>Adicionar Atividades </Text>

                </TouchableOpacity> */}

                <Text></Text><Text></Text><Text></Text><Text></Text>
                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={() => SalvarBancoSQLite()}

                >
                    <Text style={styles.text}>Salvar  </Text>
                </TouchableOpacity> : null}

                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={() => FinalizarTD()}

                >
                    <Text style={styles.text}>Finalizar  </Text>
                </TouchableOpacity> : null}

                <Text style={styles.text}> </Text>























                {/* 
                <TouchableOpacity
                    style={[styles.button, { opacity: opc2 ? 1 : 0 }]}
                    disabled={bloquear}
                    onPress={() => FinalizarOrdem('Finalizada')}
                >
                    <Text style={styles.text}>Finalizar Ordem  </Text>
                </TouchableOpacity>




                <Text></Text>

                <TouchableOpacity

                    style={[styles.button, { opacity: opc ? 1 : 0 }]}
                    disabled={bloquear}

                    onPress={() => EncerrarOrdem('Encerrada')}
                >
                    <Text style={styles.text}>Encerrar Ordem  </Text>



                </TouchableOpacity> */}

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

export default Manutencao;