import React, { useState, useEffect, State } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Modal, Image, Alert, FlatList, ActivityIndicator } from "react-native";
import styles from "../New Task Apropriação/style1";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // npm i axios
import * as Animatable from 'react-native-animatable';
import Conexao from "../../Conexao/conexao";
export default function ControleLama({ route, navigation }) {

  api = Conexao.api
  const [task, setTask] = useState([]);
  const [hora, setHora] = useState('')
  const [produ1, setProdu1] = useState('')
  const [produ2, setProdu2] = useState('')
  const [produ3, setProdu3] = useState('')
  const [produ4, setProdu4] = useState('')
  const [abrir, setAbrir] = useState(false);
  const [loading, setLoading] = useState(false)
  function irpefuracao() {
    navigation.navigate("PERFURAÇÃO", { nfuro: furo });
  };
  const salvar = () =>
    Alert.alert(
      "                          Salvo com sucesso!",
      "",
      [
        {

        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  const falhasalvar = () =>
    Alert.alert(
      "                          Falha ao salvar!",
      "",
      [
        {

        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    
  function mensagemDelete(hora){
    
    Alert.alert(
      
      "Excluir Registro",
      "Deseja Excluir este Registro?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => deleteItem(hora) }
      ],
      { cancelable: true }
    );

    

  }
  useEffect(() => {
    setLoading(true)
    listarDados()
  }, []);
  

  const [processo, setProcesso] = useState(
    route.params?.nprocesso
  )
  const [furo, setFuro] = useState(
    route.params?.nfuro
  );
  const Separator1 = () => (
    <View style={styles.separator1} />
  );
  async function listarDados() {
    const res = await axios.get(this.api + 'ListarControleLama.php?busca=' + processo);
    setTask(res.data.result);
    console.log(res.data.result, processo);
    if (res.data.result != 0) {
      setLoading(false)

    } else {
      setLoading(false)
      //falhasalvar()
    }

  }
  async function add() {
    const obj = { processo, hora, produ1, produ2, produ3, produ4 };
    const res = await axios.post(this.api + 'InserteControleLama.php', obj);
    console.warn(res.data.success)
    setLoading(true)

    listarDados();
    limparCampos();
    setAbrir(false);

  }
  function limparCampos() {
    setHora('');
    setProdu1('');
    setProdu2('');
    setProdu3('');
    setProdu4('');
    setLoading(false)
   // salvar()
  }
  async function deleteItem() {
    //console.war (this.api + 'ExcluirControleLama.php?hora=' + hora)
    const res = await axios.get(this.api + 'ExcluirControleLama.php?hora=' + hora);
    listarDados();
  }
  return (

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



      <View style={styles.navbar}>

        <Text style={styles.textonavbar}>Adicionar</Text>



        <TouchableOpacity

          style={styles.botao}
          onPress={() => setAbrir(true)}
        >
          <Ionicons name="ios-add" size={30} color="#FFF"></Ionicons>

        </TouchableOpacity>

      </View>



      <ScrollView>
        <ScrollView horizontal={true} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={({ item }) => {
              return (
                <View style={styles.Tasks}>
                  <TouchableOpacity
                    style={styles.deleteTask}
                    onPress={() => mensagemDelete(item.id)} >
                  
                    <FontAwesome
                      name="trash"
                      size={23}
                      color="#F92e6A"
                    >
                    </FontAwesome>

                  </TouchableOpacity>
                  <Text style={styles.labelperfuracao}>HORA:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        hora: item.hora,
                        hora: item.hora,
                      })
                    }
                  >
                    {item.hora}
                  </Text>

                  <Text style={styles.labelperfuracao}>BARRILHA:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        produ1: item.produ1,
                        produ1: item.produ1,
                      })
                    }
                  >
                    {item.produ1}
                  </Text>

                  <Text style={styles.labelperfuracao}>POLYPLUS:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        produ2: item.produ2,
                        produ2: item.produ2,
                      })
                    }
                  >
                    {item.produ2}
                  </Text>
                  <Text style={styles.labelperfuracao}>ROD LUBE:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        produ3: item.produ3,
                        produ3: item.produ3,
                      })
                    }
                  >
                    {item.produ3}
                  </Text>

                  <Text style={styles.labelperfuracao}>VISCOSIDADE DE FUNIL:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        produ4: item.produ4,
                        produ4: item.produ4,
                      })
                    }
                  >
                    {item.produ4}
                  </Text>


                </View>
              )
            }}
          />
        </ScrollView  >
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={abrir}
      >
        <SafeAreaView style={styles.modal}>



          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)}
            >
              <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={35} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.textoModal}>CONTROLE DE LAMA</Text>
          </View>
          <ScrollView>
            <Animatable.View
              animation="bounceInUp"
              useNativeDriver  >


              <Text style={styles.textModal}>HORA:</Text>
              <TextInput
                type="text"
                style={styles.inputmodal}
                placeholder="HORA "
                value={hora}
                onChangeText={(hora) => setHora(hora)}
              />
              <Text style={styles.textModal}>BARRILHA:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="BARRILHA"
                value={produ1}
                onChangeText={(produ1) => setProdu1(produ1)}
              />
              <Text style={styles.textModal}>POLYPLUS:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="POLYPLUS:"
                value={produ2}
                onChangeText={(produ2) => setProdu2(produ2)}
              />
              <Text style={styles.textModal}>ROD LUBE:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="RODE LUBE:"
                value={produ3}
                onChangeText={(produ3) => setProdu3(produ3)}
              />
              <Text style={styles.textModal}>VISCOSIDADE DE FUNIL:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="VISCOSIDADE DE FUNIL:"
                value={produ4}
                onChangeText={(produ4) => setProdu4(produ4)}
              />



              <Text style={styles.textModal}></Text>
              <TouchableOpacity
                style={styles.botaoModal}
                onPress={add}
              >

                <Text style={styles.textoBotaoModal}>Salvar</Text>
              </TouchableOpacity>
              <Text style={styles.textModal}></Text>

            </Animatable.View>
          </ScrollView>
        </SafeAreaView>

      </Modal>

    </View>


  );
}







