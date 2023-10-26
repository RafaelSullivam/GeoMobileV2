import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"


export default function DeterminacaoMassaEspecificaAparente() {
  const [loading, setLoading] = useState(false)
  api = Conexao.api
  const [norma, setNorma] = useState('')
  const [amostra, setAmostra] = useState('')
  const [namostra, setNAmostra] = useState('')
  const [processo, setProcesso] = useState('')

  const [massaumidacorpoprova1, setMassaUmidaCorpoProva1] = useState('')
  const [massaumidacorpoprova2, setMassaUmidaCorpoProva2] = useState('')
  const [massaumidacorpoprova3, setMassaUmidaCorpoProva3] = useState('')

  const [massacorpoprovaparafinado1, setMassaCorpoProvaParafinado1] = useState('')
  const [massacorpoprovaparafinado2, setMassaCorpoProvaParafinado2] = useState('')
  const [massacorpoprovaparafinado3, setMassaCorpoProvaParafinado3] = useState('')

  const [massacorpoprovasubmerso1, setMassaCorpoProvaSubmerso1] = useState('')
  const [massacorpoprovasubmerso2, setMassaCorpoProvaSubmerso2] = useState('')
  const [massacorpoprovasubmerso3, setMassaCorpoProvaSubmerso3] = useState('')

  const [caspsula1, setCapsula1] = useState('')
  const [caspsula2, setCapsula2] = useState('')
  const [caspsula3, setCapsula3] = useState('')

  const [masamoumicap1, setMasamoumicap1] = useState('')
  const [masamoumicap2, setMasamoumicap2] = useState('')
  const [masamoumicap3, setMasamoumicap3] = useState('')

  const [masamosecacap1, setMasamosecacap1] = useState('')
  const [masamosecacap2, setMasamosecacap2] = useState('')
  const [masamosecacap3, setMasamosecacap3] = useState('')

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
    setHabilita(true)
    // getItem()
    BuscarProgramacao()


  };


  // function Buscardados() {
  //   if (connState.isConnected === true) {
  //     setHabilita(false)
  //     //getItem()
  //   } else {

  //    // BuscaBanco()
  //   }

  // };



  // function Salvardados() {
  //   if (connState.isConnected === true) {
  //     add()
  //   } else {
  //     SalvarBanco()
  //   }

  // };





  async function getItem() {

    const res = await axios.get(this.api + 'BuscarDeterminacaoMassaEspecificaAparente.php?amostra=' + amostra + 'namostra' + namostra);
    //setAmostra(res.data.amostra);
    setStatus(res.data.success);
    setProcesso(res.data.processo);

    setCapsula1(res.data.capsula1);
    setCapsula2(res.data.capsula2);
    setCapsula3(res.data.capsula3);

    setMasamoumicap1(res.data.masamoumicap1);
    setMasamoumicap2(res.data.masamoumicap2);
    setMasamoumicap3(res.data.masamoumicap3);

    setMasamosecacap1(res.data.masamosecacap1);
    setMasamosecacap2(res.data.masamosecacap2);
    setMasamosecacap3(res.data.masamosecacap3);

    setMassaUmidaCorpoProva1(res.data.massaumidacorpoprova1);
    setMassaUmidaCorpoProva2(res.data.massaumidacorpoprova2);
    setMassaUmidaCorpoProva3(res.data.massaumidacorpoprova3);

    setMassaCorpoProvaParafinado1(res.data.massacorpoprovaparafinado1);
    setMassaCorpoProvaParafinado2(res.data.massacorpoprovaparafinado2);
    setMassaCorpoProvaParafinado3(res.data.massacorpoprovaparafinado3);

    setMassaCorpoProvaSubmerso1(res.data.massacorpoprovasubmerso1);
    setMassaCorpoProvaSubmerso2(res.data.massacorpoprovasubmerso2);
    setMassaCorpoProvaSubmerso3(res.data.massacorpoprovasubmerso3);

    // setNorma(res.data.norma);
    console.warn(this.api + 'BuscarDeterminacaoMassaEspecificaAparente.php?amostra=' + amostra, res.data.masamosecacap1, status)
    if (res.data.success === false) {

      falha();
    } else {

    }
  };









  async function add() {

    const obj = { amostra, namostra, processo, caspsula1, caspsula2, caspsula3, masamoumicap1, masamoumicap2, masamoumicap3, masamosecacap1, masamosecacap2, masamosecacap3, massaumidacorpoprova1, massaumidacorpoprova2, massaumidacorpoprova3, massacorpoprovaparafinado1, massacorpoprovaparafinado2, massacorpoprovaparafinado3, massacorpoprovasubmerso1, massacorpoprovasubmerso2, massacorpoprovasubmerso3,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarDeterminacaoMassaEspecificaAparente.php', obj);
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






  async function BuscarProgramacao() {
    
    db.transaction((tx) => {
      console.log('processo -->',processo)
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


       
        console.log(temp , 'ok')
      });

    });

  }



  const [flatListItems, setFlatListItems] = useState([]);


  const BuscaBanco = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM DeterminacaoMassaEspecificaAparente WHERE  amostra = ? and namostra = ? ', [amostra, namostra], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setCapsula1(results.rows.item(0).caspsula1)
          setCapsula2(results.rows.item(0).caspsula2)
          setCapsula3(results.rows.item(0).caspsula3)

          setMasamoumicap1(results.rows.item(0).masamoumicap1);
          setMasamoumicap2(results.rows.item(0).masamoumicap2);
          setMasamoumicap3(results.rows.item(0).masamoumicap3);

          setMasamosecacap1(results.rows.item(0).masamosecacap1);
          setMasamosecacap2(results.rows.item(0).masamosecacap2);
          setMasamosecacap3(results.rows.item(0).masamosecacap3);

          setMassaUmidaCorpoProva1(results.rows.item(0).massaumidacorpoprova1);
          setMassaUmidaCorpoProva2(results.rows.item(0).massaumidacorpoprova2);
          setMassaUmidaCorpoProva3(results.rows.item(0).massaumidacorpoprova3);

          setMassaCorpoProvaParafinado1(results.rows.item(0).massacorpoprovaparafinado1);
          setMassaCorpoProvaParafinado2(results.rows.item(0).massacorpoprovaparafinado2);
          setMassaCorpoProvaParafinado3(results.rows.item(0).massacorpoprovaparafinado3);

          setMassaCorpoProvaSubmerso1(results.rows.item(0).massacorpoprovasubmerso1);
          setMassaCorpoProvaSubmerso2(results.rows.item(0).massacorpoprovasubmerso2);
          setMassaCorpoProvaSubmerso3(results.rows.item(0).massacorpoprovasubmerso3);

          setHabilita(true)
          console.log(temp)
        } else {
          setHabilita(true)

        }

      });
    });
  }


  const BuscaBanco5 = () => {

    db.transaction((tx) => {
      try {
        tx.executeSql('SELECT * FROM DeterminacaoMassaEspecificaAparente WHERE amostra = ?', [amostra],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var usercapsula1 = results.rows.item(0).capsula1
              var usercapsula2 = results.rows.item(0).capsula2
              var usercapsula3 = results.rows.item(0).capsula3

              var usermasamoumicap1 = results.rows.item(0).masamoumicap1
              var usermasamoumicap2 = results.rows.item(0).masamoumicap2
              var usermasamoumicap3 = results.rows.item(0).masamoumicap3

              var usermasamosecacap1 = results.rows.item(0).masamosecacap1
              var usermasamosecacap2 = results.rows.item(0).masamosecacap2
              var usermasamosecacap3 = results.rows.item(0).masamosecacap3

              var usermassaumidacorpoprova1 = results.rows.item(0).massaumidacorpoprova1
              var usermassaumidacorpoprova2 = results.rows.item(0).massaumidacorpoprova2
              var usermassaumidacorpoprova3 = results.rows.item(0).massaumidacorpoprova3

              var usermassacorpoprovaparafinado1 = results.rows.item(0).massacorpoprovaparafinado1
              var usermassacorpoprovaparafinado2 = results.rows.item(0).massacorpoprovaparafinado2
              var usermassacorpoprovaparafinado3 = results.rows.item(0).massacorpoprovaparafinado3

              var usermassacorpoprovasubmerso1 = results.rows.item(0).massacorpoprovasubmerso1
              var usermassacorpoprovasubmerso2 = results.rows.item(0).massacorpoprovasubmerso2
              var usermassacorpoprovasubmerso3 = results.rows.item(0).massacorpoprovasubmerso3

              setCapsula1(usercapsula1);
              setCapsula2(usercapsula2);
              setCapsula3(usercapsula3);

              setMasamoumicap1(usermasamoumicap1);
              setMasamoumicap2(usermasamoumicap2);
              setMasamoumicap3(usermasamoumicap3);

              setMasamosecacap1(usermasamosecacap1);
              setMasamosecacap2(usermasamosecacap2);
              setMasamosecacap3(usermasamosecacap3);

              setMassaUmidaCorpoProva1(usermassaumidacorpoprova1);
              setMassaUmidaCorpoProva2(usermassaumidacorpoprova2);
              setMassaUmidaCorpoProva3(usermassaumidacorpoprova3);

              setMassaCorpoProvaParafinado1(usermassacorpoprovaparafinado1);
              setMassaCorpoProvaParafinado2(usermassacorpoprovaparafinado2);
              setMassaCorpoProvaParafinado3(usermassacorpoprovaparafinado3);

              setMassaCorpoProvaSubmerso1(usermassacorpoprovasubmerso1);
              setMassaCorpoProvaSubmerso2(usermassacorpoprovasubmerso2);
              setMassaCorpoProvaSubmerso3(usermassacorpoprovasubmerso3);
              setHabilita(true)
              console.log(results.rows.item(0))


            } else {
              setHabilita(true)

            }
          });
      } catch (error) {
        console.log(error)
      }
    });
  };



  //1


  const SalvarBanco = () => {
    DeleteAmostra()
    db.transaction(
      (tx) => {

        tx.executeSql(` insert into DeterminacaoMassaEspecificaAparente ( amostra ,namostra , caspsula1 , caspsula2 , caspsula3 , masamoumicap1 , masamoumicap2 , masamoumicap3 , masamosecacap1 , masamosecacap2 , masamosecacap3 , massaumidacorpoprova1 , massaumidacorpoprova2 , massaumidacorpoprova3 , massacorpoprovaparafinado1 , massacorpoprovaparafinado2 , massacorpoprovaparafinado3 , massacorpoprovasubmerso1 , massacorpoprovasubmerso2 , massacorpoprovasubmerso3 ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) `, [amostra, namostra, caspsula1, caspsula2, caspsula3, masamoumicap1, masamoumicap2, masamoumicap3, masamosecacap1, masamosecacap2, masamosecacap3, massaumidacorpoprova1, massaumidacorpoprova2, massaumidacorpoprova3, massacorpoprovaparafinado1, massacorpoprovaparafinado2, massacorpoprovaparafinado3, massacorpoprovasubmerso1, massacorpoprovasubmerso2, massacorpoprovasubmerso3], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log('Registration Failed', error) });

      },

      // mensagemsalvaroffline()
    );
  };

  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM teoragua WHERE amostra = ?and namostra =? ', [amostra, namostra]);
      })
  }





  const gerarBanco = () => {  
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists DeterminacaoMassaEspecificaAparente ( amostra text, namostra text, caspsula1 text, caspsula2 text, caspsula3 text, masamoumicap1 text, masamoumicap2 text, masamoumicap3 text, masamosecacap1 text, masamosecacap2 text, masamosecacap3 text, massaumidacorpoprova1 text, massaumidacorpoprova2 text, massaumidacorpoprova3 text, massacorpoprovaparafinado1 text, massacorpoprovaparafinado2 text, massacorpoprovaparafinado3 text, massacorpoprovasubmerso1 text, massacorpoprovasubmerso2 text, massacorpoprovasubmerso3 text);"
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







 const Finalizar1 = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM DeterminacaoMassaEspecificaAparente where amostra = ?', [amostra], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
           
                add1(temp); // Chame a função add1 passando a lista temp
                console.log(temp, 'ok')
            });
        });
    };

    async function add1(lista) {
        const results = []

        for (let i = 0; i < lista.length; ++i) {
            results.push(
                Salvar(lista[i].amostra, lista[i].caspsula1, lista[i].caspsula2, lista[i].caspsula3, lista[i].masamoumicap1, lista[i].masamoumicap2, lista[i].masamoumicap3, lista[i].masamosecacap1, lista[i].masamosecacap2, lista[i].masamosecacap3, lista[i].massaumidacorpoprova1, lista[i].massaumidacorpoprova2 , lista[i].massaumidacorpoprova3 , lista[i].massacorpoprovaparafinado1 , lista[i].massacorpoprovaparafinado2 , lista[i].massacorpoprovaparafinado3 , lista[i].massacorpoprovasubmerso1 , lista[i].massacorpoprovasubmerso2 , lista[i].massacorpoprovasubmerso3)
            );
        }

        // Aguardar todas as chamadas de API terminarem, se necessário
        await Promise.all(results);
    }

    async function Salvar(amostra, caspsula1, caspsula2, caspsula3, masamoumicap1, masamoumicap2, masamoumicap3 ,masamosecacap1,masamosecacap2, masamosecacap3 , massaumidacorpoprova1 , massaumidacorpoprova2 , massaumidacorpoprova3 , massacorpoprovaparafinado1 , massacorpoprovaparafinado2 , massacorpoprovaparafinado3 , massacorpoprovasubmerso1 , massacorpoprovasubmerso2 , massacorpoprovasubmerso3  ) {
        const obj = { amostra, caspsula1, caspsula2, caspsula3, masamoumicap1, masamoumicap2, masamoumicap3 ,masamosecacap1,masamosecacap2, masamosecacap3 , massaumidacorpoprova1 , massaumidacorpoprova2 , massaumidacorpoprova3 , massacorpoprovaparafinado1 , massacorpoprovaparafinado2 , massacorpoprovaparafinado3 , massacorpoprovasubmerso1 , massacorpoprovasubmerso2 , massacorpoprovasubmerso3 };

        try {
            const res = await axios.post(api + 'SalvarDeterminacaoMassaEspecificaAparente.php', obj);
            if (res.data.success === true) {
                console.log("Amostra  Salva");
            }
        } catch (error) {
            console.error("Erro ao salvar Amostra:", error);
        }
    }













  let DeleteBancoSQlite = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'DROP TABLE IF EXISTS  DeterminacaoMassaEspecificaAparente ',
            console.log('Banco Deletado')

        );

    });
};
 

 

  // UseEffect
  useEffect(() => {


    // DeleteBancoSQlite() 
    // gerarBanco()
    // NetInfo.fetch().then(state => {
    //   setConnState(state);
    //   console.log("Tipo de conexão", state.type);
    //   console.log("Está conectado?", state.isConnected);
    // });

    // const unsubscribe = NetInfo.addEventListener(state => {
    //   setConnState(state);
    //   console.log("Tipo de conexão", state.type);
    //   console.log("Está conectado?", state.isConnected);
    // });

    // return () => {
    //   unsubscribe();
    // };




  }, []);


  return (
    <SafeAreaView>

      <ScrollView >
        <View style={styles.container}>
          {/* 
          {loading == true ? <Modal onRequestClose={() => null} visible={true}>
            <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                <ActivityIndicator size="large" />
              </View>
            </View>
          </Modal>
            : <Text />} */}

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

          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa húmida do corpo de prova:
          </Text> : null}

          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMassaUmidaCorpoProva1}
              value={massaumidacorpoprova1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa húmida do corpo de prova"
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
              placeholder="Massa húmida do corpo de prova"
            />
            <TextInput
              //separdor
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaUmidaCorpoProva3}
              value={massaumidacorpoprova3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa húmida do corpo de prova"
            />

          </View> : null}


          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa do corpo de prova parafinado:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaParafinado1}
              value={massacorpoprovaparafinado1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova parafinado"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaParafinado2}
              value={massacorpoprovaparafinado2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova parafinado"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              //3
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaParafinado3}
              value={massacorpoprovaparafinado3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova parafinado"
            />
          </View> : null}







          <Separator1></Separator1>
          {habilita == true ? <Text style={styles.labelcontanier}>
            Massa do corpo de prova submerso
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>


            <TextInput
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaSubmerso1}
              value={massacorpoprovasubmerso1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova submerso"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaSubmerso2}
              value={massacorpoprovasubmerso2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova submerso"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setMassaCorpoProvaSubmerso3}
              value={massacorpoprovasubmerso3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Massa do corpo de prova submerso"
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
              onChangeText={setCapsula1}
              value={caspsula1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula2}
              value={caspsula2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}

            />
            <TextInput
              style={styles.inputleft}
              onChangeText={setCapsula3}
              value={caspsula3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Cápsula"
            />


          </View> : null}
          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra umida + cápsula:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMasamoumicap1}
              value={masamoumicap1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra umida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMasamoumicap2}
              value={masamoumicap2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra umida + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />
            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMasamoumicap3}
              value={masamoumicap3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra umida + cápsula"
            />
          </View> : null}




          {habilita == true ? <Text style={styles.labelcontanier}>
            Amostra seca + cápsula:
          </Text> : null}
          <Separator1></Separator1>
          {habilita == true ? <View style={styles.container1}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setMasamosecacap1}
              value={masamosecacap1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMasamosecacap2}
              value={masamosecacap2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra seca + cápsula"
            />
            <TextInput
              //2
              style={styles.inputleft2}
            />

            <TextInput
              //2
              style={styles.inputleft}
              onChangeText={setMasamosecacap3}
              value={masamosecacap3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Amostra seca + cápsula"
            />

          </View> : null}



          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>



          <View style={styles.containerrow}>

            {habilita == true ? <TouchableOpacity style={styles.buttonRow}
              onPress={() => Finalizar1()}

            >
              <Text style={styles.text}>Finalizar</Text>
              <View style={styles.buttonIconSeparatorStyle} />
              <Image style={styles.buttonImageIconStyle}
                source={require('../../../../assets/cloud_computer.png')} />
            </TouchableOpacity> : null}


            {habilita == true ? <TouchableOpacity
              style={styles.buttonRow}
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



    </SafeAreaView>
  );
};

