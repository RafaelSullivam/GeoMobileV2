import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import log from "../../../Variaveis Globais/variaveisGlobais"

export default function LimitesLiquidezPlasticidade() {
  const [loading, setLoading] = useState(false)
  api = Conexao.api
  const [norma, setNorma] = useState('')
  const [amostra, setAmostra] = useState('')
  const [processo, setProcesso] = useState('')
  const [caspsula1, setCapsula1] = useState('')
  const [caspsula2, setCapsula2] = useState('')
  const [caspsula3, setCapsula3] = useState('')
  const [caspsula4, setCapsula4] = useState('')
  const [caspsula5, setCapsula5] = useState('')
  const [caspsula6, setCapsula6] = useState('')
  const [caspsula7, setCapsula7] = useState('')
  const [caspsula8, setCapsula8] = useState('')
  const [masamoumicap1, setMasamoumicap1] = useState('')
  const [masamoumicap2, setMasamoumicap2] = useState('')
  const [masamoumicap3, setMasamoumicap3] = useState('')
  const [masamoumicap4, setMasamoumicap4] = useState('')
  const [masamoumicap5, setMasamoumicap5] = useState('')
  const [masamoumicap6, setMasamoumicap6] = useState('')
  const [masamoumicap7, setMasamoumicap7] = useState('')
  const [masamoumicap8, setMasamoumicap8] = useState('')
  const [masamosecacap1, setMasamosecacap1] = useState('')
  const [masamosecacap2, setMasamosecacap2] = useState('')
  const [masamosecacap3, setMasamosecacap3] = useState('')
  const [masamosecacap4, setMasamosecacap4] = useState('')
  const [masamosecacap5, setMasamosecacap5] = useState('')
  const [masamosecacap6, setMasamosecacap6] = useState('')
  const [masamosecacap7, setMasamosecacap7] = useState('')
  const [masamosecacap8, setMasamosecacap8] = useState('')
  const [ngolpes1, setNGolpes1] = useState('')
  const [ngolpes2, setNGolpes2] = useState('')
  const [ngolpes3, setNGolpes3] = useState('')
  const [ngolpes4, setNGolpes4] = useState('')
  const [ngolpes5, setNGolpes5] = useState('')
  const [namostra, setNAmostra] = useState('')
  const [status, setStatus] = useState('')
  const [connState, setConnState] = useState(0);
  const [text, setText] = useState('carro');
  const [habilita, setHabilita] = useState(false)
  const [checkbox1, setCheckBox1] = useState(false)
  const [np, setNP] = useState()
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


    BuscarProgramacao()


  };
  function Salvardados() {

    SalvarBanco()


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
  async function BuscarProgramacao() {

    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM Programacao where Amostra = ? ', [amostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          if (results.rows.item(0).limitesplasticidade > 0) {
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





  async function add() {
    setLoading(true)
    const obj = { amostra, namostra, caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamoumicap5, masamoumicap6, masamoumicap7, masamoumicap8, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4, masamosecacap5, masamosecacap6, masamosecacap7, masamosecacap8, ngolpes1, ngolpes2, ngolpes3, ngolpes4, ngolpes5, processo, norma, np ,login:log.login};

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarLimitesAttemberg.php', obj);
      console.log(this.api + 'SalvarLimitesAttemberg.php', obj)
      if (res.data.success === true) {
        mensagemsalvar();
        setLoading(false)
      }
    }
  };




  const gerarBanco = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists llp ( amostra text,namostra text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, caspsula5 text, caspsula6 text, caspsula7 text, caspsula8 text, masamoumicap1 text, masamoumicap2 text, masamoumicap3 text, masamoumicap4 text, masamoumicap5 text, masamoumicap6 text, masamoumicap7 text, masamoumicap8 text, masamosecacap1 text, masamosecacap2 text, masamosecacap3 text, masamosecacap4 text, masamosecacap5 text, masamosecacap6 text, masamosecacap7 text, masamosecacap8 text, ngolpes1 text, ngolpes2 text, ngolpes3 text, ngolpes4 text, ngolpes5 text, norma text, processo text, np text,checkbox BOOLEAN   );"
        );

        console.log("Banco de dados iniciado")
      });
  }

  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {
    setLoading(true)
    console.log(amostra, namostra)
    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM llp WHERE amostra = ? and namostra = ?', [amostra, namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)
            setCapsula1(results.rows.item(0).caspsula1)
          setCapsula2(results.rows.item(0).caspsula2)
          setCapsula3(results.rows.item(0).caspsula3)
          setCapsula4(results.rows.item(0).caspsula4)
          setCapsula5(results.rows.item(0).caspsula5)
          setCapsula6(results.rows.item(0).caspsula6)
          setCapsula7(results.rows.item(0).caspsula7)
          setCapsula8(results.rows.item(0).caspsula8)
          setMasamoumicap1(results.rows.item(0).masamoumicap1)
          setMasamoumicap2(results.rows.item(0).masamoumicap2)
          setMasamoumicap3(results.rows.item(0).masamoumicap3)
          setMasamoumicap4(results.rows.item(0).masamoumicap4)
          setMasamoumicap5(results.rows.item(0).masamoumicap5)
          setMasamoumicap6(results.rows.item(0).masamoumicap6)
          setMasamoumicap7(results.rows.item(0).masamoumicap7)
          setMasamoumicap8(results.rows.item(0).masamoumicap8)
          setMasamosecacap1(results.rows.item(0).masamosecacap1)
          setMasamosecacap2(results.rows.item(0).masamosecacap2)
          setMasamosecacap3(results.rows.item(0).masamosecacap3)
          setMasamosecacap4(results.rows.item(0).masamosecacap4)
          setMasamosecacap5(results.rows.item(0).masamosecacap5)
          setMasamosecacap6(results.rows.item(0).masamosecacap6)
          setMasamosecacap7(results.rows.item(0).masamosecacap7)
          setMasamosecacap8(results.rows.item(0).masamosecacap8)
          setNGolpes1(results.rows.item(0).ngolpes1)
          setNGolpes2(results.rows.item(0).ngolpes2)
          setNGolpes3(results.rows.item(0).ngolpes3)
          setNGolpes4(results.rows.item(0).ngolpes4)
          setNGolpes5(results.rows.item(0).ngolpes5)
          setNorma(results.rows.item(0).norma)
          setProcesso(results.rows.item(0).processo)
          setNP(results.rows.item(0).np)
          setCheckBox1(results.rows.item(0).checkbox)
          console.log('ok')
          console.log(results.rows)
          setLoading(false)
        } else {

          setLoading(false)
        }
      });



      setLoading(false)




    });

  };



  const SalvarBanco = () => {
    DeleteAmostra()
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into llp  (caspsula1,caspsula2,caspsula3,caspsula4,caspsula5,caspsula6,caspsula7,caspsula8,masamoumicap1,masamoumicap2,masamoumicap3,masamoumicap4,masamoumicap5,masamoumicap6,masamoumicap7,masamoumicap8,masamosecacap1,masamosecacap2,masamosecacap3,masamosecacap4,masamosecacap5,masamosecacap6,masamosecacap7,masamosecacap8,ngolpes1,ngolpes2,ngolpes3,ngolpes4,ngolpes5,processo,norma,amostra,namostra,np,checkbox) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, caspsula7, caspsula8, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamoumicap5, masamoumicap6, masamoumicap7, masamoumicap8, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4, masamosecacap5, masamosecacap6, masamosecacap7, masamosecacap8, ngolpes1, ngolpes2, ngolpes3, ngolpes4, ngolpes5, processo, norma, amostra, namostra, np, checkbox1], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (tx, resultset) => console.log('we made it', resultset)
          , (transact, err) => console.log('We have encounter an Error', err))

      },

    );
  };
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM llp WHERE amostra =? and namostra =? ', [amostra, namostra]);
      })
  }
  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS llp',
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
  
  // UseEffect
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

  useEffect(() => {
    if (checkbox1) {
      setNP("NP")
    } else {
      setNP("OK")
    }
    console.log(checkbox1,np)
  })
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

          {habilita == true ? <Text style={styles.labelcontanierll}>
            Limite de Liquidez (LL)
          </Text> : null}

          {habilita == true ? <Text style={styles.labelcontanier}>
            Cápsula Nº
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setCapsula1}
              value={caspsula1}
              keyboardType='numeric'
              placeholder="Capsula nº 1"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula2}
              value={caspsula2}
              keyboardType='numeric'
              placeholder="Capsula nº 2"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula3}
              value={caspsula3}
              keyboardType='numeric'
              placeholder="Capsula nº 3"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula4}
              value={caspsula4}
              keyboardType='numeric'
              placeholder="Capsula nº 4"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula5}
              value={caspsula5}
              keyboardType='numeric'
              placeholder="Capsula nº 5"
            />


          </View> : null}

          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa da amostra úmida + cápsula g:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>


            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap1}
              value={masamoumicap1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap2}
              value={masamoumicap2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap3}
              value={masamoumicap3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap4}
              value={masamoumicap4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap5}
              value={masamoumicap5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />


          </View> : null}

          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa da amostra seca + cápsula (g):
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap1}
              value={masamosecacap1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap2}
              value={masamosecacap2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap3}
              value={masamosecacap3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap4}
              value={masamosecacap4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap5}
              value={masamosecacap5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />


          </View> : null}
          {habilita == true ? <Text style={styles.labelcontanier}>
            Nº de golpes
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setNGolpes1}
              value={ngolpes1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Nº de golpes"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setNGolpes2}
              value={ngolpes2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Nº de golpes"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setNGolpes3}
              value={ngolpes3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Nº de golpes"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setNGolpes4}
              value={ngolpes4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Nº de golpes"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setNGolpes5}
              value={ngolpes5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Nº de golpes"
            />

          </View> : null}
          <View style={styles.containerbtnbuscar}></View>
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanierll}>
            Limite de Plasticidade (LP)
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Cápsula Nº
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula6}
              value={caspsula6}
              keyboardType='numeric'
              placeholder="Capsula nº 1"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula7}
              value={caspsula7}
              keyboardType='numeric'
              placeholder="Capsula nº 2"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setCapsula8}
              value={caspsula8}
              keyboardType='numeric'
              placeholder="Capsula nº 3"
            />
          </View> : null}
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa da amostra úmida + cápsula g:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap6}
              value={masamoumicap6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap7}
              value={masamoumicap7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap8}
              value={masamoumicap8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
          </View> : null}
          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa da amostra seca + cápsula (g):
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap6}
              value={masamosecacap6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap7}
              value={masamosecacap7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap8}
              value={masamosecacap8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />

          </View> : null}
          <View style={styles.container}>
            <BouncyCheckbox style={styles.checkbox}
              size={35}
              fillColor="red"
              text="Ensaio NP"
              ref={(ref) => (true)}
              textStyle={styles.checkboxtext}
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              value={false}
              unfillColor="transparent"
              isChecked={false}
              onPress={() => setCheckBox1(!checkbox1)}
            />

          </View>


          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.containerrow}>

            {habilita == true ? <TouchableOpacity style={styles.buttonRow}
              onPress={() => add()}

            >
              <Text style={styles.text}>Finalizar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/cloud_computer.png')} />
            </TouchableOpacity> : null}

            {habilita == true ? <TouchableOpacity style={styles.buttonRow}
              onPress={Salvardados}
            >
              <Text style={styles.text}>Salvar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/SaveIcon.png')} />
            </TouchableOpacity> : null}
          </View>


        </View>


      </ScrollView>



    </SafeAreaView>
  );
};

