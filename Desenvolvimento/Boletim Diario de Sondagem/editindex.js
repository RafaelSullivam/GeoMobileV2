
import React, { useState, useEffect, Component } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, Button, FlatList, Platform, NavigationContainer, Alert } from "react-native";
import styles from "./style";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import Conexao from "../Conexao/conexao";



export default function EditIndex({ route, navigation }) {

    api = Conexao.api
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
    );
    const [furo, setFuro] = useState('');
    const [list, setList] = useState('')
    const [datas, setDatas] = useState('');
    const [turno, setTurno] = useState('');
    const [inclinacao, setInclinacao] = useState('');
    const [sonda, setSonda] = useState('');
    const [cliente, setCliente] = useState('');
    const [alvo, setAlvo] = useState('');
    const [projeto, setProjeto] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [azimute, setAzimute] = useState('');
    const [sondador, setSondador] = useState('');
    const [auxiliar1, setAuxiliar1] = useState('');
    const [auxiliar2, setAuxiliar2] = useState('');
    const [auxiliar3, setAuxiliar3] = useState('');
    const [cabecalho, setCabecalho] = useState("cabecalho")
    const [re, setRe] = useState()
    const countries = ["1° Turno", "2° Turno", "3° Turno"]
    const dat = [
        { label: '1° Turno', value: '1° Turno' },
        { label: '2° Turno', value: '2° Turno' },
        { label: '3° Turno', value: '3° Turno' },

    ];
    const Separator1 = () => (
        <View style={styles.separator1} />
    );
    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => navigation.navigate("BOLETIM DIÁRIO DE SONDAGEM", { nprocesso: processo }) }
            ]
        );
    function addTask() {

        //navigation.navigate("BOLETIM DIÁRIO DE SONDAGEM", { nfuro: furo });

        // if (furo != '') {
        navigation.navigate("Edite Index", { nprocesso: processo });
        // }
    };


    async function add() {
        const obj = { processo, furo, datas, turno, inclinacao, sonda, cliente, alvo, projeto, municipio, azimute, sondador, auxiliar1, auxiliar2, auxiliar3 };

        if (processo > 0) {
            const res = await axios.post(this.api + 'SalvarIndexSondagemPesquisa.php', obj);
            if (res.data.success === true) {
                mensagemsalvar();

            }
        }
    };
    // function editTask() {
    //     database.collection(furo).doc(cabecalho).set
    //         ({
    //             data: data,
    //             turno: turno,
    //             inclinacao: inclinacao,
    //             sonda: sonda,
    //             cliente: cliente,
    //             alvo: alvo,
    //             projeto: projeto,
    //             municipio: municipio,
    //             azimute: azimute,
    //             sondador: sondador,
    //             auxiliar1: auxiliar1,
    //             auxiliar2: auxiliar2,
    //             auxiliar3: auxiliar3

    //         })
    //     navigation.navigate("BOLETIM DIÁRIO DE SONDAGEM", { nprocesso: processo });
    // }

    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        if (processo > 0) {
            setDatas(
                date + '/' + month + '/' + year
            );

        }
    })
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.labelcontanier}>
                    Processo:
                </Text>

                <TextInput
                    editable={false} selectTextOnFocus={false}
                    style={styles.inputleft}
                    onChangeText={setProcesso}
                    value={processo}
                />
                <Text style={styles.labelcontanier}>
                    FURO:
                </Text>

                <TextInput
                    // editable={false} selectTextOnFocus={false}
                    style={styles.inputleft}
                    onChangeText={setFuro}
                    value={furo}
                />
                <Text style={styles.labelcontanier}>
                    DATA:
                </Text>

                <TextInput
                    style={styles.inputleft}
                    onChangeText={setDatas}
                    value={datas}
                    keyboardType='numeric'
                />
                <Text style={styles.labelcontanier}>
                    TURNO:
                </Text>

                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    dropdownPosition="bottom"

                    data={dat}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Selecione o Turno"
                    value={turno}
                    onChange={item => {
                        setTurno(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />



                <Text style={styles.labelcontanier}>
                    INCLINAÇÃO:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setInclinacao}
                    value={inclinacao}
                >
                </TextInput>


                <Text style={styles.labelcontanier}>
                    SONDA:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setSonda}
                    value={sonda}
                />

                <Text style={styles.labelcontanier}>
                    CLIENTE:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setCliente}
                    value={cliente}
                />
                <Text style={styles.labelcontanier}>
                    ALVO:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setAlvo}
                    value={alvo}
                />
                <Text style={styles.labelcontanier}>
                    PROJETO:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setProjeto}
                    value={projeto}
                />
                <Text style={styles.labelcontanier}>
                    MUNICÍPIO:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setMunicipio}
                    value={municipio}
                />
                <Text style={styles.labelcontanier}>
                    AZIMUTE:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setAzimute}
                    value={azimute}
                />
                <Text style={styles.labelcontanier}>
                    SONDADOR:
                </Text>

                <TextInput

                    style={styles.inputleft}

                    onChangeText={setSondador}

                    value={sondador}
                />
                <Text style={styles.labelcontanier}>
                    AUXILIAR 1:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setAuxiliar1}
                    value={auxiliar1}
                />
                <Text style={styles.labelcontanier}>
                    AUXILIAR 2:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setAuxiliar2}
                    value={auxiliar2}
                />
                <Text style={styles.labelcontanier}>
                    AUXILIAR 3:
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setAuxiliar3}
                    value={auxiliar3}
                />
             
                    <Text style={styles.textModal}></Text>
                    <TouchableOpacity
                        style={styles.botaoModal}
                        onPress={add}
                    >
                        <Text style={styles.textoBotaoModal}>Salvar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textModal}></Text>
           
            </View>
        </ScrollView>
    );
};