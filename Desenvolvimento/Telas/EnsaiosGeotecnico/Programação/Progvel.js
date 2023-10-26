import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView } from 'react-native';
import axios from 'axios'; // npm i axios
import * as Animatable from 'react-native-animatable';
import Conexao from '../../../Conexao/conexao';

function Programacao1() {
  api = Conexao.api
  const mensagemDadosIncorretos = () =>
    Alert.alert(
      "Erro ao Burcar",
      "Processo não cadastrado",
      [

        { text: "OK", onPress: () => setAbrirLogin(true) }
      ],
      { cancelable: true }
    );

    const [lista, setLista] = useState([]);
  const [processo, setProcesso] = useState('')
  const [abrirLogin, setAbrirLogin] = useState(true);
  const Separator1 = () => (
    <View style={estilos.separator1} />
  );

  async function listarDados() {
    const res = await axios.get(this.api + 'ListarProcesso.php?processo=' + processo);
    setLista(res.data.result);
    console.log(res.data.result);

  }

  async function buscaprocesso() {
    const obj = { processo };
    const res = await axios.post(this.api + 'BuscarProcesso.php', obj);
    if (res.data.success === 'Dados Incorretos!') {
      mensagemDadosIncorretos();

    } else {
      setAbrirLogin(false);
      buscarDados()
    }
  }
  function buscarDados() {
    listarDados();
  }
  return (
    <View>

      <View style={estilos.ViewinputBuscar}>

        <TextInput
          style={estilos.inputBuscar}
          editable={false} selectTextOnFocus={false}
          placeholder="Buscar pelo Nome"
          value={processo}
        />


      </View>


      <ScrollView>
        <View style={estilos.grid}>

          {lista.map(item => (
            <View style={estilos.griditem} key={item.processo}><Text style={{ color: '#585858' }}>Amostra = {item.AMOSTRA}   Teor Em Agua | {item.Teor_Em_Agua} |  Metodo Hilf | {item.METODO_DE_HILF} |  Frasco De Areia | {item.Frasco_De_Areia} | Análise peneiramento | {item.Peneiracao} | Compactacao Normal | {item.Compactacao_Normal} | Inter | {item.Compactacao_Intermediaria} | Modif | {item.Compactacao_Modificada} |  </Text>




            </View>

          ))}


        </View>
        <Separator1></Separator1>
        <Separator1></Separator1>
      </ScrollView>





      <Modal
        animationType="slide"
        transparent={false}
        visible={abrirLogin}
      >
        <SafeAreaView style={estilos.modal}>



          <View style={estilos.modalHeader}>

            <Text style={estilos.textoModal}>Buscar Processo</Text>
          </View>

          <Animatable.View
            animation="bounceInUp"
            useNativeDriver  >


            <TextInput
              type="email"
              style={estilos.input}
              placeholder="Insira Processo"
              value={processo}
              onChangeText={(processo) => setProcesso(processo)}
            />



            <TouchableOpacity
              style={estilos.botaoModal}
              onPress={buscaprocesso}
            >
              <Text style={estilos.textoBotaoModal}>Buscar</Text>
            </TouchableOpacity>

          </Animatable.View>
        </SafeAreaView>
      </Modal>



    </View>
  );

}

export default Programacao1;




const estilos = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#b2b2b2'

  },

  textoModal: {

    color: '#FFF',

    marginLeft: 15,
    fontSize: 25,


  },

  modalHeader: {

    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,

  },


  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13
  },
  botaoModal: {
    backgroundColor: '#006400',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',

  },

  navbar: {
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection: 'row',
    marginTop: 35,

  },

  textonavbar: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao: {
    position: 'absolute',
    right: 13,
    marginTop: 11,
  },


  grid: {
    marginTop: 8,

  },

  griditem: {
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  gridbotaoEditar: {
    position: 'absolute',
    right: 40,
    color: '#5c7ef6',
  },

  gridbotaoExcluir: {
    position: 'absolute',
    right: 15,
    color: '#cc1414',
  },

  inputBuscar: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 15,
    borderBottomColor: "#767676",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    position: 'relative',

  },

  ViewinputBuscar: {
    flexDirection: 'row',
  },

  iconeBuscar: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  separator1: {
    marginVertical: 8,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});