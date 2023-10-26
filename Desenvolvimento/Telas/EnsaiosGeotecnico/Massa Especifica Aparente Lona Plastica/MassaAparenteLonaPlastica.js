import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, ActivityIndicator, FlatList, Modal, SafeAreaView } from 'react-native';
import styles from "../style.js";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { TextInputMask } from 'react-native-masked-text'
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"



export default function MassaAparenteLonaPlastica() {
    api = Conexao.api
    const [trecho, setTrecho] = useState('')
    const [subtrecho, setSubTrecho] = useState('')
    const [estudo, setEstudo] = useState('')
    const [energiacomp, setEnergiacomp] = useState('')
    const [amostra, setAmostra] = useState('')
    const [processo, setProcesso] = useState('')
    const [status, setStatus] = useState('')
    const [norma, setNormas] = useState('')
    const [material, setMaterial] = useState('')
    // 15181
    const [Codigo_C1, setCodigo_C1] = useState('')
    const [estaca, setEstaca] = useState('')
    const [pesofrascoantes, setPesoFrascoAntes] = useState('')
    const [pesofrascodepois, setPesoFrascoDepois] = useState('')
    const [pesoareiadeslocada, setPesoAreiaDeslocada] = useState('')
    const [pesoareiacone, setPesoAreiaCone] = useState('')
    const [pesoareiafuro, setPesoAreiaFuro] = useState('')
    const [densidadeareia, setDesidadeAreia] = useState('')
    const [volumefuro, setVolumeFuro] = useState('')
    const [furo, setFuro] = useState('')
    const [norte, setNorte] = useState('')
    const [este, setEste] = useState('')
    const [cota, setCota] = useState('')
    const [camada, setCamada] = useState('')
    const [ncapsula, setNcapsula] = useState('')
    const [capsulasoloagua, setCapsulaSoloAgua] = useState('')
    const [capsulasolo, setCapsulaSolo] = useState('')
    const [agua, setAgua] = useState('')
    const [capsula, setCapsula] = useState('')
    const [soloseco, setSoloSeco] = useState('')
    const [umidadecampo, setUmidadeCampo] = useState('')
    const [umidadeotima, setUmidadeOtima] = useState('')
    const [desvioumidade, setDesvioUmidade] = useState('')
    const [pesomaterialfuro, setPesoMaterialFuro] = useState('')
    const [desidadeumida, setDensidadeUmida] = useState('')
    const [densidadeaparentesoloseco, setDensidadeAparenteSoloSeco] = useState('')
    const [densidadeaparentemaxima, setDensidadeAparenteMaxima] = useState('')
    const [graucompactacao, setGrauCompactacao] = useState('')
    const [profundidadefuro, setProfundidadeFuro] = useState('')

    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [ensaio, setEnsaio] = useState()

    const [estaca1, setEstaca1] = useState('')
    const [estaca2, setEstaca2] = useState('')
    const [estaca3, setEstaca3] = useState('')
    const [estaca4, setEstaca4] = useState('')
    const [estaca5, setEstaca5] = useState('')
    const [pesofrascoantes1, setPesoFrascoAntes1] = useState('')
    const [pesofrascoantes2, setPesoFrascoAntes2] = useState('')
    const [pesofrascoantes3, setPesoFrascoAntes3] = useState('')
    const [pesofrascoantes4, setPesoFrascoAntes4] = useState('')
    const [pesofrascoantes5, setPesoFrascoAntes5] = useState('')

    const [pesofrascodepois1, setPesoFrascoDepois1] = useState('')
    const [pesofrascodepois2, setPesoFrascoDepois2] = useState('')
    const [pesofrascodepois3, setPesoFrascoDepois3] = useState('')
    const [pesofrascodepois4, setPesoFrascoDepois4] = useState('')
    const [pesofrascodepois5, setPesoFrascoDepois5] = useState('')

    const [pesoareiadeslocada1, setPesoAreiaDeslocada1] = useState('')
    const [pesoareiadeslocada2, setPesoAreiaDeslocada2] = useState('')
    const [pesoareiadeslocada3, setPesoAreiaDeslocada3] = useState('')
    const [pesoareiadeslocada4, setPesoAreiaDeslocada4] = useState('')
    const [pesoareiadeslocada5, setPesoAreiaDeslocada5] = useState('')

    const [pesoareiacone1, setPesoAreiaCone1] = useState('')
    const [pesoareiacone2, setPesoAreiaCone2] = useState('')
    const [pesoareiacone3, setPesoAreiaCone3] = useState('')
    const [pesoareiacone4, setPesoAreiaCone4] = useState('')
    const [pesoareiacone5, setPesoAreiaCone5] = useState('')

    const [pesoareiafuro1, setPesoAreiaFuro1] = useState('')
    const [pesoareiafuro2, setPesoAreiaFuro2] = useState('')
    const [pesoareiafuro3, setPesoAreiaFuro3] = useState('')
    const [pesoareiafuro4, setPesoAreiaFuro4] = useState('')
    const [pesoareiafuro5, setPesoAreiaFuro5] = useState('')

    const [densidadeareia1, setDesidadeAreia1] = useState('')
    const [densidadeareia2, setDesidadeAreia2] = useState('')
    const [densidadeareia3, setDesidadeAreia3] = useState('')
    const [densidadeareia4, setDesidadeAreia4] = useState('')
    const [densidadeareia5, setDesidadeAreia5] = useState('')

    const [volumefuro1, setVolumeFuro1] = useState('0')
    const [volumefuro2, setVolumeFuro2] = useState('0')
    const [volumefuro3, setVolumeFuro3] = useState('0')
    const [volumefuro4, setVolumeFuro4] = useState('0')
    const [volumefuro5, setVolumeFuro5] = useState('0')

    const [furo1, setFuro1] = useState('')
    const [furo2, setFuro2] = useState('')
    const [furo3, setFuro3] = useState('')
    const [furo4, setFuro4] = useState('')
    const [furo5, setFuro5] = useState('')

    const [norte1, setNorte1] = useState('')
    const [norte2, setNorte2] = useState('')
    const [norte3, setNorte3] = useState('')
    const [norte4, setNorte4] = useState('')
    const [norte5, setNorte5] = useState('')

    const [este1, setEste1] = useState('')
    const [este2, setEste2] = useState('')
    const [este3, setEste3] = useState('')
    const [este4, setEste4] = useState('')
    const [este5, setEste5] = useState('')

    const [cota1, setCota1] = useState('')
    const [cota2, setCota2] = useState('')
    const [cota3, setCota3] = useState('')
    const [cota4, setCota4] = useState('')
    const [cota5, setCota5] = useState('')

    const [camada1, setCamada1] = useState('')
    const [camada2, setCamada2] = useState('')
    const [camada3, setCamada3] = useState('')
    const [camada4, setCamada4] = useState('')
    const [camada5, setCamada5] = useState('')

    const [ncapsula1, setNcapsula1] = useState('')
    const [ncapsula2, setNcapsula2] = useState('')
    const [ncapsula3, setNcapsula3] = useState('')
    const [ncapsula4, setNcapsula4] = useState('')
    const [ncapsula5, setNcapsula5] = useState('')

    const [capsulasoloagua1, setCapsulaSoloAgua1] = useState('')
    const [capsulasoloagua2, setCapsulaSoloAgua2] = useState('')
    const [capsulasoloagua3, setCapsulaSoloAgua3] = useState('')
    const [capsulasoloagua4, setCapsulaSoloAgua4] = useState('')
    const [capsulasoloagua5, setCapsulaSoloAgua5] = useState('')

    const [capsulasolo1, setCapsulaSolo1] = useState('')
    const [capsulasolo2, setCapsulaSolo2] = useState('')
    const [capsulasolo3, setCapsulaSolo3] = useState('')
    const [capsulasolo4, setCapsulaSolo4] = useState('')
    const [capsulasolo5, setCapsulaSolo5] = useState('')

    const [agua1, setAgua1] = useState('')
    const [agua2, setAgua2] = useState('')
    const [agua3, setAgua3] = useState('')
    const [agua4, setAgua4] = useState('')
    const [agua5, setAgua5] = useState('')

    const [capsula1, setCapsula1] = useState('')
    const [capsula2, setCapsula2] = useState('')
    const [capsula3, setCapsula3] = useState('')
    const [capsula4, setCapsula4] = useState('')
    const [capsula5, setCapsula5] = useState('')

    const [soloseco1, setSoloSeco1] = useState('')
    const [soloseco2, setSoloSeco2] = useState('')
    const [soloseco3, setSoloSeco3] = useState('')
    const [soloseco4, setSoloSeco4] = useState('')
    const [soloseco5, setSoloSeco5] = useState('')

    const [umidadecampo1, setUmidadeCampo1] = useState('0')
    const [umidadecampo2, setUmidadeCampo2] = useState('0')
    const [umidadecampo3, setUmidadeCampo3] = useState('0')
    const [umidadecampo4, setUmidadeCampo4] = useState('0')
    const [umidadecampo5, setUmidadeCampo5] = useState('0')

    const [umidadeotima1, setUmidadeOtima1] = useState('')
    const [umidadeotima2, setUmidadeOtima2] = useState('')
    const [umidadeotima3, setUmidadeOtima3] = useState('')
    const [umidadeotima4, setUmidadeOtima4] = useState('')
    const [umidadeotima5, setUmidadeOtima5] = useState('')

    const [desvioumidade1, setDesvioUmidade1] = useState('')
    const [desvioumidade2, setDesvioUmidade2] = useState('')
    const [desvioumidade3, setDesvioUmidade3] = useState('')
    const [desvioumidade4, setDesvioUmidade4] = useState('')
    const [desvioumidade5, setDesvioUmidade5] = useState('')

    const [pesomaterialfuro1, setPesoMaterialFuro1] = useState('')
    const [pesomaterialfuro2, setPesoMaterialFuro2] = useState('')
    const [pesomaterialfuro3, setPesoMaterialFuro3] = useState('')
    const [pesomaterialfuro4, setPesoMaterialFuro4] = useState('')
    const [pesomaterialfuro5, setPesoMaterialFuro5] = useState('')

    const [desidadeumida1, setDensidadeUmida1] = useState('0')
    const [desidadeumida2, setDensidadeUmida2] = useState('0')
    const [desidadeumida3, setDensidadeUmida3] = useState('0')
    const [desidadeumida4, setDensidadeUmida4] = useState('0')
    const [desidadeumida5, setDensidadeUmida5] = useState('0')

    const [densidadeaparentesoloseco1, setDensidadeAparenteSoloSeco1] = useState('')
    const [densidadeaparentesoloseco2, setDensidadeAparenteSoloSeco2] = useState('')
    const [densidadeaparentesoloseco3, setDensidadeAparenteSoloSeco3] = useState('')
    const [densidadeaparentesoloseco4, setDensidadeAparenteSoloSeco4] = useState('')
    const [densidadeaparentesoloseco5, setDensidadeAparenteSoloSeco5] = useState('')

    const [densidadeaparentemaxima1, setDensidadeAparenteMaxima1] = useState('')
    const [densidadeaparentemaxima2, setDensidadeAparenteMaxima2] = useState('')
    const [densidadeaparentemaxima3, setDensidadeAparenteMaxima3] = useState('')
    const [densidadeaparentemaxima4, setDensidadeAparenteMaxima4] = useState('')
    const [densidadeaparentemaxima5, setDensidadeAparenteMaxima5] = useState('')
    const [habilita, setHabilita] = useState(false)
    const [graucompactacao1, setGrauCompactacao1] = useState('')
    const [graucompactacao2, setGrauCompactacao2] = useState('')
    const [graucompactacao3, setGrauCompactacao3] = useState('')
    const [graucompactacao4, setGrauCompactacao4] = useState('')
    const [graucompactacao5, setGrauCompactacao5] = useState('')

    const [profundidadefuro1, setProfundidadeFuro1] = useState('')
    const [profundidadefuro2, setProfundidadeFuro2] = useState('')
    const [profundidadefuro3, setProfundidadeFuro3] = useState('')
    const [profundidadefuro4, setProfundidadeFuro4] = useState('')
    const [profundidadefuro5, setProfundidadeFuro5] = useState('')
    const [Data_C1, setData_C1] = useState('')
    const [Data_C2, setData_C2] = useState('')
    const [Data_C3, setData_C3] = useState('')
    const [Data_C4, setData_C4] = useState('')
    const [Data_C5, setData_C5] = useState('')
    const [Hora_C1, setHora_C1] = useState('')
    const [Hora_C2, setHora_C2] = useState('')
    const [Hora_C3, setHora_C3] = useState('')
    const [Hora_C4, setHora_C4] = useState('')
    const [Hora_C5, setHora_C5] = useState('')
    const [loading, setLoading] = useState(false)
    const [connState, setConnState] = useState(0);
    const dat = [
        { label: 'P1', value: 'P1' },
        { label: 'P2', value: 'P2' },
        { label: 'P3', value: 'P3' },
        { label: 'P4', value: 'P4' },
        { label: 'P5', value: 'P5' },

    ];
    const Eng = [
        { label: 'Normal', value: 'Normal' },
        { label: 'Internormal', value: 'Internormal' },
        { label: 'Intermediária', value: 'Intermediária' },
        { label: 'Intermodificada', value: 'Intermodificada' },
        { label: 'Modificada', value: 'Modificada' },
        { label: 'Superpesado', value: 'Superpesado' },
        { label: 'Outros', value: 'Outros' },

    ];
    const Separator1 = () => (
        <View style={styles.separator1} />
    );


    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };
    const falha = () =>
        Alert.alert(
            "                          Amostra não cadastrada!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const mescodigo = () =>
        Alert.alert(
            "       Adicionar o número do código ao campo de busca!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const mescodigoprocesso = () =>
        Alert.alert(
            "       Por favor preencher os campo de busca!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const mesprocesso = () =>
        Alert.alert(
            "       Adicionar o número do processo ao campo de busca!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const Carregar = () => {
        setLoading(true)

    };

    const mensagemsalvaroffline = () =>
        Alert.alert(
            "                 Salvo no armazenamento interno !",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const mensagemsalvar = () =>
        Alert.alert(
            "                         Ensaio Finalizado",
            "                                     Amostra =" + processo,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
    const Alerta = () =>
        Alert.alert(
            " Favor Selecione uma coluna!   ",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );

    const subValue = (pesofrascoantes, pesofrascodepois) => {
        //Alert.alert("Processamento: 5 segundos");
        return (pesofrascoantes - pesofrascodepois);
    }
    const subValue1 = (pesoareiadeslocada, pesoareiacone) => {
        //Alert.alert("Processamento: 5 segundos");
        return (pesoareiadeslocada - pesoareiacone);
    }
    const divValue = (pesoareiafuro, densidadeareia) => {
        //Alert.alert("Processamento: 5 segundos");
        return (pesoareiafuro / densidadeareia);
    }
    const subValue2 = (capsulasoloagua, capsulasolo) => {
        //Alert.alert("Processamento: 5 segundos");
        return (capsulasoloagua - capsulasolo);
    }
    const subValue3 = (capsulasolo, capsula) => {
        //Alert.alert("Processamento: 5 segundos");
        return (capsulasolo - capsula);
    }
    const divValue1 = (agua, soloseco) => {
        //Alert.alert("Processamento: 5 segundos");
        return ((agua / soloseco) * 100);
    }
    const subValue4 = (umidadecampo, umidadeotima) => {
        //Alert.alert("Processamento: 5 segundos");
        return (umidadecampo - umidadeotima);
    }
    const divValue2 = (volumefuro, pesomaterialfuro) => {
        //Alert.alert("Processamento: 5 segundos");
        return (pesomaterialfuro / volumefuro);
    }
    const calc = (densidadeumida, umidadecampo) => {
        //Alert.alert("Processamento: 5 segundos");
        return (densidadeumida / (umidadecampo + 100) * 100);
    }
    const divValue3 = (densidadeaparentesoloseco, densidadeaparentemaxima) => {
        //Alert.alert("Processamento: 5 segundos");
        return (densidadeaparentesoloseco / densidadeaparentemaxima * 100);
    }

    const [currentDate, setCurrentDate] = useState('');
    const [currentHora, setCurrentHora] = useState('');
    function Buscardados() {
        console.log(ensaio)
        if (ensaio != undefined) {

            BuscarProgramacao()

        } else {

            Alerta()
        }
        // getItem()



    };

    const SaveBanco = () => {
        console.log('ok')
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE Processo=? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                var temp = [];
                console.log(results)
                if (results.rows.length > 0) {
                    for (let i = 0; i < results.rows.length; ++i)

                        Save()
                    console.log('ok')
                    console.log(temp)
                } else {
                    console.log('vai fazer um inserte')
                    SalvarBanco()
                }
            });

        });

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


    function Save() {
        console.log(ensaio)
        if (ensaio == "P1") {

            UpdateQuery1(estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora)


        }
        if (ensaio == "P2") {

            UpdateQuery2(estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora)
        }
        if (ensaio == "P3") {

            UpdateQuery3(estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora)
        }
        if (ensaio == "P4") {

            UpdateQuery4(estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora)
        }
        if (ensaio == "P5") {
            UpdateQuery5(estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora)
        }

    }
    const UpdateQuery1 = (estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora) => {

        console.log(currentDate)
        db.transaction(
            (tx) => {
                tx.executeSql('UPDATE MassaAparenteLonaPlastica SET trecho =?,estudo =?,subtrecho =?,energiacomp =?,  estaca1 =?, pesofrascoantes1 =?,pesofrascoantes1=?,pesofrascodepois1=?,pesoareiacone1=?,densidadeareia1=?,furo1=?,norte1=?,este1=?,cota1=?,camada1=?,ncapsula1=?,capsulasoloagua1=?,capsulasolo1=?,capsula1=?,umidadeotima1=?,pesomaterialfuro1=?,profundidadefuro1=?,Data_C1=?, Hora_C1=? WHERE processo=? and Codigo_C1 =?', [trecho, estudo, subtrecho, energiacomp, estaca, pesofrascoantes, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora, processo, Codigo_C1], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');
                }, (error) => { console.log(error) });


            }

        )
    }
    const UpdateQuery2 = (estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora) => {

        console.log(currentDate)
        db.transaction(
            (tx) => {
                tx.executeSql('UPDATE MassaAparenteLonaPlastica SET  estaca2 =?, pesofrascoantes2 =?,pesofrascoantes2=?,pesofrascodepois2=?,pesoareiacone2=?,densidadeareia2=?,furo2=?,norte2=?,este2=?,cota2=?,camada2=?,ncapsula2=?,capsulasoloagua2=?,capsulasolo2=?,capsula2=?,umidadeotima2=?,pesomaterialfuro2=?,profundidadefuro2=?,Data_C2=?, Hora_C2=? WHERE processo=? and Codigo_C1 =?', [estaca, pesofrascoantes, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora, processo, Codigo_C1], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');
                }, (error) => { console.log(error) });


            }

        )
    }
    const UpdateQuery3 = (estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora) => {

        console.log(currentDate)
        db.transaction(
            (tx) => {
                tx.executeSql('UPDATE MassaAparenteLonaPlastica SET  estaca3 =?, pesofrascoantes3 =?,pesofrascoantes3=?,pesofrascodepois3=?,pesoareiacone3=?,densidadeareia3=?,furo3=?,norte3=?,este3=?,cota3=?,camada3=?,ncapsula3=?,capsulasoloagua3=?,capsulasolo3=?,capsula3=?,umidadeotima3=?,pesomaterialfuro3=?,profundidadefuro3=?,Data_C3=?, Hora_C3=? WHERE processo=? and Codigo_C1 =?', [estaca, pesofrascoantes, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora, processo, Codigo_C1], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');
                }, (error) => { console.log(error) });


            }

        )
    }
    const UpdateQuery4 = (estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora) => {

        console.log(currentDate)
        db.transaction(
            (tx) => {
                tx.executeSql('UPDATE MassaAparenteLonaPlastica SET  estaca4 =?, pesofrascoantes4 =?,pesofrascoantes4=?,pesofrascodepois4=?,pesoareiacone4=?,densidadeareia4=?,furo4=?,norte4=?,este4=?,cota4=?,camada4=?,ncapsula4=?,capsulasoloagua4=?,capsulasolo4=?,capsula4=?,umidadeotima4=?,pesomaterialfuro4=?,profundidadefuro4=?,Data_C4=?, Hora_C4=? WHERE processo=? and Codigo_C1 =?', [estaca, pesofrascoantes, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora, processo, Codigo_C1], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');
                }, (error) => { console.log(error) });


            }

        )
    }
    const UpdateQuery5 = (estaca, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora) => {

        console.log(currentDate)
        db.transaction(
            (tx) => {
                tx.executeSql('UPDATE MassaAparenteLonaPlastica SET  estaca5 =?, pesofrascoantes5 =?,pesofrascoantes5=?,pesofrascodepois5=?,pesoareiacone5=?,densidadeareia5=?,furo5=?,norte5=?,este5=?,cota5=?,camada5=?,ncapsula5=?,capsulasoloagua5=?,capsulasolo5=?,capsula5=?,umidadeotima5=?,pesomaterialfuro5=?,profundidadefuro5=?,Data_C5=?, Hora_C5=? WHERE processo=? and Codigo_C1 =?', [estaca, pesofrascoantes, pesofrascoantes, pesofrascodepois, pesoareiacone, densidadeareia, furo, norte, este, cota, camada, ncapsula, capsulasoloagua, capsulasolo, capsula, umidadeotima, pesomaterialfuro, profundidadefuro, currentDate, currentHora, processo, Codigo_C1], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        mensagemsalvaroffline()
                    } else alert('Registration Failed');
                }, (error) => { console.log(error) });


            }

        )
    }
    useEffect(() => {



        subValue()
        setPesoAreiaDeslocada(subValue(pesofrascoantes, pesofrascodepois))
        subValue1
        setPesoAreiaFuro(subValue1(pesoareiadeslocada, pesoareiacone))
        divValue()
        setVolumeFuro(divValue(pesoareiafuro, densidadeareia))
        subValue2
        setAgua(subValue2(capsulasoloagua, capsulasolo))
        subValue3
        setSoloSeco(subValue3(capsulasolo, capsula))
        divValue1
        setUmidadeCampo(divValue1(agua, soloseco))
        subValue4
        setDesvioUmidade(subValue4(umidadecampo, umidadeotima))
        divValue2
        setDensidadeUmida(divValue2(volumefuro, pesomaterialfuro))
        calc
        setDensidadeAparenteSoloSeco(calc(desidadeumida, umidadecampo))
        divValue3
        setGrauCompactacao(divValue3(densidadeaparentesoloseco, densidadeaparentemaxima))

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        if (processo > 0) {
            setCurrentDate(
                date + '/' + month + '/' + year
            );

        }
        if (processo > 0) {
            setCurrentHora(
                hours + ':' + min
            );
        }


    }

    );




    const Finalizar = () => {

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                var temp = [];
                if (results.rows.length > 0) {


                    add(results.rows.item(0).trecho, results.rows.item(0).estudo, results.rows.item(0).subtrecho, results.rows.item(0).energiacomp,results.rows.item(0).norma,results.rows.item(0).material, results.rows.item(0).estaca1, results.rows.item(0).pesofrascoantes1, results.rows.item(0).pesofrascodepois1, results.rows.item(0).pesoareiacone1, results.rows.item(0).densidadeareia1, results.rows.item(0).furo1, results.rows.item(0).norte1, results.rows.item(0).este1, results.rows.item(0).cota1, results.rows.item(0).profundidadefuro1, results.rows.item(0).Data_C1, results.rows.item(0).Hora_C1, results.rows.item(0).camada1, results.rows.item(0).ncapsula1, results.rows.item(0).capsula1, results.rows.item(0).capsulasoloagua1, results.rows.item(0).capsulasolo1, results.rows.item(0).umidadeotima1, results.rows.item(0).pesomaterialfuro1, results.rows.item(0).estaca2, results.rows.item(0).pesofrascoantes2, results.rows.item(0).pesofrascodepois2, results.rows.item(0).pesoareiacone2, results.rows.item(0).densidadeareia2, results.rows.item(0).furo2, results.rows.item(0).norte2, results.rows.item(0).este2, results.rows.item(0).cota2, results.rows.item(0).profundidadefuro2, results.rows.item(0).Data_C2, results.rows.item(0).Hora_C2, results.rows.item(0).camada2, results.rows.item(0).ncapsula2, results.rows.item(0).capsula2, results.rows.item(0).capsulasoloagua2, results.rows.item(0).capsulasolo2, results.rows.item(0).umidadeotima2, results.rows.item(0).pesomaterialfuro2)

                }
            });
        });
    }


    async function add(trecho, estudo, subtrecho, energiacomp,norma,material, estaca1, pesofrascoantes1, pesofrascodepois1, pesoareiacone1, densidadeareia1, furo1, norte1, este1, cota1, profundidadefuro1, Data_C1, Hora_C1, camada1, ncapsula1, capsula1, capsulasoloagua1, capsulasolo1, umidadeotima1, pesomaterialfuro1, estaca2, pesofrascoantes2, pesofrascodepois2, pesoareiacone2, densidadeareia2, furo2, norte2, este2, cota2, profundidadefuro2, Data_C2, Hora_C2, camada2, ncapsula2, capsula2, capsulasoloagua2, capsulasolo2, umidadeotima2, pesomaterialfuro2) {

        const obj = { conf: 'a', processo, trecho: trecho, estudo: estudo,norma:norma,material:material, subtrecho: subtrecho, energiacomp: energiacomp, estaca1: estaca1, estaca2: estaca2, pesofrascoantes1: pesofrascoantes1, pesofrascoantes2: pesofrascoantes2, pesofrascodepois1: pesofrascodepois1, pesofrascodepois2: pesofrascodepois2, pesoareiacone1: pesoareiacone1, pesoareiacone2: pesoareiacone2, densidadeareia1: densidadeareia1, densidadeareia2: densidadeareia2, furo1: furo1, furo2: furo2, norte1: norte1, norte2: norte2, este1: este1, este2: este2, cota1: cota1, cota2: cota2, Codigo_C1, profundidadefuro1: profundidadefuro1, profundidadefuro2: profundidadefuro2, Data_C1: Data_C1, Data_C2: Data_C2, Hora_C1: Hora_C1, Hora_C2: Hora_C2, camada1: camada1, camada2: camada2, ncapsula1: ncapsula1, ncapsula2: ncapsula2, capsula1: capsula1, capsula2: capsula2, capsulasoloagua1: capsulasoloagua1, capsulasoloagua2: capsulasoloagua2, capsulasolo1: capsulasolo1, capsulasolo2: capsulasolo2, umidadeotima1: umidadeotima1, umidadeotima2: umidadeotima2, pesomaterialfuro1: pesomaterialfuro1, pesomaterialfuro2: pesomaterialfuro2,login:log.login };
        console.log(obj)
        if (processo > 0) {
            const res = await axios.post(this.api + 'SalvarMassaEspecificaGraoA.php', obj);
            if (res.data.success === true) {
                Finalizar2()


            }
        }
    }
    const Finalizar2 = () => {

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                var temp = [];
                if (results.rows.length > 0) {

                    add2(results.rows.item(0).estaca3, results.rows.item(0).pesofrascoantes3, results.rows.item(0).pesoareiacone3, results.rows.item(0).densidadeareia3, results.rows.item(0).furo3, results.rows.item(0).norte3, results.rows.item(0).este3, results.rows.item(0).cota3, results.rows.item(0).profundidadefuro3, results.rows.item(0).Data_C3, results.rows.item(0).Hora_C3, results.rows.item(0).camada3, results.rows.item(0).ncapsula3, results.rows.item(0).capsula3, results.rows.item(0).capsulasoloagua3, results.rows.item(0).capsulasolo3, results.rows.item(0).umidadeotima3, results.rows.item(0).pesomaterialfuro3, results.rows.item(0).estaca4, results.rows.item(0).pesofrascoantes4, results.rows.item(0).pesoareiacone4, results.rows.item(0).densidadeareia4, results.rows.item(0).furo4, results.rows.item(0).norte4, results.rows.item(0).este4, results.rows.item(0).cota4, results.rows.item(0).profundidadefuro4, results.rows.item(0).Data_C4, results.rows.item(0).Hora_C4, results.rows.item(0).camada4, results.rows.item(0).ncapsula4, results.rows.item(0).capsula4, results.rows.item(0).capsulasoloagua4, results.rows.item(0).capsulasolo4, results.rows.item(0).umidadeotima4, results.rows.item(0).pesomaterialfuro4, results.rows.item(0).estaca5, results.rows.item(0).pesofrascoantes5, results.rows.item(0).pesoareiacone5, results.rows.item(0).densidadeareia5, results.rows.item(0).furo5, results.rows.item(0).norte5, results.rows.item(0).este5, results.rows.item(0).cota5, results.rows.item(0).profundidadefuro5, results.rows.item(0).Data_C5, results.rows.item(0).Hora_C5, results.rows.item(0).camada5, results.rows.item(0).ncapsula5, results.rows.item(0).capsula5, results.rows.item(0).capsulasoloagua5, results.rows.item(0).capsulasolo5, results.rows.item(0).umidadeotima5, results.rows.item(0).pesomaterialfuro5)

                }
            });
        });
    }
    async function add2(estaca3, pesofrascoantes3, pesoareiacone3, densidadeareia3, furo3, norte3, este3, cota3, profundidadefuro3, Data_C3, Hora_C3, camada3, ncapsula3, capsula3, capsulasoloagua3, capsulasolo3, umidadeotima3, pesomaterialfuro3, estaca4, pesofrascoantes4, pesoareiacone4, densidadeareia4, furo4, norte4, este4, cota4, profundidadefuro4, Data_C4, Hora_C4, camada4, ncapsula4, capsula4, capsulasoloagua4, capsulasolo4, umidadeotima4, pesomaterialfuro4, estaca5, pesofrascoantes5, pesoareiacone5, densidadeareia5, furo5, norte5, este5, cota5, profundidadefuro5, Data_C5, Hora_C5, camada5, ncapsula5, capsula5, capsulasoloagua5, capsulasolo5, umidadeotima5, pesomaterialfuro5) {

        const obj = { conf: 'b', processo, Codigo_C1, estaca3: estaca3, pesofrascoantes3: pesofrascoantes3, pesoareiacone3: pesoareiacone3, densidadeareia3: densidadeareia3, furo3: furo3, norte3: norte3, este3: este3, cota3: cota3, profundidadefuro3: profundidadefuro3, Data_C3: Data_C3, Hora_C3: Hora_C3, camada3: camada3, ncapsula3: ncapsula3, capsula3: capsula3, capsulasoloagua3: capsulasoloagua3, capsulasolo3: capsulasolo3, umidadeotima3: umidadeotima3, pesomaterialfuro3: pesomaterialfuro3, estaca4: estaca4, pesofrascoantes4: pesofrascoantes4, pesoareiacone4: pesoareiacone4, densidadeareia4: densidadeareia4, furo4: furo4, norte4: norte4, este4: este4, cota4: cota4, profundidadefuro4: profundidadefuro4, Data_C4: Data_C4, Hora_C4: Hora_C4, camada4: camada4, ncapsula4: ncapsula4, capsula4: capsula4, capsulasoloagua4: capsulasoloagua4, capsulasolo4: capsulasolo4, umidadeotima4: umidadeotima4, pesomaterialfuro4: pesomaterialfuro4, estaca5: estaca5, pesofrascoantes5: pesofrascoantes5, pesoareiacone5: pesoareiacone5, densidadeareia5: densidadeareia5, furo5: furo5, norte5: norte5, este5: este5, cota5: cota5, profundidadefuro5: profundidadefuro5, Data_C5: Data_C5, Hora_C5: Hora_C5, camada5: camada5, ncapsula5: ncapsula5, capsula5: capsula5, capsulasoloagua5: capsulasoloagua5, capsulasolo5: capsulasolo5, umidadeotima5: umidadeotima5, pesomaterialfuro5: pesomaterialfuro5 };

        if (processo > 0) {
            const res = await axios.post(this.api + 'SalvarMassaEspecificaGraoB.php', obj);
         
            if (res.data.success === true) {
                mensagemsalvar()


            }
        }
    }
    const gerarBanco = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists MassaAparenteLonaPlastica (  processo text,norma text,material text, trecho text, estudo text, subtrecho text, energiacomp text, estaca1 text, estaca2 text, estaca3 text, estaca4 text, estaca5 text, pesofrascoantes1 text, pesofrascoantes2 text, pesofrascoantes3 text, pesofrascoantes4 text, pesofrascoantes5 text, pesofrascodepois1 text, pesofrascodepois2 text, pesofrascodepois3 text, pesofrascodepois4 text, pesofrascodepois5 text, pesoareiacone1 text, pesoareiacone2 text, pesoareiacone3 text, pesoareiacone4 text, pesoareiacone5 text, densidadeareia1 text, densidadeareia2 text, densidadeareia3 text, densidadeareia4 text, densidadeareia5 text, furo1 text, furo2 text, furo3 text, furo4 text, furo5 text, norte1 text, norte2 text, norte3 text, norte4 text, norte5 text, este1 text, este2 text, este3 text, este4 text, este5 text, cota1 text, cota2 text, cota3 text, cota4 text, cota5 text, Codigo_C1 text, profundidadefuro1 text, profundidadefuro2 text, profundidadefuro3 text, profundidadefuro4 text, profundidadefuro5 text, Data_C1 text, Data_C2 text, Data_C3 text, Data_C4 text, Data_C5 text, Hora_C1 text, Hora_C2 text, Hora_C3 text, Hora_C4 text, Hora_C5 text, camada1 text, camada2 text, camada3 text, camada4 text, camada5 text, ncapsula1 text, ncapsula2 text, ncapsula3 text, ncapsula4 text, ncapsula5 text, capsula1 text, capsula2 text, capsula3 text, capsula4 text, capsula5 text, capsulasoloagua1 text, capsulasoloagua2 text, capsulasoloagua3 text, capsulasoloagua4 text, capsulasoloagua5 text, capsulasolo1 text, capsulasolo2 text, capsulasolo3 text, capsulasolo4 text, capsulasolo5 text, umidadeotima1 text, umidadeotima2 text, umidadeotima3 text, umidadeotima4 text, umidadeotima5 text, pesomaterialfuro1 text, pesomaterialfuro2 text, pesomaterialfuro3 text, pesomaterialfuro4 text, pesomaterialfuro5 text);"
                );

                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBanco = () => {

        db.transaction((tx) => {
            tx.executeSql(`insert into MassaAparenteLonaPlastica ( processo,Codigo_C1 ) values (?,?)`, [processo, Codigo_C1], (tx, results) => {
                console.log('Results', results);
                if (results.rowsAffected > 0) {
                    Save()
                } else alert('Registration Failed');
            }, (error) => { console.log(error) });
        },


        );
    };
    const [flatListItems, setFlatListItems] = useState([]);
    const BuscaBanco = () => {
        if (ensaio == "P1") {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                    var temp = [];
                    if (results.rows.length > 0) {
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        console.log(results.rows.item(0))
                        setTrecho(results.rows.item(0).trecho)
                        setEstudo(results.rows.item(0).estudo)
                        setSubTrecho(results.rows.item(0).subtrecho)
                        setEnergiacomp(results.rows.item(0).energiacomp)
                        setNormas(results.rows.item(0).energiacompresults.rows.item(0).norma)
                        setMaterial(results.rows.item(0).energiacompresults.rows.item(0).material)

                        setEstaca(results.rows.item(0).estaca1)
                        setPesoFrascoAntes(results.rows.item(0).pesofrascoantes1)
                        setPesoFrascoDepois(results.rows.item(0).pesofrascodepois1)
                        setPesoAreiaCone(results.rows.item(0).pesoareiacone1)
                        setDesidadeAreia(results.rows.item(0).densidadeareia1)
                        setFuro(results.rows.item(0).furo1)
                        setNorte(results.rows.item(0).norte1)
                        setEste(results.rows.item(0).este1)
                        setCota(results.rows.item(0).cota1)
                        setProfundidadeFuro(results.rows.item(0).profundidadefuro1)
                        setCurrentDate(results.rows.item(0).Data_C1)
                        setCurrentHora(results.rows.item(0).Hora_C1)
                        setCamada(results.rows.item(0).camada1)
                        setNcapsula(results.rows.item(0).ncapsula1)
                        setCapsula(results.rows.item(0).capsula1)
                        setCapsulaSoloAgua(results.rows.item(0).capsulasoloagua1)
                        setCapsulaSolo(results.rows.item(0).capsulasolo1)
                        setUmidadeOtima(results.rows.item(0).umidadeotima1)
                        setPesoMaterialFuro(results.rows.item(0).pesomaterialfuro1)
                        setHabilita(true)

                    } else {

                        setHabilita(true)
                    }
                });
            });
        }
        if (ensaio == "P2") {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                    var temp = [];
                    if (results.rows.length > 0) {
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        console.log(results.rows.item(0))
                        setTrecho(results.rows.item(0).trecho)
                        setEstudo(results.rows.item(0).estudo)
                        setSubTrecho(results.rows.item(0).subtrecho)
                        setEnergiacomp(results.rows.item(0).energiacomp)
                        setEstaca(results.rows.item(0).estaca2)
                        setPesoFrascoAntes(results.rows.item(0).pesofrascoantes2)
                        setPesoFrascoDepois(results.rows.item(0).pesofrascodepois2)
                        setPesoAreiaCone(results.rows.item(0).pesoareiacone2)
                        setDesidadeAreia(results.rows.item(0).densidadeareia2)
                        setFuro(results.rows.item(0).furo2)
                        setNorte(results.rows.item(0).norte2)
                        setEste(results.rows.item(0).este2)
                        setCota(results.rows.item(0).cota2)
                        setProfundidadeFuro(results.rows.item(0).profundidadefuro2)
                        setCurrentDate(results.rows.item(0).Data_C2)
                        setCurrentHora(results.rows.item(0).Hora_C2)
                        setCamada(results.rows.item(0).camada2)
                        setNcapsula(results.rows.item(0).ncapsula2)
                        setCapsula(results.rows.item(0).capsula2)
                        setCapsulaSoloAgua(results.rows.item(0).capsulasoloagua2)
                        setCapsulaSolo(results.rows.item(0).capsulasolo2)
                        setUmidadeOtima(results.rows.item(0).umidadeotima2)
                        setPesoMaterialFuro(results.rows.item(0).pesomaterialfuro2)
                        setHabilita(true)

                    } else {

                        setHabilita(true)
                    }
                });


            });
        }
        if (ensaio == "P3") {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                    var temp = [];
                    if (results.rows.length > 0) {
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        console.log(results.rows.item(0))
                        setTrecho(results.rows.item(0).trecho)
                        setEstudo(results.rows.item(0).estudo)
                        setSubTrecho(results.rows.item(0).subtrecho)
                        setEnergiacomp(results.rows.item(0).energiacomp)
                        setEstaca(results.rows.item(0).estaca3)
                        setPesoFrascoAntes(results.rows.item(0).pesofrascoantes3)
                        setPesoFrascoDepois(results.rows.item(0).pesofrascodepois3)
                        setPesoAreiaCone(results.rows.item(0).pesoareiacone3)
                        setDesidadeAreia(results.rows.item(0).densidadeareia3)
                        setFuro(results.rows.item(0).furo3)
                        setNorte(results.rows.item(0).norte3)
                        setEste(results.rows.item(0).este3)
                        setCota(results.rows.item(0).cota3)
                        setProfundidadeFuro(results.rows.item(0).profundidadefuro3)
                        setCurrentDate(results.rows.item(0).Data_C3)
                        setCurrentHora(results.rows.item(0).Hora_C3)
                        setCamada(results.rows.item(0).camada3)
                        setNcapsula(results.rows.item(0).ncapsula3)
                        setCapsula(results.rows.item(0).capsula3)
                        setCapsulaSoloAgua(results.rows.item(0).capsulasoloagua3)
                        setCapsulaSolo(results.rows.item(0).capsulasolo3)
                        setUmidadeOtima(results.rows.item(0).umidadeotima3)
                        setPesoMaterialFuro(results.rows.item(0).pesomaterialfuro3)
                        setHabilita(true)

                    } else {

                        setHabilita(true)
                    }
                });
            });
        }
        if (ensaio == "P4") {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                    var temp = [];
                    if (results.rows.length > 0) {
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        console.log(results.rows.item(0))
                        setTrecho(results.rows.item(0).trecho)
                        setEstudo(results.rows.item(0).estudo)
                        setSubTrecho(results.rows.item(0).subtrecho)
                        setEnergiacomp(results.rows.item(0).energiacomp)
                        setEstaca(results.rows.item(0).estaca4)
                        setPesoFrascoAntes(results.rows.item(0).pesofrascoantes4)
                        setPesoFrascoDepois(results.rows.item(0).pesofrascodepois4)
                        setPesoAreiaCone(results.rows.item(0).pesoareiacone4)
                        setDesidadeAreia(results.rows.item(0).densidadeareia4)
                        setFuro(results.rows.item(0).furo4)
                        setNorte(results.rows.item(0).norte4)
                        setEste(results.rows.item(0).este4)
                        setCota(results.rows.item(0).cota4)
                        setProfundidadeFuro(results.rows.item(0).profundidadefuro4)
                        setCurrentDate(results.rows.item(0).Data_C4)
                        setCurrentHora(results.rows.item(0).Hora_C4)
                        setCamada(results.rows.item(0).camada4)
                        setNcapsula(results.rows.item(0).ncapsula4)
                        setCapsula(results.rows.item(0).capsula4)
                        setCapsulaSoloAgua(results.rows.item(0).capsulasoloagua4)
                        setCapsulaSolo(results.rows.item(0).capsulasolo4)
                        setUmidadeOtima(results.rows.item(0).umidadeotima4)
                        setPesoMaterialFuro(results.rows.item(0).pesomaterialfuro4)
                        setHabilita(true)

                    } else {

                        setHabilita(true)
                    }
                });
            });
        };
        if (ensaio == "P5") {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM MassaAparenteLonaPlastica WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                    var temp = [];
                    if (results.rows.length > 0) {
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        console.log(results.rows.item(0))
                        setTrecho(results.rows.item(0).trecho)
                        setEstudo(results.rows.item(0).estudo)
                        setSubTrecho(results.rows.item(0).subtrecho)
                        setEnergiacomp(results.rows.item(0).energiacomp)
                        setEstaca(results.rows.item(0).estaca5)
                        setPesoFrascoAntes(results.rows.item(0).pesofrascoantes5)
                        setPesoFrascoDepois(results.rows.item(0).pesofrascodepois5)
                        setPesoAreiaCone(results.rows.item(0).pesoareiacone5)
                        setDesidadeAreia(results.rows.item(0).densidadeareia5)
                        setFuro(results.rows.item(0).furo5)
                        setNorte(results.rows.item(0).norte5)
                        setEste(results.rows.item(0).este5)
                        setCota(results.rows.item(0).cota5)
                        setProfundidadeFuro(results.rows.item(0).profundidadefuro5)
                        setCurrentDate(results.rows.item(0).Data_C5)
                        setCurrentHora(results.rows.item(0).Hora_C5)
                        setCamada(results.rows.item(0).camada5)
                        setNcapsula(results.rows.item(0).ncapsula5)
                        setCapsula(results.rows.item(0).capsula5)
                        setCapsulaSoloAgua(results.rows.item(0).capsulasoloagua5)
                        setCapsulaSolo(results.rows.item(0).capsulasolo5)
                        setUmidadeOtima(results.rows.item(0).umidadeotima5)
                        setPesoMaterialFuro(results.rows.item(0).pesomaterialfuro5)
                        setHabilita(true)

                    } else {

                        setHabilita(true)
                    }
                });
            });
        };
    }

    async function BuscarProgramacao() {
        // console.log(processo)
        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Programacao where Processo = ?', [processo], (tx, results) => {
                var temp = [];
                console.log("update", results.rows)
                if (results.rows.length > 0) {
                    if (results.rows.item(0).frascoareia > 0) {
                        setProcesso(results.rows.item(0).Processo)
                        BuscaBanco()
                        console.log("buscar")
                    } else {
                        falha()
                    }
                } else {
                    falha()
                }



                //console.log(results.rows, 'ok')
            });

        });

    }
    const listItemView = (item) => {

        setEstudo(item.estudos);
        setSubTrecho(item.SubTrecho);
        // setEnergia(item.Energia);
        setTrecho(item.trecho);
        setEstaca1(item.estaca1);
        setEstaca2(item.estaca2);
        setEstaca3(item.estaca3);
        setEstaca4(item.estaca4);
        setEstaca5(item.estaca5);
        setNormas(item.norma);
        setMaterial(item.material);
        setPesoFrascoAntes1(item.pesofrascoantes1);
        setPesoFrascoAntes2(item.pesofrascoantes2);
        setPesoFrascoAntes3(item.pesofrascoantes3);
        setPesoFrascoAntes4(item.pesofrascoantes4);
        setPesoFrascoAntes5(item.pesofrascoantes5);
        setPesoFrascoDepois1(item.pesofrascodepois1);
        setPesoFrascoDepois2(item.pesofrascodepois2);
        setPesoFrascoDepois3(item.pesofrascodepois3);
        setPesoFrascoDepois4(item.pesofrascodepois4);
        setPesoFrascoDepois5(item.pesofrascodepois5);
        setPesoAreiaDeslocada1(item.pesoareiadeslocada1);
        setPesoAreiaDeslocada2(item.pesoareiadeslocada2);
        setPesoAreiaDeslocada3(item.pesoareiadeslocada3);
        setPesoAreiaDeslocada4(item.pesoareiadeslocada4);
        setPesoAreiaDeslocada5(item.pesoareiadeslocada5);
        setPesoAreiaCone1(item.pesoareiacone1);
        setPesoAreiaCone2(item.pesoareiacone2);
        setPesoAreiaCone3(item.pesoareiacone3);
        setPesoAreiaCone4(item.pesoareiacone4);
        setPesoAreiaCone5(item.pesoareiacone5);
        setPesoAreiaFuro1(item.pesoareiafuro1);
        setPesoAreiaFuro2(item.pesoareiafuro2);
        setPesoAreiaFuro3(item.pesoareiafuro3);
        setPesoAreiaFuro4(item.pesoareiafuro4);
        setPesoAreiaFuro5(item.pesoareiafuro5);
        setDesidadeAreia1(item.densidadeareia1);
        setDesidadeAreia2(item.densidadeareia2);
        setDesidadeAreia3(item.densidadeareia3);
        setDesidadeAreia4(item.densidadeareia4);
        setDesidadeAreia5(item.densidadeareia5);
        setVolumeFuro1(item.volumefuro1);
        setVolumeFuro2(item.volumefuro2);
        setVolumeFuro3(item.volumefuro3);
        setVolumeFuro4(item.volumefuro4);
        setVolumeFuro5(item.volumefuro5);
        setFuro1(item.furo1);
        setFuro2(item.furo2);
        setFuro3(item.furo3);
        setFuro4(item.furo4);
        setFuro5(item.furo5);
        setPesoMaterialFuro1(item.pesomaterialfuro1);
        setPesoMaterialFuro2(item.pesomaterialfuro2);
        setPesoMaterialFuro3(item.pesomaterialfuro3);
        setPesoMaterialFuro4(item.pesomaterialfuro4);
        setPesoMaterialFuro5(item.pesomaterialfuro5);
        setCamada1(item.camada1);
        setCamada2(item.camada2);
        setCamada3(item.camada3);
        setCamada4(item.camada4);
        setCamada5(item.camada5);
        setNcapsula1(item.ncapsula1);
        setNcapsula2(item.ncapsula2);
        setNcapsula3(item.ncapsula3);
        setNcapsula4(item.ncapsula4);
        setNcapsula5(item.ncapsula5);
        setCapsulaSoloAgua1(item.capsulasoloagua1);
        setCapsulaSoloAgua2(item.capsulasoloagua2);
        setCapsulaSoloAgua3(item.capsulasoloagua3);
        setCapsulaSoloAgua4(item.capsulasoloagua4);
        setCapsulaSoloAgua5(item.capsulasoloagua5);
        setCapsulaSolo1(item.capsulasolo1);
        setCapsulaSolo2(item.capsulasolo2);
        setCapsulaSolo3(item.capsulasolo3);
        setCapsulaSolo4(item.capsulasolo4);
        setCapsulaSolo5(item.capsulasolo5);
        setAgua1(item.agua1);
        setAgua2(item.agua2);
        setAgua3(item.agua3);
        setAgua4(item.agua4);
        setAgua5(item.agua5);
        setCapsula1(item.capsula1);
        setCapsula2(item.capsula2);
        setCapsula3(item.capsula3);
        setCapsula4(item.capsula4);
        setCapsula5(item.capsula5);
        setSoloSeco1(item.soloseco1);
        setSoloSeco2(item.soloseco2);
        setSoloSeco3(item.soloseco3);
        setSoloSeco4(item.soloseco4);
        setSoloSeco5(item.soloseco5);
        setUmidadeCampo1(item.umidadecampo1);
        setUmidadeCampo2(item.umidadecampo2);
        setUmidadeCampo3(item.umidadecampo3);
        setUmidadeCampo4(item.umidadecampo4);
        setUmidadeCampo5(item.umidadecampo5);
        setUmidadeOtima1(item.umidadeotima1);
        setUmidadeOtima2(item.umidadeotima2);
        setUmidadeOtima3(item.umidadeotima3);
        setUmidadeOtima4(item.umidadeotima4);
        setUmidadeOtima5(item.umidadeotima5);
        setDesvioUmidade1(item.desvioumidade1);
        setDesvioUmidade2(item.desvioumidade2);
        setDesvioUmidade3(item.desvioumidade3);
        setDesvioUmidade4(item.desvioumidade4);
        setDesvioUmidade5(item.desvioumidade5);
        setDensidadeUmida1(item.desidadeumida1);
        setDensidadeUmida2(item.desidadeumida2);
        setDensidadeUmida3(item.desidadeumida3);
        setDensidadeUmida4(item.desidadeumida4);
        setDensidadeUmida5(item.desidadeumida5);
        setDensidadeAparenteSoloSeco1(item.densidadeaparentesoloseco1);
        setDensidadeAparenteSoloSeco2(item.densidadeaparentesoloseco2);
        setDensidadeAparenteSoloSeco3(item.densidadeaparentesoloseco3);
        setDensidadeAparenteSoloSeco4(item.densidadeaparentesoloseco4);
        setDensidadeAparenteSoloSeco5(item.densidadeaparentesoloseco5);
        setDensidadeAparenteMaxima1(item.densidadeaparentemaxima1);
        setDensidadeAparenteMaxima2(item.densidadeaparentemaxima2);
        setDensidadeAparenteMaxima3(item.densidadeaparentemaxima3);
        setDensidadeAparenteMaxima4(item.densidadeaparentemaxima4);
        setDensidadeAparenteMaxima5(item.densidadeaparentemaxima5);
        setNorte1(item.norte1);
        setNorte2(item.norte2);
        setNorte3(item.norte3);
        setNorte4(item.norte4);
        setNorte5(item.norte5);
        setEste1(item.este1);
        setEste2(item.este2);
        setEste3(item.este3);
        setEste4(item.este4);
        setEste5(item.este5);
        setCota1(item.cota1);
        setCota2(item.cota2);
        setCota3(item.cota3);
        setCota4(item.cota4);
        setCota5(item.cota5);
        setGrauCompactacao1(item.graucompactacao1);
        setGrauCompactacao2(item.graucompactacao2);
        setGrauCompactacao3(item.graucompactacao3);
        setGrauCompactacao4(item.graucompactacao4);
        setGrauCompactacao5(item.graucompactacao5);
        setProfundidadeFuro1(item.profundidadefuro1);
        setProfundidadeFuro2(item.profundidadefuro2);
        setProfundidadeFuro3(item.profundidadefuro3);
        setProfundidadeFuro4(item.profundidadefuro4);
        setProfundidadeFuro5(item.profundidadefuro5);
        setData_C1(item.Data_C1);
        setData_C2(item.Data_C2);
        setData_C3(item.Data_C3);
        setData_C4(item.Data_C4);
        setData_C5(item.Data_C5);
        setHora_C1(item.Hora_C1);
        setHora_C2(item.Hora_C2);
        setHora_C3(item.Hora_C3);
        setHora_C4(item.Hora_C4);
        setHora_C5(item.Hora_C5);
        // setStatus(item.success)

    };
    let DeleteBancoSQlite = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    'DROP TABLE IF EXISTS MassaAparenteLonaPlastica',
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                    }
                );
                console.log(tx)
            });
        } catch (error) {
            console.error(error);
        }

    };
    useEffect(() => {
        //DeleteBancoSQlite()
        gerarBanco()
        NetInfo.fetch().then(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });

        const unsubscribe = NetInfo.addEventListener(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <SafeAreaView>

            <ScrollView >

                <View style={styles.container}>

                    {connState.isConnected == true ? <Image
                        source={require('../../../componentes/imagem/applications_internet.png')}
                        style={styles.ImageIconStyle}
                    /> : <Image
                        source={require('../../../componentes/imagem/Networkoff.png')}
                        style={styles.ImageIconStyle}
                    />}


                </View>
                <View style={styles.container}>
                    {loading == true ? <Modal onRequestClose={() => null} visible={loading}>
                        <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                                <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                                <ActivityIndicator size="large" />
                            </View>
                        </View>
                    </Modal>
                        : <Text />}
                    <View style={styles.container1}>
                        <Text style={styles.LabelTituloLeft}>
                            Código:
                        </Text>
                        <Text style={styles.LabelTituloRight}>
                            Processo:
                        </Text>
                    </View>
                    <View style={styles.container1}>
                        <TextInput
                            style={styles.inputlef3t}
                            onChangeText={setCodigo_C1}
                            value={Codigo_C1}
                            keyboardType='numeric'
                            placeholder="Código"
                        />
                        <TextInput
                            style={styles.inputlef4t}
                            onChangeText={setProcesso}
                            value={processo}
                            keyboardType='numeric'
                            placeholder="Processo"
                        />

                    </View>
                    <Text style={styles.labelcontanier}>
                        Coluna:
                    </Text>
                    <Separator1></Separator1>
                    <Dropdown
                        style={styles.dropdown}
                        containerStyle={styles.shadow}
                        textItem={styles.textItem}
                        selectedTextStyle={styles.textItem}
                        dropdownPosition="bottom"
                        placeholderStyle={styles.placeholderStyle}
                        data={dat}
                        search
                        searchPlaceholder="Buscar"
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholder="Coluna"
                        value={ensaio}
                        onChange={item => {
                            setEnsaio(item.value);
                            // console.log('selected', item);
                        }}
                        renderItem={item => _renderItem(item)}
                        textError="Error"
                    />
                    <View style={styles.containerrow}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => Buscardados()}>
                            <Text style={styles.text}>Buscar</Text>
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Image style={styles.buttonImageIconStyle}
                                source={require('../../../../assets/search.png')} />
                        </TouchableOpacity>

                    </View>

                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelleft}>
                            Trecho:
                        </Text>
                        <Text style={styles.labelright}>
                            Estudo:
                        </Text>
                        <Text style={styles.labelcontanierright}>
                            Sub-Trecho:
                        </Text>
                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setTrecho}
                            value={trecho}

                            placeholder="Trecho"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftespace}

                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setEstudo}
                            value={estudo}

                            placeholder="Estudo"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftespace}

                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setSubTrecho}
                            value={subtrecho}

                            placeholder="Sub-Trecho"
                        />

                    </View> : null}
                    {habilita == true ? <View style={styles.container1}>
                        <Text style={styles.labelcontanierleft}>

                            Tipo compactação:
                        </Text>
                        <Text style={styles.labelright}>

                            Normas:
                        </Text>
                        <Text style={styles.labelcontanierright}>

                            Material:
                        </Text>

                    </View> : null}

                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setEnergiacomp}
                            value={energiacomp}

                            placeholder="Energia na compactação"
                        />

                        <TextInput
                            //1
                            style={styles.inputleftespace}

                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setNormas}
                            value={norma}

                            placeholder="Energia na compactação"
                        />
                        <TextInput
                            //1
                            style={styles.inputleftespace}

                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setMaterial}
                            value={material}

                            placeholder="Energia na compactação"
                        />

                    </View> : null}


                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Estaca/posição:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft}
                            onChangeText={setEstaca}
                            value={estaca}

                            placeholder="Estaca/posição"
                        />

                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso do frasco antes:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>


                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setPesoFrascoAntes}
                            value={pesofrascoantes.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco antes"
                        />

                    </View> : null}


                    <Separator1></Separator1>

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso do frasco depois:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setPesoFrascoDepois}
                            value={pesofrascodepois.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do frasco depois"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso areia deslocada:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setPesoAreiaDeslocada}
                            value={pesoareiadeslocada}

                        />
                    </View> : null}
                    <Separator1></Separator1>

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso da areia cone:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setPesoAreiaCone}
                            value={pesoareiacone.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso da areia no cone"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso da areia no furo:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setPesoAreiaFuro}
                            value={pesoareiafuro}

                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Densidade da areia:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setDesidadeAreia}
                            value={densidadeareia.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Densidade da Areia"
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Volume do furo:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setVolumeFuro}
                            value={volumefuro}
                        />
                    </View> : null}


                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Furo:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setFuro}
                            value={furo.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Furo"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelspace}>
                        Local do furo (coordenadas):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Norte:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setNorte}
                            value={norte}

                            placeholder="Norte"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Este:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setEste}
                            value={este}

                            placeholder="Este"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Cota:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setCota}
                            value={cota.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Cota"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Camada:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setCamada}
                            value={camada.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Camada"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Nº capsula:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setNcapsula}
                            value={ncapsula.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Nº capsula"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Cápsula + Solo + Água:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setCapsulaSoloAgua}
                            value={capsulasoloagua.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Cápsula + solo + água"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Cápsula + Solo :
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setCapsulaSolo}
                            value={capsulasolo.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Cápsula + solo"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Água:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setAgua}
                            value={agua}
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Cápsula :
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setCapsula}
                            value={capsula.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Cápsula"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Solo Seco:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setSoloSeco}
                            value={soloseco}
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Umidade campo:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setUmidadeCampo}
                            value={umidadecampo}
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Umidade ótima (LAB.):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setUmidadeOtima}
                            value={umidadeotima.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Umidade ótima (LAB.)"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Desvio de umidade:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setDesvioUmidade}
                            value={desvioumidade}
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Peso do material do furo - total:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setPesoMaterialFuro}
                            value={pesomaterialfuro.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do material do furo - total"
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Desidade de umidade:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 3,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setDensidadeUmida}
                            value={desidadeumida}
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Desidade aparente do solo seco:
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 3,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setDensidadeAparenteSoloSeco}
                            value={densidadeaparentesoloseco}
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Desidade aparente maxima(LAB):
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            keyboardType='numeric'
                            onChangeText={setDensidadeAparenteMaxima}
                            value={densidadeaparentemaxima.toString().replace(".", ",")}
                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Grau de compactação (%):
                    </Text> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInputMask
                            style={styles.inputleftDesable}
                            editable={false} selectTextOnFocus={false}
                            type={'money'}
                            options={{
                                precision: 1,
                                separator: ',',
                                delimiter: '.',
                                unit: '',
                                suffixUnit: ''
                            }}
                            onChangeText={setGrauCompactacao}
                            value={graucompactacao}
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Profundida do furo (cm):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            onChangeText={setProfundidadeFuro}
                            value={profundidadefuro.toString().replace(".", ",")}
                            keyboardType='numeric'
                            placeholder="Peso do material do furo - total"
                        />
                    </View> : null}

                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Data:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            editable={false} selectTextOnFocus={false}
                            onChangeText={setCurrentDate}
                            value={currentDate}


                        />
                    </View> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        Hora:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            style={styles.inputleft}
                            editable={false} selectTextOnFocus={false}
                            onChangeText={setCurrentHora}
                            value={currentHora}


                        />
                    </View> : null}
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.containerrow}>
                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={Finalizar}
                        >
                            <Image
                                source={require('../../../../assets/cloud_computer.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Finalizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={SaveBanco}
                        >
                            <Image
                                source={require('../../../../assets/SaveIcon.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Salvar</Text>
                        </TouchableOpacity>




                    </View> : null}
                </View>
            </ScrollView >
            <FlatList
                data={flatListItems}
                renderItem={({ item }) => listItemView(item)}
            />
        </SafeAreaView>
    );
};

