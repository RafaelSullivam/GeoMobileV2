import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, Switch, SafeAreaView, FlatList } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
//import { TextInputMask } from 'react-native-masked-text'
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"

export default function Compactacao() {
  api = Conexao.api
  const [amostra, setAmostra] = useState()
  const [namostra, setNAmostra] = useState('')
  const [processo, setProcesso] = useState('')
  const [caspsula1Mob, setCapsula1Mob] = useState('')
  const [caspsula2Mob, setCapsula2Mob] = useState('')
  const [caspsula3Mob, setCapsula3Mob] = useState('')
  const [moldecampMob, setMoldecampMob] = useState('')
  const [masssoloumidamassasoloMob, setMasssoloumidamassasoloMob] = useState('')
  const [amostraumidacaps1Mob, setAmostraumidacaps1Mob] = useState('')
  const [amostraumidacaps2Mob, setAmostraumidacaps2Mob] = useState('')
  const [amostraumidacaps3Mob, setAmostraumidacaps3Mob] = useState('')
  const [amostrasecacaps1Mob, setAmostrasecacaps1Mob] = useState('')
  const [amostrasecacaps2Mob, setAmostrasecacaps2Mob] = useState('')
  const [amostrasecacaps3Mob, setAmostrasecacaps3Mob] = useState('')

  const [moldecamp1, setMoldecamp1] = useState('')
  const [moldecamp2, setMoldecamp2] = useState('')
  const [moldecamp3, setMoldecamp3] = useState('')
  const [moldecamp4, setMoldecamp4] = useState('')
  const [moldecamp5, setMoldecamp5] = useState('')
  const [habilita, setHabilita] = useState(false)
  const [masssoloumidamassasolo1, setMasssoloumidamassasolo1] = useState('')
  const [masssoloumidamassasolo2, setMasssoloumidamassasolo2] = useState('')
  const [masssoloumidamassasolo3, setMasssoloumidamassasolo3] = useState('')
  const [masssoloumidamassasolo4, setMasssoloumidamassasolo4] = useState('')
  const [masssoloumidamassasolo5, setMasssoloumidamassasolo5] = useState('')

  const [caspsula1, setCapsula1] = useState('')
  const [caspsula2, setCapsula2] = useState('')
  const [caspsula3, setCapsula3] = useState('')
  const [caspsula4, setCapsula4] = useState('')
  const [caspsula5, setCapsula5] = useState('')
  const [caspsula6, setCapsula6] = useState('')
  const [caspsula7, setCapsula7] = useState('')
  const [caspsula8, setCapsula8] = useState('')
  const [caspsula9, setCapsula9] = useState('')
  const [caspsula10, setCapsula10] = useState('')
  const [caspsula11, setCapsula11] = useState('')
  const [caspsula12, setCapsula12] = useState('')
  const [caspsula13, setCapsula13] = useState('')
  const [caspsula14, setCapsula14] = useState('')
  const [caspsula15, setCapsula15] = useState('')

  const [amostraumidacaps1, setAmostraumidacaps1] = useState('')
  const [amostraumidacaps2, setAmostraumidacaps2] = useState('')
  const [amostraumidacaps3, setAmostraumidacaps3] = useState('')
  const [amostraumidacaps4, setAmostraumidacaps4] = useState('')
  const [amostraumidacaps5, setAmostraumidacaps5] = useState('')
  const [amostraumidacaps6, setAmostraumidacaps6] = useState('')
  const [amostraumidacaps7, setAmostraumidacaps7] = useState('')
  const [amostraumidacaps8, setAmostraumidacaps8] = useState('')
  const [amostraumidacaps9, setAmostraumidacaps9] = useState('')
  const [amostraumidacaps10, setAmostraumidacaps10] = useState('')
  const [amostraumidacaps11, setAmostraumidacaps11] = useState('')
  const [amostraumidacaps12, setAmostraumidacaps12] = useState('')
  const [amostraumidacaps13, setAmostraumidacaps13] = useState('')
  const [amostraumidacaps14, setAmostraumidacaps14] = useState('')
  const [amostraumidacaps15, setAmostraumidacaps15] = useState('')
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [amostrasecacaps1, setAmostrasecacaps1] = useState('')
  const [amostrasecacaps2, setAmostrasecacaps2] = useState('')
  const [amostrasecacaps3, setAmostrasecacaps3] = useState('')
  const [amostrasecacaps4, setAmostrasecacaps4] = useState('')
  const [amostrasecacaps5, setAmostrasecacaps5] = useState('')
  const [amostrasecacaps6, setAmostrasecacaps6] = useState('')
  const [amostrasecacaps7, setAmostrasecacaps7] = useState('')
  const [amostrasecacaps8, setAmostrasecacaps8] = useState('')
  const [amostrasecacaps9, setAmostrasecacaps9] = useState('')
  const [amostrasecacaps10, setAmostrasecacaps10] = useState('')
  const [amostrasecacaps11, setAmostrasecacaps11] = useState('')
  const [amostrasecacaps12, setAmostrasecacaps12] = useState('')
  const [amostrasecacaps13, setAmostrasecacaps13] = useState('')
  const [amostrasecacaps14, setAmostrasecacaps14] = useState('')
  const [amostrasecacaps15, setAmostrasecacaps15] = useState('')
  const [connState, setConnState] = useState(0);
  const [status, setStatus] = useState('')
  const [ensaio, setEnsaio] = useState()

  const [energiacomp, setEnergiacomp] = useState('')
  const [aux1, setAux1] = useState(Boolean)
  const dat = [
    { label: 'P1', value: 'P1' },
    { label: 'P2', value: 'P2' },
    { label: 'P3', value: 'P3' },
    { label: 'P4', value: 'P4' },
    { label: 'P5', value: 'P5' },
    { label: 'P6', value: 'P6' },
    { label: 'P7', value: 'P7' },
    { label: 'P8', value: 'P8' },
    { label: 'P9', value: 'P9' },
    { label: 'P10', value: 'P10' },
    { label: 'P11', value: 'P11' },
    { label: 'P12', value: 'P12' },

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
      "                         Ensaio finalizado com sucesso!",
      "",
      [
        {

        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
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

  const Confirmasalvar = () =>
    Alert.alert(
      "                          Salvo com sucesso! ",
      "                                     Amostra =" + amostra,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => add() }
      ]
    );
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };

  function Buscardados() {
    setHabilita(false)
    BuscarProgramacao()

  };
  async function getItem() {

    const res = await axios.get(this.api + 'BuscarCompactacao.php?amostra=' + amostra);
    //setAmostra(res.data.amostra);
    setStatus(res.data.success);
    setEnergiacomp(res.data.EnergiaCompactacao);
    setMoldecamp1(res.data.MoldeP1);
    setMoldecamp2(res.data.MoldeP2);
    setMoldecamp3(res.data.MoldeP3);
    setMoldecamp4(res.data.MoldeP4);
    setMoldecamp5(res.data.MoldeP5);
    setMasssoloumidamassasolo1(res.data.MassaSoloUmiMassaMolP1)
    setMasssoloumidamassasolo2(res.data.MassaSoloUmiMassaMolP2)
    setMasssoloumidamassasolo3(res.data.MassaSoloUmiMassaMolP3)
    setMasssoloumidamassasolo4(res.data.MassaSoloUmiMassaMolP4)
    setMasssoloumidamassasolo5(res.data.MassaSoloUmiMassaMolP5)
    setCapsula1(res.data.CapsulaP11)
    setCapsula2(res.data.CapsulaP12)
    setCapsula3(res.data.CapsulaP13)
    setCapsula4(res.data.CapsulaP21)
    setCapsula5(res.data.CapsulaP22)
    setCapsula6(res.data.CapsulaP23)
    setCapsula7(res.data.CapsulaP31)
    setCapsula8(res.data.CapsulaP32)
    setCapsula9(res.data.CapsulaP33)
    setCapsula10(res.data.CapsulaP41)
    setCapsula11(res.data.CapsulaP42)
    setCapsula12(res.data.CapsulaP43)
    setCapsula13(res.data.CapsulaP51)
    setCapsula14(res.data.CapsulaP52)
    setCapsula15(res.data.CapsulaP53)
    setAmostraumidacaps1(res.data.UmidaCapsulaP11)
    setAmostraumidacaps2(res.data.UmidaCapsulaP12)
    setAmostraumidacaps3(res.data.UmidaCapsulaP13)
    setAmostraumidacaps4(res.data.UmidaCapsulaP21)
    setAmostraumidacaps5(res.data.UmidaCapsulaP22)
    setAmostraumidacaps6(res.data.UmidaCapsulaP23)
    setAmostraumidacaps7(res.data.UmidaCapsulaP31)
    setAmostraumidacaps8(res.data.UmidaCapsulaP32)
    setAmostraumidacaps9(res.data.UmidaCapsulaP33)
    setAmostraumidacaps10(res.data.UmidaCapsulaP41)
    setAmostraumidacaps11(res.data.UmidaCapsulaP42)
    setAmostraumidacaps12(res.data.UmidaCapsulaP43)
    setAmostraumidacaps13(res.data.UmidaCapsulaP51)
    setAmostraumidacaps14(res.data.UmidaCapsulaP52)
    setAmostraumidacaps15(res.data.UmidaCapsulaP53)
    setAmostrasecacaps1(res.data.SecaCapsulaP11)
    setAmostrasecacaps2(res.data.SecaCapsulaP12)
    setAmostrasecacaps3(res.data.SecaCapsulaP13)
    setAmostrasecacaps4(res.data.SecaCapsulaP21)
    setAmostrasecacaps5(res.data.SecaCapsulaP22)
    setAmostrasecacaps6(res.data.SecaCapsulaP23)
    setAmostrasecacaps7(res.data.SecaCapsulaP31)
    setAmostrasecacaps8(res.data.SecaCapsulaP32)
    setAmostrasecacaps9(res.data.SecaCapsulaP33)
    setAmostrasecacaps10(res.data.SecaCapsulaP41)
    setAmostrasecacaps11(res.data.SecaCapsulaP42)
    setAmostrasecacaps12(res.data.SecaCapsulaP43)
    setAmostrasecacaps13(res.data.SecaCapsulaP51)
    setAmostrasecacaps14(res.data.SecaCapsulaP52)
    setAmostrasecacaps15(res.data.SecaCapsulaP53)




    console.warn(this.api + 'buscarAmostra.php?amostra=' + amostra, res.data.MoldeP1, status, moldecamp1)
    if (res.data.success === false) {
      falha();
    } else {
      setAux1(true)
    }

  };
  const Finalizar = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {


          add(results.rows.item(0).energiacomp,results.rows.item(0).moldecamp1, results.rows.item(0).moldecamp2, results.rows.item(0).moldecamp3, results.rows.item(0).moldecamp4, results.rows.item(0).moldecamp5, results.rows.item(0).masssoloumidamassasolo1, results.rows.item(0).masssoloumidamassasolo2, results.rows.item(0).masssoloumidamassasolo3, results.rows.item(0).masssoloumidamassasolo4, results.rows.item(0).masssoloumidamassasolo5, results.rows.item(0).caspsula1, results.rows.item(0).caspsula2, results.rows.item(0).caspsula3, results.rows.item(0).caspsula4, results.rows.item(0).caspsula5, results.rows.item(0).caspsula6, results.rows.item(0).caspsula7, results.rows.item(0).caspsula8, results.rows.item(0).caspsula9, results.rows.item(0).caspsula10, results.rows.item(0).caspsula11, results.rows.item(0).caspsula12, results.rows.item(0).caspsula13, results.rows.item(0).caspsula14, results.rows.item(0).caspsula15, results.rows.item(0).amostraumidacaps1, results.rows.item(0).amostraumidacaps2, results.rows.item(0).amostraumidacaps3, results.rows.item(0).amostraumidacaps4, results.rows.item(0).amostraumidacaps5, results.rows.item(0).amostraumidacaps6, results.rows.item(0).amostraumidacaps7, results.rows.item(0).amostraumidacaps8, results.rows.item(0).amostraumidacaps9, results.rows.item(0).amostraumidacaps10, results.rows.item(0).amostraumidacaps11, results.rows.item(0).amostraumidacaps12, results.rows.item(0).amostraumidacaps13, results.rows.item(0).amostraumidacaps14, results.rows.item(0).amostraumidacaps15, results.rows.item(0).amostrasecacaps1, results.rows.item(0).amostrasecacaps2, results.rows.item(0).amostrasecacaps3, results.rows.item(0).amostrasecacaps4, results.rows.item(0).amostrasecacaps5, results.rows.item(0).amostrasecacaps6, results.rows.item(0).amostrasecacaps7, results.rows.item(0).amostrasecacaps8, results.rows.item(0).amostrasecacaps9, results.rows.item(0).amostrasecacaps10, results.rows.item(0).amostrasecacaps11, results.rows.item(0).amostrasecacaps12, results.rows.item(0).amostrasecacaps13, results.rows.item(0).amostrasecacaps14, results.rows.item(0).amostrasecacaps15)

        }
      });
    });
  }
  async function add(energiacomp, moldecamp1, moldecamp2, moldecamp3, moldecamp4, moldecamp5, masssoloumidamassasolo1, masssoloumidamassasolo2, masssoloumidamassasolo3, masssoloumidamassasolo4, masssoloumidamassasolo5, caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, caspsula9, caspsula10, caspsula11, caspsula12, caspsula13, caspsula14, caspsula15, amostraumidacaps1, amostraumidacaps2, amostraumidacaps3, amostraumidacaps4, amostraumidacaps5, amostraumidacaps6, amostraumidacaps7, amostraumidacaps8, amostraumidacaps9, amostraumidacaps10, amostraumidacaps11, amostraumidacaps12, amostraumidacaps13, amostraumidacaps14, amostraumidacaps15, amostrasecacaps1, amostrasecacaps2, amostrasecacaps3, amostrasecacaps4, amostrasecacaps5, amostrasecacaps6, amostrasecacaps7, amostrasecacaps8, amostrasecacaps9, amostrasecacaps10, amostrasecacaps11, amostrasecacaps12, amostrasecacaps13, amostrasecacaps14, amostrasecacaps15) {


    const obj = { amostra, namostra, energiacomp:energiacomp, moldecamp1:moldecamp1, moldecamp2:moldecamp2, moldecamp3:moldecamp3, moldecamp4:moldecamp4, moldecamp5:moldecamp5, masssoloumidamassasolo1:masssoloumidamassasolo1, masssoloumidamassasolo2:masssoloumidamassasolo2, masssoloumidamassasolo3:masssoloumidamassasolo3, masssoloumidamassasolo4:masssoloumidamassasolo4, masssoloumidamassasolo5:masssoloumidamassasolo5, caspsula1:caspsula1, caspsula2:caspsula2, caspsula3:caspsula3, caspsula4:caspsula4, caspsula5:caspsula5, caspsula6:caspsula6, caspsula7:caspsula7, caspsula8:caspsula8, caspsula9:caspsula9, caspsula10:caspsula10, caspsula11:caspsula11, caspsula12:caspsula12, caspsula13:caspsula13, caspsula14:caspsula14, caspsula15:caspsula15, amostraumidacaps1:amostraumidacaps1, amostraumidacaps2:amostraumidacaps2, amostraumidacaps3:amostraumidacaps3, amostraumidacaps4:amostraumidacaps4, amostraumidacaps5:amostraumidacaps5, amostraumidacaps6:amostraumidacaps6, amostraumidacaps7:amostraumidacaps7, amostraumidacaps8:amostraumidacaps8, amostraumidacaps9:amostraumidacaps9, amostraumidacaps10:amostraumidacaps10, amostraumidacaps11:amostraumidacaps11, amostraumidacaps12:amostraumidacaps12, amostraumidacaps13:amostraumidacaps13, amostraumidacaps14:amostraumidacaps14, amostraumidacaps15:amostraumidacaps15, amostrasecacaps1:amostrasecacaps1, amostrasecacaps2:amostrasecacaps2, amostrasecacaps3:amostrasecacaps3, amostrasecacaps4:amostrasecacaps4, amostrasecacaps5:amostrasecacaps5, amostrasecacaps6:amostrasecacaps6, amostrasecacaps7:amostrasecacaps7, amostrasecacaps8:amostrasecacaps8, amostrasecacaps9:amostrasecacaps9, amostrasecacaps10:amostrasecacaps10, amostrasecacaps11:amostrasecacaps11, amostrasecacaps12:amostrasecacaps12, amostrasecacaps13:amostrasecacaps13, amostrasecacaps14:amostrasecacaps14, amostrasecacaps15:amostrasecacaps15,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'salvarcompactacao.php', obj);
      if (res.data.success === true) {
        console.log(res)
        console.log('salvo')
        mensagemsalvar()
      }
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
  const gerarBanco = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Compactacao ( amostra text,namostra text, energiacomp text, moldecamp1 text, moldecamp2 text, moldecamp3 text, moldecamp4 text, moldecamp5 text,masssoloumidamassasolo1 text, masssoloumidamassasolo2 text, masssoloumidamassasolo3 text, masssoloumidamassasolo4 text, masssoloumidamassasolo5 text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, caspsula5 text, caspsula6 text, caspsula7 text, caspsula8 text, caspsula9 text, caspsula10 text, caspsula11 text, caspsula12 text, caspsula13 text, caspsula14 text, caspsula15 text, amostraumidacaps1 text, amostraumidacaps2 text, amostraumidacaps3 text, amostraumidacaps4 text, amostraumidacaps5 text, amostraumidacaps6 text, amostraumidacaps7 text, amostraumidacaps8 text, amostraumidacaps9 text, amostraumidacaps10 text, amostraumidacaps11 text, amostraumidacaps12 text, amostraumidacaps13 text, amostraumidacaps14 text, amostraumidacaps15 text, amostrasecacaps1 text, amostrasecacaps2 text, amostrasecacaps3 text, amostrasecacaps4 text, amostrasecacaps5 text, amostrasecacaps6 text, amostrasecacaps7 text, amostrasecacaps8 text, amostrasecacaps9 text, amostrasecacaps10 text, amostrasecacaps11 text, amostrasecacaps12 text, amostrasecacaps13 text, amostrasecacaps14 text, amostrasecacaps15 text);"
        );

        console.log("Banco de dados iniciado")
      });
  }
  const SalvarBanco = () => {


    db.transaction(
      (tx) => {

        tx.executeSql(`insert into Compactacao (amostra,namostra, energiacomp,moldecamp1, moldecamp2, moldecamp3, moldecamp4, moldecamp5,masssoloumidamassasolo1, masssoloumidamassasolo2, masssoloumidamassasolo3, masssoloumidamassasolo4, masssoloumidamassasolo5,caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, caspsula9, caspsula10, caspsula11, caspsula12, caspsula13, caspsula14, caspsula15, amostraumidacaps1, amostraumidacaps2, amostraumidacaps3, amostraumidacaps4, amostraumidacaps5, amostraumidacaps6, amostraumidacaps7, amostraumidacaps8, amostraumidacaps9, amostraumidacaps10, amostraumidacaps11, amostraumidacaps12, amostraumidacaps13, amostraumidacaps14, amostraumidacaps15, amostrasecacaps1, amostrasecacaps2, amostrasecacaps3, amostrasecacaps4, amostrasecacaps5, amostrasecacaps6, amostrasecacaps7, amostrasecacaps8, amostrasecacaps9, amostrasecacaps10, amostrasecacaps11, amostrasecacaps12, amostrasecacaps13, amostrasecacaps14, amostrasecacaps15) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [amostra, namostra, energiacomp, moldecamp1, moldecamp2, moldecamp3, moldecamp4, moldecamp5, masssoloumidamassasolo1, masssoloumidamassasolo2, masssoloumidamassasolo3, masssoloumidamassasolo4, masssoloumidamassasolo5, caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, caspsula9, caspsula10, caspsula11, caspsula12, caspsula13, caspsula14, caspsula15, amostraumidacaps1, amostraumidacaps2, amostraumidacaps3, amostraumidacaps4, amostraumidacaps5, amostraumidacaps6, amostraumidacaps7, amostraumidacaps8, amostraumidacaps9, amostraumidacaps10, amostraumidacaps11, amostraumidacaps12, amostraumidacaps13, amostraumidacaps14, amostraumidacaps15, amostrasecacaps1, amostrasecacaps2, amostrasecacaps3, amostrasecacaps4, amostrasecacaps5, amostrasecacaps6, amostrasecacaps7, amostrasecacaps8, amostrasecacaps9, amostrasecacaps10, amostrasecacaps11, amostrasecacaps12, amostrasecacaps13, amostrasecacaps14, amostrasecacaps15], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            // mensagemsalvaroffline()
            Save()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });
      },
    );
  };
  const UpdateQuery1 = (moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob) => {


    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE Compactacao SET  energiacomp=?,moldecamp1=?,masssoloumidamassasolo1=?,caspsula1=?, caspsula2=?, caspsula3=?, amostraumidacaps1=?, amostraumidacaps2=?, amostraumidacaps3=?, amostrasecacaps1=?, amostrasecacaps2=?, amostrasecacaps3=? WHERE amostra=? and namostra =?', [energiacomp, moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob, amostra, namostra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });


      }

    )
  }
  const UpdateQuery2 = (moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob) => {


    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE Compactacao SET  energiacomp=?,moldecamp2=?,masssoloumidamassasolo2=?,caspsula4=?, caspsula5=?, caspsula6=?, amostraumidacaps4=?, amostraumidacaps5=?, amostraumidacaps6=?, amostrasecacaps4=?, amostrasecacaps5=?, amostrasecacaps6=? WHERE amostra=? and namostra =?', [energiacomp, moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob, amostra, namostra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });


      }

    )
  }
  const UpdateQuery3 = (moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE Compactacao SET  energiacomp=?,moldecamp3=?,masssoloumidamassasolo3=?,caspsula7=?, caspsula8=?, caspsula9=?, amostraumidacaps7=?, amostraumidacaps8=?, amostraumidacaps9=?, amostrasecacaps7=?, amostrasecacaps8=?, amostrasecacaps9=?WHERE amostra=?and namostra =?', [energiacomp, moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob, amostra, namostra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });
      }
    )
  }
  const UpdateQuery4 = (moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE Compactacao SET  energiacomp=?,moldecamp4=?,masssoloumidamassasolo4=?,caspsula10=?, caspsula11=?, caspsula12=?, amostraumidacaps10=?, amostraumidacaps11=?, amostraumidacaps12=?, amostrasecacaps10=?, amostrasecacaps11=?, amostrasecacaps12=?WHERE amostra=?and namostra =?', [energiacomp, moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob, amostra, namostra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });
      }
    )
  }
  const UpdateQuery5 = (moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE Compactacao SET  energiacomp=?,moldecamp5=?,masssoloumidamassasolo5=?,caspsula13=?, caspsula14=?, caspsula15=?, amostraumidacaps13=?, amostraumidacaps14=?, amostraumidacaps15=?, amostrasecacaps13=?, amostrasecacaps14=?, amostrasecacaps15=? WHERE amostra=?and namostra =?', [energiacomp, moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob, amostra, namostra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });
      }
    )
  }
  async function BuscarProgramacao() {

    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM Programacao where Amostra = ? ', [amostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          if (results.rows.item(0).teoragua > 0) {
            setProcesso(results.rows.item(0).Processo)
            setHabilita(true)
            BuscaBanco()

            // console.log("update", results.rows)
          } else {
            falha()
          }
        } else {
          falha()
        }



        // console.log(temp, 'ok')
      });

    });

  }

  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)

            temp.push(results.rows.item(i));
          setFlatListItems(temp);

          console.log('ok')
          console.log(temp)
          recuperar()
        } else {
          setHabilita(true)

        }
      });

    });

  };
  const SaveBanco = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)

            Save()
          console.log('ok')
          console.log(temp)
        } else {

          SalvarBanco()
        }
      });

    });

  };
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM Compactacao WHERE amostra = ?', [amostra]);
      })
  }



  function Save() {
    console.warn(ensaio)
    if (ensaio == "P1") {
      UpdateQuery1(moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob)

      //console.warn(moldecamp1, moldecampMob, ensaio, amostra, 'ok')
    }
    if (ensaio == "P2") {
      UpdateQuery2(moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob)
    }
    if (ensaio == "P3") {
      UpdateQuery3(moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob)
    }
    if (ensaio == "P4") {
      UpdateQuery4(moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob)
    }
    if (ensaio == "P5") {
      UpdateQuery5(moldecampMob, masssoloumidamassasoloMob, caspsula1Mob, caspsula2Mob, caspsula3Mob, amostraumidacaps1Mob, amostraumidacaps2Mob, amostraumidacaps3Mob, amostrasecacaps1Mob, amostrasecacaps2Mob, amostrasecacaps3Mob)
    }

  }
  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS Compactacao',
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
  function recuperar() {
    if (ensaio == "P1") {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
          var temp = [];
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));

            setMoldecampMob(results.rows.item(0).moldecamp1)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo1)
            setCapsula1Mob(results.rows.item(0).caspsula1)
            setCapsula2Mob(results.rows.item(0).caspsula2)
            setCapsula3Mob(results.rows.item(0).caspsula3)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps1)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps2)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps3)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps1)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps2)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps3)
            setHabilita(true)
            console.log(temp)
          }
        });

      });

      console.warn(caspsula1, moldecampMob, ensaio, amostra)

    }
    if (ensaio == "P2") {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
          var temp = [];
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setMoldecampMob(results.rows.item(0).moldecamp2)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo2)
            setCapsula1Mob(results.rows.item(0).caspsula4)
            setCapsula2Mob(results.rows.item(0).caspsula5)
            setCapsula3Mob(results.rows.item(0).caspsula6)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps4)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps5)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps6)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps4)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps5)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps6)
          }
        });

      });
    }
    if (ensaio == "P3") {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
          var temp = [];
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setMoldecampMob(results.rows.item(0).moldecamp3)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo3)
            setCapsula1Mob(results.rows.item(0).caspsula7)
            setCapsula2Mob(results.rows.item(0).caspsula8)
            setCapsula3Mob(results.rows.item(0).caspsula9)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps7)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps8)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps9)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps7)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps8)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps9)
          }
        });

      });
    }

    if (ensaio == "P4") {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
          var temp = [];
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setMoldecampMob(results.rows.item(0).moldecamp4)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo4)
            setCapsula1Mob(results.rows.item(0).caspsula10)
            setCapsula2Mob(results.rows.item(0).caspsula11)
            setCapsula3Mob(results.rows.item(0).caspsula12)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps10)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps11)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps13)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps10)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps11)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps12)
          }
        });

      });
    }
    if (ensaio == "P5") {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Compactacao WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
          var temp = [];
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setMoldecampMob(results.rows.item(0).moldecamp5)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo5)
            setCapsula1Mob(results.rows.item(0).caspsula13)
            setCapsula2Mob(results.rows.item(0).caspsula14)
            setCapsula3Mob(results.rows.item(0).caspsula15)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps13)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps14)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps15)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps13)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps14)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps15)
          }
        });
      });
    }
  }

  // useEffect(() => {
  useEffect(() => {

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


  useEffect(() => {

  })




  return (

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



          <View style={styles.containerrow}>
            <Text style={styles.buttonNewTask}>
              Amostra:
            </Text>
            <Text style={styles.textNewTask2}>
              Número:
            </Text>
            <TextInput
              style={styles.inputlef2t}
              onChangeText={setAmostra}
              value={amostra}
              keyboardType='numeric'
              placeholder="Amostra"
            />


            <TextInput
              style={styles.inputlef2t}
              onChangeText={setNAmostra}
              value={namostra}
              keyboardType='numeric'
              placeholder="Número"
            />
          </View>
          <View style={styles.containerrow}>
            <TouchableOpacity style={styles.button}
              onPress={() => Buscardados()}>
              <Text style={styles.text}>Buscar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/search.png')} />
            </TouchableOpacity>

          </View>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Energia de compactação:
          </Text> : null}
          <View style={styles.container1}>
            {habilita == true ? <Dropdown
              style={styles.dropdown1}
              containerStyle={styles.shadow}
              textItem={styles.textItem}
              placeholderStyle={styles.placeholderStyle}
              data={Eng}
              search
              searchPlaceholder="Buscar"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Energia de compactação"
              value={energiacomp}
              onChange={item => {
                setEnergiacomp(item.value);
                console.log('selected', item);
              }}
              renderItem={item => _renderItem(item)}
              textError="Error"
            /> : null}

          </View>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Molde de corpo de prova:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            textItem={styles.textItem}
            placeholderStyle={styles.placeholderStyle}
            data={dat}
            search
            searchPlaceholder="Buscar"
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Moldagem corpo de prova"
            value={ensaio}
            onChange={item => {
              setEnsaio(item.value);
              // console.log('selected', item);
            }}
            renderItem={item => _renderItem(item)}
            textError="Error"
          /> : null}
          <View style={styles.containerrow}>
            {habilita == true ? <TouchableOpacity style={styles.button}
              onPress={() => recuperar()}>
              <Text style={styles.text}>Buscar Molde</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/search.png')} />
            </TouchableOpacity> : null}

          </View>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Molde de compactação:
          </Text> : null}
          <Separator1></Separator1>
          <View style={styles.container}>

            {habilita == true ? <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMoldecampMob}
              value={moldecampMob}
              keyboardType='numeric'
              placeholder="Molde"
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
            /> : null}

          </View>

          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa do solo úmido + massa do solo:
          </Text> : null}
          <Separator1></Separator1>
          <View style={styles.container1}>


            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setMasssoloumidamassasoloMob}
              value={masssoloumidamassasoloMob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Massa da solo"
            /> : null}

          </View>


          <Separator1></Separator1>

          {habilita == true ? <Text style={styles.labelcontanier}>
            Cápsula:
          </Text> : null}

          <Separator1></Separator1>
          <View style={styles.container1}>

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula1Mob}
              value={caspsula1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Cápsula 1"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula2Mob}
              value={caspsula2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Cápsula 2"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula3Mob}
              value={caspsula3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Cápsula 3"
            /> : null}

          </View>
          <Separator1></Separator1>


          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra úmida +cápsula:
          </Text> : null}

          <Separator1></Separator1>
          <View style={styles.container1}>

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps1Mob}
              value={amostraumidacaps1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra úmida + cápsula"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps2Mob}
              value={amostraumidacaps2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra úmida + cápsula"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps3Mob}
              value={amostraumidacaps3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra úmida + cápsula"
            /> : null}

          </View>
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra seca +cápsula:
          </Text> : null}

          <Separator1></Separator1>
          <View style={styles.container1}>

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps1Mob}
              value={amostrasecacaps1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra seca + cápsula"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps2Mob}
              value={amostrasecacaps2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra seca + cápsula"
            /> : null}

            {habilita == true ? <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps3Mob}
              value={amostrasecacaps3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}
              placeholder="Amostra seca + cápsula"
            /> : null}

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.containerrow}>

            {habilita == true ? <TouchableOpacity style={styles.buttonRow}
              onPress={() => Finalizar()}

            >
              <Text style={styles.text}>Finalizar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/cloud_computer.png')} />
            </TouchableOpacity> : null}

            {habilita == true ? <TouchableOpacity style={styles.buttonRow}
              onPress={SaveBanco}
            >
              <Text style={styles.text}>Salvar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/SaveIcon.png')} />
            </TouchableOpacity> : null}
          </View>
        </View>

      </ScrollView>


  );
};

