import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"


export default function TeorAgua() {
  api = Conexao.api


  const [loading, setLoading] = useState(false)
  const [amostra, setAmostra] = useState('')
  const [namostra, setNAmostra] = useState('')
  const [processo, setProcesso] = useState('')
  const [caspsula1, setCapsula1] = useState('')
  const [caspsula2, setCapsula2] = useState('')
  const [caspsula3, setCapsula3] = useState('')
  const [caspsula4, setCapsula4] = useState('')
  const [masamoumicap1, setMasamoumicap1] = useState('')
  const [masamoumicap2, setMasamoumicap2] = useState('')
  const [masamoumicap3, setMasamoumicap3] = useState('')
  const [masamoumicap4, setMasamoumicap4] = useState('')
  const [masamosecacap1, setMasamosecacap1] = useState('')
  const [masamosecacap2, setMasamosecacap2] = useState('')
  const [masamosecacap3, setMasamosecacap3] = useState('')
  const [masamosecacap4, setMasamosecacap4] = useState('')
  const [habilita, setHabilita] = useState(false)
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
  function Buscardados() {
    setHabilita(false)
    // getItem()
    BuscarProgramacao()


  };


  function Salvardados() {

    SalvarBanco()


  };





  async function getItem() {

    const res = await axios.get(this.api + 'buscarAmostra.php?amostra=' + amostra + 'namostra'+namostra );
    //setAmostra(res.data.amostra);
    setStatus(res.data.success);
    setProcesso(res.data.processo);
    setCapsula1(res.data.capsula1);
    setCapsula2(res.data.capsula2);
    setCapsula3(res.data.capsula3);
    setCapsula4(res.data.capsula4);
    setMasamoumicap1(res.data.masamoumicap1);
    setMasamoumicap2(res.data.masamoumicap2);
    setMasamoumicap3(res.data.masamoumicap3);
    setMasamoumicap4(res.data.masamoumicap4);
    setMasamosecacap1(res.data.masamosecacap1);
    setMasamosecacap2(res.data.masamosecacap2);
    setMasamosecacap3(res.data.masamosecacap3);
    setMasamosecacap4(res.data.masamosecacap4);

    console.warn(this.api + 'buscarAmostra.php?amostra=' + amostra, res.data.masamosecacap1, status)
    if (res.data.success === false) {
      falha();
    }

  };

  async function add() {
    const obj = { amostra,namostra,processo, caspsula1, caspsula2, caspsula3, caspsula4, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'editar.php', obj);
      if (res.data.success === true) {
        mensagemsalvar();

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
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists teoragua ( amostra text,namostra text, caspsula1 text, caspsula2 text, caspsula3 text, caspsula4 text, masamoumicap1 text, masamoumicap2 text, masamoumicap3 text, masamoumicap4 text, masamosecacap1 text, masamosecacap2 text, masamosecacap3 text, masamosecacap4 text);"
          );
          (tx, results) => {
            console.log('Results', results.rowsAffected);
          }
          console.log("Banco de dados iniciado")
        });
    } catch (error) {
      console.error(error);
    }
  }


  
  async function BuscarProgramacao() {
    console.log(processo)
    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM Programacao where Amostra = ?', [amostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          if (results.rows.item(0).teoragua > 0) {
            setProcesso(results.rows.item(0).Processo)
            BuscaBanco()
            console.log("update", results.rows)
          } else {
            falha()
          }
        } else {
          falha()
        }



        console.log(temp, 'ok')
      });

    });

  }
  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM teoragua WHERE amostra = ? and namostra = ? ', [amostra,namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setCapsula1(results.rows.item(0).caspsula1)
          setCapsula2(results.rows.item(0).caspsula2)
          setCapsula3(results.rows.item(0).caspsula3)
          setCapsula4(results.rows.item(0).caspsula4)
          setMasamoumicap1(results.rows.item(0).masamoumicap1)
          setMasamoumicap2(results.rows.item(0).masamoumicap2)
          setMasamoumicap3(results.rows.item(0).masamoumicap3)
          setMasamoumicap4(results.rows.item(0).masamoumicap4)
          setMasamosecacap1(results.rows.item(0).masamosecacap1)
          setMasamosecacap2(results.rows.item(0).masamosecacap2)
          setMasamosecacap3(results.rows.item(0).masamosecacap3)
          setMasamosecacap4(results.rows.item(0).masamosecacap4)
          setHabilita(true)
          console.log(temp)
        } else {
          setHabilita(true)

        }

      });
    });
  }
  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS teoragua',
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
    DeleteAmostra()
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into teoragua ( amostra,namostra , caspsula1 , caspsula2,caspsula3,caspsula4, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4  ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,? )`, [amostra,namostra, caspsula1, caspsula2, caspsula3, caspsula4, masamoumicap1, masamoumicap2, masamoumicap3, masamoumicap4, masamosecacap1, masamosecacap2, masamosecacap3, masamosecacap4], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });

      },

      // mensagemsalvaroffline()
    );
  };
 
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM teoragua WHERE amostra = ?and namostra =? ', [amostra,namostra]);
      })
  }
  // UseEffect
  useEffect(() => {
    // DeleteBancoSQlite()
    console.log(log.login)
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
          Cápsula Nº
        </Text> : null}
        <Separator1></Separator1>
        {habilita == true ? <View style={styles.container1}>

          <TextInput
            //1
            style={styles.inputleft}
            onChangeText={setCapsula1}
            value={caspsula1}
            editable={habilita}
            keyboardType='numeric'
            placeholder="Cápsula nº"
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
            placeholder="Cápsula nº"
            editable={habilita}
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
            editable={habilita}
            keyboardType='numeric'
            placeholder="Cápsula nº"
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
            editable={habilita}
            keyboardType='numeric'
            placeholder="Cápsula nº"
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
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
            editable={habilita}
            placeholder="Massa da amostra seca + cápsula"
          />
        </View> : null}

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
            onPress={SalvarBanco}
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

