import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal, ScrollView, Alert, Image, FlatList, CheckBox, StyleSheet } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown } from 'react-native-element-dropdown';
import Conexao from "../../../Conexao/conexao";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
export default function TelaIniEpi(props) {
  api = Conexao.api
  const [task, setTask] = useState([]);
  const [iddiametro, setIdDiametro] = useState('')
  const [reload, setReload] = useState(false)
  const [apagar, setApagar] = useState(false)
  const [habilita, setHabilita] = useState(true)
  const [bloquear, setBloquear] = useState(true);
  const [task1, setTask1] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [manutencaoPC, setManutencaoPC] = useState();
  const [descricaoModal, setDescricaoModal] = useState()
  const [matricula, setMatricula] = useState()
  const [nome, setNome] = useState("")
  const [admissao, setAdmissao] = useState("")
  const [funcao, setFuncao] = useState("")
  const [setor, setSetor] = useState("")
  const [munfuncao, setMunFuncao] = useState("")
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [tipo, setTipo] = useState();
  const MensagemSalvarOffline = () =>
    Alert.alert(
      "                          Salvo com sucesso! ",
      ""
      [
      { text: "OK", onPress: (listarDados()) }
      ]
    );
  const MensagemDeleteBancoSQLite = () =>
    Alert.alert(
      "                          Deseja Apagar Sonda! " + iddiametro,
      ""
      [
      { text: "OK" }
      ]
    );
  const dt = [


    { label: 'Par', value: 'Par' },
    { label: 'Pç', value: 'Pç' },


  ];
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };
  const _renderItem2 = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.IdAtividade}</Text>

      </View>
    );
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  async function Buscar() {


    const obj = { matricula };

    if (matricula > 0) {
      const res = await axios.post(this.api + 'BuscarFuncionarioEPI.php', obj);

      if (res.data.success === true) {
        setNome(res.data.nome)
        setAdmissao(res.data.admissao)
        setFuncao(res.data.funcao)
        setSetor(res.data.setor)
        setMunFuncao(res.data.mudancaFuncao)
      }
    }

  };

  const SalvarBancoSQLite1 = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ManutecaoPreventivaCorretivaModal ( numeroOs , descricaoModal , manutencaoPC  ) values ('${numeroOs}','${descricaoModal}','${manutencaoPC}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

      },

      setAbrir(false),

      MensagemSalvarOffline(),
      listarDados(),

    );
  };

  useEffect(() => {

  }, []);
  useEffect(() => {
    console.log(apagar)
    if (reload) {
      BuscaBancoSQlite()
      setReload(false)
    }
    if (apagar) {
      BuscaBancoSQlite()
      ApagarText()
      setApagar(false)
    }
  })
  return (
    <ScrollView style={styles.scrollView} >
      <View style={styles.container}>



        <View style={styles.container1}>
          <Text style={styles.buttonNewTask}>
            Matrícula:
          </Text>
          <Text style={styles.buttonNewTaskesquerda}>
          Nome:
        </Text>

        </View>
        <View style={styles.container1}>

          <TextInput
            style={styles.inputlef2t}
            onChangeText={setMatricula}
            value={matricula}
            keyboardType='numeric'
            placeholder="Matrícula"
          />
          <TextInput />
          <TextInput
          style={styles.inputlef2t}
          onChangeText={setNome}
          value={nome}
          keyboardType='numeric'
          placeholder="Nome"
        />

        </View>

        <View style={styles.containerrow}>
          <TouchableOpacity style={styles.button}
            onPress={() => Buscar()}>
            <Text style={styles.text}>Buscar</Text>
            <View style={styles.buttonIconSeparatorStyle} />
            <Image style={styles.buttonImageIconStyle}
              source={require('../../../../assets/search.png')} />
          </TouchableOpacity>

        </View>

      

        
        <View style={styles.container1}>
          <Text style={styles.buttonNewTask}>
            Admissão:
          </Text>
          <Text style={styles.buttonNewTaskesquerda}>
            Função:
          </Text>

        </View>

        <View style={styles.container1}>

          <TextInput
            style={styles.inputlef2t}

            value={admissao}
            keyboardType='numeric'
            placeholder="Admissão"
          />
          <TextInput />
          <TextInput
            style={styles.inputlef2t}

            value={funcao}
            keyboardType='numeric'
            placeholder="Função"
          />
        </View>
        <View style={styles.container1}>
          <Text style={styles.buttonNewTask}>
            Setor:
          </Text>
          <Text style={styles.buttonNewTaskesquerda}>
            Mudança de função:
          </Text>

        </View>
        <View style={styles.container1}>

          <TextInput
            style={styles.inputlef2t}

            value={setor}
            keyboardType='numeric'
            placeholder="Setor"
          />
          <TextInput />
          <TextInput
            style={styles.inputlef2t}

            value={munfuncao}
            keyboardType='numeric'
            placeholder="Mudança de função"
          />
        </View>

        <View style={styles.containerrow}>
          <TouchableOpacity style={styles.button}
            onPress={() => setAbrir(true)}>
            <Text style={styles.text}>Adicionar EPIs</Text>
            <View style={styles.buttonIconSeparatorStyle} />
            <Image style={styles.buttonImageIconStyle}
              source={require('../../../../assets/search.png')} />
          </TouchableOpacity>

        </View>


        <ScrollView horizontal={true} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={({ item }) => {
              return (
                <View style={styles.Tasks}>


                  <Text style={styles.labelperfuracao}>Data:</Text>
                  <Text
                    style={styles.DescriptionTask}
                    onPress={() =>
                      setIdDiametro(item.IdDiametro) ||
                      setSerie(item.Serie) ||
                      setMM(item.mm)
                    }
                  >
                    {item.IdDiamentro}
                  </Text>

                  <Text style={styles.labelperfuracao}>Série:</Text>
                  <Text
                    style={styles.DescriptionTask}
                  >
                    {item.Serie}
                  </Text>
                  <Text style={styles.labelperfuracao}>mm:</Text>
                  <Text

                    style={styles.DescriptionTask}
                  >
                    {item.mm}
                  </Text>




                </View>
              )
            }}
          />
        </ScrollView  >
        <Modal
          animationType="slide"
          transparent={true}
          visible={abrir}
          style={styles.modal1}
        >

          <View style={styles.containerrow} >
            <ScrollView>
              <View style={styles.container1}>
                <Text style={styles.text}>Data</Text>
              </View>
              <View style={styles.container1}>
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={showDatePicker} >
                  <Text style={styles.textdate}
                  > {`${selectedDate ? moment(selectedDate).format("DD/MM/YYYY") : "Por Favor Selecione a Data"}`} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}> Quantidade: </Text>
              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setDescricaoModal}
                  value={descricaoModal}

                  style={styles.inputleft}
                ></TextInput>
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Unidade</Text>
              </View>
              <View style={styles.container1}>

                <Dropdown
                  style={styles.inputleft}
                  containerStyle={styles.shadow}
                  textItem={styles.textItem}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.textItem}
                  dropdownPosition="bottom"
                  data={dt}

                  maxHeight={3000}
                  labelField="label"
                  valueField="value"
                  placeholder=""

                  value={manutencaoPC}
                  onChange={item => {
                    setManutencaoPC(item.value);
                  }}
                  renderItem={item => _renderItem(item)}
                  textError="Error"

                />
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Descrição do EPI</Text>

              </View>
              <View style={styles.container1}>
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={styles.shadow}
                  textItem={styles.textItem}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.textItem}
                  data={task}
                  search
                  searchPlaceholder="Buscar"
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  placeholder={tipo}

                  onChange={item => {
                    setTipo(item.IdAtividade);
                    //
                    console.log(tipo);

                  }}
                  value={tipo}
                  renderItem={item => _renderItem2(item)}
                  textError="Error"
                />

              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>CA - MTE</Text>

              </View>
              <View style={styles.container1}>
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={styles.shadow}
                  textItem={styles.textItem}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.textItem}
                  data={task}
                  search
                  searchPlaceholder="Buscar"
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  placeholder={tipo}

                  onChange={item => {
                    setTipo(item.IdAtividade);
                    //
                    console.log(tipo);

                  }}
                  value={tipo}
                  renderItem={item => _renderItem2(item)}
                  textError="Error"
                />

              </View>

              <View style={styles.containerrow}>
                <TouchableOpacity style={styles.button1}


                  onPress={() => setAbrir(false)}


                >
                  <Text style={styles.text}> Adicionar </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}
                  onPress={() => setAbrir(false)}


                >
                  <Text style={styles.text}> Fechar </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

        </Modal>

      </View>

    </ScrollView>

  );

};

const estilo = StyleSheet.create({

  modal1: {

    backgroundColor: '#2F4F4F',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 10


  },
})