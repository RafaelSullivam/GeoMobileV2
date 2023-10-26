import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"


export default function MassaEspecificaGraos() {
  const [loading, setLoading] = useState(false)
  api = Conexao.api
  const [norma, setNorma] = useState('')
  const [amostra, setAmostra] = useState('')
  const [codigo, setCodigo] = useState('')
  const [processo, setProcesso] = useState('')
  const [picnometro1, setPicnometro1] = useState('')
  const [picnometro2, setPicnometro2] = useState('')
  const [massaumidacorpoprova1, setMassaUmidaCorpoProva1] = useState('')
  const [massaumidacorpoprova2, setMassaUmidaCorpoProva2] = useState('')
  const [massapicnometrocorpoaguatraco1, setMassaPicnometroCorpoAguaTraco1] = useState('')
  const [massapicnometrocorpoaguatraco2, setMassaPicnometroCorpoAguaTraco2] = useState('')
  const [temperaturaensaio1, setTemperaturaEnsaio1] = useState('')
  const [temperaturaensaio2, setTemperaturaEnsaio2] = useState('')
  const [caspsula1, setCapsula1] = useState('')
  const [caspsula2, setCapsula2] = useState('')
  const [caspsula3, setCapsula3] = useState('')
  const [caspsula4, setCapsula4] = useState('')
  const [caspsula5, setCapsula5] = useState('')
  const [caspsula6, setCapsula6] = useState('')
  const [masamoumicap1, setMasamoumicap1] = useState('')
  const [masamoumicap2, setMasamoumicap2] = useState('')
  const [masamoumicap3, setMasamoumicap3] = useState('')
  const [masamoumicap4, setMasamoumicap4] = useState('')
  const [masamoumicap5, setMasamoumicap5] = useState('')
  const [masamoumicap6, setMasamoumicap6] = useState('')
  const [masamosecacap1, setMasamosecacap1] = useState('')
  const [masamosecacap2, setMasamosecacap2] = useState('')
  const [masamosecacap3, setMasamosecacap3] = useState('')
  const [masamosecacap4, setMasamosecacap4] = useState('')
  const [masamosecacap5, setMasamosecacap5] = useState('')
  const [masamosecacap6, setMasamosecacap6] = useState('')
  const [status, setStatus] = useState('')
  const [connState, setConnState] = useState(0);
  const [text, setText] = useState('carro');
  const [habilita, setHabilita] = useState(false)
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







  async function add() {
    setLoading(true)
    const obj = { amostra, codigo, caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamoumicap5, masamoumicap6, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4, masamosecacap5, masamosecacap6, picnometro1, picnometro2, processo, massaumidacorpoprova1, massaumidacorpoprova2, massapicnometrocorpoaguatraco1, massapicnometrocorpoaguatraco2, temperaturaensaio1, temperaturaensaio2, norma,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarMassaEspecificaGrao.php', obj);
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
          "create table if not exists massaespecificarealgrao  ( amostra text,namostra text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, caspsula5 text, caspsula6 text, masamoumicap1 text, masamoumicap2 text, masamoumicap3 text, masamoumicap4 text, masamoumicap5 text, masamoumicap6 text, masamosecacap1 text, masamosecacap2 text, masamosecacap3 text, masamosecacap4 text, masamosecacap5 text, masamosecacap6 text, picnometro1 text, picnometro2 text, processo text, massaumidacorpoprova1 text, massaumidacorpoprova2 text, massapicnometrocorpoaguatraco1 text, massapicnometrocorpoaguatraco2 text, temperaturaensaio1 text, temperaturaensaio2 text );"
        );

        (tx, results) => {
          console.log('Results', results.rowsAffected);
        }
        console.log("Banco de dados iniciado")
      });
  }
  const SalvarBanco = () => {
    DeleteAmostra()
    console.log('SALVA')
    db.transaction(
      (tx) => {

        tx.executeSql(`insert into massaespecificarealgrao  (caspsula1  , caspsula2  , caspsula3  , caspsula4  , caspsula5  , caspsula6  , masamoumicap1  , masamoumicap2  , masamoumicap3  , masamoumicap4  , masamoumicap5  , masamoumicap6  , masamosecacap1  , masamosecacap2  , masamosecacap3  , masamosecacap4  , masamosecacap5  , masamosecacap6  , picnometro1  , picnometro2  , processo  , massaumidacorpoprova1  , massaumidacorpoprova2  , massapicnometrocorpoaguatraco1  , massapicnometrocorpoaguatraco2  , temperaturaensaio1  , temperaturaensaio2  ,  amostra,namostra  )values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [caspsula1, caspsula2, caspsula3, caspsula4, caspsula5, caspsula6, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamoumicap5, masamoumicap6, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4, masamosecacap5, masamosecacap6, picnometro1, picnometro2, processo, massaumidacorpoprova1, massaumidacorpoprova2, massapicnometrocorpoaguatraco1, massapicnometrocorpoaguatraco2, temperaturaensaio1, temperaturaensaio2, amostra, codigo], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');

        }, (error) => { console.log(error) });


      }


    );
  };
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM massaespecificarealgrao WHERE amostra = ? and namostra =? ', [amostra, codigo], (tx, results) => {
          console.log('Results', results.rowsAffected);

        }, (error) => { console.log(error) }
        );
      })
    console.log('deletou')
  }
  const [flatListItems, setFlatListItems] = useState([]);
  async function BuscarProgramacao() {

    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM Programacao where Amostra = ? ', [amostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          if (results.rows.item(0).MassaVolumica > 0) {
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
  const BuscaBanco = () => {
    console.log('nao a')
    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM massaespecificarealgrao WHERE amostra = ? and namostra =? ', [amostra, codigo], (tx, results) => {
        var temp = [];
        console.log(results.rows)
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)
            console.log(results.rows)
          setCapsula1(results.rows.item(0).capsula1)
          setCapsula2(results.rows.item(0).capsula2)
          setCapsula3(results.rows.item(0).capsula3)
          setCapsula4(results.rows.item(0).capsula4)
          setCapsula5(results.rows.item(0).capsula5)
          setCapsula6(results.rows.item(0).capsula6)
          setMasamoumicap1(results.rows.item(0).masamoumicap1)
          setMasamoumicap2(results.rows.item(0).masamoumicap2)
          setMasamoumicap3(results.rows.item(0).masamoumicap3)
          setMasamoumicap4(results.rows.item(0).masamoumicap4)
          setMasamoumicap5(results.rows.item(0).masamoumicap5)
          setMasamoumicap6(results.rows.item(0).masamoumicap6)
          setMasamosecacap1(results.rows.item(0).masamosecacap1)
          setMasamosecacap2(results.rows.item(0).masamosecacap2)
          setMasamosecacap3(results.rows.item(0).masamosecacap3)
          setMasamosecacap4(results.rows.item(0).masamosecacap4)
          setMasamosecacap5(results.rows.item(0).masamosecacap5)
          setMasamosecacap6(results.rows.item(0).masamosecacap6)
          setMassaUmidaCorpoProva1(results.rows.item(0).massaumidacorpoprova1)
          setMassaUmidaCorpoProva2(results.rows.item(0).massaumidacorpoprova2)
          setMassaPicnometroCorpoAguaTraco1(results.rows.item(0).massapicnometrocorpoaguatraco1)
          setMassaPicnometroCorpoAguaTraco2(results.rows.item(0).massapicnometrocorpoaguatraco2)
          setTemperaturaEnsaio1(results.rows.item(0).temperaturaensaio1)
          setTemperaturaEnsaio2(results.rows.item(0).temperaturaensaio2)
          setPicnometro1(results.rows.item(0).picnometro1)
          setPicnometro2(results.rows.item(0).picnometro2)
          setNorma(results.rows.item(0).norma)
          setLoading(false)

        } else {
          setLoading(false)
          console.log('nao a')
        }


      });



    });

  };




  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS massaespecificarealgrao',
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


  return (


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


        <View style={styles.container1}>
          <Text style={styles.buttonNewTask}>
            Amostra:
          </Text>
          <Text style={styles.buttonNewTaskesquerda}>
            Codigo:
          </Text>

        </View>
        <View style={styles.container1}>
          <TextInput
            style={styles.inputlef2t}
            onChangeText={setAmostra}
            value={amostra}
            keyboardType='numeric'
            placeholder="Amostra"
          />
          <TextInput
            style={styles.inputlef2t}
            onChangeText={setCodigo}
            value={codigo}
            keyboardType='numeric'
            placeholder="Código"
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
        
          {habilita == true ?<Text style={styles.labelcontanier}>
            PICNÔMETRO
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setPicnometro1}
              value={picnometro1}
              keyboardType='numeric'
              placeholder="Picnômetro nº 1"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setPicnometro2}
              value={picnometro2}
              keyboardType='numeric'
              placeholder="Picnômetro nº 2"
            />

          </View> : null}
          {habilita == true ?<Text style={styles.labelcontanier}>
            MASSA ÚMIDA DO CORPO DE PROVA
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMassaUmidaCorpoProva1}
              value={massaumidacorpoprova1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="MASSA ÚMIDA DO CORPO DE PROVA"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaUmidaCorpoProva2}
              value={massaumidacorpoprova2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="MASSA ÚMIDA DO CORPO DE PROVA"
            />

          </View> : null}
          {habilita == true ?<Text style={styles.labelcontanier}>
            Cápsula Nº
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setCapsula1}
              value={caspsula1}
              keyboardType='numeric'
              placeholder="Cápsula nº1"
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
              placeholder="Cápsula nº2"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //3
              style={styles.inputleft}
              onChangeText={setCapsula3}
              value={caspsula3}
              keyboardType='numeric'
              placeholder="Cápsula nº3"
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />
            <TextInput
              //2
              style={styles.inputleft1}
            />
            <TextInput
              //4
              style={styles.inputleft}
              onChangeText={setCapsula4}
              value={caspsula4}
              keyboardType='numeric'
              placeholder="Cápsula nº4"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //4
              style={styles.inputleft}
              onChangeText={setCapsula5}
              value={caspsula5}
              keyboardType='numeric'
              placeholder="Cápsula nº5"
            />
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              //4
              style={styles.inputleft}
              onChangeText={setCapsula6}
              value={caspsula6}
              keyboardType='numeric'
              placeholder="Cápsula nº6"
            />
          </View> : null}

          <Separator1></Separator1>
          {habilita == true ?<Text style={styles.labelcontanier}>
            Massa da amostra úmida + cápsula g:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>


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
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamoumicap6}
              value={masamoumicap6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra
              úmida + cápsula"
            />
          </View> : null}

          <Separator1></Separator1>
          {habilita == true ?<Text style={styles.labelcontanier}>
            Massa da amostra seca + cápsula (g):
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

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
            <TextInput
              //2
              style={styles.inputleft1}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMasamosecacap6}
              value={masamosecacap6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa da amostra seca + cápsula"
            />
          </View> : null}
          {habilita == true ?<Text style={styles.labelcontanier}>
            MASSA DO PICNÔMETRO + CORPO DE PROVA + ÁGUA ATÉ AO TRAÇO DE REFERÊNCIA
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMassaPicnometroCorpoAguaTraco1}
              value={massapicnometrocorpoaguatraco1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="MASSA DO PICNÔMETRO + CORPO DE PROVA + ÁGUA ATÉ AO TRAÇO DE REFERÊNCIA"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaPicnometroCorpoAguaTraco2}
              value={massapicnometrocorpoaguatraco2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="MASSA DO PICNÔMETRO + CORPO DE PROVA + ÁGUA ATÉ AO TRAÇO DE REFERÊNCIA"
            />

          </View> : null}
          {habilita == true ?<Text style={styles.labelcontanier}>
            TEMPERATURA DO ENSAIO
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ?<View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setTemperaturaEnsaio1}
              value={temperaturaensaio1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Temperatura do ensaio"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setTemperaturaEnsaio2}
              value={temperaturaensaio2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Temperatura do ensaio"
            />

          </View> : null}
  
        <Separator1></Separator1>
        <Separator1></Separator1>
        <Separator1></Separator1>
        <Separator1></Separator1>
        <Separator1></Separator1>
        {habilita == true ? <View style={styles.containerrow}>
          <TouchableOpacity
            style={styles.buttonRow}
            onPress={add}
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




        </View> : null}
     
      </View>


    </ScrollView>



  );
};

