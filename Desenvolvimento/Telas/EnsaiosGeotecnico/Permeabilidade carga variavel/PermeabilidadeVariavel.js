import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, Switch, SafeAreaView, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./stylevariavel";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { TextInputMask } from 'react-native-masked-text'
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";
import log from "../../../Variaveis Globais/variaveisGlobais"

export default function PermeabilidadeVariavel({ route, navigation }) {
  api = Conexao.api
  const [amostra, setAmostra] = useState('')
  const [namostra, setNAmostra] = useState('')
  const [processo, setProcesso] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentHora, setCurrentHora] = useState('');
  const [loading, setLoading] = useState(false);
  const [habilita, setHabilita] = useState(true)
  const [altinicial, setAltInicial] = useState('');
  const [diaminicial, setDiamInicial] = useState('');
  const [massaumida, setMassaUmida] = useState('');
  const [massaseca, setMassaSeca] = useState('');
  const [tempensaio, setTempEnsaio] = useState('');
  const [cargahidraulica, setCargaHidraulica] = useState('');
  const [tensaoconfinamento, setTensaoConfinamento] = useState('');
  const [alturafinal, setAlturaFinal] = useState('');
  const [diamfinal, setDiamFinal] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');
  const [data6, setData6] = useState('');
  const [data7, setData7] = useState('');
  const [data8, setData8] = useState('');
  const [data9, setData9] = useState('');
  const [data10, setData10] = useState('');
  const [data11, setData11] = useState('');
  const [data12, setData12] = useState('');
  const [data13, setData13] = useState('');
  const [data14, setData14] = useState('');
  const [hora1, setHora1] = useState('');
  const [hora2, setHora2] = useState('');
  const [hora3, setHora3] = useState('');
  const [hora4, setHora4] = useState('');
  const [hora5, setHora5] = useState('');
  const [hora6, setHora6] = useState('');
  const [hora7, setHora7] = useState('');
  const [hora8, setHora8] = useState('');
  const [hora9, setHora9] = useState('');
  const [hora10, setHora10] = useState('');
  const [hora11, setHora11] = useState('');
  const [hora12, setHora12] = useState('');
  const [hora13, setHora13] = useState('');
  const [hora14, setHora14] = useState('');
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [valor4, setValor4] = useState('');
  const [valor5, setValor5] = useState('');
  const [valor6, setValor6] = useState('');
  const [valor7, setValor7] = useState('');
  const [valor8, setValor8] = useState('');
  const [valor9, setValor9] = useState('');
  const [valor10, setValor10] = useState('');
  const [valor11, setValor11] = useState('');
  const [valor12, setValor12] = useState('');
  const [valor13, setValor13] = useState('');
  const [valor14, setValor14] = useState('');
  const [valo1, setValo1] = useState('');
  const [valo2, setValo2] = useState('');
  const [valo3, setValo3] = useState('');
  const [valo4, setValo4] = useState('');
  const [valo5, setValo5] = useState('');
  const [valo6, setValo6] = useState('');
  const [valo7, setValo7] = useState('');
  const [valo8, setValo8] = useState('');
  const [valo9, setValo9] = useState('');
  const [valo10, setValo10] = useState('');
  const [valo11, setValo11] = useState('');
  const [valo12, setValo12] = useState('');
  const [valo13, setValo13] = useState('');
  const [valo14, setValo14] = useState('');
  const [h1, setH1] = useState('');
  const [h2, setH2] = useState('');
  const [h3, setH3] = useState('');
  const [h4, setH4] = useState('');
  const [h5, setH5] = useState('');
  const [h6, setH6] = useState('');
  const [h7, setH7] = useState('');
  const [h8, setH8] = useState('');
  const [h9, setH9] = useState('');
  const [h10, setH10] = useState('');
  const [h11, setH11] = useState('');
  const [h12, setH12] = useState('');
  const [h13, setH13] = useState('');
  const [h14, setH14] = useState('');

  const [isEnabled, setIsEnabled] = useState(true);


  const [connState, setConnState] = useState(0);
  const [status, setStatus] = useState('')
  const [ensaio, setEnsaio] = useState()
  const [energiacomp, setEnergiacomp] = useState('')
  const [aux0, setAux0] = useState('')
  const [aux1, setAux1] = useState(Boolean)


  const Separator1 = () => (
    <View style={styles.separator1} />
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
        { text: "OK", onPress: () => Confirmasalvar() }
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

    SalvarBanco()

  };
  function Buscardados() {

    setLoading(true)
    BuscarProgramacao()


  };


  async function add() {

    const obj = { amostra, altinicial, alturafinal, diaminicial, diamfinal, massaumida, massaseca, tempensaio, tensaoconfinamento, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, hora1, hora2, hora3, hora4, hora5, hora6, hora7, hora8, hora9, hora10, hora11, hora12, hora13, hora14, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, valor11, valor12, valor13, valor14, valo1, valo2, valo3, valo4, valo5, valo6, valo7, valo8, valo9, valo10, valo11, valo12, valo13, valo14, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14,login:log.login };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarPermeabilidadeVariavel.php', obj);
      console.warn(this.api + 'SalvarPermeabilidadeVariavel.php?amostra=' + amostra, obj)
      if (res.data.success === true) {
        Confirmasalvar()
        setLoading(false)
      } else {
        setLoading(false)
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
          "create table if not exists CBRExpansaoVariavel ( amostra text, namostra text, altinicial text, alturafinal text, diaminicial text, diamfinal text, massaumida text, massaseca text, tempensaio text, tensaoconfinamento text, data1 text, data2 text, data3 text, data4 text, data5 text, data6 text, data7 text, data8 text, data9 text, data10 text, data11 text, data12 text, data13 text, data14 text, hora1 text, hora2 text, hora3 text, hora4 text, hora5 text, hora6 text, hora7 text, hora8 text, hora9 text, hora10 text, hora11 text, hora12 text, hora13 text, hora14 text, valor1 text, valor2 text, valor3 text, valor4 text, valor5 text, valor6 text, valor7 text, valor8 text, valor9 text, valor10 text, valor11 text, valor12 text, valor13 text, valor14 text, valo1 text, valo2 text, valo3 text, valo4 text, valo5 text, valo6 text, valo7 text, valo8 text, valo9 text, valo10 text, valo11 text, valo12 text, valo13 text, valo14 text);"
        );

        console.log("Banco de dados iniciado")
      });
  }
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
  const SalvarBanco = () => {
    DeleteAmostra()
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CBRExpansaoVariavel ( amostra,namostra , altinicial,alturafinal, diaminicial,diamfinal, massaumida, massaseca, tempensaio, tensaoconfinamento, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, hora1, hora2, hora3, hora4, hora5, hora6, hora7, hora8, hora9, hora10, hora11, hora12, hora13, hora14, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, valor11, valor12, valor13, valor14, valo1, valo2, valo3, valo4, valo5, valo6, valo7, valo8, valo9, valo10, valo11, valo12, valo13, valo14  ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )`, [amostra, namostra, altinicial, alturafinal, diaminicial, diamfinal, massaumida, massaseca, tempensaio, tensaoconfinamento, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, hora1, hora2, hora3, hora4, hora5, hora6, hora7, hora8, hora9, hora10, hora11, hora12, hora13, hora14, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, valor11, valor12, valor13, valor14, valo1, valo2, valo3, valo4, valo5, valo6, valo7, valo8, valo9, valo10, valo11, valo12, valo13, valo14], (tx, results) => {
          console.log('Results', results.rows);
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
        tx.executeSql('DELETE FROM CBRExpansaoVariavel WHERE amostra =? and namostra =? ', [amostra, namostra]);
      })
  }
  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {
    setLoading(true)
    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM CBRExpansaoVariavel WHERE amostra =? and namostra =? ', [amostra, namostra],
        (tx, results) => {
          var temp = [];
          console.log(results.rows)
          if (results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; ++i)
              setAltInicial(results.rows.item(0).altinicial)
            setAlturaFinal(results.rows.item(0).alturafinal)
            setDiamInicial(results.rows.item(0).diaminicial)
            setDiamFinal(results.rows.item(0).diamfinal)
            setMassaUmida(results.rows.item(0).massaumida)
            setMassaSeca(results.rows.item(0).massaseca)
            setTempEnsaio(results.rows.item(0).tempensaio)
            setTensaoConfinamento(results.rows.item(0).tensaoconfinamento)
            setData1(results.rows.item(0).data1)
            setData2(results.rows.item(0).data2)
            setData3(results.rows.item(0).data3)
            setData4(results.rows.item(0).data4)
            setData5(results.rows.item(0).data5)
            setData6(results.rows.item(0).data6)
            setData7(results.rows.item(0).data7)
            setData8(results.rows.item(0).data8)
            setData9(results.rows.item(0).data9)
            setData10(results.rows.item(0).data10)
            setData11(results.rows.item(0).data11)
            setData12(results.rows.item(0).data12)
            setData13(results.rows.item(0).data13)
            setData14(results.rows.item(0).data14)
            setHora1(results.rows.item(0).hora1)
            setHora2(results.rows.item(0).hora2)
            setHora3(results.rows.item(0).hora3)
            setHora4(results.rows.item(0).hora4)
            setHora5(results.rows.item(0).hora5)
            setHora6(results.rows.item(0).hora6)
            setHora7(results.rows.item(0).hora7)
            setHora8(results.rows.item(0).hora8)
            setHora9(results.rows.item(0).hora9)
            setHora10(results.rows.item(0).hora10)
            setHora11(results.rows.item(0).hora11)
            setHora12(results.rows.item(0).hora12)
            setHora13(results.rows.item(0).hora13)
            setHora14(results.rows.item(0).hora14)
            setValor1(results.rows.item(0).valor1)
            setValor2(results.rows.item(0).valor2)
            setValor3(results.rows.item(0).valor3)
            setValor4(results.rows.item(0).valor4)
            setValor5(results.rows.item(0).valor5)
            setValor6(results.rows.item(0).valor6)
            setValor7(results.rows.item(0).valor7)
            setValor8(results.rows.item(0).valor8)
            setValor9(results.rows.item(0).valor9)
            setValor10(results.rows.item(0).valor10)
            setValor11(results.rows.item(0).valor11)
            setValor12(results.rows.item(0).valor12)
            setValor13(results.rows.item(0).valor13)
            setValor14(results.rows.item(0).valor14)
            setValo1(results.rows.item(0).valo1)
            setValo2(results.rows.item(0).valo2)
            setValo3(results.rows.item(0).valo3)
            setValo4(results.rows.item(0).valo4)
            setValo5(results.rows.item(0).valo5)
            setValo6(results.rows.item(0).valo6)
            setValo7(results.rows.item(0).valo7)
            setValo8(results.rows.item(0).valo8)
            setValo9(results.rows.item(0).valo9)
            setValo10(results.rows.item(0).valo10)
            setValo11(results.rows.item(0).valo11)
            setValo12(results.rows.item(0).valo12)
            setValo13(results.rows.item(0).valo13)
            setValo14(results.rows.item(0).valo14)




            setLoading(false)

          } else {

            setLoading(false)
          }
        });



    });

  };


  // })
  // useEffect(() => {
  useEffect(() => {
    //getItem()
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
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var seg = new Date().getSeconds();
    setCurrentDate(
      date + '/' + month + '/' + year
    );
    setCurrentHora(
      hours + ':' + min + ':' + seg
    );
    return () => {
      unsubscribe();
    };
  }, []);


  useEffect(() => {


  })




  return (

    <SafeAreaView>
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
          <Separator1></Separator1>
          <View style={styles.container1}>

            <Text style={styles.labelcontaniercbr}>
              Altura inicial (cm):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              Diâmetro inicial (cm):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              Massa úmida (g):
            </Text>

          </View>
          <Separator1></Separator1>
          <View style={styles.container1cbr}>

            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setAltInicial}
              value={altinicial}
              keyboardType='numeric'
              placeholder="Altura inicial (cm):"

            />
            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setDiamInicial}
              value={diaminicial}
              keyboardType='numeric'
              placeholder=" Diâmetro inicial (cm):"

            />
            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setMassaUmida}
              value={massaumida}
              keyboardType='numeric'
              placeholder="Massa úmida (g):"

            />

          </View>
          <View style={styles.container1}>
            <Text style={styles.labelcontaniercbr}>
              Massa seca(g):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              Temperatura do ensaio (ºC):
            </Text>
            {/* <Text style={styles.labelcontaniercbr}>
              Carga hidráulica (KPa):
            </Text> */}
            <Text style={styles.labelcontaniercbr}>
              Tensão de confinamento (KPa):
            </Text>

          </View>

          <Separator1></Separator1>
          <View style={styles.container1cbr}>

            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setMassaSeca}
              value={massaseca}
              keyboardType='numeric'
              placeholder="  Massa seca(g):"

            />
            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setTempEnsaio}
              value={tempensaio}
              keyboardType='numeric'
              placeholder="   Temperatura do ensaio (ºC):"

            />

            <TextInput
              //1
              style={styles.inputleftcbr1}
              onChangeText={setTensaoConfinamento}
              value={tensaoconfinamento}
              keyboardType='numeric'
              placeholder="Tensão de confinamento (KPa):"

            />
          </View>
          <View style={styles.container1}>
            {/* <Text style={styles.labelcontaniercbr}>
              Tensão de confinamento (KPa):
            </Text> */}
            <Text style={styles.labelcontaniercbr1}>
              Altura final(cm):
            </Text>
            <Text style={styles.labelcontaniercbr2}>
              Diâmetro final (cm):
            </Text>
          </View>

          <Separator1></Separator1>
          <View style={styles.container1cbr}>


            <TextInput
              //1
              style={styles.inputleftcbr2}
              onChangeText={setAlturaFinal}
              value={alturafinal}
              keyboardType='numeric'
              placeholder="Altura final(cm):"

            />
            <TextInput
              //1
              style={styles.inputleftcbr2}
              onChangeText={setDiamFinal}
              value={diamfinal}
              keyboardType='numeric'
              placeholder="Diâmetro final (cm):"

            />

          </View>

          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>
            <Text style={styles.labelcontaniercbr}>
              t1 (dd:mm:aaaa):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              t2 (hh:mm):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              H1 / H2 (cm):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              V1 / V2 (cm3):
            </Text>
            <Text style={styles.labelcontaniercbr}>
              V3 / V4 (cm3):
            </Text>

          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData1}
              value={data1}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora1}
              value={hora1}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH1}
              value={h1.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor1}
              value={valor1.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo1}
              value={valo1.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />

          </View>
          <Separator1></Separator1>

          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData2}
              value={data2}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora2}
              value={hora2}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH2}
              value={h2.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor2}
              value={valor2.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo2}
              value={valo2.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData3}
              value={data3}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora3}
              value={hora3}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH3}
              value={h3.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor3}
              value={valor3.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo3}
              value={valo3.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>

          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData4}
              value={data4}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora4}
              value={hora4}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH4}
              value={h4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor4}
              value={valor4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo4}
              value={valo4.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Vf"
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData5}
              value={data5}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora5}
              value={hora5}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH5}
              value={h5.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor5}
              value={valor5.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo5}
              value={valo5.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData6}
              value={data6}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora6}
              value={hora6}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH6}
              value={h6.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor6}
              value={valor6.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo6}
              value={valo6.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
          </View>




          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>

          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData7}
              value={data7}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora7}
              value={hora7}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH7}
              value={h7.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor7}
              value={valor7.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo7}
              value={valo7.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>

          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData8}
              value={data8}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora8}
              value={hora8}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH8}
              value={h8.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor8}
              value={valor8.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo8}
              value={valo8.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData9}
              value={data9}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora9}
              value={hora9}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH9}
              value={h9.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor9}
              value={valor9.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo9}
              value={valo9.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>

          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData10}
              value={data10}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora10}
              value={hora10}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH10}
              value={h10.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor10}
              value={valor10.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo10}
              value={valo10.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData11}
              value={data11}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora11}
              value={hora11}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH11}
              value={h11.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor11}
              value={valor11.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo11}
              value={valo11.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData12}
              value={data12}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora12}
              value={hora12}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH12}
              value={h12.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor12}
              value={valor12.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo12}
              value={valo12.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData13}
              value={data13}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora13}
              value={hora13}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH13}
              value={h13.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor13}
              value={valor13.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo13}
              value={valo13.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vi"
            />
          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setData14}
              value={data14}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm:mm'
              }}
              onChangeText={setHora14}
              value={hora14}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}

              onChangeText={setH14}
              value={h14.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="H2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValor14}
              value={valor14.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setValo14}
              value={valo14.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Vf"
            />
          </View>





          <Separator1></Separator1>
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

