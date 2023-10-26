import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"


export default function MassaEspecificaMaximaMinimaAreia() {
  const [loading, setLoading] = useState(false)
  api = Conexao.api
  const [norma, setNorma] = useState('')
  const [amostra, setAmostra] = useState('')
  const [processo, setProcesso] = useState('')

  const [moldeareiaminima1, setMoldeAreiaMinima1] = useState('')
  const [moldeareiaminima2, setMoldeAreiaMinima2] = useState('')

  // Massa Específica Mínima das Areia
  const [pesomoldeareiaminima1, setPesoMoldeAreiaMinima1] = useState('')
  const [pesomoldeareiaminima2, setPesoMoldeAreiaMinima2] = useState('')
  const [pesomoldeareiaminima3, setPesoMoldeAreiaMinima3] = useState('')
  const [pesomoldeareiaminima4, setPesoMoldeAreiaMinima4] = useState('')
  const [pesomoldeareiaminima5, setPesoMoldeAreiaMinima5] = useState('')
  const [pesomoldeareiaminima6, setPesoMoldeAreiaMinima6] = useState('')
  const [pesomoldeareiaminima7, setPesoMoldeAreiaMinima7] = useState('')
  const [pesomoldeareiaminima8, setPesoMoldeAreiaMinima8] = useState('')
  const [pesomoldeareiaminima9, setPesoMoldeAreiaMinima9] = useState('')

  //Massa Específica Máxima das Areia
  const [pesomoldeareiaminima11, setPesoMoldeAreiaMinima11] = useState('')
  const [pesomoldeareiaminima12, setPesoMoldeAreiaMinima12] = useState('')
  const [pesomoldeareiaminima13, setPesoMoldeAreiaMinima13] = useState('')
  const [pesomoldeareiaminima14, setPesoMoldeAreiaMinima14] = useState('')
  const [pesomoldeareiaminima15, setPesoMoldeAreiaMinima15] = useState('')
  const [pesomoldeareiaminima16, setPesoMoldeAreiaMinima16] = useState('')
  const [pesomoldeareiaminima17, setPesoMoldeAreiaMinima17] = useState('')
  const [pesomoldeareiaminima18, setPesoMoldeAreiaMinima18] = useState('')
  const [pesomoldeareiaminima19, setPesoMoldeAreiaMinima19] = useState('')

  const [soloaguacapsula1, setSoloAguaCapsula1] = useState('')
  const [soloaguacapsula2, setSoloAguaCapsula2] = useState('')
  const [soloaguacapsula3, setSoloAguaCapsula3] = useState('')
  const [soloaguacapsula4, setSoloAguaCapsula4] = useState('')
  const [soloaguacapsula5, setSoloAguaCapsula5] = useState('')
  const [soloaguacapsula6, setSoloAguaCapsula6] = useState('')
  const [soloaguacapsula7, setSoloAguaCapsula7] = useState('')
  const [soloaguacapsula8, setSoloAguaCapsula8] = useState('')
  const [soloaguacapsula9, setSoloAguaCapsula9] = useState('')

  const [solosecocapsula1, setSoloSecoCapsula1] = useState('')
  const [solosecocapsula2, setSoloSecoCapsula2] = useState('')
  const [solosecocapsula3, setSoloSecoCapsula3] = useState('')
  const [solosecocapsula4, setSoloSecoCapsula4] = useState('')
  const [solosecocapsula5, setSoloSecoCapsula5] = useState('')
  const [solosecocapsula6, setSoloSecoCapsula6] = useState('')
  const [solosecocapsula7, setSoloSecoCapsula7] = useState('')
  const [solosecocapsula8, setSoloSecoCapsula8] = useState('')
  const [solosecocapsula9, setSoloSecoCapsula9] = useState('')

  const [massacapsula1, setMassaCapsula1] = useState('')
  const [massacapsula2, setMassaCapsula2] = useState('')
  const [massacapsula3, setMassaCapsula3] = useState('')
  const [massacapsula4, setMassaCapsula4] = useState('')
  const [massacapsula5, setMassaCapsula5] = useState('')
  const [massacapsula6, setMassaCapsula6] = useState('')
  const [massacapsula7, setMassaCapsula7] = useState('')
  const [massacapsula8, setMassaCapsula8] = useState('')
  const [massacapsula9, setMassaCapsula9] = useState('')



  const [status, setStatus] = useState('')
  const [connState, setConnState] = useState(0);
  const [text, setText] = useState('carro');
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
    if (connState.isConnected === true) {
     // getItem()
    } else {

      BuscaBanco()
    }

  };
  function Salvardados() {
    if (connState.isConnected === true) {
      add()
    } else {
      SalvarBanco()
    }

  };





  async function getItem() {
    setLoading(true)
    const res = await axios.get(this.api + 'BuscarMassaEspecificaMaxEMinDeAreia.php?amostra=' + amostra);
    //setAmostra(res.data.amostra);
    setStatus(res.data.success);
    setProcesso(res.data.processo);
    setMoldeAreiaMinima1(res.data.moldeareiaminima1);
    setMoldeAreiaMinima2(res.data.moldeareiaminima2);
    setPesoMoldeAreiaMinima1(res.data.pesomoldeareiaminima1);
    setPesoMoldeAreiaMinima2(res.data.pesomoldeareiaminima2);
    setPesoMoldeAreiaMinima3(res.data.pesomoldeareiaminima3);
    setPesoMoldeAreiaMinima4(res.data.pesomoldeareiaminima4);
    setPesoMoldeAreiaMinima5(res.data.pesomoldeareiaminima5);
    setPesoMoldeAreiaMinima6(res.data.pesomoldeareiaminima6);
    setPesoMoldeAreiaMinima7(res.data.pesomoldeareiaminima7);
    setPesoMoldeAreiaMinima8(res.data.pesomoldeareiaminima8);
    setPesoMoldeAreiaMinima9(res.data.pesomoldeareiaminima9);
    setPesoMoldeAreiaMinima11(res.data.pesomoldeareiaminima11);
    setPesoMoldeAreiaMinima12(res.data.pesomoldeareiaminima12);
    setPesoMoldeAreiaMinima13(res.data.pesomoldeareiaminima13);
    setPesoMoldeAreiaMinima14(res.data.pesomoldeareiaminima14);
    setPesoMoldeAreiaMinima15(res.data.pesomoldeareiaminima15);
    setPesoMoldeAreiaMinima16(res.data.pesomoldeareiaminima16);
    setPesoMoldeAreiaMinima17(res.data.pesomoldeareiaminima17);
    setPesoMoldeAreiaMinima18(res.data.pesomoldeareiaminima18);
    setPesoMoldeAreiaMinima19(res.data.pesomoldeareiaminima19);
    setSoloAguaCapsula1(res.data.soloaguacapsula1);
    setSoloAguaCapsula2(res.data.soloaguacapsula2);
    setSoloAguaCapsula3(res.data.soloaguacapsula3);
    setSoloAguaCapsula4(res.data.soloaguacapsula4);
    setSoloAguaCapsula5(res.data.soloaguacapsula5);
    setSoloAguaCapsula6(res.data.soloaguacapsula6);
    setSoloAguaCapsula7(res.data.soloaguacapsula7);
    setSoloAguaCapsula8(res.data.soloaguacapsula8);
    setSoloAguaCapsula9(res.data.soloaguacapsula9);
    setSoloSecoCapsula1(res.data.solosecocapsula1);
    setSoloSecoCapsula2(res.data.solosecocapsula2);
    setSoloSecoCapsula3(res.data.solosecocapsula3);
    setSoloSecoCapsula4(res.data.solosecocapsula4);
    setSoloSecoCapsula5(res.data.solosecocapsula5);
    setSoloSecoCapsula6(res.data.solosecocapsula6);
    setSoloSecoCapsula7(res.data.solosecocapsula7);
    setSoloSecoCapsula8(res.data.solosecocapsula8);
    setSoloSecoCapsula9(res.data.solosecocapsula9);
    setMassaCapsula1(res.data.massacapsula1);
    setMassaCapsula2(res.data.massacapsula2);
    setMassaCapsula3(res.data.massacapsula3);
    setMassaCapsula4(res.data.massacapsula4);
    setMassaCapsula5(res.data.massacapsula5);
    setMassaCapsula6(res.data.massacapsula6);
    setMassaCapsula7(res.data.massacapsula7);
    setMassaCapsula8(res.data.massacapsula8);
    setMassaCapsula9(res.data.massacapsula9);

    console.log(res.data)

    if (res.data.success === false) {
      setLoading(false)
      falha();
    } else {
      setLoading(false)
    }
  };

  async function add() {
    setLoading(true)
    const obj = { amostra, moldeareiaminima1, moldeareiaminima2, pesomoldeareiaminima1, pesomoldeareiaminima2, pesomoldeareiaminima3, pesomoldeareiaminima4, pesomoldeareiaminima5, pesomoldeareiaminima6, pesomoldeareiaminima7, pesomoldeareiaminima8, pesomoldeareiaminima9, pesomoldeareiaminima11, pesomoldeareiaminima12, pesomoldeareiaminima13, pesomoldeareiaminima14, pesomoldeareiaminima15, pesomoldeareiaminima16, pesomoldeareiaminima17, pesomoldeareiaminima18, pesomoldeareiaminima19, soloaguacapsula1, soloaguacapsula2, soloaguacapsula3, soloaguacapsula4, soloaguacapsula5, soloaguacapsula6, soloaguacapsula7, soloaguacapsula8, soloaguacapsula9, solosecocapsula1, solosecocapsula2, solosecocapsula3, solosecocapsula4, solosecocapsula5, solosecocapsula6, solosecocapsula7, solosecocapsula8, solosecocapsula9, massacapsula1, massacapsula2, massacapsula3, massacapsula4, massacapsula5, massacapsula6, massacapsula7, massacapsula8, massacapsula9,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarMassaEspecificaMaxEMinDeAreia.php', obj);
      if (res.data.success === true) {
        mensagemsalvar();
        setLoading(false)
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
          "create table MassaEspecificaMaxEMinDeAreia not exists tel ( amostra text, moldeareiaminima1 text, moldeareiaminima2 text, pesomoldeareiaminima1 text, pesomoldeareiaminima2 text, pesomoldeareiaminima3 text, pesomoldeareiaminima4 text, pesomoldeareiaminima5 text, pesomoldeareiaminima6 text, pesomoldeareiaminima7 text, pesomoldeareiaminima8 text, pesomoldeareiaminima9 text, pesomoldeareiaminima11 text, pesomoldeareiaminima12 text, pesomoldeareiaminima13 text, pesomoldeareiaminima14 text, pesomoldeareiaminima15 text, pesomoldeareiaminima16 text, pesomoldeareiaminima17 text, pesomoldeareiaminima18 text, pesomoldeareiaminima19 text, soloaguacapsula1 text, soloaguacapsula2 text, soloaguacapsula3 text, soloaguacapsula4 text, soloaguacapsula5 text, soloaguacapsula6 text, soloaguacapsula7 text, soloaguacapsula8 text, soloaguacapsula9 text, solosecocapsula1 text, solosecocapsula2 text, solosecocapsula3 text, solosecocapsula4 text, solosecocapsula5 text, solosecocapsula6 text, solosecocapsula7 text, solosecocapsula8 text, solosecocapsula9 text, massacapsula1 text, massacapsula2 text, massacapsula3 text, massacapsula4 text, massacapsula5 text, massacapsula6 text, massacapsula7 text, massacapsula8 text, massacapsula9 text );"
        );

        console.log("Banco de dados iniciado")
      });
  }

  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {
    setLoading(true)
    db.transaction((tx) => {
      try {
        tx.executeSql('SELECT * FROM MassaEspecificaMaxEMinDeAreia WHERE amostra = ?', [amostra],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var usermoldeareiaminima1 = results.rows.item(0).moldeareiaminima1
              var usermoldeareiaminima2 = results.rows.item(0).moldeareiaminima2
              var userpesomoldeareiaminima1 = results.rows.item(0).pesomoldeareiaminima1
              var userpesomoldeareiaminima2 = results.rows.item(0).pesomoldeareiaminima2
              var userpesomoldeareiaminima3 = results.rows.item(0).pesomoldeareiaminima3
              var userpesomoldeareiaminima4 = results.rows.item(0).pesomoldeareiaminima4
              var userpesomoldeareiaminima5 = results.rows.item(0).pesomoldeareiaminima5
              var userpesomoldeareiaminima6 = results.rows.item(0).pesomoldeareiaminima6
              var userpesomoldeareiaminima7 = results.rows.item(0).pesomoldeareiaminima7
              var userpesomoldeareiaminima8 = results.rows.item(0).pesomoldeareiaminima8
              var userpesomoldeareiaminima9 = results.rows.item(0).pesomoldeareiaminima9
              var userpesomoldeareiaminima11 = results.rows.item(0).pesomoldeareiaminima11
              var userpesomoldeareiaminima12 = results.rows.item(0).pesomoldeareiaminima12
              var userpesomoldeareiaminima13 = results.rows.item(0).pesomoldeareiaminima13
              var userpesomoldeareiaminima14 = results.rows.item(0).pesomoldeareiaminima14
              var userpesomoldeareiaminima15 = results.rows.item(0).pesomoldeareiaminima15
              var userpesomoldeareiaminima16 = results.rows.item(0).pesomoldeareiaminima16
              var userpesomoldeareiaminima17 = results.rows.item(0).pesomoldeareiaminima17
              var userpesomoldeareiaminima18 = results.rows.item(0).pesomoldeareiaminima18
              var userpesomoldeareiaminima19 = results.rows.item(0).pesomoldeareiaminima19
              var usersoloaguacapsula1 = results.rows.item(0).soloaguacapsula1
              var usersoloaguacapsula2 = results.rows.item(0).soloaguacapsula2
              var usersoloaguacapsula3 = results.rows.item(0).soloaguacapsula3
              var usersoloaguacapsula4 = results.rows.item(0).soloaguacapsula4
              var usersoloaguacapsula5 = results.rows.item(0).soloaguacapsula5
              var usersoloaguacapsula6 = results.rows.item(0).soloaguacapsula6
              var usersoloaguacapsula7 = results.rows.item(0).soloaguacapsula7
              var usersoloaguacapsula8 = results.rows.item(0).soloaguacapsula8
              var usersoloaguacapsula9 = results.rows.item(0).soloaguacapsula9
              var usersolosecocapsula1 = results.rows.item(0).solosecocapsula1
              var usersolosecocapsula2 = results.rows.item(0).solosecocapsula2
              var usersolosecocapsula3 = results.rows.item(0).solosecocapsula3
              var usersolosecocapsula4 = results.rows.item(0).solosecocapsula4
              var usersolosecocapsula5 = results.rows.item(0).solosecocapsula5
              var usersolosecocapsula6 = results.rows.item(0).solosecocapsula6
              var usersolosecocapsula7 = results.rows.item(0).solosecocapsula7
              var usersolosecocapsula8 = results.rows.item(0).solosecocapsula8
              var usersolosecocapsula9 = results.rows.item(0).solosecocapsula9
              var usermassacapsula1 = results.rows.item(0).massacapsula1
              var usermassacapsula2 = results.rows.item(0).massacapsula2
              var usermassacapsula3 = results.rows.item(0).massacapsula3
              var usermassacapsula4 = results.rows.item(0).massacapsula4
              var usermassacapsula5 = results.rows.item(0).massacapsula5
              var usermassacapsula6 = results.rows.item(0).massacapsula6
              var usermassacapsula7 = results.rows.item(0).massacapsula7
              var usermassacapsula8 = results.rows.item(0).massacapsula8
              var usermassacapsula9 = results.rows.item(0).massacapsula9

              setMoldeAreiaMinima1(usermoldeareiaminima1);
              setMoldeAreiaMinima2(usermoldeareiaminima2);
              setPesoMoldeAreiaMinima1(userpesomoldeareiaminima1)
              setPesoMoldeAreiaMinima2(userpesomoldeareiaminima2)
              setPesoMoldeAreiaMinima2(userpesomoldeareiaminima2)
              setPesoMoldeAreiaMinima3(userpesomoldeareiaminima3)
              setPesoMoldeAreiaMinima4(userpesomoldeareiaminima4)
              setPesoMoldeAreiaMinima5(userpesomoldeareiaminima5)
              setPesoMoldeAreiaMinima6(userpesomoldeareiaminima6)
              setPesoMoldeAreiaMinima7(userpesomoldeareiaminima7)
              setPesoMoldeAreiaMinima8(userpesomoldeareiaminima8)
              setPesoMoldeAreiaMinima9(userpesomoldeareiaminima9)
              setPesoMoldeAreiaMinima11(userpesomoldeareiaminima11)
              setPesoMoldeAreiaMinima12(userpesomoldeareiaminima12)
              setPesoMoldeAreiaMinima13(userpesomoldeareiaminima13)
              setPesoMoldeAreiaMinima14(userpesomoldeareiaminima14)
              setPesoMoldeAreiaMinima15(userpesomoldeareiaminima15)
              setPesoMoldeAreiaMinima16(userpesomoldeareiaminima16)
              setPesoMoldeAreiaMinima17(userpesomoldeareiaminima17)
              setPesoMoldeAreiaMinima18(userpesomoldeareiaminima18)
              setPesoMoldeAreiaMinima19(userpesomoldeareiaminima19)
              setSoloAguaCapsula1(usersoloaguacapsula1)
              setSoloAguaCapsula2(usersoloaguacapsula2)
              setSoloAguaCapsula3(usersoloaguacapsula3)
              setSoloAguaCapsula4(usersoloaguacapsula4)
              setSoloAguaCapsula5(usersoloaguacapsula5)
              setSoloAguaCapsula6(usersoloaguacapsula6)
              setSoloAguaCapsula7(usersoloaguacapsula7)
              setSoloAguaCapsula8(usersoloaguacapsula8)
              setSoloAguaCapsula9(usersoloaguacapsula9)
              setSoloSecoCapsula1(usersolosecocapsula1)
              setSoloSecoCapsula2(usersolosecocapsula2)
              setSoloSecoCapsula3(usersolosecocapsula3)
              setSoloSecoCapsula4(usersolosecocapsula4)
              setSoloSecoCapsula5(usersolosecocapsula5)
              setSoloSecoCapsula6(usersolosecocapsula6)
              setSoloSecoCapsula7(usersolosecocapsula7)
              setSoloSecoCapsula8(usersolosecocapsula8)
              setSoloSecoCapsula9(usersolosecocapsula9)
              setMassaCapsula1(usermassacapsula1)
              setMassaCapsula2(usermassacapsula2)
              setMassaCapsula3(usermassacapsula3)
              setMassaCapsula4(usermassacapsula4)
              setMassaCapsula5(usermassacapsula5)
              setMassaCapsula6(usermassacapsula6)
              setMassaCapsula7(usermassacapsula7)
              setMassaCapsula8(usermassacapsula8)
              setMassaCapsula9(usermassacapsula9)

              console.log(results.rows.item(0))
              setLoading(false)

            }
          });
      } catch (error) {
        console.log(error)
      }
    });
  };

  const SalvarBanco = () => {

    db.transaction(
      (tx) => {
        try {
          tx.executeSql(" UPDATE MassaEspecificaMaxEMinDeAreia  WHERE  amostra  = ?, moldeareiaminima1  = ?, moldeareiaminima2  = ?, pesomoldeareiaminima1  = ?, pesomoldeareiaminima2  = ?, pesomoldeareiaminima3  = ?, pesomoldeareiaminima4  = ?, pesomoldeareiaminima5  = ?, pesomoldeareiaminima6  = ?, pesomoldeareiaminima7  = ?, pesomoldeareiaminima8  = ?, pesomoldeareiaminima9  = ?, pesomoldeareiaminima11  = ?, pesomoldeareiaminima12  = ?, pesomoldeareiaminima13  = ?, pesomoldeareiaminima14  = ?, pesomoldeareiaminima15  = ?, pesomoldeareiaminima16  = ?, pesomoldeareiaminima17  = ?, pesomoldeareiaminima18  = ?, pesomoldeareiaminima19  = ?, soloaguacapsula1  = ?, soloaguacapsula2  = ?, soloaguacapsula3  = ?, soloaguacapsula4  = ?, soloaguacapsula5  = ?, soloaguacapsula6  = ?, soloaguacapsula7  = ?, soloaguacapsula8  = ?, soloaguacapsula9  = ?, solosecocapsula1  = ?, solosecocapsula2  = ?, solosecocapsula3  = ?, solosecocapsula4  = ?, solosecocapsula5  = ?, solosecocapsula6  = ?, solosecocapsula7  = ?, solosecocapsula8  = ?, solosecocapsula9  = ?, massacapsula1  = ?, massacapsula2  = ?, massacapsula3  = ?, massacapsula4  = ?, massacapsula5  = ?, massacapsula6  = ?, massacapsula7  = ?, massacapsula8  = ?, massacapsula9  = ?", [amostra, , moldeareiaminima1, moldeareiaminima2, pesomoldeareiaminima1, pesomoldeareiaminima2, pesomoldeareiaminima3, pesomoldeareiaminima4, pesomoldeareiaminima5, pesomoldeareiaminima6, pesomoldeareiaminima7, pesomoldeareiaminima8, pesomoldeareiaminima9, pesomoldeareiaminima11, pesomoldeareiaminima12, pesomoldeareiaminima13, pesomoldeareiaminima14, pesomoldeareiaminima15, pesomoldeareiaminima16, pesomoldeareiaminima17, pesomoldeareiaminima18, pesomoldeareiaminima19, soloaguacapsula1, soloaguacapsula2, soloaguacapsula3, soloaguacapsula4, soloaguacapsula5, soloaguacapsula6, soloaguacapsula7, soloaguacapsula8, soloaguacapsula9, solosecocapsula1, solosecocapsula2, solosecocapsula3, solosecocapsula4, solosecocapsula5, solosecocapsula6, solosecocapsula7, solosecocapsula8, solosecocapsula9, massacapsula1, massacapsula2, massacapsula3, massacapsula4, massacapsula5, massacapsula6, massacapsula7, massacapsula8, massacapsula9]);

        } catch (error) {
          console.log(error)
        }

      },

      mensagemsalvaroffline()
    );
  };

  // UseEffect
  useEffect(() => {

    //gerarBanco()
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

          {connState.isConnected == true ? <Image
            source={require('../../../componentes/imagem/applications_internet.png')}
            style={styles.ImageIconStyle}
          /> : <Image
            source={require('../../../componentes/imagem/Networkoff.png')}
            style={styles.ImageIconStyle}
          />}


        </View>

        <View style={styles.container}>


          <Text style={styles.buttonNewTask}>
            Amostra:
          </Text>

          <TextInput
            style={styles.inputlef2t}
            onChangeText={setAmostra}
            value={amostra}
            keyboardType='numeric'
            placeholder="Amostra"
          />
          <View style={styles.containerbtnbuscar}>


            <TouchableOpacity
              style={styles.button}
              onPress={Buscardados}
            >
              <Image
                source={require('../../../componentes/imagem/database_search.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={{ fontSize: 16 }}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.labelcontanier}>
            Molde Nº:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleftpic}
              onChangeText={setMoldeAreiaMinima1}
              value={moldeareiaminima1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Molde Nº"
            />


          </View>
          <Separator1></Separator1>
          <Text style={styles.labelcontanier}>
            Corpo de Prova:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 1"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 2"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 3"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 4"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 5"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 6"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 7"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 8"
              placeholderTextColor={'black'}
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              editable={false} selectTextOnFocus={false}
              keyboardType='numeric'
              placeholder="CP 9"
              placeholderTextColor={'black'}
            />
          </View>

          <Text style={styles.labelcontanier}>
            Peso do molde + Areia:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //PesoMoldeAreiaMinima1
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima1}
              value={pesomoldeareiaminima1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima2
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima2}
              value={pesomoldeareiaminima2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima3
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima3}
              value={pesomoldeareiaminima3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima4
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima4}
              value={pesomoldeareiaminima4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima5
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima5}
              value={pesomoldeareiaminima5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima6
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima6}
              value={pesomoldeareiaminima6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima7
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima7}
              value={pesomoldeareiaminima7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima8
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima8}
              value={pesomoldeareiaminima8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //PesoMoldeAreiaMinima9
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima9}
              value={pesomoldeareiaminima9.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Text style={styles.labelcontanier}>
            Molde Nº:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //Molde areia 
              style={styles.inputleftpic}
              onChangeText={setMoldeAreiaMinima2}
              value={moldeareiaminima2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Molde Nº"
            />


          </View>

          <Separator1></Separator1>
          <Text style={styles.labelcontanier}>
            Peso do molde + Areia:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima11}
              value={pesomoldeareiaminima11.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima12}
              value={pesomoldeareiaminima12.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //3
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima13}
              value={pesomoldeareiaminima13.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima14}
              value={pesomoldeareiaminima14.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima15}
              value={pesomoldeareiaminima15.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //3
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima16}
              value={pesomoldeareiaminima16.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />

            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima17}
              value={pesomoldeareiaminima17.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima18}
              value={pesomoldeareiaminima18.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //3
              style={styles.inputleft}
              onChangeText={setPesoMoldeAreiaMinima19}
              value={pesomoldeareiaminima19.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Peso do molde + Areia"
            />
          </View>

          <Text style={styles.labelcontanier}>
            Solo + água + cápsula:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>


            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula1}
              value={soloaguacapsula1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula2}
              value={soloaguacapsula2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula3}
              value={soloaguacapsula3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula4}
              value={soloaguacapsula4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula5}
              value={soloaguacapsula5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula6}
              value={soloaguacapsula6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula7}
              value={soloaguacapsula7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula8}
              value={soloaguacapsula8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloAguaCapsula9}
              value={soloaguacapsula9.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo + água + cápsula"
            />
          </View>


          <Text style={styles.labelcontanier}>
            Solo seco + cápsula:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula1}
              value={solosecocapsula1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula2}
              value={solosecocapsula2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula3}
              value={solosecocapsula3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula4}
              value={solosecocapsula4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula5}
              value={solosecocapsula5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula6}
              value={solosecocapsula6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula7}
              value={solosecocapsula7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula8}
              value={solosecocapsula8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setSoloSecoCapsula9}
              value={solosecocapsula9.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Solo seco + cápsula"
            />


          </View>
          <Text style={styles.labelcontanier}>
            Massa da cápsula:
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMassaCapsula1}
              value={massacapsula1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula2}
              value={massacapsula2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula3}
              value={massacapsula3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula4}
              value={massacapsula4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula5}
              value={massacapsula5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula6}
              value={massacapsula6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula7}
              value={massacapsula7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula8}
              value={massacapsula8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCapsula9}
              value={massacapsula9.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da cápsula"
            />
          </View>

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
                source={require('../../../componentes/imagem/save.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={{ fontSize: 16 }}>Salvar</Text>
            </TouchableOpacity>
          </View>
          <Separator1></Separator1>
        </View>


      </ScrollView>



    </SafeAreaView>
  );
};

