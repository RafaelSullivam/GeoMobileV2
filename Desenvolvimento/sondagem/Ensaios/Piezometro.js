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


import nivel from "../../Variaveis Globais/variaveisGlobais"


const Piezometro = (props) => {



    api = Conexao.api

    // teste novo datepicker

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [test, setTest] = useState(false)
    const [aux, setAux] = useState();



    // variaveis  data e hora  de entrada 
    const [datePicker, setDatePicker] = useState(false);
    const [dataInicio, setDataInicio] = useState(new Date());
    const [dataInicio1, setDataInicio1] = useState(new Date());
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



    const [processo, setProcesso] = useState("")
    const [idInstrumento, setIdInstrumento] = useState()
    const [profInstalacao, setInstalacao] = useState()
    const [createcnico, setCreatecnico] = useState()
    const [profFinal, setProfFinal] = useState()
    const [inclinação, setInclinacao] = useState()
    const [sistema, setSistema] = useState()
    const [coordenadaE, setCoordenadaE] = useState()
    const [coordenadaN, setCoodenadaN] = useState()
    const [cota, setCota] = useState()
    const [sondador, setSondador] = useState()
    const [tecnico, setTecnico] = useState()
    const [observacao, setObservacao] = useState()


    

    const [rebaixamento0, setRebaixamento0] = useState(0)
    const [rebaixamento1, setRebaixamento1] = useState(0)
    const [rebaixamento2, setRebaixamento2] = useState(0)
    const [rebaixamento3, setRebaixamento3] = useState(0)
    const [rebaixamento4, setRebaixamento4] = useState(0)
    const [rebaixamento5, setRebaixamento5] = useState(0)
    const [rebaixamento6, setRebaixamento6] = useState(0)
    const [rebaixamento7, setRebaixamento7] = useState(0)
    const [rebaixamento8, setRebaixamento8] = useState(0)
    const [rebaixamento9, setRebaixamento9] = useState(0)
    const [rebaixamento10, setRebaixamento10] = useState(0)
    const [rebaixamento11, setRebaixamento11] = useState(0)
    const [rebaixamento12, setRebaixamento12] = useState(0)
    const [rebaixamento13, setRebaixamento13] = useState(0)
    const [rebaixamento14, setRebaixamento14] = useState(0)
    const [rebaixamento15, setRebaixamento15] = useState(0)
    const [rebaixamento16, setRebaixamento16] = useState(0)
    const [rebaixamento17, setRebaixamento17] = useState(0)
    const [rebaixamento18, setRebaixamento18] = useState(0)
    const [rebaixamento19, setRebaixamento19] = useState(0)
    const [rebaixamento20, setRebaixamento20] = useState(0)
    const [rebaixamento21, setRebaixamento21] = useState(0)
    const [rebaixamento22, setRebaixamento22] = useState(0)
    const [rebaixamento23, setRebaixamento23] = useState(0)
    const [rebaixamento24, setRebaixamento24] = useState(0)
    const [rebaixamento25, setRebaixamento25] = useState(0)
    const [rebaixamento26, setRebaixamento26] = useState(0)
    const [rebaixamento27, setRebaixamento27] = useState(0)
    const [rebaixamento28, setRebaixamento28] = useState(0)
    const [rebaixamento29, setRebaixamento29] = useState(0)
    const [rebaixamento30, setRebaixamento30] = useState(0)
    const [rebaixamento31, setRebaixamento31] = useState(0)
    const [rebaixamento32, setRebaixamento32] = useState(0)
    const [rebaixamento33, setRebaixamento33] = useState(0)
    const [rebaixamento34, setRebaixamento34] = useState(0)
    const [rebaixamento35, setRebaixamento35] = useState(0)
    const [rebaixamento36, setRebaixamento36] = useState(0)
    const [rebaixamento37, setRebaixamento37] = useState(0)
    const [rebaixamento38, setRebaixamento38] = useState(0)
    const [rebaixamento39, setRebaixamento39] = useState(0)
    const [rebaixamento40, setRebaixamento40] = useState(0)



    
    const [recuperacao1, setRecuperacao1] = useState(0)
    const [recuperacao2, setRecuperacao2] = useState(0)
    const [recuperacao3, setRecuperacao3] = useState(0)
    const [recuperacao4, setRecuperacao4] = useState(0)
    const [recuperacao5, setRecuperacao5] = useState(0)
    const [recuperacao6, setRecuperacao6] = useState(0)
    const [recuperacao7, setRecuperacao7] = useState(0)
    const [recuperacao8, setRecuperacao8] = useState(0)
    const [recuperacao9, setRecuperacao9] = useState(0)
    const [recuperacao10, setRecuperacao10] = useState(0)
    const [recuperacao11, setRecuperacao11] = useState(0)
    const [recuperacao12, setRecuperacao12] = useState(0)
    const [recuperacao13, setRecuperacao13] = useState(0)
    const [recuperacao14, setRecuperacao14] = useState(0)
    const [recuperacao15, setRecuperacao15] = useState(0)
    const [recuperacao16, setRecuperacao16] = useState(0)
    const [recuperacao17, setRecuperacao17] = useState(0)
    const [recuperacao18, setRecuperacao18] = useState(0)
    const [recuperacao19, setRecuperacao19] = useState(0)
    const [recuperacao20, setRecuperacao20] = useState(0)




    const [inicial, setInicial] = useState(0)


    const [estabilizado, setEstabilizado] = useState(0)


















    const [reload, setReload] = useState(false)
    const [reload1, setReload1] = useState(false)
    const [reload2, setReload2] = useState(false)
    const [reload3, setReload3] = useState(false)
    const [reload4, setReload4] = useState(false)
    const [reload5, setReload5] = useState(false)
    const [reload6, setReload6] = useState(false)
    const [reload7, setReload7] = useState(false)
    const [reload8, setReload8] = useState(false)


    const [habilita, setHabilita] = useState(true)
    const [habilita1, setHabilita1] = useState(true)
    const [habilita2, setHabilita2] = useState(true)

    const [bloquear, setBloquear] = useState(false);
    const [bloquear1, setBloquear1] = useState(false);


    const [connState, setConnState] = useState(0);






    const [tipoEnsaio, setTipoEnsaio] = useState();
    const dt = [


        { label: 'Rebaixamento', value: 'Rebaixamento' },
        { label: 'Recuperação', value: 'Recuperação' },


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
        setDataInicio1(value)


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











    const Finalizar1 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Piezometro where processo = ?', [processo], (tx, results) => {
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
                Salvar(lista[i].processo, lista[i].idInstrumento, lista[i].dataInicio, lista[i].profInstalacao, lista[i].createcnico, lista[i].profFinal, lista[i].inclinação, lista[i].sistema, lista[i].coordenadaE, lista[i].coordenadaN, lista[i].cota, lista[i].sondador, lista[i].tecnico, lista[i].observacao, lista[i].rebaixamento0, lista[i].rebaixamento1, lista[i].rebaixamento2, lista[i].rebaixamento3, lista[i].rebaixamento4, lista[i].rebaixamento5, lista[i].rebaixamento6, lista[i].rebaixamento7, lista[i].rebaixamento8, lista[i].rebaixamento9, lista[i].rebaixamento10, lista[i].rebaixamento11, lista[i].rebaixamento12, lista[i].rebaixamento13, lista[i].rebaixamento14, lista[i].rebaixamento15, lista[i].rebaixamento16, lista[i].rebaixamento17, lista[i].rebaixamento18, lista[i].rebaixamento19, lista[i].rebaixamento20, lista[i].rebaixamento21, lista[i].rebaixamento22, lista[i].rebaixamento23, lista[i].rebaixamento24, lista[i].rebaixamento25, lista[i].rebaixamento26, lista[i].rebaixamento27, lista[i].rebaixamento28, lista[i].rebaixamento29, lista[i].rebaixamento30, lista[i].rebaixamento31, lista[i].rebaixamento32, lista[i].rebaixamento33, lista[i].rebaixamento34, lista[i].rebaixamento35, lista[i].rebaixamento36, lista[i].rebaixamento37, lista[i].rebaixamento38, lista[i].rebaixamento39, lista[i].rebaixamento40)
            );
        }

        // Aguardar todas as chamadas de API terminarem, se necessário
        await Promise.all(results);
    }

    async function Salvar(processo, idInstrumento, dataInicio, profInstalacao, createcnico, profFinal, inclinação, sistema, coordenadaE, coordenadaN, cota, sondador, tecnico, observacao, rebaixamento0, rebaixamento1, rebaixamento2, rebaixamento3, rebaixamento4, rebaixamento5, rebaixamento6, rebaixamento7, rebaixamento8, rebaixamento9, rebaixamento10, rebaixamento11, rebaixamento12, rebaixamento13, rebaixamento14, rebaixamento15, rebaixamento16, rebaixamento17, rebaixamento18, rebaixamento19, rebaixamento20, rebaixamento21, rebaixamento22, rebaixamento23, rebaixamento24, rebaixamento25, rebaixamento26, rebaixamento27, rebaixamento28, rebaixamento29, rebaixamento30, rebaixamento31, rebaixamento32 , rebaixamento33 , rebaixamento34 , rebaixamento35 , rebaixamento36 , rebaixamento37 , rebaixamento38 , rebaixamento39 , rebaixamento40) {
        try {
            const obj = { processo, idInstrumento, dataInicio, profInstalacao, createcnico, profFinal, inclinação, sistema, coordenadaE, coordenadaN, cota, sondador, tecnico, observacao, rebaixamento0, rebaixamento1, rebaixamento2, rebaixamento3, rebaixamento4, rebaixamento5, rebaixamento6, rebaixamento7, rebaixamento8, rebaixamento9, rebaixamento10, rebaixamento11, rebaixamento12, rebaixamento13, rebaixamento14, rebaixamento15, rebaixamento16, rebaixamento17, rebaixamento18, rebaixamento19, rebaixamento20, rebaixamento21, rebaixamento22, rebaixamento23, rebaixamento24, rebaixamento25, rebaixamento26, rebaixamento27, rebaixamento28, rebaixamento29, rebaixamento30, rebaixamento31, rebaixamento32 , rebaixamento33 , rebaixamento34 , rebaixamento35 , rebaixamento36 , rebaixamento37 , rebaixamento38 , rebaixamento39 , rebaixamento40 };


            const res = await axios.post(api + 'SalvarPiezometro.php', obj);
            if (res.data.success === true) {
                console.log("Salva");
            }
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    }






    async function Buscar() {
        setLoading(true)
     
        
        const res = await axios.get(this.api2 + 'ListaManutencaoPreventivaCorretiva.php?processo=' + processo);

        if (res.data.success === true) {


          

            // Finalizar(res.data.result[0].statu)
            setIdInstrumento(res.data.result[0].idInstrumento)
            setInstalacao(res.data.result[0].profInstalacao)
            setCreatecnico(res.data.result[0].createcnico)
            setProfFinal(res.data.result[0].profFinal)
            setInclinacao(res.data.result[0].inclinação)
            setSistema(res.data.result[0].sistema)
            setCoordenadaE(res.data.result[0].coordenadaE)
            setCoodenadaN(res.data.result[0].coordenadaN)
            setCota(res.data.result[0].cota)
            setSondador(res.data.result[0].sondador)
            setTecnico(res.data.result[0].tecnico)
            setObservacao(res.data.result[0].observacao)
            setRebaixamento0(res.data.result[0].rebaixamento0)
            setRebaixamento1(res.data.result[0].rebaixamento1)
            setRebaixamento2(res.data.result[0].rebaixamento2)
            setRebaixamento3(res.data.result[0].rebaixamento3)
            setRebaixamento4(res.data.result[0].rebaixamento4)
            setRebaixamento5(res.data.result[0].rebaixamento5)
            setRebaixamento6(res.data.result[0].rebaixamento6)
            setRebaixamento7(res.data.result[0].rebaixamento7)
            setRebaixamento8(res.data.result[0].rebaixamento8)
            setRebaixamento9(res.data.result[0].rebaixamento9)
            setRebaixamento10(res.data.result[0].rebaixamento10)
            setRebaixamento11(res.data.result[0].rebaixamento11)
            setRebaixamento12(res.data.result[0].rebaixamento12)
            setRebaixamento13(res.data.result[0].rebaixamento13)
            setRebaixamento14(res.data.result[0].rebaixamento14)
            setRebaixamento15(res.data.result[0].rebaixamento15)
            setRebaixamento16(res.data.result[0].rebaixamento16)
            setRebaixamento17(res.data.result[0].rebaixamento17)
            setRebaixamento19(res.data.result[0].rebaixamento19)
            setRebaixamento20(res.data.result[0].rebaixamento20)
          
            

            

            
         
        }
        else {
            setHabilita(false)
            setHabilita1(false)
            setHabilita2(false)
            msgErro()
            
        }
    };






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
                    "create table if not exists Piezometro ( processo text , idInstrumento text , dataInicio text , profInstalacao text , createcnico text , profFinal text ,inclinação text , sistema text , coordenadaE text , coordenadaN text, cota text,  sondador text , tecnico text , observacao text , tipoEnsaio text , rebaixamento1 text, rebaixamento2 text, rebaixamento3 text, rebaixamento4 text, rebaixamento5 text, rebaixamento6 text, rebaixamento7 text, rebaixamento8 text, rebaixamento9 text, rebaixamento10 text, rebaixamento11 text, rebaixamento12 text, rebaixamento13 text, rebaixamento14 text, rebaixamento15 text, rebaixamento16 text, rebaixamento17 text, rebaixamento18 text, rebaixamento19 text, rebaixamento20 text , rebaixamento21 text, rebaixamento22 text, rebaixamento23 text, rebaixamento24 text, rebaixamento25 text, rebaixamento26 text, rebaixamento27 text, rebaixamento28 text, rebaixamento29 text, rebaixamento30 text, rebaixamento31 text, rebaixamento32 text, rebaixamento33 text, rebaixamento34 text, rebaixamento35 text, rebaixamento36 text, rebaixamento37 text, rebaixamento38 text, rebaixamento39 text, rebaixamento40 text );"
                );
                console.log(" Nova Tabela Gerada")
            });
    };

    

    const SalvarBancoSQLite1 = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into Piezometro ( processo , idInstrumento , dataInicio , profInstalacao , createcnico, profFinal, inclinação, sistema, coordenadaE , coordenadaN , cota , sondador , tecnico , observacao ,tipoEnsaio,  rebaixamento1, rebaixamento2, rebaixamento3, rebaixamento4, rebaixamento5, rebaixamento6, rebaixamento7, rebaixamento8, rebaixamento9, rebaixamento10, rebaixamento11, rebaixamento12, rebaixamento13, rebaixamento14, rebaixamento15, rebaixamento16, rebaixamento17, rebaixamento18, rebaixamento19, rebaixamento20 ,  rebaixamento21 , rebaixamento22, rebaixamento23, rebaixamento24, rebaixamento25, rebaixamento26, rebaixamento27, rebaixamento28, rebaixamento29, rebaixamento30, rebaixamento31, rebaixamento32, rebaixamento33, rebaixamento34, rebaixamento35, rebaixamento36, rebaixamento37, rebaixamento38, rebaixamento39, rebaixamento40 ) values ('${processo}','${idInstrumento}','${dataInicio1}','${profInstalacao}','${createcnico}' ,'${profFinal}' ,'${inclinação}' ,'${sistema}','${coordenadaE}','${coordenadaN}','${cota}','${sondador}','${tecnico}','${observacao}','${tipoEnsaio}','${rebaixamento1}','${rebaixamento2}','${rebaixamento3}','${rebaixamento4}','${rebaixamento5}','${rebaixamento6}','${rebaixamento7}','${rebaixamento8}','${rebaixamento9}','${rebaixamento10}','${rebaixamento11}','${rebaixamento12}','${rebaixamento13}','${rebaixamento14}','${rebaixamento15}','${rebaixamento16}','${rebaixamento17}','${rebaixamento18}','${rebaixamento19}','${rebaixamento20}','${rebaixamento21}','${rebaixamento22}','${rebaixamento23}','${rebaixamento24}','${rebaixamento25}','${rebaixamento26}','${rebaixamento27}','${rebaixamento28}','${rebaixamento29}','${rebaixamento30}','${rebaixamento31}','${rebaixamento32}','${rebaixamento33}','${rebaixamento34}','${rebaixamento35}','${rebaixamento36}','${rebaixamento37}','${rebaixamento38}','${rebaixamento39}','${rebaixamento40}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },



            MensagemSalvarOffline1(),
            listarDados1(),

        );
    };

    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Piezometro WHERE processo =?', [processo], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {





                    setProcesso(results.rows.item(0).processo)
                    setIdInstrumento(results.rows.item(0).idInstrumento)
                    setDataInicio(results.rows.item(0).dataInicio)
                    setInstalacao(results.rows.item(0).profInstalacao)
                    setCreatecnico(results.rows.item(0).createcnico)
                    setProfFinal(results.rows.item(0).profFinal)
                    setInclinacao(results.rows.item(0).inclinação)
                    setSistema(results.rows.item(0).sistema)
                    setCoordenadaE(results.rows.item(0).coordenadaE)
                    setCoodenadaN(results.rows.item(0).coordenadaN)
                    setCota(results.rows.item(0).cota)
                    setSondador(results.rows.item(0).sondador)
                    setTecnico(results.rows.item(0).tecnico)
                    setObservacao(results.rows.item(0).observacao)
                    setTipoEnsaio(results.rows.item(0).tipoEnsaio)
                    setRebaixamento0(results.rows.item(0).rebaixamento0)
                    setRebaixamento1(results.rows.item(0).rebaixamento1)
                    setRebaixamento2(results.rows.item(0).rebaixamento2)
                    setRebaixamento3(results.rows.item(0).rebaixamento3)
                    setRebaixamento4(results.rows.item(0).rebaixamento4)
                    setRebaixamento5(results.rows.item(0).rebaixamento5)
                    setRebaixamento6(results.rows.item(0).rebaixamento6)
                    setRebaixamento7(results.rows.item(0).rebaixamento7)
                    setRebaixamento8(results.rows.item(0).rebaixamento8)
                    setRebaixamento9(results.rows.item(0).rebaixamento9)
                    setRebaixamento10(results.rows.item(0).rebaixamento10)
                    setRebaixamento11(results.rows.item(0).rebaixamento11)
                    setRebaixamento12(results.rows.item(0).rebaixamento12)
                    setRebaixamento13(results.rows.item(0).rebaixamento13)
                    setRebaixamento14(results.rows.item(0).rebaixamento14)
                    setRebaixamento15(results.rows.item(0).rebaixamento15)
                    setRebaixamento16(results.rows.item(0).rebaixamento16)
                    setRebaixamento17(results.rows.item(0).rebaixamento17)
                    setRebaixamento18(results.rows.item(0).rebaixamento18)
                    setRebaixamento19(results.rows.item(0).rebaixamento19)
                    setRebaixamento20(results.rows.item(0).rebaixamento20)
                    setRebaixamento21(results.rows.item(0).rebaixamento21)
                    setRebaixamento22(results.rows.item(0).rebaixamento22)
                    setRebaixamento23(results.rows.item(0).rebaixamento23)
                    setRebaixamento24(results.rows.item(0).rebaixamento24)
                    setRebaixamento25(results.rows.item(0).rebaixamento25)
                    setRebaixamento26(results.rows.item(0).rebaixamento26)
                    setRebaixamento27(results.rows.item(0).rebaixamento27)
                    setRebaixamento28(results.rows.item(0).rebaixamento28)
                    setRebaixamento29(results.rows.item(0).rebaixamento29)
                    setRebaixamento30(results.rows.item(0).rebaixamento30)
                    setRebaixamento31(results.rows.item(0).rebaixamento31)
                    setRebaixamento32(results.rows.item(0).rebaixamento32)
                    setRebaixamento33(results.rows.item(0).rebaixamento33)
                    setRebaixamento34(results.rows.item(0).rebaixamento34)
                    setRebaixamento35(results.rows.item(0).rebaixamento35)
                    setRebaixamento36(results.rows.item(0).rebaixamento36)
                    setRebaixamento37(results.rows.item(0).rebaixamento37)
                    setRebaixamento38(results.rows.item(0).rebaixamento38)
                    setRebaixamento39(results.rows.item(0).rebaixamento39)
                    setRebaixamento40(results.rows.item(0).rebaixamento40)




                }



            });


        });
    };
    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS  Piezometro ',
                console.log('Banco Deletado')

            );

        });
    };


    useEffect(() => {

        // gerarBancoSQlite()
        //  DeleteBancoSQlite()



        //Reload Banco OF adicionar e deletar 
        if (reload) {

            setReload(false)
        }


        if (reload1) {


            setReload1(false)
        }



        if (reload2) {



            setReload2(false)
        }


        if (reload8) {


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
        setDataInicio(moment(dataInicio1).format("DD/MM/YYYY"));


        setHorarioSaida(moment(horarioSaida1).format("HH:mm"));
        setDataSaida(moment(dataSaida1).format("DD/MM/YYYY"));

        setDataModal(moment(datamodal1).format("DD/MM/YYYY"));
        setDataModal2(moment(datamodal3).format("DD/MM/YYYY"));

        // console.log(reload, reload1, reload2, reload3)


    });


    useEffect(() => {




        console.log("Numero do processo:", processo)
    }, []);


    useEffect(() => {
        // login()


        // NetInfo.fetch().then(state => {
        //     setConnState(state);

        // });

        // const unsubscribe = NetInfo.addEventListener(state => {
        //     setConnState(state);
        //     console.log("Tipo de conexão", state.type);
        //     console.log("Está conectado?", state.isConnected);
        // });



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

























            <View style={styles.container}>
                {datePicker && (
                    <DateTimePicker



                        value={dataInicio1}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected}


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







                <Text></Text>
                <Text style={styles.text}>Processo</Text>
                <TextInput
                    onChangeText={setProcesso}
                    value={processo}
                    editable={true}
                    style={styles.inputleft}
                ></TextInput>





                <Text style={styles.text}></Text>
                <TouchableOpacity style={styles.button1}
                    onPress={BuscaBancoSQl}


                >
                    <Text style={styles.text}> Buscar  </Text>
                </TouchableOpacity>
                <Text></Text><Text></Text>



                {habilita1 == true ? <Text style={styles.text}>ID do instrumento:</Text> : null}
                {habilita1 == true ? <TextInput


                    onChangeText={setIdInstrumento}
                    value={idInstrumento}

                    style={styles.inputleft}
                ></TextInput> : null}



                {habilita1 == true ? <Text style={styles.text}>Data de ícino:</Text> : null}
                {habilita1 == true ? <TouchableOpacity

                    disabled={bloquear1}
                    style={styles.inputleft} onPress={showDatePicker} >
                    <Text
                    >  {test == true ? `${dataInicio1 ? moment(dataInicio1).format("DD/MM/YYYY") : "Por Favor Selecione a Data"}` : aux}</Text>
                </TouchableOpacity> : null}

                {habilita == true ? <Text style={styles.text}>Data de Fim </Text> : null}
                {habilita == true ? <TouchableOpacity
                    disabled={bloquear}
                    style={styles.inputleft} onPress={showDatePicker1} >
                    <Text
                    >  {test2 == true ? `${dataSaida1 ? moment(dataSaida1).format("DD/MM/YYYY") : "Por Favor selecione uma Data"}` : aux2}</Text>
                </TouchableOpacity> : null}


                {habilita1 == true ? <Text style={styles.text}>Prof. de instalação(m):</Text> : null}
                {habilita1 == true ? <TextInput
                    onChangeText={setInstalacao}
                    value={profInstalacao}


                    style={styles.inputleft}

                ></TextInput> : null}





                {habilita1 == true ? <Text style={styles.text}>CREA Resp. Técnico:</Text> : null}
                {habilita1 == true ? <TextInput

                    onChangeText={setCreatecnico}
                    value={createcnico}


                    style={styles.inputleft}


                ></TextInput> : null}



                {habilita1 == true ? <Text style={styles.text}>Prof.Final (m):</Text> : null}
                {habilita1 == true ? <TextInput
                    onChangeText={setProfFinal}
                    value={profFinal}

                    style={styles.inputleft}


                ></TextInput> : null}










                {habilita1 == true ? <Text style={styles.text}>Inclinação:</Text> : null}
                {habilita1 == true ? <TextInput

                    onChangeText={setInclinacao}
                    value={inclinação}


                    style={styles.inputleft}


                ></TextInput> : null}



                {habilita1 == true ? <Text style={styles.text}>Sistema:</Text> : null}
                {habilita1 == true ? <TextInput
                    onChangeText={setSistema}
                    value={sistema}

                    style={styles.inputleft}


                ></TextInput> : null}











                {habilita == true ? <Text style={styles.text}>Coordendas:</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setCoordenadaE}
                    value={coordenadaE}
                    placeholder="E="

                    style={styles.inputleft}

                //false
                ></TextInput> : null}


                {habilita == true ? <TextInput

                    onChangeText={setCoodenadaN}
                    value={coordenadaN}
                    placeholder="N="

                    style={styles.inputleft}


                ></TextInput> : null}



                {habilita == true ? <Text style={styles.text}>Cota Base:</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setCota}
                    value={cota}


                    style={styles.inputleft}

                //false
                ></TextInput> : null}

                {habilita == true ? <Text style={styles.text}>Sondador:</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setSondador}
                    value={sondador}


                    style={styles.inputleft}

                //false
                ></TextInput> : null}
                {habilita == true ? <Text style={styles.text}>Técnico:</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setTecnico}
                    value={tecnico}


                    style={styles.inputleft}

                //false
                ></TextInput> : null}


      <Text style={styles.heading}>TESTE DE VIDA E FUNCIONAMENTO DO INSTRUMENTO
                    </Text>




                    {habilita == true ? <Text style={styles.text}>Nivel da Água :</Text> : null}
                {habilita == true ? <TextInput

                    onChangeText={setInicial}
                    value={inicial}
                    placeholder="Inicial:"

                    style={styles.inputleft}

                //false
                ></TextInput> : null}


                {habilita == true ? <TextInput

                    onChangeText={setEstabilizado}
                    value={estabilizado}
                    placeholder="Estabilizado:"

                    style={styles.inputleft}


                ></TextInput> : null}






<Text style={styles.text}>Tipo de Ensaio</Text>

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

    value={tipoEnsaio}
    onChange={item => {
        setTipoEnsaio(item.value);
    }}
    renderItem={item => _renderItem(item)}
    textError="Error"

/>

                <Text style={styles.text}>Tempo(min)           Rebaixamento(m) </Text>






             
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'0'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento1}
                        value={rebaixamento1}
                        style={styles.input22}

                    ></TextInput>



                </View>



                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'1'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento2}
                        value={rebaixamento2}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setRebaixamento3}
                        value={'2'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento3}
                        value={rebaixamento3}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'4'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento4}
                        value={rebaixamento4}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'6'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento5}
                        value={rebaixamento5}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'8'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento6}
                        value={rebaixamento6}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'10'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento7}
                        value={rebaixamento7}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'12'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento8}
                        value={rebaixamento8}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'14'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento9}
                        value={rebaixamento9}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'16'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento10}
                        value={rebaixamento10}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'18'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento11}
                        value={rebaixamento11}
                        style={styles.input22}

                    >
                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'20'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento12}
                        value={rebaixamento12}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'25'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento13}
                        value={rebaixamento13}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'30'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento14}
                        value={rebaixamento14}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'35'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento15}
                        value={rebaixamento15}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'40'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento16}
                        value={rebaixamento16}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'45'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento17}
                        value={rebaixamento17}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'50'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento18}
                        value={rebaixamento18}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'55'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento19}
                        value={rebaixamento19}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'60'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento20}
                        value={rebaixamento20}
                        style={styles.input22}

                    ></TextInput>

                </View>









                <View style={styles.container22}>

                    <TextInput
                        onChangeText={'2'}
                        value={'70'}
                        style={styles.input22}


                    ></TextInput>


                    <TextInput
                        onChangeText={setRebaixamento21}
                        value={rebaixamento21}
                        style={styles.input22}

                    ></TextInput>



                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'80'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento22}
                        value={rebaixamento22}
                        style={styles.input22}

                    ></TextInput>



                </View>



                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'90'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento23}
                        value={rebaixamento23}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'100'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento24}
                        value={rebaixamento24}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'110'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento25}
                        value={rebaixamento25}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'120'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento26}
                        value={rebaixamento26}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'150'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento27}
                        value={rebaixamento27}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'180'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento28}
                        value={rebaixamento28}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'210'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento29}
                        value={rebaixamento29}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'240'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento30}
                        value={rebaixamento30}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'300'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento31}
                        value={rebaixamento31}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'360'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento32}
                        value={rebaixamento32}
                        style={styles.input22}

                    >
                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'420'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento33}
                        value={rebaixamento33}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'480'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento34}
                        value={rebaixamento34}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'720'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento35}
                        value={rebaixamento35}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'960'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento36}
                        value={rebaixamento36}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'1200'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento37}
                        value={rebaixamento37}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'1280'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento38}
                        value={rebaixamento38}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'1360'}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setRebaixamento39}
                        value={rebaixamento39}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={''}
                        value={'1440'}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setRebaixamento40}
                        value={rebaixamento40}
                        style={styles.input22}

                    ></TextInput>

                </View>

              






                {habilita == true ? <Text style={styles.text}>Observação:</Text> : null}
                {habilita == true ? <TextInput
                    onChangeText={setObservacao}
                    value={observacao}
                    multiline={true}
                    style={styles.input3}


                ></TextInput> : null}
                <Text></Text>






                <Text></Text><Text></Text><Text></Text><Text></Text>
                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={SalvarBancoSQLite1}

                >
                    <Text style={styles.text}>Salvar  </Text>
                </TouchableOpacity> : null}

                <Text style={styles.text}></Text>
                {habilita == true ? <TouchableOpacity
                    style={styles.button}

                    // style={[styles.button, { opacity: opc1 ? 1 : 0 }]}
                    // disabled={bloquear}
                    onPress={Finalizar1}

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

export default Piezometro;