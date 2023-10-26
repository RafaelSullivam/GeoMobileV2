import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, Modal,ActivityIndicator  } from 'react-native';
import styles from "../Controle consumivel/style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import Conexao from "../../Conexao/conexao";



export default function ControleConsumivel({ route, navigation }) {


    api = Conexao.api
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
    )
    const [betonita, setBetonita] = useState('')
    const [diesel, setDiesel] = useState('')
    const [coroa, setCoroa] = useState('')
    const [calibrador, setCalibrador] = useState('')
    const [outros, setOutros] = useState('')
    const [consmaterialacessorio1, setConsMaterialAcessorio1] = useState('')
    const [consmaterialacessorio2, setConsMaterialAcessorio2] = useState('')
    const [consmaterialacessorio3, setConsMaterialAcessorio3] = useState('')
    const [consmaterialacessorio4, setConsMaterialAcessorio4] = useState('')
    const [consmaterialacessorio5, setConsMaterialAcessorio5] = useState('')
    const [temppescaria1, setTempPescaria1] = useState('')
    const [temppescaria2, setTempPescaria2] = useState('')
    const [temppescaria3, setTempPescaria3] = useState('')
    const [temppescaria4, setTempPescaria4] = useState('')
    const [temppescariaMedia, setTempPescariaMedia] = useState('')
    const [wireline1, setWireline1] = useState('')
    const [wireline2, setWireline2] = useState('')
    const [wireline3, setWireline3] = useState('')
    const [wireline4, setWireline4] = useState('')
    const [wireline5, setWireline5] = useState('')
    const [horimetroinicial, setHorimetroInicial] = useState('')
    const [horimetrofinal, setHorimetroFinal] = useState('')
    const [desvioleitura, setDesvioLeitura] = useState('')
    const [hastes, setHastes] = useState('')
    const [barrilete, setBarrilete] = useState('')
    const [altura, setAltura] = useState('')
    const [sobra, setSobra] = useState('')
    const [status, setStatus] = useState('')
    const [connState, setConnState] = useState(0);
    const [text, setText] = useState('carro');
    const [loading, setLoading] = useState(false);
    const Separator1 = () => (
        <View style={styles.separator1} />
    );
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
    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
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
    function Buscardados() {
        if (connState.isConnected === false) {
            getItem()
        } else {

            BuscaBanco()
        }

    };
    function Salvardados() {
        //if (connState.isConnected === true) {
        add()
        // } else {
        //     SalvarBanco()
        // }

    };





    async function getItem() {

        const res = await axios.get(this.api + 'BuscarControleConsumivel.php?Processo=' + processo);
        //setAmostra(res.data.amostra);
        setStatus(res.data.success);
        setBetonita(res.data.betonita);
        setDiesel(res.data.diesel);
        setCoroa(res.data.coroa);
        setCalibrador(res.data.calibrador);
        setOutros(res.data.outros);
        setConsMaterialAcessorio1(res.data.consmaterialacessorio1);
        setConsMaterialAcessorio2(res.data.consmaterialacessorio2);
        setConsMaterialAcessorio3(res.data.consmaterialacessorio3);
        setConsMaterialAcessorio4(res.data.consmaterialacessorio4);
        setConsMaterialAcessorio5(res.data.consmaterialacessorio5);
        setTempPescaria1(res.data.temppescaria1);
        setTempPescaria2(res.data.temppescaria2);
        setTempPescaria3(res.data.temppescaria3);
        setTempPescaria4(res.data.temppescaria4);
        setTempPescariaMedia(res.data.temppescariaMedia);
        setWireline1(res.data.wireline1);
        setWireline2(res.data.wireline2);
        setWireline3(res.data.wireline3);
        setWireline4(res.data.wireline4);
        setWireline5(res.data.wireline5);
        setHorimetroInicial(res.data.horimetroinicial);
        setHorimetroFinal(res.data.horimetrofinal);
        setDesvioLeitura(res.data.desvioleitura);
        setHastes(res.data.hastes);
        setBarrilete(res.data.barrilete);
        setAltura(res.data.altura);
        setSobra(res.data.sobra);


        setLoading(false)

        console.warn(this.api + 'BuscarControleConsumivel.php?Processo=' + processo, res.data.betonita)
        if (res.data.success === false) {
            setLoading(false)
            falha();
        }

    };

    async function add() {
        const obj = { processo, betonita, diesel, coroa, calibrador, outros, consmaterialacessorio1, consmaterialacessorio2, consmaterialacessorio3, consmaterialacessorio4, consmaterialacessorio5, temppescaria1, temppescaria2, temppescaria3, temppescaria4, temppescariaMedia, wireline1, wireline2, wireline3, wireline4, wireline5, horimetroinicial, horimetrofinal, desvioleitura, hastes, barrilete, altura, sobra };

        // if (amostra > 0) {
        const res = await axios.post(this.api + 'SalvarConsumivelPesquisa.php', obj);
        if (res.data.success === true) {
            mensagemsalvar();

        }
        // }
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
                    "create table if not exists tel ( amostra text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, masamoumicap1 text, masamoumicap2 text, masamoumicap3 text, masamoumicap4 text, masamosecacap1 text, masamosecacap2 text, masamosecacap3 text, masamosecacap4 text);"
                );

                console.log("Banco de dados iniciado")
            });
    }
    const [flatListItems, setFlatListItems] = useState([]);
    const BuscaBanco = () => {

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tel WHERE amostra = ?', [amostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setFlatListItems(temp);
                console.log(temp)
            });

        });

    };


    const listItemView = (item) => {
        setCapsula1(item.caspsula1)
        setCapsula2(item.caspsula2)
        setCapsula3(item.caspsula3)
        setCapsula4(item.caspsula4)
        setMasamoumicap1(item.masamoumicap1)
        setMasamoumicap2(item.masamoumicap2)
        setMasamoumicap3(item.masamoumicap3)
        setMasamoumicap4(item.masamoumicap4)
        setMasamosecacap1(item.masamosecacap1)
        setMasamosecacap2(item.masamosecacap2)
        setMasamosecacap3(item.masamosecacap3)
        setMasamosecacap4(item.masamosecacap4)
    };
    const SalvarBanco = () => {

        db.transaction(
            (tx) => {
                tx.executeSql(`insert into tel ( amostra , caspsula1 , caspsula2 , caspsula3 , caspsula4 , masamoumicap1 , masamoumicap2 , masamoumicap3 , masamoumicap4 , masamosecacap1 , masamosecacap2 , masamosecacap3 , masamosecacap4 ) values ('${amostra}', '${caspsula1}' , '${caspsula2}' , '${caspsula3}' , '${caspsula4}' , '${masamoumicap1}' , '${masamoumicap2}' , '${masamoumicap3}' , '${masamoumicap4}' , '${masamosecacap1}' , '${masamosecacap2}' , '${masamosecacap3}' , '${masamosecacap4}' )`, () => { }, (error) => { console.log(error) });

            },

            mensagemsalvaroffline()
        );
    };

    // UseEffect
    useEffect(() => {
        setLoading(true)
        getItem()
        //     gerarBanco()
        //     NetInfo.fetch().then(state => {
        //       setConnState(state);
        //       console.log("Tipo de conexão", state.type);
        //       console.log("Está conectado?", state.isConnected);
        //     });

        //     const unsubscribe = NetInfo.addEventListener(state => {
        //       setConnState(state);
        //       console.log("Tipo de conexão", state.type);
        //       console.log("Está conectado?", state.isConnected);
        //     });

        //     return () => {
        //       unsubscribe();
        //     };
    }, []);


    return (
        <SafeAreaView>

            <ScrollView >
                {/*
        <View style={styles.container}>

          {connState.isConnected == true ? <Image
           // source={require('../../../DESENV/componentes/imagem/applications_internet.png')}
            style={styles.ImageIconStyle}
          /> : <Image
           // source={require('../../../DESENV/componentes/imagem/Networkoff.png')}
            style={styles.ImageIconStyle}
          />}


        </View> */}

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
                    <Text style={styles.labelcontanier}>
                        CONSUMO DE MATERIAIS E ACESSÓRIOS:
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                BENTONITA:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setBetonita}
                                value={betonita}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                DIESEL:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setDiesel}
                                value={diesel}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                COROA:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setCoroa}
                                value={coroa}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                CALIBRADOR:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setCalibrador}
                                value={calibrador}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                OUTROS:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setOutros}
                                value={outros}
                                keyboardType='numeric'

                            />
                        </View>

                    </View>
                    <Text style={styles.labelcontanier}>
                        CONSUMO DE MATERIAIS E ACESSÓRIOS:
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                INTERVALO 1:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setConsMaterialAcessorio1}
                                value={consmaterialacessorio1}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                INTERVALO 2:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setConsMaterialAcessorio2}
                                value={consmaterialacessorio2}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                INTERVALO 3:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setConsMaterialAcessorio3}
                                value={consmaterialacessorio3}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                INTERVALO 4:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setConsMaterialAcessorio4}
                                value={consmaterialacessorio4}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                INTERVALOS:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setConsMaterialAcessorio5}
                                value={consmaterialacessorio5}
                                keyboardType='numeric'

                            />
                        </View>

                    </View>
                    <Text style={styles.labelcontanier}>
                        TEMPO DE PESCARIA (minutos):
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                1:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setTempPescaria1}
                                value={temppescaria1}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                2:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setTempPescaria2}
                                value={temppescaria2}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                3:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setTempPescaria3}
                                value={temppescaria3}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                4:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setTempPescaria4}
                                value={temppescaria4}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                MÉDIA:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setTempPescariaMedia}
                                value={temppescariaMedia}
                                keyboardType='numeric'

                            />
                        </View>

                    </View>
                    <Text style={styles.labelcontanier}>
                        WIRE LINE:
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                1:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setWireline1}
                                value={wireline1}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                2:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setWireline2}
                                value={wireline2}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                3:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setWireline3}
                                value={wireline3}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                4:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setWireline4}
                                value={wireline4}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                5:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setWireline5}
                                value={wireline5}
                                keyboardType='numeric'

                            />
                        </View>

                    </View>
                    <Text style={styles.labelcontanier}>
                        HORÍMETRO:
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                HORÍMETRO INICIAL:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setHorimetroInicial}
                                value={horimetroinicial}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                HORÍMETRO FINAL:
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setHorimetroFinal}
                                value={horimetrofinal}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                DESVIOS (LEITURAS):
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setDesvioLeitura}
                                value={desvioleitura}
                                keyboardType='numeric'

                            />
                        </View>
                    </View>
                    <Text style={styles.labelcontanier}>
                        PROFUNDIDADE:
                    </Text>

                    <View style={styles.container1}>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                HASTES (unid):
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setHastes}
                                value={hastes}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                BARRILETE (m):
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setBarrilete}
                                value={barrilete}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                ALTURA (m):
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setAltura}
                                value={altura}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.labelcontanierBetonita}>
                                SOBRA (m):
                            </Text>
                            <TextInput
                                //1
                                style={styles.inputleft}
                                onChangeText={setSobra}
                                value={sobra}
                                keyboardType='numeric'

                            />
                        </View>

                    </View>
                    <Separator1></Separator1>


                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <View style={styles.containerbtnbuscar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={Salvardados}
                        >
                            <Image
                                source={require('../../../Desenvolvimento/componentes/imagem/save.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={{ fontSize: 16 }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <Separator1></Separator1>


            </ScrollView>


            {/* <FlatList
                data={flatListItems}
                renderItem={({ item }) => listItemView(item)}
            /> */}
        </SafeAreaView>
    );
};

