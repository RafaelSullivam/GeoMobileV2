import React, { useEffect, useState, Component } from "react";
import { Button, PT, SafeAreaView, Image, Text, StyleSheet, View, Alert, ScrollView, TouchableOpacity, TextInput } from "react-native";
import styles from "./styleManutencao";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import moment from 'moment';
import * as SQLite from "expo-sqlite";
import { TextInputMask } from "react-native-masked-text";
import axios from 'axios'; // npm i axios
import Conexao from "../../Conexao/conexao";
import NetInfo from "@react-native-community/netinfo"


const TelaChamado = (props) => {


  api = Conexao.api




  const [nvUrgencia, setNvUrgencia] = useState();
  const dt = [


    { label: 'Baixo', value: 'Baixo' },
    { label: 'Medio', value: 'Medio' },
    { label: 'Alto', value: 'Alto' },

  ];








  const [statu, setStatu] = useState("Aberto");
  const [equipamentos, setEqupamento] = useState("")
  const [solicitante, setSolicitante] = useState("")
  const [telefone, setTelefone] = useState("")
  const [localizacao, setLocalizacao] = useState("")
  const [horimetro, setHorimetro] = useState("")
  const [obs, setObs] = useState("")
  const [connState, setConnState] = useState(0);



  const [datePicker, setDatePicker] = useState(false);
  const [dataSolicitacao, setDataSolicitacao] = useState(new Date());
  const [dataSolicitacao1, setDataSolicitacao1] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [horaSolicitacao, setHoraSolicitacao] = useState(new Date(Date.now()));
  const [horaSolicitacao1, setHoraSolicitacao1] = useState(new Date(Date.now()));



  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };





  const MensagemSalvarOffline = () =>
    Alert.alert(
      "                          Salvo com sucesso OffLine! ",
      ""
      [
      { text: "OK" }
      ]
    );




  const mensagemsalvar = () =>
    Alert.alert(
      "                          Salvo com sucesso na nuvem!",
      "",
      [
        {

        },
      ]
    );






















  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  };

  function onDateSelected(event, value) {
    setDataSolicitacao1(value)


    setDatePicker(false);
  };

  function onTimeSelected(event, value) {
    setHoraSolicitacao1(value);

    setTimePicker(false);
  };


  function Salvar() {
    if (connState.isConnected === true) {
      add()
    } else {

      SalvarBancoSQLite()
    }

  };


  async function add() {

    const obj = { equipamentos, solicitante, telefone, horaSolicitacao, dataSolicitacao, localizacao, horimetro, obs, nvUrgencia, statu };

    if (equipamentos !== "") {
      const res = await axios.post(this.api + 'InsertAberturaOSManutencao.php', obj);
      if (res.data.success === true) {
        mensagemsalvar();

      }
    }
  };

  // Sqlite so salva quando o app esta em offline
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
  const gerarBancoSQlite = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists ChamadosOS (Equipamento text , Solicitante text , Telefone text , Localizacao text ,  Horimetro text , Statu text , obs text      );"
        );
        console.log("Banco de dados iniciado")
      });
  };
  const SalvarBancoSQLite = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ChamadosOS ( Equipamento, Solicitante , Telefone  , Localizacao ,  Horimetro  , obs , Statu ) values ('${equipamentos}','${solicitante}','${telefone}','${localizacao}','${horimetro}' ,'${statu}'  ,'${obs}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

      },
      MensagemSalvarOffline(),

    );
  };

  const BuscaBancoSQlite = () => {

    db.transaction((tx) => {

      tx.executeSql('SELECT * FROM ChamadosOS', null, (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));

        console.log(temp)
      });

    });

  };


  let DeleteBancoSQlite1 = (furo) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DROP TABLE IF EXISTS ChamadosOS'

      );
    });
  };
  useEffect(() => {
    //getItem()

    gerarBancoSQlite()
    BuscaBancoSQlite()

  }, []);


  useEffect(() => {
    setHoraSolicitacao(moment(horaSolicitacao1).format("HH:mm"));
    console.log(horaSolicitacao)


    setDataSolicitacao(moment(dataSolicitacao1).format("DD/MM/YYYY"));
    console.log(dataSolicitacao)
    // console.log (nvUrgencia)

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
  })


  return (












    <ScrollView>

      <View style={styles.container}>
        {datePicker && (
          <DateTimePicker



            value={dataSolicitacao1}
            mode={'date'}
            dateFormat='DD/MM/AAAA'
            display={'default'}
            is24Hour={true}
            onChange={onDateSelected}


          />
        )}

        {timePicker && (
          <DateTimePicker
            value={horaSolicitacao1}
            mode={'time'}
            display={'default'}
            is24Hour={true}
            onChange={onTimeSelected}
            style={styles.datePicker}
          />
        )}

        <Text style={styles.text}>Equipamento</Text>
        <TextInput
          onChangeText={setEqupamento}
          value={equipamentos}
          style={styles.inputleft}
        ></TextInput>

        <Text style={styles.text}>Solicitante</Text>
        <TextInput
          onChangeText={setSolicitante}
          value={solicitante}
          style={styles.inputleft}
        ></TextInput>



        <Text style={styles.text}>Telefone</Text>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          onChangeText={setTelefone}
          value={telefone}
          style={styles.inputleft}

        ></TextInputMask>

        <Text style={styles.text}> Horario da solicitção </Text>
        <TouchableOpacity
          style={styles.inputleft}
          onPress={showTimePicker} >
          <Text
          //coloquei este moment pra formatar data e horario 
          > {`${horaSolicitacao1 ? moment(horaSolicitacao1).format("HH:mm") : "Please select date"}`} </Text>
        </TouchableOpacity>



        <Text style={styles.text}>Data da solicitção</Text>
        <TouchableOpacity style={styles.inputleft} onPress={showDatePicker} >
          <Text
          >  {`${dataSolicitacao1 ? moment(dataSolicitacao1).format("DD/MM/YYYY") : "Please select date"}`}</Text>
        </TouchableOpacity>


        <Text style={styles.text}>Localização</Text>
        <TextInput

          onChangeText={setLocalizacao}
          value={localizacao}
          style={styles.inputleft}


        ></TextInput>

        <Text style={styles.text}>Horimetro</Text>
        <TextInput
          onChangeText={setHorimetro}
          value={horimetro}
          style={styles.inputleft}


        ></TextInput>




        <Text style={styles.text}>Nivel de Urgência</Text>

        <Dropdown
          style={styles.inputleft}
          containerStyle={styles.shadow}
          textItem={styles.textItem}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.textItem}
          dropdownPosition="bottom"
          data={dt}
          search
          maxHeight={3000}
          labelField="label"
          valueField="value"
          placeholder=""
          searchPlaceholder="Search..."
          value={nvUrgencia}
          onChange={item => {
            setNvUrgencia(item.value);
          }}
          renderItem={item => _renderItem(item)}
          textError="Error"

        />











        <Text style={styles.text}>Descrição da Solicitção</Text>
        <TextInput

          multiline={true}
          style={styles.input1}
          onChangeText={setObs}
          value={obs}


        ></TextInput>




        <Text style={styles.text}></Text>
        <TouchableOpacity style={styles.button}
          onPress={() => Salvar()}


        >
          <Text style={styles.text}>Abrir chamado </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>


  );











};


export default TelaChamado;