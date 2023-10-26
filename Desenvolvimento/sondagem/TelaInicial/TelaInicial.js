import React, { useRef, useState,useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import styles from "./styleSondagem";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios'; // npm i axios
import Conexao from "../../Conexao/conexao";
import * as SQLite from "expo-sqlite";

import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'

export default function TelaInicialSondagem() {
  api = Conexao.api
  const [lista, setLista] = useState([]);
const [data1, setData1] = useState([]); //useState([]) é o valor inicial do data
  const [equipamento, setEqupamento] = useState();
  const[result, setResult] = useState(); 
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },

  ];
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);
  const [proceso, setProceso] = useState('');

  async function getItem() {
    const res = await axios.get(api + 'BuscarTelaInicialSondagem.php?');
    setResult(res.data.success)
    setLista(res.data.result);
    console.log(res.data.result,lista)
    setProceso(res.data.result[0].proceso);
    if(res.data.success === true){
      //list(res.data.result);
      console.log("entrou")
      savedbondboff(res.data.result)
    }
   
    
 
  }
  function savedbondboff(lista){
    const results = []
    lista.forEach((list, index) => {
      results.push(
        console.log(list.proceso, "saveoff"),
        SalvarBanco = (list.proceso,list.cliente,list.obra)
      )
    })
  }
  
  function list(lista) {
    const results = []
    lista.forEach((list, index) => {
      results.push(
        console.log(list.proceso, "listupdate"),
        setData1(prevData => [...prevData, {label: list.proceso, value: list.proceso}]),
        console.log(data1)

      )
    })
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
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists ProcessoSondagem ( processo text,nsondagem text, cliente text, obra text);"
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
  const SalvarBanco = (proceso,cliente,obra) => {
    //DeleteAmostra()
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ProcessoSondagem ( processo , cliente , obra ) values (?,?,? )`, [proceso,cliente,obra], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            mensagemsalvaroffline()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });

      },

      // mensagemsalvaroffline()
    );
  };
  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS ProcessoSondagem',
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
  const DeleteAmostra = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM teoragua WHERE amostra = ?and namostra =? ', [amostra,namostra]);
      })
  }
 function teste(e){
console.log(e) 
}
  
  useEffect(() => {
    DeleteBancoSQlite()
    gerarBanco()
    //getItem();
  }, []);





  return (

<ScrollView>

    <View style={styles.container}>

      <Text style={styles.text}>
        Processo
      </Text>
      <SelectList
        setSelected={e => teste(e)}
        data={data1}
        boxStyles={{ backgroundColor: 'white', width: 300 }}
        listStyles={{ backgroundColor: 'white' }}
        dropdownTextStyle={{ color: 'white' }}
        dropdownItemStyles={{ backgroundColor: 'white' }}
      />


      <Text style={styles.text1}>
        Cliente
      </Text>
      <TextInput
        style={styles.inputlef2t}
        // onChangeText={setNAmostra}
        // value={namostra}
        keyboardType='numeric'
        placeholder="Número"
      />


      <Text style={styles.text1}>
        Obra
      </Text>
      <TextInput
        style={styles.inputlef2t}
        // onChangeText={setNAmostra}
        // value={namostra}
        keyboardType='numeric'
        placeholder="Número"
      />

      <Text style={styles.text1}>
        Sondagem Nº
      </Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.shadow}
        textItem={styles.textItem}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.textItem}
        dropdownPosition="bottom"
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder=""
        searchPlaceholder="Search..."
        value={equipamento}
        onChange={item => {
          setEqupamento(item.equipamento);
        }}
        renderLeftIcon={() => (
          <AntDesign />
        )}

      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Buscar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};


