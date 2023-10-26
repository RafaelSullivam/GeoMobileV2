import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList } from 'react-native';
import styles from "./style.js";
import axios from 'axios'; // npm i axios
import { SafeAreaView } from "react-native-safe-area-context";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"
import * as SQLite from "expo-sqlite";


export default function Hilf() {
    api = Conexao.api
    const [amostra, setAmostra] = useState()
    const [processo, setProcesso] = useState()
    const [obra, setObra] = useState('')
    const [reforcobarragem, setReforcoBarragem] = useState('')
    const [cota, setCota] = useState('')
    const [material, setMaterial] = useState('')
    const [npassada, setNpassada] = useState('')
    const [camada, setCamada] = useState('')
    const [tipoequipamento, setTipoEquipamaento] = useState('')
    const [espcamada, setEspCamada] = useState('')
    const [energia, setEnergia] = useState('')
    const [nfaixa, setNfaixa] = useState('')
    const [ncamadas, setNcamada] = useState('')
    const [ngolpe, setNgolpe] = useState('')
    const [quantmaterial, setQuantMaterial] = useState('')
    const [soquete, setSoquete] = useState('')
    const [aguaaddretml1, setAguaAddRetml1] = useState('0')
    const [aguaaddretml2, setAguaAddRetml2] = useState('')
    const [aguaaddretml3, setAguaAddRetml3] = useState('')
    const [aguaaddretml4, setAguaAddRetml4] = useState('100')
    const [aguaaddretpor1, setAguaAddRetpor1] = useState('')
    const [aguaaddretpor2, setAguaAddRetpor2] = useState('')
    const [aguaaddretpor3, setAguaAddRetpor3] = useState('')
    const [aguaaddretpor4, setAguaAddRetpor4] = useState('6')
    const [ncilindro1, setNcilindro1] = useState('')
    const [ncilindro2, setNcilindro2] = useState('')
    const [ncilindro3, setNcilindro3] = useState('')
    const [ncilindro4, setNcilindro4] = useState('')
    const [ncilindro5, setNcilindro5] = useState('')
    const [ncilindro6, setNcilindro6] = useState('')
    const [ncilindro7, setNcilindro7] = useState('1')
    const [pesosolocilindroagua1, setPesoSoloCilindroAgua1] = useState('')
    const [pesosolocilindroagua2, setPesoSoloCilindroAgua2] = useState('')
    const [pesosolocilindroagua3, setPesoSoloCilindroAgua3] = useState('')
    const [pesosolocilindroagua4, setPesoSoloCilindroAgua4] = useState('')
    const [pesosolocilindroagua5, setPesoSoloCilindroAgua5] = useState('')
    const [pesosolocilindroagua6, setPesoSoloCilindroAgua6] = useState('')
    const [pesosolocilindroagua7, setPesoSoloCilindroAgua7] = useState('4000')
    const [pesocilindro1, setPesoCilindro1] = useState('')
    const [pesocilindro2, setPesoCilindro2] = useState('')
    const [pesocilindro3, setPesoCilindro3] = useState('')
    const [pesocilindro4, setPesoCilindro4] = useState('')
    const [pesocilindro5, setPesoCilindro5] = useState('')
    const [pesocilindro6, setPesoCilindro6] = useState('')
    const [pesocilindro7, setPesoCilindro7] = useState('2308')
    const [volumecilindro1, setVolumeCilindro1] = useState('')
    const [volumecilindro2, setVolumeCilindro2] = useState('')
    const [volumecilindro3, setVolumeCilindro3] = useState('')
    const [volumecilindro4, setVolumeCilindro4] = useState('')
    const [volumecilindro5, setVolumeCilindro5] = useState('')
    const [volumecilindro6, setVolumeCilindro6] = useState('')
    const [volumecilindro7, setVolumeCilindro7] = useState('992')
    const [capsulan1, setCapsulan1] = useState('')
    const [capsulan2, setCapsulan2] = useState('')
    const [soloumidotara1, setSoloUmidoTara1] = useState('')
    const [soloumidotara2, setSoloUmidoTara2] = useState('')
    const [solosecotara1, setSoloSecoTara1] = useState('')
    const [solosecotara2, setSoloSecoTara2] = useState('')
    const [taracapsula1, setTaraCapsula1] = useState('')
    const [taracapsula2, setTaraCapsula2] = useState('')
    const [Codigo_C1, setCodigo_C1] = useState('')
    const [habilita, setHabilita] = useState(true)


    const Separator1 = () => (
        <View style={styles.separator1} />
    );

    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            "                                     Processo =" + amostra,
            [
                {
                    // text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    // style: "cancel"
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

    function Buscardados() {
        if (connState.isConnected === true) {
            //   getItem()
        } else {

            BuscaBanco()
        }

    };
    const mensagemsalvaroffline = () =>
        Alert.alert(
            "                 Salvo com sucesso !",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    async function add() {
        const obj = {
            amostra, obra, reforcobarragem, cota, material, npassada, camada, tipoequipamento, espcamada, energia, nfaixa, ncamadas, ngolpe, quantmaterial, soquete, aguaaddretml1, aguaaddretml2, aguaaddretml3, aguaaddretml4, aguaaddretpor1, aguaaddretpor2, aguaaddretpor3, aguaaddretpor4, ncilindro1, ncilindro2, ncilindro3, ncilindro4, ncilindro5, ncilindro6, ncilindro7, pesosolocilindroagua1, pesosolocilindroagua2, pesosolocilindroagua3, pesosolocilindroagua4, pesosolocilindroagua5, pesosolocilindroagua6, pesosolocilindroagua7, pesocilindro1, pesocilindro2, pesocilindro3, pesocilindro4, pesocilindro5, pesocilindro6, pesocilindro7, volumecilindro1, volumecilindro2, volumecilindro3, volumecilindro4, volumecilindro5, volumecilindro6, volumecilindro7, capsulan1, capsulan2, soloumidotara1, soloumidotara2, solosecotara1, solosecotara2, taracapsula1, taracapsula2, login: log.login
        };


        if (amostra > 0) {
            const res = await axios.post(this.api + 'SalvarHilf.php', obj);
            if (res.data.success === true) {
                mensagemsalvar();


            }
        }
    }
    async function getItem() {
        if (Codigo_C1 != '' & processo != '') {
            setStatus(false)
            Carregar()

            const res = await axios.get(this.api + 'BuscarHilf.php?Processo=' + processo + "&" + 'Codigo_C1=' + Codigo_C1);


            //setEstudos = (res.data.Estudos);
            setObra = (res.data.obra);
            setCota = (res.data.cota);
            setMaterial = (res.data.material);
            setNpassada = (res.data.NDpassada);
            setCamada = (res.data.camada);
            setTipoEquipamaento = (res.data.TDEQUIPAMENTO);
            setEspCamada = (res.data.espdcamada);
            setEnergia = (res.data.energia);
            setNfaixa = (res.data.ndfaixa);
            setNcamada = (res.data.NDCAMADAS);
            setNgolpe = (res.data.NDGOLPES);
            setQuantMaterial = (res.data.QDT);
            setSoquete = (res.data.soquetelb);
            setAguaAddRetml1 = (res.data.AARML1);
            setAguaAddRetml2 = (res.data.AARML2);
            setAguaAddRetml3 = (res.data.AARML3);
            setAguaAddRetpor1 = (res.data.AARETIRADA1);
            setAguaAddRetpor2 = (res.data.AARETIRADA2);
            setAguaAddRetpor3 = (res.data.AARETIRADA3);
            setNcilindro1 = (res.data.ndcilindro1);
            setNcilindro2 = (res.data.ndcilindro2);
            setNcilindro3 = (res.data.ndcilindro3);
            setNcilindro4 = (res.data.ndcilindro4);
            setNcilindro5 = (res.data.ndcilindro5);
            setNcilindro6 = (res.data.ndcilindro6);
            setPesoSoloCilindroAgua1 = (res.data.PDSCA1);
            setPesoSoloCilindroAgua2 = (res.data.PDSCA2);
            setPesoSoloCilindroAgua3 = (res.data.PDSCA3);
            setPesoSoloCilindroAgua4 = (res.data.PDSCA4);
            setPesoSoloCilindroAgua5 = (res.data.PDSCA5);
            setPesoSoloCilindroAgua6 = (res.data.PDSCA6);
            setPesoCilindro1 = (res.data.pdc1);
            setPesoCilindro2 = (res.data.pdc2);
            setPesoCilindro3 = (res.data.pdc3);
            setPesoCilindro4 = (res.data.pdc4);
            setPesoCilindro5 = (res.data.pdc5);
            setPesoCilindro6 = (res.data.pdc6);
            setVolumeCilindro1 = (res.data.VDC1);
            setVolumeCilindro2 = (res.data.VDC2);
            setVolumeCilindro3 = (res.data.VDC3);
            setVolumeCilindro4 = (res.data.VDC4);
            setVolumeCilindro5 = (res.data.VDC5);
            setVolumeCilindro6 = (res.data.VDC6);
            setCapsulan1 = (res.data.capsulan1);
            setCapsulan2 = (res.data.capsulan2);
            setSoloUmidoTara1 = (res.data.soloutara1);
            setSoloUmidoTara2 = (res.data.soloutara2);
            setSoloSecoTara1 = (res.data.solostara1);
            setSoloSecoTara2 = (res.data.solostara2);
            setTaraCapsula1 = (res.data.taradcaps1);
            setTaraCapsula2 = (res.data.taradcaps2);

            // console.warn(res, res.data.SubTrecho, res.data.success, res.data.Estaca_C1, agua1)
            if (res.data.success === false) {
                setLoading(false)
                falha();
            }
        } else {
            if (Codigo_C1 == '' & processo == '') {
                mescodigoprocesso()
            } else if (processo == '') {
                mesprocesso()
            } else if (Codigo_C1 == '') {
                mescodigo()
            }
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




    const gerarBanco = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists Hilf (processo text, Codigo_C1 tetx, obra text, cota text, material text, NDpassada text, camada text, TDEQUIPAMENTO text, espdcamada text, energia text, ndfaixa text, NDCAMADAS text, NDGOLPES text, QDT text, soquetelb text, AARML1 text, AARML2 text, AARML3 text, AARETIRADA1 text, AARETIRADA2 text, AARETIRADA3 text, ndcilindro1 text, ndcilindro2 text, ndcilindro3 text, ndcilindro4 text, ndcilindro5 text, ndcilindro6 text, PDSCA1 text, PDSCA2 text, PDSCA3 text, PDSCA4 text, PDSCA5 text, PDSCA6 text, pdc1 text, pdc2 text, pdc3 text, pdc4 text, pdc5 text, pdc6 text, VDC1 text, VDC2 text, VDC3 text, VDC4 text, VDC5 text, VDC6 text, capsulan1 text, capsulan2 text, soloutara1 text, soloutara2 text, solostara1 text, solostara2 text, taradcaps1 text,taradcaps2 text);"
                );

                console.log(" Nova Tabela Gerada")
            });
    };








    const SalvarBancoSQL = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into Hilf ( processo, Codigo_C1, obra , cota , material , NDpassada , camada , TDEQUIPAMENTO , espdcamada , energia ) values  ('${processo}','${Codigo_C1}','${obra}','${cota}','${material}','${npassada}','${camada}','${tipoequipamento}','${espcamada}','${energia}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },


            mensagemsalvar()



        );
    };













    // const SalvarBanco = () => {

    //     db.transaction(
    //         (tx) => {
    //             tx.executeSql(`insert into Hilf ( processo, Codigo_C1, obra , cota , material , NDpassada , camada , TDEQUIPAMENTO , espdcamada , energia , ndfaixa , NDCAMADAS , NDGOLPES , QDT , soquetelb , AARML1 , AARML2 , AARML3 , AARETIRADA1 , AARETIRADA2 , AARETIRADA3 , ndcilindro1 , ndcilindro2 , ndcilindro3 , ndcilindro4 , ndcilindro5 , ndcilindro6 , PDSCA1 , PDSCA2 , PDSCA3 , PDSCA4 , PDSCA5 , PDSCA6 , pdc1 , pdc2 , pdc3 , pdc4 , pdc5 , pdc6 , VDC1 , VDC2 , VDC3 , VDC4 , VDC5 , VDC6 , capsulan1 , capsulan2 , soloutara1 , soloutara2 , solostara1 , solostara2 , taradcaps1 ,taradcaps2) values ( ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?,?,?,?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?,? )`, [processo, Codigo_C1, obra, cota, material, npassada, camada, tipoequipamento, espcamada, energia, nfaixa, ncamadas, ngolpe, quantmaterial, soquete, aguaaddretml1, aguaaddretml2, aguaaddretml3, aguaaddretpor1, aguaaddretpor2, aguaaddretpor3, ncilindro1, ncilindro2, ncilindro3, ncilindro4, ncilindro5, ncilindro5, ncilindro6, pesosolocilindroagua1, pesosolocilindroagua2, pesosolocilindroagua3, pesosolocilindroagua4, pesosolocilindroagua6, pesocilindro1, pesocilindro2, pesocilindro3, pesocilindro4, pesocilindro5, pesocilindro6, volumecilindro1, volumecilindro2, volumecilindro3, volumecilindro4, volumecilindro5, volumecilindro6, capsulan1, capsulan2, soloumidotara1, soloumidotara2, solosecotara1, solosecotara2, taracapsula1, taracapsula2], (tx, results) => {
    //                 console.log('Results', results.rowsAffected);
    //                 if (results.rowsAffected > 0) {
    //                     mensagemsalvaroffline()
    //                 } else alert('Registration Failed');
    //             }, (error) => { console.log(error) });

    //         },


    //     );
    // };



    const [flatListItems, setFlatListItems] = useState([]);
    const BuscaBanco = () => {
        setHabilita(true)
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Hilf WHERE processo = ? and Codigo_C1 = ?', [processo, Codigo_C1], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setFlatListItems(temp);
                console.log(temp)
            });

        });

    };
    const listItemView = (item) => {

        setCota(item.cota);
        setObra(item.obra);
        setMaterial(item.material);
        setNpassada(item.NDpassada);
        setCamada(item.camada);
        setTipoEquipamaento(item.TDEQUIPAMENTO);
        setEspCamada(item.espdcamada);
        setEnergia(item.energia);
        setNfaixa(item.ndfaixa);
        setNcamada(item.NDCAMADAS);
        setNgolpe(item.NDGOLPES);
        setQuantMaterial(item.QDT);
        setSoquete(item.soquetelb);
        setAguaAddRetml1(item.AARML1);
        setAguaAddRetml2(item.AARML2);
        setAguaAddRetml3(item.AARML3);
        setAguaAddRetpor1(item.AARETIRADA1);
        setAguaAddRetpor2(item.AARETIRADA2);
        setAguaAddRetpor3(item.AARETIRADA3);
        setNcilindro1(item.ndcilindro1);
        setNcilindro2(item.ndcilindro2);
        setNcilindro3(item.ndcilindro3);
        setNcilindro4(item.ndcilindro4);
        setNcilindro5(item.ndcilindro5);
        setNcilindro6(item.ndcilindro6);
        setPesoSoloCilindroAgua1(item.PDSCA1);
        setPesoSoloCilindroAgua2(item.PDSCA2);
        setPesoSoloCilindroAgua3(item.PDSCA3);
        setPesoSoloCilindroAgua4(item.PDSCA4);
        setPesoSoloCilindroAgua5(item.PDSCA5);
        setPesoSoloCilindroAgua6(item.PDSCA6);
        setPesoCilindro1(item.pdc1);
        setPesoCilindro2(item.pdc2);
        setPesoCilindro3(item.pdc3);
        setPesoCilindro4(item.pdc4);
        setPesoCilindro5(item.pdc5);
        setPesoCilindro6(item.pdc6);
        setVolumeCilindro1(item.VDC1);
        setVolumeCilindro2(item.VDC2);
        setVolumeCilindro3(item.VDC3);
        setVolumeCilindro4(item.VDC4);
        setVolumeCilindro5(item.VDC5);
        setVolumeCilindro6(item.VDC6);
        setCapsulan1(item.capsulan1);
        setCapsulan2(item.capsulan2);
        setSoloUmidoTara1(item.soloutara1);
        setSoloUmidoTara2(item.soloutara2);
        setSoloSecoTara1(item.solostara1);
        setSoloSecoTara2(item.solostara2);
        setTaraCapsula1(item.taradcaps1);
        setTaraCapsula2(item.taradcaps2);
        setHabilita(true)

    };


    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS  Hilf ',
                console.log('Banco Deletado')

            );

        });
    };






    useEffect(() => {

        //   gerarBanco()
        //  DeleteBancoSQlite()

    });


    return (

        <SafeAreaView>
            <ScrollView  >

                <View style={styles.container}>
                    <Text style={styles.textStyle}>

                    </Text>

                    <View style={styles.container1}>
                        <Text style={styles.LabelTituloRight}>
                            Processo:
                        </Text>
                        <Text style={styles.LabelTituloLeft}>
                            Código:
                        </Text>

                    </View>
                    <View style={styles.container1}>
                        <TextInput
                            style={styles.inputlef4t}
                            onChangeText={setProcesso}
                            value={processo}
                            keyboardType='numeric'
                            placeholder="Processo"
                        />
                        <TextInput
                            style={styles.inputlef3t}
                            onChangeText={setCodigo_C1}
                            value={Codigo_C1}
                            keyboardType='numeric'
                            placeholder="Código"
                        />


                    </View>
                    <View style={styles.containerrow}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => BuscaBanco()}>
                            <Text style={styles.text}>Buscar</Text>
                            <View style={styles.buttonIconSeparatorStyle} />
                            <Image style={styles.buttonImageIconStyle}
                                source={require('../../../../assets/search.png')} />
                        </TouchableOpacity>

                    </View>
                    {habilita == true ? <Text style={styles.label}>
                        Obra:
                    </Text> : null}

                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setObra}
                            value={obra}

                            placeholder="Obra"
                        />



                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Cota:
                    </Text> : null}

                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Material:
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setCota}
                            value={cota}

                            placeholder="Cota"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setMaterial}
                            value={material}

                            placeholder="Material"
                        />

                    </View> : null}


                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Nº passada:
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Camada:
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setNpassada}
                            value={npassada}

                            placeholder="Nº passada"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setCamada}
                            value={camada}

                            placeholder="Camada"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Tipo de equipamento:
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Esp. da camada:
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setTipoEquipamaento}
                            value={tipoequipamento}

                            placeholder="Tipo de equipamento"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setEspCamada}
                            value={espcamada}

                            placeholder="Esp. da camada"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Energia:
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Nº da faixa:
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setEnergia}
                            value={energia}

                            placeholder="Energia"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setNfaixa}
                            value={nfaixa}

                            placeholder="Nº da faixa"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Nº de camadas:
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Nº de golpes:
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setNcamada}
                            value={ncamadas}

                            placeholder="Nº de camadas"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setNgolpe}
                            value={ngolpe}

                            placeholder="Nº de golpes"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier2}>
                        Quantidade de material(g):
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier3}>
                        Soquete(LB):
                    </Text> : null}
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setQuantMaterial}
                            value={quantmaterial}

                            placeholder="Quantidade de material (g)"
                        />

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setSoquete}
                            value={soquete}

                            placeholder="Soquete (LB)"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        COMPACTAÇÃO-LABORATÓRIO CAMPO
                    </Text> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        ÁGUA ADICIONADA/RETIRADA (ml):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            editable={false} selectTextOnFocus={false}
                            onChangeText={setAguaAddRetml1}
                            value={aguaaddretml1}

                            placeholder="0"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setAguaAddRetml2}
                            value={aguaaddretml2}

                            placeholder="ÁGUA ADICIONADA/RETIRADA (ml):"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setAguaAddRetml3}
                            value={aguaaddretml3}

                            placeholder="ÁGUA ADICIONADA/RETIRADA (ml):"
                        />
                        {/* <TextInput
                        //1
                        style={styles.inputleft2}
                        onChangeText={setAguaAddRetml4}
                        value={aguaaddretml4}

                        placeholder="ÁGUA ADICIONADA/RETIRADA (ml):"
                    /> */}

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        ÁGUA ADICIONADA/RETIRADA (%):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}
                            editable={false} selectTextOnFocus={false}
                            onChangeText={setAguaAddRetpor1}
                            value={aguaaddretpor1}

                            placeholder="ÁGUA ADICIONADA/RETIRADA (%):"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setAguaAddRetpor2}
                            value={aguaaddretpor2}

                            placeholder="ÁGUA ADICIONADA/RETIRADA (%):"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setAguaAddRetpor3}
                            value={aguaaddretpor3}

                            placeholder="ÁGUA ADICIONADA/RETIRADA (%):"
                        />
                        {/* <TextInput
                        //1
                        style={styles.inputleft2}
                        onChangeText={setAguaAddRetpor4}
                        value={aguaaddretpor4}

                        placeholder="ÁGUA ADICIONADA/RETIRADA (%):"
                    /> */}
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        N.º DO CILINDRO:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.input}

                            onChangeText={setNcilindro1}
                            value={ncilindro1}

                            placeholder="N.º DO CILINDRO"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setNcilindro2}
                            value={ncilindro2}

                            placeholder="N.º DO CILINDRO"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setNcilindro3}
                            value={ncilindro3}

                            placeholder="N.º DO CILINDRO"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setNcilindro4}
                            value={ncilindro4}

                            placeholder="N.º DO CILINDRO"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setNcilindro5}
                            value={ncilindro5}

                            placeholder="N.º DO CILINDRO"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setNcilindro6}
                            value={ncilindro6}

                            placeholder="N.º DO CILINDRO"
                        />
                        {/* <TextInput
                        //1
                        style={styles.input}
                        onChangeText={setNcilindro7}
                        value={ncilindro7}

                        placeholder="N.º DO CILINDRO"
                    /> */}
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        PESO DO SOLO + CILINDRO + AGUA (g):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.input}

                            onChangeText={setPesoSoloCilindroAgua1}
                            value={pesosolocilindroagua1}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoSoloCilindroAgua2}
                            value={pesosolocilindroagua2}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoSoloCilindroAgua3}
                            value={pesosolocilindroagua3}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoSoloCilindroAgua4}
                            value={pesosolocilindroagua4}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoSoloCilindroAgua5}
                            value={pesosolocilindroagua5}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoSoloCilindroAgua6}
                            value={pesosolocilindroagua6}

                            placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"

                        />
                        {/* <TextInput
                        //1
                        style={styles.input}
                        // onChangeText={setEstaca}
                        // value={estaca}

                        placeholder="PESO DO SOLO + CILINDRO + AGUA (g)"
                    /> */}
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        PESO DO CILINDRO (g):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.input}

                            onChangeText={setPesoCilindro1}
                            value={pesocilindro1}

                            placeholder="PESO DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoCilindro2}
                            value={pesocilindro2}

                            placeholder="PESO DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoCilindro3}
                            value={pesocilindro3}

                            placeholder="PESO DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoCilindro4}
                            value={pesocilindro4}

                            placeholder="PESO DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoCilindro5}
                            value={pesocilindro5}

                            placeholder="PESO DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setPesoCilindro6}
                            value={pesocilindro6}

                            placeholder="PESO DO CILINDRO (g)"

                        />
                        {/* <TextInput
                        //1
                        style={styles.input}
                        // onChangeText={setEstaca}
                        // value={estaca}

                        placeholder="PESO DO CILINDRO (g)"
                    /> */}
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        VOLUME DO CILINDRO (g):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.input}

                            onChangeText={setVolumeCilindro1}
                            value={volumecilindro1}

                            placeholder="VOLUME DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setVolumeCilindro2}
                            value={volumecilindro2}

                            placeholder="VOLUME DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setVolumeCilindro3}
                            value={volumecilindro3}

                            placeholder="VOLUME DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setVolumeCilindro4}
                            value={volumecilindro4}

                            placeholder="VOLUME DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setVolumeCilindro5}
                            value={volumecilindro5}

                            placeholder="VOLUME DO CILINDRO (g)"
                        />
                        <TextInput
                            //1
                            style={styles.input}
                            onChangeText={setVolumeCilindro6}
                            value={volumecilindro6}

                            placeholder="VOLUME DO CILINDRO (g)"

                        />
                        {/* <TextInput
                        //1
                        style={styles.input}
                        // onChangeText={setEstaca}
                        // value={estaca}

                        placeholder="VOLUME DO CILINDRO (g)"
                    /> */}
                    </View> : null}

                    {habilita == true ? <Text style={styles.labelcontanier}>
                        CAPSULA N.º:
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}

                            onChangeText={setCapsulan1}
                            value={capsulan1}

                            placeholder="CAPSULA N.º"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setCapsulan2}
                            value={capsulan2}

                            placeholder="CAPSULA N.º"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        SOLO UMIDO+TARA(g):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}

                            onChangeText={setSoloUmidoTara1}
                            value={soloumidotara1}

                            placeholder="SOLO UMIDO+TARA(g)"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setSoloUmidoTara2}
                            value={soloumidotara2}

                            placeholder="SOLO UMIDO+TARA(g)"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        SOLO SECO +TARA (g):
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}

                            onChangeText={setSoloSecoTara1}
                            value={solosecotara1}

                            placeholder="SOLO SECO +TARA (g)"
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setSoloSecoTara2}
                            value={solosecotara2}

                            placeholder="SOLO SECO +TARA (g)"
                        />

                    </View> : null}
                    {habilita == true ? <Text style={styles.labelcontanier}>
                        TARA  DA CAPSULA :
                    </Text> : null}
                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.container1}>

                        <TextInput
                            //1
                            style={styles.inputleft2}

                            onChangeText={setTaraCapsula1}
                            value={taracapsula1}

                            placeholder="TARA  DA CAPSULA "
                        />
                        <TextInput
                            //1
                            style={styles.inputleft2}
                            onChangeText={setTaraCapsula2}
                            value={taracapsula2}

                            placeholder="TARA  DA CAPSULA "
                        />

                    </View> : null}




                    <Separator1></Separator1>
                    {habilita == true ? <View style={styles.containerrow}>
                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={'Finalizar'}
                        >
                            <Image
                                source={require('../../../../assets/cloud_computer.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Finalizar</Text>
                        </TouchableOpacity>



                        <TouchableOpacity
                            style={styles.buttonRow}
                            onPress={SalvarBancoSQL}
                        >
                            <Image
                                source={require('../../../../assets/SaveIcon.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={styles.text}>Salvar</Text>
                        </TouchableOpacity>




                    </View> : null}

                </View>

            </ScrollView>
            <FlatList
                data={flatListItems}
                renderItem={({ item }) => listItemView(item)}
            />
        </SafeAreaView>
    );
};

