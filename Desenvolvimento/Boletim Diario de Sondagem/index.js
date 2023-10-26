
import React, { useState, useEffect, Component } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, ActivityIndicator, Alert, Modal } from "react-native";
import styles from "./style";
import { TextInputMask } from 'react-native-masked-text'

import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import axios from 'axios'; // npm i axios
//import DialogProgress from 'react-native-dialog-progress'
import Conexao from "../Conexao/conexao";


export default function NewTask({ route, navigation }, props) {
  api = Conexao.api
  {/*Datos cabeçalho*/ }
  const [teste, setTeste] = useState()

  const [furo, setFuro] = useState();
  const Separator = () => (
    <View style={styles.separator} />
  );
  const Separator1 = () => (
    <View style={styles.separator1} />
  );

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [processo, setProcesso] = useState(route.params?.nprocesso);
  const [list, setList] = useState()
  const [datas, setDatas] = useState(null);
  const [turno, setTurno] = useState(null);
  const [inclinacao, setInclinacao] = useState(list);
  const [sonda, setSonda] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [alvo, setAlvo] = useState(null);
  const [projeto, setProjeto] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [azimute, setAzimute] = useState(null);
  const [sondador, setSondador] = useState(null);
  const [auxiliar1, setAuxiliar1] = useState(null);
  const [auxiliar2, setAuxiliar2] = useState(null);
  const [auxiliar3, setAuxiliar3] = useState(null);
  const [cabecalho, setCabecalho] = useState("cabcalho")
  const [re, setRe] = useState()
  const countries = ["1° Turno", "2° Turno", "3° Turno"]
  const dat = [
    { label: '1° Turno', value: '1° Turno' },
    { label: '2° Turno', value: '2° Turno' },
    { label: '3° Turno', value: '3° Turno' },

  ];

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
  const carregando = () =>
    Alert.alert(
      // <ActivityIndicator size='20' color="#ffffff" animating={loading} style={styles.loading} />


    );

  async function getItem() {

    const res = await axios.get(this.api + 'BuscarProcessoSondagemPesquisaMineral.php?Processo=' + processo);
    setStatus(res.data.success);
    setDatas(res.data.datas)
    setTurno(res.data.turno)
    setFuro(res.data.furo)
    setInclinacao(res.data.inclinacao)
    setSonda(res.data.sonda)
    setCliente(res.data.cliente)
    setAlvo(res.data.alvo)
    setProjeto(res.data.projeto)
    setMunicipio(res.data.municipio)
    setAzimute(res.data.azimute)
    setSondador(res.data.sondador)
    setAuxiliar1(res.data.auxiliar1)
    setAuxiliar2(res.data.auxiliar2)
    setAuxiliar3(res.data.auxiliar3)
    setLoading(false)
    console.warn(this.api + 'BuscarProcessoSondagemPesquisaMineral.php?Processo=' + processo, status)
    if (res.data.success === false) {
      falha();
    }

  };
  async function add() {
    const obj = { processo,furo,datas,turno,inclinacao,sonda,cliente,alvo,projeto,municipio,azimute,sondador,auxiliar1,auxiliar2,auxiliar3 };
    const res = await axios.post(this.api + 'SalvarIndexSondagemPesquisa.php', obj);
    console.warn(res.data.success)
    setLoading(false)

  }

  function rota() {
    navigation.navigate("APROPRIAÇÃO", { nprocesso: processo });
  }
  function rota2() {
    navigation.navigate("Controle de Lama", { nprocesso: processo });
  }
  function rota3() {
    navigation.navigate("Controle de Consumivel", { nprocesso: processo });
  }
  function rota4() {
    navigation.navigate("TelaPesquisaMineral", { nprocesso: processo });
  }
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };
  useEffect(() => {
    setLoading(true)
    getItem();
  }, []);
  return (

    <ScrollView>

      <TouchableOpacity
        style={styles.buttonApropriacao}
        onPress={rota}
      >
        <Text style={{ fontSize: 16 }}>Apropriação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonApropriacao1}
        onPress={rota2}
      >
        <Text style={{ fontSize: 16 }}>Controle de Lama</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonApropriacao2}
        onPress={rota3}
      >
        <Text style={{ fontSize: 16 }}>Consumível</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonApropriacao3}
        onPress={rota4}
      >
        <Text style={{ fontSize: 16 }}>Finalizar Relatorio</Text>
      </TouchableOpacity>

      <Separator1></Separator1>
      <View style={styles.container}>
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

        <View style={styles.containerbtnbuscar}>


     
        </View>
        <Text style={styles.labelcontanier}>
          Processo:
        </Text>

        <TextInput
          editable={false} selectTextOnFocus={false}
          style={styles.inputleft}
          onChangeText={setProcesso}
          value={processo}
        />
        <Text style={styles.labelcontanier}>
          FURO:
        </Text>

        <TextInput
         editable={false} selectTextOnFocus={false}
          style={styles.inputleft}
          onChangeText={setFuro}
          value={furo}
        />

        <Text style={styles.labelcontanier}>
          DATA:
        </Text>

        <TextInputMask
          style={styles.inputleft}
          placeholder='12/01/2000'
          placeholderTextColor="black"
          type={'datetime'}
          options={{
            format: 'DD/M/YYYY'
          }}
          onChangeText={setDatas}
          value={datas}
          keyboardType='numeric'
        />
        <Text style={styles.labelcontanier}>
          TURNO:
        </Text>

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
          placeholder="Selecione o Turno"
          value={turno}
          onChange={item => {
            setTurno(item.value);
            // console.log('selected', item);
          }}
          renderItem={item => _renderItem(item)}
          textError="Error"
        />


        <Text style={styles.labelcontanier}>
          INCLINAÇÃO:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setInclinacao}
          value={inclinacao}
        >
        </TextInput>


        <Text style={styles.labelcontanier}>
          SONDA:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setSonda}
          value={sonda}
        />

        <Text style={styles.labelcontanier}>
          CLIENTE:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setCliente}
          value={cliente}
        />
        <Text style={styles.labelcontanier}>
          ALVO:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setAlvo}
          value={alvo}
        />
        <Text style={styles.labelcontanier}>
          PROJETO:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setProjeto}
          value={projeto}
        />
        <Text style={styles.labelcontanier}>
          MUNICÍPIO:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setMunicipio}
          value={municipio}
        />
        <Text style={styles.labelcontanier}>
          AZIMUTE:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setAzimute}
          value={azimute}
        />
        <Text style={styles.labelcontanier}>
          SONDADOR:
        </Text>

        <TextInput

          style={styles.inputleft}

          onChangeText={setSondador}

          value={sondador}
        />
        <Text style={styles.labelcontanier}>
          AUXILIAR 1:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setAuxiliar1}
          value={auxiliar1}
        />
        <Text style={styles.labelcontanier}>
          AUXILIAR 2:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setAuxiliar2}
          value={auxiliar2}
        />
        <Text style={styles.labelcontanier}>
          AUXILIAR 3:
        </Text>
        <TextInput
          style={styles.inputleft}
          onChangeText={setAuxiliar3}
          value={auxiliar3}
        />
        <Separator1></Separator1>
        <Separator1></Separator1>
        {/* <TouchableOpacity
          style={styles.buttonNewTask2}

          onPress={() => {
            searchTask()
            //editTask("cabecalho")
          }}
        >
          <Text style={styles.iconButton}>+</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );







}

