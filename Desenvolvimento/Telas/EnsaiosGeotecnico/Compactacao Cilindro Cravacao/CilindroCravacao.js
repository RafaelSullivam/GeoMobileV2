import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, Switch, SafeAreaView, FlatList, Modal, ActivityIndicator, Pressable } from 'react-native';
import styles from "./stylecravacao";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao"
import log from "../../../Variaveis Globais/variaveisGlobais"

export default function CilindroCravacao({ route, navigation }) {
  api = Conexao.api

  const [loading, setLoading] = useState(false)
  const [amostra, setAmostra] = useState()
  const [processo, setProcesso] = useState()
  const [Codigo_C1, setCodigo_C1] = useState()
  const [habilita, setHabilita] = useState(false)
  const [norma, setNorma] = useState('')
  const [caspsula1Mob, setCapsula1Mob] = useState('')
  const [caspsula2Mob, setCapsula2Mob] = useState('')
  const [caspsula3Mob, setCapsula3Mob] = useState('')
  const [moldecampMob, setMoldecampMob] = useState('')
  const [masssoloumidamassasoloMob, setMasssoloumidamassasoloMob] = useState(0)
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
  const [aux0, setAux0] = useState('')
  const [dropdisable, setDropDisable] = useState(false)
  const [enable, setEnable] = useState(true)
  const [laboratorio, setLaboratorio] = useState('')
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
  const semprocesso = () =>
    Alert.alert(
      "Por favor digitar um nº Processo que esteja cadastrado !",
      "",
      [
        {

        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  const mensagemsalvar = () =>
    Alert.alert(
      "                          Deseja Salvar! ",
      "                                     Amostra =" + amostra,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK" }
      ]
    );
  const Confirmasalvar = () =>
    Alert.alert(
      "                 Amostra Finalizada com Sucesso",
      "",
      [
       
        { text: "OK" }
      ]
    );
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };
  function Salvardados() {
  
    setLoading(true)
    SalvarBanco()


  };
  
  function Buscardados() {
     setLoading(true)
    console.log(ensaio)
    if (ensaio != undefined) {
      console.log("BuscarProgramacao")
      BuscarProgramacao()

    } else {
      setLoading(false)
      Alerta()
    }
    // getItem()



  };
  async function BuscarProgramacao() {
    // console.log(processo)
    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM Programacao where Processo = ?', [processo], (tx, results) => {
        var temp = [];
        console.log("update", results.rows)
        if (results.rows.length > 0) {
          if (results.rows.item(0).compactacaovibrocompactacao > 0) {
            setProcesso(results.rows.item(0).Processo)
            setHabilita(true)
            BuscaBanco()
            console.log("buscar")
          } else {
            setLoading(false)
            falha()
          }
        } else {
          setLoading(false)
          falha()
        }



        //console.log(results.rows, 'ok')
      });

    });

  }
  function Save() {
    if (ensaio == "P1") {
      setMoldecamp1(moldecampMob)
      setMasssoloumidamassasolo1(masssoloumidamassasoloMob)
      setCapsula1(caspsula1Mob)
      setCapsula2(caspsula2Mob)
      setCapsula3(caspsula3Mob)
      setAmostraumidacaps1(amostraumidacaps1Mob)
      setAmostraumidacaps2(amostraumidacaps2Mob)
      setAmostraumidacaps3(amostraumidacaps3Mob)
      setAmostrasecacaps1(amostrasecacaps1Mob)
      setAmostrasecacaps2(amostrasecacaps2Mob)
      setAmostrasecacaps3(amostrasecacaps3Mob)
      console.warn(moldecamp1, moldecampMob, ensaio, amostra)
    }
    if (ensaio == "P2") {
      setMoldecamp2(moldecampMob)
      setMasssoloumidamassasolo2(masssoloumidamassasoloMob)
      setCapsula4(caspsula1Mob)
      setCapsula5(caspsula2Mob)
      setCapsula6(caspsula3Mob)
      setAmostraumidacaps4(amostraumidacaps1Mob)
      setAmostraumidacaps5(amostraumidacaps2Mob)
      setAmostraumidacaps6(amostraumidacaps3Mob)
      setAmostrasecacaps4(amostrasecacaps1Mob)
      setAmostrasecacaps5(amostrasecacaps2Mob)
      setAmostrasecacaps6(amostrasecacaps3Mob)
    }
    if (ensaio == "P3") {
      setMoldecamp3(moldecampMob)
      setMasssoloumidamassasolo3(masssoloumidamassasoloMob)
      setCapsula7(caspsula1Mob)
      setCapsula8(caspsula2Mob)
      setCapsula9(caspsula3Mob)
      setAmostraumidacaps7(amostraumidacaps1Mob)
      setAmostraumidacaps8(amostraumidacaps2Mob)
      setAmostraumidacaps9(amostraumidacaps3Mob)
      setAmostrasecacaps7(amostrasecacaps1Mob)
      setAmostrasecacaps8(amostrasecacaps2Mob)
      setAmostrasecacaps9(amostrasecacaps3Mob)
    }
    if (ensaio == "P4") {
      setMoldecamp4(moldecampMob)
      setMasssoloumidamassasolo4(masssoloumidamassasoloMob)
      setCapsula10(caspsula1Mob)
      setCapsula11(caspsula2Mob)
      setCapsula12(caspsula3Mob)
      setAmostraumidacaps10(amostraumidacaps1Mob)
      setAmostraumidacaps11(amostraumidacaps2Mob)
      setAmostraumidacaps12(amostraumidacaps3Mob)
      setAmostrasecacaps10(amostrasecacaps1Mob)
      setAmostrasecacaps11(amostrasecacaps2Mob)
      setAmostrasecacaps12(amostrasecacaps3Mob)
    }
    if (ensaio == "P5") {
      setMoldecamp5(moldecampMob)
      setMasssoloumidamassasolo5(masssoloumidamassasoloMob)
      setCapsula13(caspsula1Mob)
      setCapsula14(caspsula2Mob)
      setCapsula15(caspsula3Mob)
      setAmostraumidacaps13(amostraumidacaps1Mob)
      setAmostraumidacaps14(amostraumidacaps2Mob)
      setAmostraumidacaps15(amostraumidacaps3Mob)
      setAmostrasecacaps13(amostrasecacaps1Mob)
      setAmostrasecacaps14(amostrasecacaps2Mob)
      setAmostrasecacaps15(amostrasecacaps3Mob)
    }


  }
  async function getItem() {
    setLoading(true)
    const res = await axios.get(this.api + 'BuscarProcessoCadastrado.php?Processo=' + processo + "&" + 'Ensaio=' + "CilindrodeCravacao");
    //setAmostra(res.data.amostra);
    setStatus(res.data.success);




    console.warn(status, moldecamp1)
    if (res.data.success === false) {
      setLoading(false)
      falha();
      setEnable(false)
    } else {
      setAux1(true)
      setLoading(false)
    }

  };
  const Finalizar = () => {
    setLoading(true)
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM CilindroCravacao WHERE processo=? and codigo=?', [processo, Codigo_C1], (tx, results) => {
            var temp = [];
            if (results.rows.length > 0) {


                add(results.rows.item(0).moldecamp1,results.rows.item(0).moldecamp2,results.rows.item(0).moldecamp3,results.rows.item(0).moldecamp4,results.rows.item(0).moldecamp5,results.rows.item(0).masssoloumidamassasolo1,results.rows.item(0).masssoloumidamassasolo2,results.rows.item(0).masssoloumidamassasolo3,results.rows.item(0).masssoloumidamassasolo4,results.rows.item(0).masssoloumidamassasolo5,results.rows.item(0).caspsula1,results.rows.item(0).caspsula2,results.rows.item(0).caspsula3,results.rows.item(0).caspsula4,results.rows.item(0).caspsula5,results.rows.item(0).caspsula6,results.rows.item(0).caspsula7,results.rows.item(0).caspsula8,results.rows.item(0).caspsula9,results.rows.item(0).caspsula10,results.rows.item(0).caspsula11,results.rows.item(0).caspsula12,results.rows.item(0).caspsula13,results.rows.item(0).caspsula14,results.rows.item(0).caspsula15,results.rows.item(0).amostraumidacaps1,results.rows.item(0).amostraumidacaps2,results.rows.item(0).amostraumidacaps3,results.rows.item(0).amostraumidacaps4,results.rows.item(0).amostraumidacaps5,results.rows.item(0).amostraumidacaps6,results.rows.item(0).amostraumidacaps7,results.rows.item(0).amostraumidacaps8,results.rows.item(0).amostraumidacaps9,results.rows.item(0).amostraumidacaps10,results.rows.item(0).amostraumidacaps11,results.rows.item(0).amostraumidacaps12,results.rows.item(0).amostraumidacaps13,results.rows.item(0).amostraumidacaps14,results.rows.item(0).amostraumidacaps15,results.rows.item(0).amostrasecacaps1,results.rows.item(0).amostrasecacaps2,results.rows.item(0).amostrasecacaps3,results.rows.item(0).amostrasecacaps4,results.rows.item(0).amostrasecacaps5,results.rows.item(0).amostrasecacaps6,results.rows.item(0).amostrasecacaps7,results.rows.item(0).amostrasecacaps8,results.rows.item(0).amostrasecacaps9,results.rows.item(0).amostrasecacaps10,results.rows.item(0).amostrasecacaps11,results.rows.item(0).amostrasecacaps12,results.rows.item(0).amostrasecacaps13,results.rows.item(0).amostrasecacaps14,results.rows.item(0).amostrasecacaps15)

            }
        });
    });
}
  async function add(moldecamp1,moldecamp2,moldecamp3,moldecamp4,moldecamp5,masssoloumidamassasolo1,masssoloumidamassasolo2,masssoloumidamassasolo3,masssoloumidamassasolo4,masssoloumidamassasolo5,caspsula1,caspsula2,caspsula3,caspsula4,caspsula5,caspsula6,caspsula7,caspsula8,caspsula9,caspsula10,caspsula11,caspsula12,caspsula13,caspsula14,caspsula15,amostraumidacaps1,amostraumidacaps2,amostraumidacaps3,amostraumidacaps4,amostraumidacaps5,amostraumidacaps6,amostraumidacaps7,amostraumidacaps8,amostraumidacaps9,amostraumidacaps10,amostraumidacaps11,amostraumidacaps12,amostraumidacaps13,amostraumidacaps14,amostraumidacaps15,amostrasecacaps1,amostrasecacaps2,amostrasecacaps3,amostrasecacaps4,amostrasecacaps5,amostrasecacaps6,amostrasecacaps7,amostrasecacaps8,amostrasecacaps9,amostrasecacaps10,amostrasecacaps11,amostrasecacaps12,amostrasecacaps13,amostrasecacaps14,amostrasecacaps15) {


    const obj = { processo, Codigo_C1, moldecamp1,moldecamp2,moldecamp3,moldecamp4,moldecamp5,masssoloumidamassasolo1,masssoloumidamassasolo2,masssoloumidamassasolo3,masssoloumidamassasolo4,masssoloumidamassasolo5,caspsula1,caspsula2,caspsula3,caspsula4,caspsula5,caspsula6,caspsula7,caspsula8,caspsula9,caspsula10,caspsula11,caspsula12,caspsula13,caspsula14,caspsula15,amostraumidacaps1,amostraumidacaps2,amostraumidacaps3,amostraumidacaps4,amostraumidacaps5,amostraumidacaps6,amostraumidacaps7,amostraumidacaps8,amostraumidacaps9,amostraumidacaps10,amostraumidacaps11,amostraumidacaps12,amostraumidacaps13,amostraumidacaps14,amostraumidacaps15,amostrasecacaps1,amostrasecacaps2,amostrasecacaps3,amostrasecacaps4,amostrasecacaps5,amostrasecacaps6,amostrasecacaps7,amostrasecacaps8,amostrasecacaps9,amostrasecacaps10,amostrasecacaps11,amostrasecacaps12,amostrasecacaps13,amostrasecacaps14,amostrasecacaps15,login:log.login};

    if (processo > 0) {
      const res = await axios.post(this.api + 'InserteCompactacaoCilindroCravacao.php', obj);
      console.warn(this.api + 'InserteCompactacaoCilindroCravacao.php', obj)
      if (res.data.success === true) {
        setLoading(false)
        console.log('Salvo')
        Confirmasalvar()
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
          "create table if not exists CilindroCravacao ( processo text, codigo text, moldecamp1 text, moldecamp2 text, moldecamp3 text, moldecamp4 text, moldecamp5 text, masssoloumidamassasolo1 text, masssoloumidamassasolo2 text, masssoloumidamassasolo3 text, masssoloumidamassasolo4 text, masssoloumidamassasolo5 text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, caspsula5 text, caspsula6 text, caspsula7 text, caspsula8 text, caspsula9 text, caspsula10 text, caspsula11 text, caspsula12 text, caspsula13 text, caspsula14 text, caspsula15 text, amostraumidacaps1 text, amostraumidacaps2 text, amostraumidacaps3 text, amostraumidacaps4 text, amostraumidacaps5 text, amostraumidacaps6 text, amostraumidacaps7 text, amostraumidacaps8 text, amostraumidacaps9 text, amostraumidacaps10 text, amostraumidacaps11 text, amostraumidacaps12 text, amostraumidacaps13 text, amostraumidacaps14 text, amostraumidacaps15 text, amostrasecacaps1 text, amostrasecacaps2 text, amostrasecacaps3 text, amostrasecacaps4 text, amostrasecacaps5 text, amostrasecacaps6 text, amostrasecacaps7 text, amostrasecacaps8 text, amostrasecacaps9 text, amostrasecacaps10 text, amostrasecacaps11 text, amostrasecacaps12 text, amostrasecacaps13 text, amostrasecacaps14 text, amostrasecacaps15 text);"
        );

        console.log("Banco de dados iniciado")
      });
  }
  const SalvarBanco = () => {
    DeleteAmostra()

    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CilindroCravacao ( processo,codigo, moldecamp1, moldecamp2, moldecamp3, moldecamp4, moldecamp5, masssoloumidamassasolo1, masssoloumidamassasolo2, masssoloumidamassasolo3, masssoloumidamassasolo4, masssoloumidamassasolo5,caspsula1 , caspsula2 , caspsula3 , caspsula4 , caspsula5 , caspsula6 , caspsula7 , caspsula8 , caspsula9 , caspsula10 , caspsula11 , caspsula12 , caspsula13 , caspsula14 , caspsula15, amostraumidacaps1 , amostraumidacaps2 , amostraumidacaps3 , amostraumidacaps4 , amostraumidacaps5 , amostraumidacaps6 , amostraumidacaps7 , amostraumidacaps8 , amostraumidacaps9 , amostraumidacaps10 , amostraumidacaps11 , amostraumidacaps12 , amostraumidacaps13 , amostraumidacaps14 , amostraumidacaps15, amostrasecacaps1 , amostrasecacaps2 , amostrasecacaps3 , amostrasecacaps4 , amostrasecacaps5 , amostrasecacaps6 , amostrasecacaps7 , amostrasecacaps8 , amostrasecacaps9 , amostrasecacaps10 , amostrasecacaps11 , amostrasecacaps12 , amostrasecacaps13 , amostrasecacaps14 , amostrasecacaps15   ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [processo, Codigo_C1, moldecamp1, moldecamp2, moldecamp3, moldecamp4, moldecamp5, masssoloumidamassasolo1, masssoloumidamassasolo2, masssoloumidamassasolo3, masssoloumidamassasolo4, masssoloumidamassasolo5, caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, caspsula9, caspsula10, caspsula11, caspsula12, caspsula13, caspsula14, caspsula15, amostraumidacaps1, amostraumidacaps2, amostraumidacaps3, amostraumidacaps4, amostraumidacaps5, amostraumidacaps6, amostraumidacaps7, amostraumidacaps8, amostraumidacaps9, amostraumidacaps10, amostraumidacaps11, amostraumidacaps12, amostraumidacaps13, amostraumidacaps14, amostraumidacaps15, amostrasecacaps1, amostrasecacaps2, amostrasecacaps3, amostrasecacaps4, amostrasecacaps5, amostrasecacaps6, amostrasecacaps7, amostrasecacaps8, amostrasecacaps9, amostrasecacaps10, amostrasecacaps11, amostrasecacaps12, amostrasecacaps13, amostrasecacaps14, amostrasecacaps15], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            setLoading(false)
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });

      },

      mensagemsalvaroffline()
    );
  };
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM CilindroCravacao WHERE processo=? and codigo=?', [processo, Codigo_C1]);
      })
  }

  const BuscaBanco = () => {

    console.log('ok1')
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM CilindroCravacao WHERE processo=? and codigo=?', [processo, Codigo_C1], (tx, results) => {
        var temp = [];
        console.log(results)
        if (results.rows.length > 0) {

          if (ensaio == "P1") {
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
            console.warn(caspsula1, moldecampMob, ensaio, amostra)

          }
          if (ensaio == "P2") {
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
          if (ensaio == "P3") {
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
          if (ensaio == "P4") {
            setMoldecampMob(results.rows.item(0).moldecamp4)
            setMasssoloumidamassasoloMob(results.rows.item(0).masssoloumidamassasolo4)
            setCapsula1Mob(results.rows.item(0).caspsula10)
            setCapsula2Mob(results.rows.item(0).caspsula11)
            setCapsula3Mob(results.rows.item(0).caspsula12)
            setAmostraumidacaps1Mob(results.rows.item(0).amostraumidacaps10)
            setAmostraumidacaps2Mob(results.rows.item(0).amostraumidacaps11)
            setAmostraumidacaps3Mob(results.rows.item(0).amostraumidacaps12)
            setAmostrasecacaps1Mob(results.rows.item(0).amostrasecacaps10)
            setAmostrasecacaps2Mob(results.rows.item(0).amostrasecacaps11)
            setAmostrasecacaps3Mob(results.rows.item(0).amostrasecacaps12)
          }
          if (ensaio == "P5") {
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
          console.log('ok')
          console.log(results.rows)
          setLoading(false)
        }
        setLoading(false)
      });

    });

  };







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
    Save()






    console.log(aux0)

    //add()
  })




  return (

  
      <ScrollView >

        <View style={styles.container1}>

          {connState.isConnected == true ? <Image
            source={require('../../../componentes/imagem/applications_internet.png')}
            style={styles.ImageIconStyle}
          /> : <Image
            source={require('../../../componentes/imagem/Networkoff.png')}
            style={styles.ImageIconStyle}
          />}
        </View>







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
            Cilindro de corpo de prova:
          </Text>
          <Separator1></Separator1>
          <Dropdown
            style={styles.dropdown}

            containerStyle={styles.shadow}
            textItem={styles.textItem}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.textItem}
            data={dat}
            search
            searchPlaceholder="Buscar"
            labelField="label"
            valueField="value"
            label="Dropdown"
            disable={false}
            placeholder="Cilindro corpo de prova"
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




          {habilita == true ? <Text style={styles.labelcontanier}>
            Cilindro nº:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMoldecampMob}
              value={moldecampMob}
              keyboardType='numeric'
              placeholder="Molde"
              editable={enable}
              selectTextOnFocus={enable}
            />

          </View> : null}

          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa do solo úmido + massa do molde:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>


            <TextInput
              style={styles.inputleft}
              onChangeText={setMasssoloumidamassasoloMob}
              value={masssoloumidamassasoloMob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Massa da solo"
            />

          </View> : null}


          <Separator1></Separator1>

          {habilita == true ? <Text style={styles.labelcontanier}>
            Cápsula:
          </Text> : null}

          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula1Mob}
              value={caspsula1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Cápsula 1"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula2Mob}
              value={caspsula2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Cápsula 2"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula3Mob}
              value={caspsula3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Cápsula 3"
            />

          </View> : null}
          <Separator1></Separator1>


          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra úmida +cápsula:
          </Text> : null}

          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps1Mob}
              value={amostraumidacaps1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra úmida + cápsula"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps2Mob}
              value={amostraumidacaps2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra úmida + cápsula"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostraumidacaps3Mob}
              value={amostraumidacaps3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra úmida + cápsula"
            />

          </View> : null}
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra seca +cápsula:
          </Text> : null}

          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps1Mob}
              value={amostrasecacaps1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra seca + cápsula"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps2Mob}
              value={amostrasecacaps2Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra seca + cápsula"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setAmostrasecacaps3Mob}
              value={amostrasecacaps3Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              editable={enable}
              selectTextOnFocus={enable}
              placeholder="Amostra seca + cápsula"
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
              onPress={Salvardados}
            >
              <Image
                source={require('../../../../assets/SaveIcon.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>
            
            <Separator1></Separator1>
            <Separator1></Separator1>
          </View> : null}
        </View>

      </ScrollView>


  );
};

